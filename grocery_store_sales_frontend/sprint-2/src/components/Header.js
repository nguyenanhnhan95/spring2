import React, { useState } from "react";
import Login from "./Login";
import { Link, } from "react-router-dom";
import '../css/header.css'
function Header() {
    const [login, setLogin] = useState(false)
    const clickLogin = () => {
        setLogin(!login)
    }

    return (
        <>
            <div className="sprint-tow">
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
                            <li className="nav__mobile--item "><img className="header__nav-item--logo" src="img.png" /></li>
                            <li className="nav__mobile--item"><i className="fa-solid fa-house" />Trang Chủ</li>
                            <li className="nav__mobile--item"><i className="fa-solid fa-wine-bottle" />Bia &amp; Nước</li>
                            <li className="nav__mobile--item"><i className="fa-solid fa-cookie-bite" />Snack &amp; Bánh kẹo</li>
                            <li className="nav__mobile--item"><i className="fa-solid fa-spray-can-sparkles" />Hóa mỹ phẩm</li>
                            <li className="nav__mobile--item"><i className="fa-solid fa-bowl-rice" />Gạo, thực phẩm khô</li>
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
                                    {/*                        no login*/}
                                    {/*                        <li class="header__top-item header__top-item&#45;&#45;bond header__top-item&#45;&#45;separate">Đăng Ký</li>*/}
                                    {/*                        <li class="header__top-item header__top-item&#45;&#45;bond">Đăng Nhập</li>*/}
                                    {/*                        login*/}
                                    <li className="header__top-item header__top-item-login">
                                        <span className="header__top-item--name-user">Nguyen Anh Nhàn</span><i className="fa-solid fa-user fa-sm" />
                                        <ul className="header__top-sub-login">
                                            <li className="header__top-sub-login-item">
                                                <i className="fa-solid fa-folder" /><span className="header__top-sub-login-profile">Thông tin tài khoản</span>
                                            </li>
                                            <li className="header__top-sub-login-item">
                                                <hr />
                                            </li>
                                            <Link style={{ textDecoration: 'none' }} to={`/order-customer`}><li className="header__top-sub-login-item">
                                                <i className="fa-solid fa-cart-shopping" /><span className="header__top-sub-login-profile">Đơn hàng</span>
                                            </li></Link>
                                            <li className="header__top-sub-login-item">
                                                <hr />
                                            </li>
                                            <li className="header__top-sub-login-item">
                                                <i className="fa-solid fa-right-from-bracket" /><span className="header__top-sub-login-profile">Đăng xuất</span>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="header__top-item header__content--cart">
                                        {/*                                no cart*/}
                                        {/*                            <div class="header__cart__wrap">*/}
                                        {/*                                <i class="fa-solid fa-bag-shopping fa-xl">*/}
                                        {/*                                </i>*/}
                                        {/*                                <div class="header__cart-list header__cart-list-no-cart">*/}
                                        {/*                                    <img class="header__cart-list-no-cart-img"*/}
                                        {/*                                         src="https://eherbalmarket.vn/assets/images/no-cart.png">*/}
                                        {/*                                    <p class="header__cart-list-no-cart-message">Chưa có sản phẩm </p>*/}
                                        {/*                                </div>*/}
                                        {/*                                has cart*/}
                                        {/*                            </div>*/}
                                        <div className="header__cart__wrap">
                                            <i className="fa-solid fa-bag-shopping fa-xl">
                                            </i>
                                            <span className="header__cart-notice">3</span>
                                            <div className="header__cart-list">
                                                <h4 className="header__cart-list-cart">Sản phẩm đã thêm</h4>
                                                <ul className="header__cart-list-cart-list">
                                                    <li className="header__cart-list-cart-item">
                                                        <div className="header__cart-list-cart-item-img">
                                                            <img src="img.png" />
                                                        </div>
                                                        <div className="header__cart-list-cart-item-product">
                                                            <div className="header__cart-list-cart-item-product-item">
                                                                <div className="header__cart-list-cart-item-product-name">
                                                                    Bia larue
                                                                </div>
                                                            </div>
                                                            <div className="header__cart-list-cart-item-product-item">
                                                                <div className="header__cart-list-cart-item-product-price">
                                                                    <span className="header__cart-list-cart-item-product-price-money">15000VND</span><span className="header__cart-list-cart-item-product-price-quality">x 1</span>
                                                                    <p>xóa</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="header__cart-list-cart-item">
                                                        <div className="header__cart-list-cart-item-img">
                                                            <img src="img.png" />
                                                        </div>
                                                        <div className="header__cart-list-cart-item-product">
                                                            <div className="header__cart-list-cart-item-product-item">
                                                                <div className="header__cart-list-cart-item-product-name">
                                                                    Bia larue
                                                                </div>
                                                            </div>
                                                            <div className="header__cart-list-cart-item-product-item">
                                                                <div className="header__cart-list-cart-item-product-price">
                                                                    <span className="header__cart-list-cart-item-product-price-money">15000VND</span><span className="header__cart-list-cart-item-product-price-quality">x 1</span>
                                                                    <p>xóa</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="header__cart-list-cart-item header__cart-list-cart-item-button">
                                                        <button>Xem Giỏ Hàng</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid-content">
                            <div className="header__content">
                                <ul className="header__content--list">
                                    <li className="header__content-item  "><img className="header__content-item--logo" src="img.png" /></li>
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
                                    <Link to={`/`}><li className="header__navbar-item ">Trang Chủ</li></Link>
                                    {/*                        admin*/}
                                    <li className="header__navbar-item header__navbar-item-manage">Quản lý
                                        <ul className="sub_header__navbar-item-list">
                                            <Link style={{ textDecoration: 'none' }} to={`/manage-order`}><li className="sub_header__navbar-item-list-item"><i className="fa-solid fa-cart-shopping" />Quản lý đơn hàng</li></Link>
                                            <li className="sub_header__navbar-item-list-item"><hr /></li>
                                            <li className="sub_header__navbar-item-list-item"><i className="fa-solid fa-file-pen" />Quản lý khách hàng</li>
                                            <li className="sub_header__navbar-item-list-item"><hr /></li>
                                            <li className="sub_header__navbar-item-list-item"><i className="fa-solid fa-people-roof" />Quản lý nhân viên</li>
                                        </ul>
                                    </li>
                                    <li className="header__navbar-item ">Bia &amp; Nước
                                    </li>
                                    <li className="header__navbar-item ">Snack &amp; Bánh kẹo</li>
                                    <li className="header__navbar-item ">Hóa mỹ phẩm</li>
                                    <li className="header__navbar-item ">Gạo, thực phẩm khô
                                    </li>
                                    <li className="header__navbar-item ">Thực phẩm dinh dưỡng
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                {login &&
                    <Login controlFalse={() => clickLogin()} />}
            </div>
        </>
    )
}
export default Header;