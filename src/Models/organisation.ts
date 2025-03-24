import mongoose, { model } from "mongoose";

interface Organisation {
  org_name: string;
  email: string;
  password: string;
  description: string;
  time: string;
  date: string;
  isActive: boolean;
  isDelete: boolean;
}

const OrganisationSchema = new mongoose.Schema<Organisation>(
  {
    org_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    description: { type: String, required: true },
    time: { type: String, required: true },
    date: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    isDelete: { type: Boolean, default: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const OrganisationModal = model<Organisation>(
  "organisation",
  OrganisationSchema
);
