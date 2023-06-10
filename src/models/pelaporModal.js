import { Schema, models, model } from "mongoose";

const pelaporSchema = new Schema(
  {
    name      : String,
    telephone : String,
    kejadian  : String,
    lokasi    : String
  },
  { timestamps: true }
);

const Pelapor = models.pelapor || model("pelapor", pelaporSchema);

export default Pelapor;
