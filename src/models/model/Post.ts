import mongoose, { Schema } from "mongoose";
import "../ConnetDB"; // Ensure the database connection is established
import { defaultSchemaOptions } from "../schemaOptions"; // Importing default schema options

/**
 * Schema definition for the Post model.
 * @typedef {Object} PostSchema
 * @property {string} title - The title of the post.
 * @property {string} imgurl - The URL of the image associated with the post.
 * @property {string} description - A brief description of the post.
 * @property {string} section - The section or category the post belongs to.
 * @property {string} services - The services related to the post.
 * @property {string} body - The main content of the post.
 * @property {Array<Object>} categories - An array of category objects associated with the post.
 * @property {number} categories[].id - The ID of the category.
 * @property {string} categories[].name - The name of the category.
 * @property {boolean} masterEditor - Indicates if the post is managed by a master editor.
 * @property {string} source - The source of the post.
 * @property {Date} createdAt - Timestamp when the post was created (automatically added by Mongoose).
 * @property {Date} updatedAt - Timestamp when the post was last updated (automatically added by Mongoose).
 */
const postSchema = new Schema(
  {
    title: String,
    imgurl: String,
    description: String,
    section: String,
    services: String,
    body: String,
    categories: [{ id: Number, name: String }],
    masterEditor: Boolean,
    source: String,
  },
  defaultSchemaOptions // Apply default schema options (e.g., timestamps)
);

/**
 * Post model representing a post in the database.
 * If the model already exists, it reuses it; otherwise, it creates a new one.
 * This check prevents OverwriteModelError when the model is imported multiple times.
 * @type {mongoose.Model}
 */
const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;