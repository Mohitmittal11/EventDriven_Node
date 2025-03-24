import mongoose, { model, Mongoose } from "mongoose";

interface UserInterface {
  username: string;
  phone_Number: string;
  email: string;
  password: string;
  designation: string;
  date_of_birth: string;
  date_of_joining: string;
  maritalStatus: boolean;
  date_of_marriage: string;
  organisation_id: any;
  date: string;
  time: string;
}

const UserSchema = new mongoose.Schema<UserInterface>({
  username: { type: String, required: true },
  phone_Number: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  designation: { type: String, required: true },
  date_of_birth: { type: String, required: true },
  date_of_joining: { type: String, required: true },
  maritalStatus: { type: Boolean, required: true },
  date_of_marriage: { type: String },
  organisation_id: {
    type: mongoose.Types.ObjectId,
    ref: "organisation",
    required: true,
  },
  date: { type: String, required: true },
  time: { type: String, required: true },
});

export const UserModal = model<UserInterface>("user", UserSchema);
