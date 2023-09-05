import React from "react";
function Register() {
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
                    <div className="register__content">
                        <div className="register__content-item">
                            <label className="register__content-label">
                                Họ Và Tên
                                <input className="register__content-input" type="text" placeholder="Nhập Tên" />
                            </label>
                        </div>
                        <div className="register__content-item">
                            <label className="register__content-label">
                                Ngày Sinh
                                <input className="register__content-input" type="date" placeholder="Nhập sinh của bạn" />
                            </label>
                        </div>
                        <div className="register__content-item">
                            <label className="register__content-label">
                                Email
                                <input className="register__content-input" type="text" placeholder="Nhập Email" />
                            </label>
                        </div>
                        <div className="register__content-item">
                            <label className="register__content-label">
                                Số Điện Thoại
                                <input className="register__content-input" type="text" placeholder="Nhập Số Điện Thoại" />
                            </label>
                        </div>
                        <div className="register__content-item">
                            <label className="register__content-label">
                                ID
                                <input className="register__content-input" type="text" placeholder="Nhập ID" />
                            </label>
                        </div>
                        <div className="register__content-item">
                            <label className="register__content-label">
                                Địa Chỉ
                                <input className="register__content-input" type="text" placeholder="Nhập Địa Chỉ" />
                            </label>
                        </div>
                        <div className="register__content-item">
                            <label className="register__content-label">
                                Mật Khẩu
                                <input className="register__content-input" placeholder="Nhập mật khẩu" type="password" />
                            </label>
                        </div>
                        <div className="register__content-item">
                            <label className="register__content-label register__content-checkbook">
                                Giới Tính
                                <div className="register__content-input"><label className="register__content-input-label">Nam
                                    <input type="radio" name="gender" defaultValue="Nam" /></label>
                                    <label className="register__content-input-label">Nữ<input type="radio" name="gender" defaultValue="Nữ" /></label>
                                    <label className="register__content-input-label">Khác<input type="radio" name="gender" defaultValue /></label>
                                </div>
                            </label>
                        </div>
                        <div className="register__content-item">
                            <label className="register__content-label">
                                Nhập Lại Mật Khẩu
                                <input className="register__content-input" type="text" placeholder="Nhập mật khẩu" />
                            </label>
                        </div>
                        <div className="register__content-item">
                            <label className="register__content-label">
                                Ảnh
                                <input className="register__content-input" type="file" placeholder="Nhập ID" />
                            </label>
                        </div>
                    </div>
                    <div className="register__footer">
                        <div className="register__footer-button">
                            <button type="button">Đăng Ký</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;