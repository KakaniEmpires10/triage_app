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
    sex: {
      type: String,
      enum: ["L", "P"],
    },
    lokasi: {
      type: String,
    },
  },
  { timestamps: true }
);

const Patient = models.patient || model("patient", patientSchema);

export default Patient;
