import mongoose, { Mongoose } from "mongoose";

const messageSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.type.ObjectId,
    ref: "User",
    required: true
  },
  receiverId: {
    type: mongoose.Schema.type.ObjectId,
    ref: "User",
    required: true,
  },
  text: {
    type: String
  },
  image: {
    type: String
  }
}, { timestamps: true })

const Message = Mongoose.model("Message", messageSchema)
export default Message