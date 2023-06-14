import React, { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getStudentById } from "../apis/student";

const SingleStudent = () => {
  const { id } = useParams();

  const studentTableRows = [
    { name: "rollNo", label: "رسید نمبر" },
    { name: "date", label: "تاریخ" },
    { name: "purchasedThings", label: "خاریدہ ہوا سامان" },
    { name: "plan", label: "پلان" },
    { name: "totalPrice", label: "ٹوتل قیمات" },
    { name: "advance", label: "ایڈوانس" },
    { name: "remaining", label: "بقایا" },
    { name: "monthlyPay", label: "مبلغ ماہانا" },
    { name: "name", label: "نام" },
    { name: "parents", label: "والدیت" },
    { name: "CNIC", label: "شناختی کارڈ نمبر" },
    { name: "saken", label: "ساکن" },
    { name: "mobileNumber", label: "موبائل نمبر" },
    { name: "address", label: "پیشہ/ایڈرس" },
    { name: "name2", label: "نامزد نام (گارنڑ" },
    { name: "parents2", label: "والدیت" },
    { name: "CNIC2", label: "شناختی کارڈ نمبر" },
    { name: "saken2", label: "ساکن" },
    { name: "mobileNumber2", label: "موبائل نمبر" },
    { name: "address2", label: "پیشہ/ایڈرس" },
    { name: "signature", label: "دسخط خرید کندہ" },
    { name: "signature2", label: "دسخط خرید نامزد (گارنڑ" },
    { name: "extra", label: "منیجرپکارٹریڑسروس" },
  ];

  const [student, setStudent] = useState({
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

  const getStudent = async () => {
    const student = await getStudentById(id);
    setStudent(student);
  };

  useEffect(() => {
    getStudent();
  }, [id]);

  const showStudentData = () => (
    <>
      <h3>Student</h3>
      <Table bordered striped hover>
        <tbody>
          {studentTableRows.map((s) => {
            console.log(s);
            if (student !== undefined && typeof student[s.name] === "boolean") {
              return (
                <tr>
                  <td>{s.label}</td>
                  <td>{student[s.name] === true ? "Yes" : "No"} A</td>
                </tr>
              );
            } else {
              return (
                <tr>
                  <td>{s.label}</td>
                  <td>{student && student[s.name]}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </Table>
    </>
  );

  return (
    <div div className="container mt-5">
      {showStudentData()}
    </div>
  );
};

export default SingleStudent;
