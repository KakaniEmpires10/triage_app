import { Schema, models, model } from "mongoose";

const patientSchema = new Schema(
  {
    triase: {
      type: String,
    },
    avatar: String,
    name: {
      type: String,
      lowercase: true,
    },
    usia: {
      type: Number,
      min: 0,
      max: 100,
    },
    gender: {
      type: String,
      enum: ["L", "P"],
    },
    nomorPelapor : {
      type : Number
    },
    lokasi: {
      type: String,
    },
    kejadian: {
      type: String
    }
  },
  { timestamps: true }
);

const Patient = models.patient || model("patient", patientSchema);

export default Patient;
