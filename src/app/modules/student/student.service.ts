import { TStudent } from './student.interface';
import { Student } from './student.schema';

const createStudentIntoDB = async (studentData: TStudent) => {
  // const result = await Student.create(student);
  const student = new Student(studentData);
  if (await student.isUserExists(studentData.id)) {
    throw new Error('User already exists.');
  }

  
  const result = await student.save(); // build in instance method provided by mongoose
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
