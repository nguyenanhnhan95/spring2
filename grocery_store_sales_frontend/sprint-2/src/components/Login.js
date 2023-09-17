import '../css/login.css'
import '../css/home.css'
import { Link, useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from "yup";
import { AccountService } from '../service/AccountService';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { LOGIN } from '../actions/loginAction';
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getAccount = (value) => {
    AccountService({
      "email": value.email,
      "password": value.password
    }).then((data) => {
      localStorage.setItem("email", data.email)
      localStorage.setItem("nameRole", data.nameRole)
      localStorage.setItem("nameUser", data.nameUser)
      localStorage.setItem("avatar", data.avatar)
      localStorage.setItem("id", data.id)
      console.log(data);
      localStorage.setItem("token",data.jwttoken)
      dispatch(LOGIN(data))
      navigate("/")
      Swal.fire({
        text: 'Đăng nhập thành công !',
        icon: "success",
        timer: 2000
      })
    }).catch(() => {
      Swal.fire({
        text: 'Sai mật khẩu hoặc email !',
        icon: "warning",
        timer: 2000
      })
    })
  }
  return (
    <>
      <div className="container__login">
        <div className="login">
          <div className="home__header">
            <div className="home__header--content">
              <div className="home__header--content--item"><i className="fa-solid fa-house" /><span>Đăng nhập</span>
              </div>
            </div>
          </div>
          <div className="login-content">
            <div className="login__header">
              <h1>Đăng nhập</h1>
            </div>
            <div className="login__section">
              <Formik initialValues={{
                email: "",
                password: "",
              }}
                validationSchema={yup.object({
                  email: yup.string().required("Chưa nhập email :"),
                  password: yup.string().required("Chưa nhập mật khẩu")
                })}
                onSubmit={(value) =>
                  getAccount(value)
                }>
                <Form>
                  <div className="login__section-input-first login__section-input">
                    <Field name="email" id="email" type="text" placeholder="Email của bạn" />
                    <ErrorMessage name='email' className="login__section-input-error" component='div' />
                  </div>
                  <div className="login__section-input-last login__section-input">
                    <Field name='password' id="password" type="password" placeholder="Mật khẩu của bạn" />
                    <ErrorMessage name='password' className="login__section-input-error" component='div' />
                  </div>
                  <div className="icon__password"><i className="fa-solid fa-eye fa-xs" /></div>
                  <button type='submit' className="login__section-button">Đăng Nhập</button>
                </Form>
              </Formik>

              <div className="login__section-footer">
                <p>Quên mật khẩu</p>
                <p>Đăng Ký</p>
              </div>
              <Link to={`/`}><button className="login__section-button-return" type="button">Quay lại</button></Link>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
export default Login;