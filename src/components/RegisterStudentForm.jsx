import React, { useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";

const RegisterStudentForm = ({ register, changeFormData, formData }) => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [sibling, setSibling] = useState({
    name: "",
    class: "",
    section: "",
    rollNo: 1,
  });
  // console.log(formData.student);
  const input = ({
    label,
    name,
    onChange = (e) => {
      changeFormData(name, e.target.value);
    },
    placeholder = `Type your ${label} Here`,
    type = "text",
    isRequired = true,
    value,
  }) => {
    // console.log(formData[person][name]);
    return (
      <>
        <div class="form-floating mb-3 col-md-3">
          <input
            class="form-control"
            type={type}
            placeholder={placeholder}
            onChange={(e) => onChange(e)}
            required={isRequired}
            value={formData[name]}
          />
          <label for="floatingInput" className="urduFont">
            {label}
          </label>
        </div>
      </>
    );
  };

  return (
    <Form onSubmit={register} className="form-control-sm row ">
      <h1 className="urduFont text-center">پکارٹریدسروس</h1>
      {input({ label: "رسید نمبر", name: "rollNo" })}
      {input({ label: "تاریخ", name: "date" })}
      {input({ label: "خاریدہ ہوا سامان", name: "purchasedThings" })}
      {input({ label: "پلان", name: "plan" })}
      {input({ label: "ٹوتل قیمات", name: "totalPrice" })}
      {input({ label: "ایڈوانس", name: "advance" })}
      {input({ label: "بقایا", name: "remaining" })}
      {input({ label: "مبلغ ماہانا", name: "monthlyPay" })}
      <h3 className="text-center">شرائط وضوابط:</h3>
      <p style={{ textAlign: "right" }}>
        خرید کنندہ اور نامزد ( گارنٹر ) دونوں میں سے ایک کا سرکاری ملازم ہونا
        ضروری ہوگا۔
        <br /> خرید کنندہ اور نامزد ( گارنٹر ) کو شناختی کارڈ کاپی، سرکاری ملازم
        کا پے رول ، سروس کارڈ اور کراس چیک جمع کرانا ہوگا۔
        <br /> خرید کننده یا نامزدہ ( گارنٹر ) ہر ماہ کے 5 تاریخ تک ماہانہ قسط
        ادا کرنے کا پابند ہوگا۔
        <br /> تین اقساط جمع نہ ہونے کے صورت میں دونوں کے خلاف ( خرید کننده
        گارنٹر ) قانونی کاروائی ہوگی۔
        <br /> پرائیویٹ اسرکاری انیم سرکاری یا کسی اور پیشے کام سے منسلک افراد
        خریداری کا مجاز ہوگا۔
        <br /> عدم ادائیگی کے باعث اگر مالکان پکر نرید من مقرر کے خلاف کوئی
        قانونی یا عدالتی کاروائی کرنے پڑی تو اس کے ہر قسم ہرجانہ خرچہ
        <br /> اور اقساط میں من مقرر کے ذات خاص جائیدار اور وارثان برگشت ہر طرح
        کے ذمہ دار ہوں گے۔
        <br /> خریدی ہوئی سامان کی گارنٹی پکار ٹریڈ کی طرف سے نہیں بلکہ کمپنی کی
        طرف سے ہوتی ہے۔ البتہ 72 گھنٹے کے اندر اندر کوئی نقص / خرابی ہو تو پکار
        ٹریڈ ذمہ دار ہوگی۔
      </p>
      <h2 className="text-center"> ذاتی معلومات</h2>
      {input({ label: "نام", name: "name" })}
      {input({ label: "والدیت", name: "parents" })}
      {input({ label: "شناختی کارڈ نمبر", name: "CNIC" })}
      {input({ label: "ساکن", name: "saken" })}
      {input({ label: "موبائل نمبر", name: "mobileNumber" })}
      {input({ label: "پیشہ/ایڈرس", name: "address" })}
      {input({ label: "نامزد نام (گارنڑ)", name: "name2" })}
      {input({ label: "والدیت", name: "parents2" })}
      {input({ label: "شناختی کارڈ نمبر", name: "CNIC2" })}
      {input({ label: "ساکن", name: "saken2" })}
      {input({ label: "موبائل نمبر", name: "mobileNumber2" })}
      {input({ label: "پیشہ/ایڈرس", name: "address2" })}
      {input({ label: "دسخط خرید کندہ", name: "signature" })}
      {input({ label: "دسخط خرید نامزد (گارنڑ)", name: "signature2" })}
      {input({ label: "منیجرپکارٹریڑسروس", name: "extra" })}
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default RegisterStudentForm;
