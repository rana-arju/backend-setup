import { Schema, model } from 'mongoose';
import {
  Guardian,
  IStudent,
  LocalGuardian,
  UserName,
} from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContact: { type: String },
});

const localSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String },
  contactNo: { type: String },
  address: { type: String, required: true },
});

const studentSchema = new Schema<IStudent>({
  id: { type: String, required: true },
  name: userNameSchema,
  profileImg: String,
  email: { type: String, required: true },
  gender: ['male', 'female', 'other'],
  dateOfBirth: { type: String },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  blood: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
  presentAddress: { type: String, required: true },
  parmanentAddress: { type: String, required: true },
  guardian: guardianSchema,
  localGuardian: localSchema,
  isActive: ['active', 'inactive'],
});

// Create the model
export const Student = model<IStudent>('Student', studentSchema);
