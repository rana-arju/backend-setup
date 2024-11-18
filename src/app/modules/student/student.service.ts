import { IStudent } from './student.interface';
import { Student } from './student.schema';

const createStudentIntoDB = async (student: IStudent) => {
  const result = await Student.create(student);
  return result;
};

const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};
const getStudentFromDB = async (id: string) => {
  const result = await Student.findById({ _id: id });

  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getStudentFromDB,
};
