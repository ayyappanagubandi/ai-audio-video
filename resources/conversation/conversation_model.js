import mongoose, { SchemaTypes } from "mongoose";
const { Schema, model } = mongoose;

const ConversationSchema = new Schema(
  {
    qa: {
      question: {
        type: String,
      },
      answer: {
        type: String,
      },
    },
    source: {
      type: String,
    },
    branch: {
      type: String,
    },
    branchID: {
      type: SchemaTypes.ObjectId,
      ref: "branch",
      required: true,
    },
  },
  {
    strict: false,
    timestamps: true,
  }
);

const Conversation = model("Conversation", ConversationSchema);
export default Conversation;
