import { dbConnect } from "@/utils/connectDB";
import Patient from "@/models/patientModel";
import { NextResponse } from "next/server";

export async function GET(req, res){
    await dbConnect();

    try {
        const pasien = await Patient.find()

        return new NextResponse(JSON.stringify(pasien), { status: 200 });
    } catch (err) {
        throw new Error(err)
    }

}

export async function POST(req, res){
    await dbConnect();
}

export async function PATCH(req, res){
    await dbConnect();
}

export async function DELETE(req, res){
    await dbConnect();
}