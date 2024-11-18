//name

export type UserName = {
  firstName: string;
  lastName: string;
  middleName?: string;
};
// Guardian
export type Guardian = {
  fatherName: string;
  fatherOccupation?: string;
  fatherContactNo?: string;
  motherName: string;
  motherOccupation?: string;
  motherContact?: string;
};

// Local Guardian

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo?: string;
  address: string;
};
// Student
export type IStudent = {
  id: string;
  name: UserName;
  profileImg?: string;
  email: string;
  gender: 'male' | 'female' | 'other';
  dateOfBirth: string;
  contactNo: string;
  emergencyContactNo: string;
  blood?: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
  presentAddress: string;
  parmanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  isActive: "active" | "inactive"
};
