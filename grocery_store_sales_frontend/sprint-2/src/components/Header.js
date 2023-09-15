import React, { createContext, useEffect, useState,memo } from "react";
import Login from "./Login";
import { Link, useLocation, useNavigate, useSearchParams, } from "react-router-dom";
import '../css/header.css'
import { getUserByEmailDB } from "../service/UserService";
import { deleteCardByIdDB, getCartsByEmailUserDB } from "../service/CardService";
import { useDispatch, useSelector } from "react-redux";
import { getCart, getNumberOfProductsInCart } from "../actions/cartActions";
import { getSearch, getSearchStatus, searchListProduct } from "../actions/searchAction";

function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const [search, setSearch] = useState("")
    const [typeProduct, setTypeProduct] = useState(0)
    const [user, setUser] = useState(null)
    const [carts, setCarts] = useState([])
    const dispatch=useDispatch()
    const flagSearch=useSelector(getSearchStatus)

    const flagOfCart=useSelector(getCart)

    useEffect(() => {
        
        
        if(headers.Authorization!='Bearer null'){
            getUserByEmail()
        }      
    }, [flagOfCart])
    const headers={
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
    }
    
    console.log(headers)
   
    const getUserByEmail = () => {
        getUserByEmailDB(headers).then((data) => {
            setUser(data)
            console.log("nhan")
            getCartsByEmailUserDB(data.id).then((data) => {
                const car=data
                car.sort((a, b) => b.id - a.id);
                setCarts(car)
                console.log(data)
            }).catch(()=>{
                setCarts([])
            })
            
        }).catch(()=>{
            navigate("/")
        })
    }
    const logoutAccount = () => {
        localStorage.removeItem("email")
        localStorage.removeItem("nameRole")
        localStorage.removeItem("nameUser")
        localStorage.removeItem("avatar")
        localStorage.removeItem("token")
        localStorage.removeItem("id")
        console.log(localStorage.getItem("email"))
        navigate("/")
    }
  
    const handleSearch=(value)=>{
        dispatch(searchListProduct(value))
        
    }
    const deleteCard=(idCard)=>{
       deleteCardByIdDB(idCard,headers).then(()=>{
        getCartsByEmailUserDB(user.id).then((data) => {
            
            setCarts(data)
            console.log(data)
        }).catch(()=>{
            setCarts([])
        })
       }).catch(()=>{
        navigate("/")
       })
    }
    if(headers.Authorization!='Bearer null'){
        if(user==null){
            return null;
        }
    }
    if( carts==null){
        return null;
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
                            <li className="nav__mobile--item "><img className="header__nav-item--logo" src="../img/logo.jpg" /></li>
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
                                    {/* no login*/}
                                    {localStorage.getItem("nameUser") == null ? (
                                        <>
                                            <Link to={`/register`}>
                                                <li className="header__top-item header__top-item--bond header__top-item--separate">
                                                    Đăng Ký
                                                </li>
                                            </Link>
                                            <Link to={`/login`}>
                                                <li className="header__top-item header__top-item--bond">
                                                    Đăng Nhập
                                                </li>
                                            </Link>
                                        </>
                                    ) : (
                                        <li className="header__top-item header__top-item-login">
                                            <span className="header__top-item--name-user"><img src={localStorage.getItem("avatar")} />{localStorage.getItem("nameUser")}</span>
                                            <ul className="header__top-sub-login">
                                                <li className="header__top-sub-login-item">
                                                    <i className="fa-solid fa-folder" /><span className="header__top-sub-login-profile">Thông tin tài khoản</span>
                                                </li>
                                                <li className="header__top-sub-login-item">
                                                    <hr />
                                                </li>
                                                <Link style={{ textDecoration: 'none' }} to={`/order-customer/${user.id}`}><li className="header__top-sub-login-item">
                                                    <i className="fa-solid fa-cart-shopping" /><span className="header__top-sub-login-profile">Đơn hàng</span>
                                                </li></Link>
                                                <li className="header__top-sub-login-item">
                                                    <hr />
                                                </li>
                                                <li className="header__top-sub-login-item" onClick={() => logoutAccount()}>
                                                    <i className="fa-solid fa-right-from-bracket" /><span className="header__top-sub-login-profile">Đăng xuất</span>
                                                </li>
                                            </ul>
                                        </li>

                                    )}
                                    {/* login */}
                                    {localStorage.getItem("nameRole") === "ROLE_USER" ? (
                                        <li className="header__top-item header__content--cart">

                                            {/* no cart */}
                                            { carts.length === 0 ? (
                                                <div class="header__cart__wrap">
                                                    <i class="fa-solid fa-bag-shopping fa-xl">
                                                    </i>
                                                    <div class="header__cart-list header__cart-list-no-cart">
                                                        <img class="header__cart-list-no-cart-img"
                                                            src="https://eherbalmarket.vn/assets/images/no-cart.png" />
                                                        <p class="header__cart-list-no-cart-message">Chưa có sản phẩm </p>
                                                    </div>
                                                    {/* has cart */}
                                                </div>
                                            ) : (

                                                <div className="header__cart__wrap">
                                                    <i className="fa-solid fa-bag-shopping fa-xl">
                                                    </i>
                                                    <span className="header__cart-notice">{carts.length}</span>
                                                    <div className="header__cart-list">
                                                        <h4 className="header__cart-list-cart">Sản phẩm đã thêm</h4>
                                                        <ul className="header__cart-list-cart-list">

                                                            {carts && carts.map((cart, index) => (
                                                                <li className="header__cart-list-cart-item" key={index}>
                                                                    <div className="header__cart-list-cart-item-img">
                                                                        <img src={cart.product.imgProduct} alt="Product Image" />
                                                                    </div>
                                                                    <div className="header__cart-list-cart-item-product">
                                                                        <div className="header__cart-list-cart-item-product-item">
                                                                            <div className="header__cart-list-cart-item-product-name">
                                                                            {cart.product.brandProduct}
                                                                            </div>
                                                                        </div>
                                                                        <div className="header__cart-list-cart-item-product-item">
                                                                            <div className="header__cart-list-cart-item-product-price">
                                                                                <span className="header__cart-list-cart-item-product-price-money">{cart.product.priceProduct*(1-cart.product.bonusSale)}</span>
                                                                                <span className="header__cart-list-cart-item-product-price-quality">x {cart.numberCart}</span>
                                                                                <p onClick={()=>deleteCard(cart.id)}>xóa</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            ))}

                                                            <li className="header__cart-list-cart-item header__cart-list-cart-item-button">
                                                                <Link to={`/card-customer/${user.id}`}><button>Xem Giỏ Hàng</button></Link>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                </div>
                                            )}


                                        </li>
                                    ) : null}
                                </ul>
                            </div>
                        </div>
                        <div className="grid-content">
                            <div className="header__content">
                                <ul className="header__content--list">
                                    <li className="header__content-item  "><img className="header__content-item--logo" src="../img/logo.jpg" /></li>
                                </ul>
                                <ul className="header__content--list">
                                    <li className="header__content-item header__content-item--title">Bách Hóa Online</li>
                                </ul>
                                <ul className="header__content--list">
                                    <li className="header__content-item header__content-item--search">
                                        <input className="header__content-item--input" onChange={e => setSearch(e.target.value)} placeholder="Tìm kiếm" />
                                        <div className="header__content-item--search--button"><i onClick={() => handleSearch({search:[0,0,search,0],flagSearch:flagSearch})} className="fa-solid fa-magnifying-glass" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid-navbar">
                            <div className="header__navbar">
                                <ul className="header__navbar--list">
                                    <Link to={`/`}><li className="header__navbar-item " onClick={() => handleSearch({search:[0,0,"",0],flagSearch:flagSearch})}>Trang Chủ</li></Link>
                                    {/*                        admin*/}
                                    {localStorage.getItem("nameRole") === "ROLE_ADMIN" ? (
                                        <li className="header__navbar-item header__navbar-item-manage">Quản lý
                                            <ul className="sub_header__navbar-item-list">
                                                <Link style={{ textDecoration: 'none' }} to={`/manage-order`}><li className="sub_header__navbar-item-list-item"><i className="fa-solid fa-cart-shopping" />Quản lý đơn hàng</li></Link>
                                                <li className="sub_header__navbar-item-list-item"><hr /></li>
                                                <li className="sub_header__navbar-item-list-item"><i className="fa-solid fa-file-pen" />Quản lý khách hàng</li>
                                                <li className="sub_header__navbar-item-list-item"><hr /></li>
                                                <li className="sub_header__navbar-item-list-item"><i className="fa-solid fa-people-roof" />Quản lý nhân viên</li>
                                            </ul>
                                        </li>) : (null)}
                                    <li className="header__navbar-item " onClick={() => handleSearch({search:[0,1,search,0],flagSearch:flagSearch})}>Bia &amp; Nước
                                    </li>
                                    <li className="header__navbar-item " onClick={() => handleSearch({search:[0,2,search,0],flagSearch:flagSearch})}>Snack &amp; Bánh kẹo</li>
                                    <li className="header__navbar-item " onClick={() => handleSearch({search:[0,3,search,0],flagSearch:flagSearch})}>Hóa mỹ phẩm</li>
                                    <li className="header__navbar-item " onClick={() => handleSearch({search:[0,4,search,0],flagSearch:flagSearch})}>Gạo, thực phẩm khô
                                    </li>
                                    <li className="header__navbar-item " onClick={() => handleSearch({search:[0,5,search,0],flagSearch:flagSearch})}>Thực phẩm dinh dưỡng
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header >

            </div >
        </>
    )
}
export default Header;