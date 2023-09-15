import React from "react";
import '../css/register.css'
import '../css/home.css'
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import Swal from 'sweetalert2';
import { RegisterAccountDB } from "../service/AccountService";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate()
    const userRegister=(a)=>{
    
        RegisterAccountDB(a).then(()=>{
            navigate("/")
            Swal.fire({
              text: 'Đăng ký thành công !',
              icon: "success",
              timer: 2000
            })
        });
    }
    return (
        <>
            <div className="register__container">
                <div className="home__header">
                    <div className="home__header--content">
                        <div className="home__header--content--item"><i className="fa-solid fa-house" /><span>Trang Chủ&nbsp;/&nbsp;Đăng Ký</span></div>
                    </div>
                </div>
                <div className="register">
                    <div className="register__header">
                        <h1>Đăng Ký</h1>
                    </div>

                    <Formik
                        initialValues={{
                            nameUser: "",
                            birthUser: "",
                            emailUser: "",
                            genderUser: null,
                            idCardUser: "",
                            addressUser: "",
                            imgUser: "",
                            phoneUser: "",
                            password: "",
                            confirmPassword: "",
                        }}
                        validationSchema={yup.object({
                            nameUser: yup.string().required("Vui lòng nhập tên :"),
                            birthUser: yup.string().required("Vui lòng ngày sinh :"),
                            emailUser: yup.string().required("Vui lòng nhập email :"),
                            idCardUser: yup.string().required("Vui lòng nhập CCCD :"),
                            addressUser: yup.string().required("Vui lòng nhập địa chỉ :"),
                            phoneUser: yup.string().required("Vui lòng nhập số điện thoại :"),
                            password: yup.string().required("Vui lòng nhập mật khẩu :"),
                            confirmPassword: yup.string()
                                .required("Vui lòng nhập mật khẩu xác nhận.")
                                .oneOf([yup.ref('password'), null], 'Mật khẩu xác nhận không khớp.')
                        })}
                        onSubmit={(value)=>{
                            userRegister(value)
                        }}>
                        <Form>
                            <div className="register__content">
                                <div className="register__content-item">
                                    <label className="register__content-label">
                                        Họ Và Tên
                                    </label>
                                    <Field className="register__content-input" name="nameUser" type="text" placeholder="Nhập Tên" />
                                    <ErrorMessage className="register__content-error" name="nameUser" component='div' style={{ color: 'red' }} />
                                </div>

                                <div className="register__content-item">
                                    <label className="register__content-label">
                                        Ngày Sinh
                                    </label>
                                    <Field name="birthUser" className="register__content-input" type="date" placeholder="Nhập sinh của bạn" />
                                    <ErrorMessage name="birthUser" className="register__content-error" component='div' style={{ color: 'red' }} />
                                </div>
                                <div className="register__content-item">
                                    <label className="register__content-label">
                                        Email
                                    </label>
                                    <Field className="register__content-input" name="emailUser" type="text" placeholder="Nhập Email" />
                                    <ErrorMessage component='div' name="emailUser" className="register__content-error" style={{ color: 'red' }} />
                                </div>
                                <div className="register__content-item">
                                    <label className="register__content-label">
                                        Số Điện Thoại
                                    </label>
                                    <Field className="register__content-input" name="phoneUser" type="text" placeholder="Nhập Số Điện Thoại" />
                                    <ErrorMessage name="phoneUser" className="register__content-error" component='div' style={{ color: 'red' }} />
                                </div>
                                <div className="register__content-item">
                                    <label className="register__content-label">
                                        ID
                                    </label>
                                    <Field name="idCardUser" className="register__content-input" type="text" placeholder="Nhập ID" />
                                    <ErrorMessage name="idCardUser" component="div" className="register__content-error" style={{ color: 'red' }} />
                                </div>
                                <div className="register__content-item">
                                    <label className="register__content-label">
                                        Địa Chỉ
                                    </label>
                                    <Field className="register__content-input" name="addressUser" type="text" placeholder="Nhập Địa Chỉ" />
                                    <ErrorMessage className="register__content-error" component='div' name="addressUser" style={{ color: 'red' }} />
                                </div>
                                <div className="register__content-item">
                                    <label className="register__content-label">
                                        Mật Khẩu
                                    </label>
                                    <Field name="password" className="register__content-input" placeholder="Nhập mật khẩu" type="password" />
                                    <ErrorMessage name="password" component='div' className="register__content-error" style={{ color: 'red' }} />
                                </div>
                                <div className="register__content-item">
                                    {/* <label className="register__content-label register__content-checkbook">
                                        Giới Tính <div className="register__content-input"> <label className="register__content-input-label"> Nam
                                            <Field type="radio" name="genderUser" value={true} /> </label> <label className="register__content-input-label"> Nữ
                                                <Field type="radio" name="genderUser" value={false} /> </label> <label className="register__content-input-label"> Khác
                                                <Field type="radio" name="genderUser" value={null} /> </label> </div> </label> */}

                                    <label className="register__content-label">
                                        Giới tính
                                    </label>
                                    <Field name='genderUser' className="register__content-input"
                                        as="select">
                                        <option value={null}>Khác</option>
                                        <option value={true}>Nam</option>
                                        <option value={false}>Nữ</option>
                                    </Field>
                                    {/* </div> */}
                                </div>
                                <div className="register__content-item">
                                    <label className="register__content-label">
                                        Nhập Lại Mật Khẩu
                                    </label>
                                    <Field name="confirmPassword" className="register__content-input" type="password" placeholder="Nhập mật khẩu" />
                                    <ErrorMessage name="confirmPassword" component='div' className="register__content-error" style={{ color: 'red' }} />
                                </div>
                                <div className="register__content-item">
                                    <label className="register__content-label">
                                        Ảnh
                                        <Field name="imgUser" className="register__content-input" type="file" placeholder="Nhập ID" />

                                    </label>
                                </div>
                            </div>
                            <div className="register__footer">
                                <div className="register__footer-button">
                                    <button type="submit">Đăng Ký</button>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div >
        </>
    )
}
export default Register;