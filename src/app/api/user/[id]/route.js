import { dbConnect } from "@/utils/connectDB";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const { id } = params;

    try {
        await dbConnect();

        const user = await User.findById(id);

        return new NextResponse(JSON.stringify(user), { status : 200 })
    } catch (err) {
        throw new Error(err.message)
    }
}

export async function DELETE(req, { params }) {
    const { id } = params;

    try {
        await dbConnect();

        await User.findByIdAndDelete(id);

        return new NextResponse("Item Successfully Deleted", { status : 200 })
    } catch (err) {
        throw new Error(err.message)
    }
}

export async function PUT(req, { params }) {
    const { id } = params;

    try {
        await dbConnect();

        await User.findByIdAndUpdate(id)
    } catch (err) {
        throw new Error(err.message)
    }
}