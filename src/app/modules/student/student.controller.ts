import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import studentValidationSchema from '../student.validation';
import { z } from 'zod';

const createStudent = async (req: Request, res: Response) => {
  try {
    // zod validation

const studentValidationWithZod = z.object({
  
})














    const { student } = req.body;
    const { error, value } = studentValidationSchema.validate(student);

    // will call service func to send this data
    const result = await StudentServices.createStudentIntoDB(value);
    if (error) {
      res.status(500).json({
        success: false,
        message: 'Someting went wrong',
        error: error.details,
      });
    }

    // send response
    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Someting went wrong',
      error,
    });
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

const getStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    // will call service func to send this data
    const result = await StudentServices.getStudentFromDB(id);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student get succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const studentController = {
  createStudent,
  getAllStudent,
  getStudent,
};
