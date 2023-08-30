import React, { useState } from "react";
import Login from "./Login";
function Header() {
    const[login,setLogin]= useState(false)
    const clickLogin=()=>{
        setLogin(!login)
    }
    return (
        <>
            <div>
                <header className="header">
                    <div className="nav__bars-btn">
                        <div className="grid__mobile">
                            <div className="header__mobile">
                                <ul className="header__mobile-list">
                                    <li className="header__mobile-item">
                                        <label htmlFor="nav-input"><i className="fa-solid fa-bars fa-lg" /></label></li>
                                </ul>
                                <ul className="header__navbar-list">
                                    <li className="header__mobile-item"><i className="fa-solid fa-bell" /></li>
                                    <li className="header__mobile-item"><i className="fa-regular fa-circle-question" /></li>
                                    <li className="header__mobile-item"><i className="fa-solid fa-user" /></li>
                                    <li className="header__mobile-item header__content--cart"><i className="fa-solid fa-bag-shopping fa-sm"><span>0</span></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <input type="checkbox" hidden className="nav__input" name id="nav-input" />
                    <label htmlFor="nav-input" className="nav__overlay" />
                    <div className="nav__mobile">
                        <label htmlFor="nav-input" className="nav__mobile--close"><i className="fa-solid fa-xmark" /></label>
                        <ul className="nav__mobile--list">
                            <li className="nav__mobile--item "><img src="img/logo.jpg" className="header__nav-item--logo"  /></li>
                            <li className="nav__mobile--item"><i className="fa-solid fa-house" />Trang Chủ</li>
                            <li className="nav__mobile--item"><i className="fa-solid fa-wine-bottle" />Bia &amp; Nước</li>
                            <li className="nav__mobile--item"><i className="fa-solid fa-cookie-bite" />Snack &amp; Bánh kẹo</li>
                            <li className="nav__mobile--item"><i className="fa-solid fa-spray-can-sparkles" />Hóa mỹ phẩm</li>
                            <li className="nav__mobile--item"><i className="fa-solid fa-bowl-rice" />Gạo &amp; thực phẩm khô</li>
                            <li className="nav__mobile--item">Thực phẩm dinh dưỡng</li>
                            <li className="nav__mobile--item"><i className="fa-solid fa-right-from-bracket fa-rotate-180" />Đăng Xuất</li>
                        </ul>
                    </div>
                    <div className="nav__pc">
                        <div className="grid">
                            <div className="header__top">
                                <ul className="header__top-list">
                                    <li className="header__top-item header__top-item--separate"><i className="fa-solid fa-phone" />0393554072
                                    </li>
                                    <li className="header__top-item"><i className="fa-solid fa-envelope" />nguyenanhnhan@gmail.com</li>
                                </ul>
                                <ul className="header__navbar-list">
                                    <li className="header__top-item"><i className="fa-solid fa-bell" />Thông Báo</li>
                                    <li className="header__top-item"><i className="fa-regular fa-circle-question" />Trợ giúp</li>
                                    <li className="header__top-item header__top-item--bond header__top-item--separate">Đăng Ký</li>
                                    <li className="header__top-item header__top-item--bond" onClick={()=>clickLogin()}>Đăng Nhập</li>
                                    <li className="header__top-item header__content--cart"><i className="fa-solid fa-bag-shopping fa-xl"><span>0</span></i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid-content">
                            <div className="header__content">
                                <ul className="header__content--list">
                                    <li className="header__content-item  "><img src="img/logo.jpg" className="header__content-item--logo"  /></li>
                                </ul>
                                <ul className="header__content--list">
                                    <li className="header__content-item header__content-item--title">Supper Market</li>
                                </ul>
                                <ul className="header__content--list">
                                    <li className="header__content-item header__content-item--search">
                                        <input className="header__content-item--input" placeholder="Tìm kiếm" />
                                        <div className="header__content-item--search--button"><i className="fa-solid fa-magnifying-glass" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid-navbar">
                            <div className="header__navbar">
                                <ul className="header__navbar--list">
                                    <li className="header__navbar-item">Trang Chủ</li>
                                    <li className="header__navbar-item">Bia &amp; Nước<i className="fa-solid fa-sort-down fa-xs" />
                                    </li>
                                    <li className="header__navbar-item">Snack &amp; Bánh kẹo<i className="fa-solid fa-sort-down fa-xs" /></li>
                                    <li className="header__navbar-item">Hóa mỹ phẩm<i className="fa-solid fa-sort-down fa-xs" /></li>
                                    <li className="header__navbar-item">Gạo, thực phẩm khô<i className="fa-solid fa-sort-down fa-xs" />
                                    </li>
                                    <li className="header__navbar-item">Thực phẩm dinh dưỡng<i className="fa-solid fa-sort-down fa-xs" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                {login &&
                <Login controlFalse={() => clickLogin()}/>}
            </div>
        </>
    )
}
export default Header;