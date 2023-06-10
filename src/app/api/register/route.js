import { dbConnect } from "@/utils/connectDB";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const { userData } = await req.json();

  const { nama, email, hp, gender, pass } = userData;

  await dbConnect();

  const newUser = await new User({
    name: nama,
    email: email,
    telephone: hp,
    gender: gender,
    password: await bcrypt.hash(pass, 6),
  });

  try {
    await newUser.save();

    // console.log("Add user successfullly");
    return new NextResponse("user is successfully created", { status: 201 });
  } catch (err) {
    // throw new Error(err);
    return new NextResponse(err.message, { status: 500 });
  }
}
