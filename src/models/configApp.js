import { Schema, models, model } from "mongoose";

const configSchema = new Schema(
  {
    appName: String,
    appDesc: String,
    insName: String,
    insDesc: String,
    logo: String,
  },
  { timestamps: true }
);

const Config = models.config || model("config", configSchema);

export default Config;
