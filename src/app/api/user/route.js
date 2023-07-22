import { dbConnect } from "@/utils/connectDB";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function GET(req, res) {
  await dbConnect();

  try {
    const user = await User.find();

    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (err) {
    return new NextResponse(err.message, { status : 500 });
  }
}

export async function POST(req) {
  const { userData } = await req.json();

  const { nama, email, tel, gender, role, password } = userData;

  await dbConnect();

  const newUser = await new User({
    name: nama,
    email: email,
    telephone: tel,
    gender: gender,
    role : role,
    password: await bcrypt.hash(password, 6),
  });

  try {
    await newUser.save();
    
    // console.log("Add user successfullly");
    return new NextResponse("user is successfully created", { status: 201 });
  } catch (err) {
    // throw new Error(err);
    return new NextResponse(err.message, {status : 500})
  }
}
