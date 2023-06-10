import Config from "@/models/configApp";
import { dbConnect } from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  await dbConnect();

  try {
    const config = await Config.find();

    return new NextResponse(JSON.stringify(config), { status: 200 });
  } catch (err) {
    throw new Error(err);
  }
}

export async function PUT(req, res) {
  await dbConnect();

  const { configData } = await req.json();

  const { appName, appDesc, insName, insDesc, logo } = configData;

  try {
    await Config.findByIdAndUpdate(
      "647b1f8daaed35a14aed8de1",
      {
        appName: appName,
        appDesc: appDesc,
        insName: insName,
        insDesc: insDesc,
        logo: "",
      },
      { new: true }
    );

    return new NextResponse("Resource Successfully update", { status: 200 });
  } catch (err) {
    throw new Error(err.message);
  }
}
