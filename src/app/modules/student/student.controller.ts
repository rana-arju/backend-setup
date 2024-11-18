import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;
    // will call service func to send this data
    const result = await StudentServices.createStudentIntoDB(student);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};


const getAllStudent = async (req: Request, res: Response) => {
  try {
    // will call service func to send this data
    const result = await StudentServices.getAllStudentFromDB();

    // send response
    res.status(200).json({
      success: true,
      message: 'Students get succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const studentController = {
  createStudent,
  getAllStudent,
};
