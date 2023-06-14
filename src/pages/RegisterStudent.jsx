import React, { useState } from "react";
import { createStudentApi } from "../apis/student";
import RegisterStudentForm from "../components/RegisterStudentForm";

const RegisterStudent = () => {
  const [formData, setFormData] = useState({
    rollNo: "",
    date: "",
    purchasedThings: "",
    plan: "",
    totalPrice: "",
    advance: "",
    remaining: "",
    monthlyPay: "",
    name: "",
    parents: "",
    CNIC: "",
    saken: "",
    mobileNumber: "",
    address: "",
    name2: "",
    parents2: "",
    CNIC2: "",
    saken2: "",
    mobileNumber2: "",
    address2: "",
    signature: "",
    signature2: "",
    extra: "",
  });
  const changeFormData = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();
    const student = createStudentApi(formData);
    setFormData({
      rollNo: "",
      date: "",
      purchasedThings: "",
      plan: "",
      totalPrice: "",
      advance: "",
      remaining: "",
      monthlyPay: "",
      name: "",
      parents: "",
      CNIC: "",
      saken: "",
      mobileNumber: "",
      address: "",
      name2: "",
      parents2: "",
      CNIC2: "",
      saken2: "",
      mobileNumber2: "",
      address2: "",
      signature: "",
      signature2: "",
      extra: "",
    });
  };
  return (
    <div className="container">
      <RegisterStudentForm
        formData={formData}
        changeFormData={changeFormData}
        register={register}
      />
    </div>
  );
};

export default RegisterStudent;
