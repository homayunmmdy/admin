import mongoose, { Schema } from "mongoose";
import { defaultSchemaOptions } from "./schemaOptions"; // Importing default schema options 
import './ConnetDB'; // Ensure the database connection is established

const TextAdvSchema = new Schema(
  {
    textadvid: Number,
    advname: String,
    body: String,
    link: String,
  },
  defaultSchemaOptions
);

const TextAdv =
  mongoose.models.TextAdv || mongoose.model("TextAdv", TextAdvSchema);

export default TextAdv;
