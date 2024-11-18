import { IStudent } from './student.interface';
import { Student } from './student.schema';

const createStudentIntoDB = async (student: IStudent) => {
  const result = await Student.create(student);
  return result;
};

const getAllStudentFromDB = async () => {
    const result = await Student.find();
    return result;

}

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
};
