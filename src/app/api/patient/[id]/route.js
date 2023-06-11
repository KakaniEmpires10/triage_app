import { dbConnect } from "@/utils/connectDB";
import Patient from "@/models/patientModel";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
    const { id } = params;

    try {
        await dbConnect();

        await Patient.findByIdAndDelete(id);

        return new NextResponse("Item Successfully Deleted", { status : 200 })
    } catch (err) {
        throw new Error(err.message)
    }
}

export async function PATCH(req, { params }) {
    const { id } = params;

    const { update } = await req.json()

    const { triase } = update

    try {
        await dbConnect();

        await Patient.updateOne({_id: id}, {$set : {triase : triase}});

        return new NextResponse("Item Successfully Updatted", { status : 200 })
    } catch (err) {
        throw new Error(err.message)
    }
}