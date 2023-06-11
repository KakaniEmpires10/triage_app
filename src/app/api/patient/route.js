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

    const { pasienData } = await req.json()

    const { nama, usia, nomorPelapor, gender, lokasi, kejadian, foto, triase } = pasienData

    const newPasien = await new Patient({
        name: nama,
        usia: usia,
        nomorPelapor: nomorPelapor,
        gender: gender,
        lokasi: lokasi,
        kejadian: kejadian,
        avatar: foto,
        triase: triase
    })

    try {
        await newPasien.save();

        return new NextResponse('successfully created', { status: 201 })
    } catch (err) {
        throw new Error(err.message)
    }

}

export async function PATCH(req, res){
    await dbConnect();
}

export async function DELETE(req, res){
    await dbConnect();
}