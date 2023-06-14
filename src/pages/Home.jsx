import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getStudentsApi } from "../apis/student";

const Home = () => {
  const jwtKey = localStorage.getItem("jwt_key");
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  useEffect(() => {
    if (jwtKey === null) {
      return navigate("/login");
    }
  }, [jwtKey]);

  const getAllStudents = async () => {
    const students = await getStudentsApi();

    setStudents(students);
  };

  useEffect(() => {
    getAllStudents();
  }, []);
  return (
    <div className="container mt-5">
      <Table striped bordered hover>
        <thead>
          <tr className="urduFont">
            <td>رسید نمبر</td>

            <td>تاریخ</td>
            <td>خاریدہ ہوا سامان</td>
            <td>ٹوتل قیمات</td>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr>
              <Link to={`/student/${student._id}`}>
                <td>{student.rollNo}</td>
              </Link>
              <td>{student.date}</td>
              <td>{student.purchasedThings}</td>
              <td>{student.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
