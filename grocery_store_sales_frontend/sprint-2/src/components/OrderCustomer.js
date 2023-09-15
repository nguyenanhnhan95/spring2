import '../css/order-customer.css'
import '../css/home.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserByEmailDB } from '../service/UserService';
import { getCartsByEmailUserDB } from '../service/CardService';
import { getOrdersByIdUserDB } from '../service/OrderService';
import numeral from 'numeral';

function OrderCustomer() {
    const [user, setUser] = useState();
    const navigate = useNavigate()
    const [books, setBooks] = useState([])
    const [type, setType] = useState(1)
    
    const headers = {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
    }
    useEffect(() => {
            getUser()     
    }, [])
    const getUser = () => {
        getUserByEmailDB(headers).then((data) => {
            setUser(data)
            console.log(data)
            getOrdersByIdUserDB(data.id, type).then((dataCard) => {
                setBooks(dataCard.content)
                console.log(dataCard.content);
            }).catch((error) => {
                if(error.response && error.response.status === 404){
               setBooks([])
                }
            })
           
        }).catch(() => {
            navigate("/login")
        })
    }
    const clickSetType = (value) => {
        setType(value)
        getOrdersByIdUserDB(user.id, value).then((dataCard) => {
            setBooks(dataCard.content)
            console.log(dataCard.content);
        }).catch((error) => {
            if (error.response && error.response.status === 404) {
                // Xử lý trường hợp không tìm thấy đơn hàng ở đây
                setBooks([])
            } else {
                // Xử lý các lỗi khác nếu có
                navigate("/");
            }
        })
    }
    if (user == null) {
        return null;
    }

    return (
        <div className="order__customer">
            <div className="home__header">
                <div className="home__header--content">
                    <div className="home__header--content--item"><i className="fa-solid fa-folder"></i><span>Quảng Lý Đơn Hàng </span> </div>
                </div>
            </div>
            <div className="header_order__customer">
                <ul className="header_order__customer--list">
                    {/* <li
                        className="header_order__customer--item"
                        style={type === 1 ? { background: 'rgb(38, 79, 162)' } : null}
                        onClick={() => clickSetType(1)}
                    >
                        Chờ xác nhận
                    </li> */}
                    <li className={`header_order__customer--item ${type === 1 ? 'active' : ''}`} style={type === 1 ? { background: '#FE9126',color:"white" } : {}} onClick={() => clickSetType(1)}>Chờ xác nhận</li>
                    <li className={`header_order__customer--item ${type === 2 ? 'active' : ''}`} style={type === 2 ? { background: '#FE9126',color:"white" } : {}} onClick={() => clickSetType(2)}>Đang giao</li>
                    <li className={`header_order__customer--item ${type === 3 ? 'active' : ''}`} style={type === 3 ? { background: '#FE9126',color:"white" } : {}} onClick={() => clickSetType(3)}>Hoàng Thành</li>
                    <li className={`header_order__customer--item ${type === 4 ? 'active' : ''}`} style={type === 4 ? { background: '#FE9126',color:"white" } : {}} onClick={() => clickSetType(4)}>Đã hủy</li>
                    <li className={`header_order__customer--item ${type === 5 ? 'active' : ''}`} style={type === 5 ? { background: '#FE9126',color:"white" } : {}} onClick={() => clickSetType(5)}>Trả hàng/Hoàn tiền</li>
                </ul>
            </div>
            <div className="search_order__customer">
                <div className="search_order__customer--input   ">
                    <span>Thông tin khách hàng</span></div>
                <div className="search_order__customer--input search_order__customer-order">
                    <div className="search_order__customer-order-item">Ngày đặt hàng</div>
                    <div className="search_order__customer-order-item">
                        <input type="date" />
                    </div>
                    <div className="search_order__customer-order-item"><i className="fa-solid fa-arrow-right-long" /></div>
                    <div className="search_order__customer-order-item"><input type="date" />
                    </div>
                    <div className="search_order__customer-order-item search_order__customer-left">
                        <input type="text" placeholder="Tìm đơn hàng" />
                        <i className="fa-solid fa-magnifying-glass fa-sm" />
                    </div>
                </div>
            </div>
            <div className="content_order__customer">
                <div className="content_order__customer-left">
                    <div className="content_order__customer-profile">
                        <div className="content_order__customer-profile-item content_order__customer-img">
                            <img src={user.imgUser} alt="" />
                        </div>
                        <div className="content_order__customer-profile-item">
                            <ul className="content_order__customer-profile-list">
                                <li className="content_order__customer-profile-item">
                                    <i className="fa-solid fa-user" />{user.nameUser}
                                </li>
                                <li className="content_order__customer-profile-item">
                                    <i className="fa-solid fa-money-bill-trend-up" />Điểm tích lũy : {user.accumulatedPoints}
                                </li>
                                <li className="content_order__customer-profile-item">
                                    <i className="fa-solid fa-pen-to-square" />Cập nhập thông tin
                                </li>
                                <li className="content_order__customer-profile-item">
                                    <i className="fa-solid fa-right-from-bracket fa-rotate-180" />Đăng xuất
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content_order__customer-right">
                    <div className="content_order__customer-order">
                        <ul className="content_order__customer-order-list">
                            <li className="content_order__customer-order-item ">Sản phẩm</li>
                        </ul>
                        <ul className="content_order__customer-order-list">
                            <li className="content_order__customer-order-item">Số lượng</li>
                            <li className="content_order__customer-order-item">Tình trạng</li>
                            <li className="content_order__customer-order-item">Tổng tiền</li>
                        </ul>
                    </div>
                    {books && books.map((book) => (
                        <div className="content_order__customer-product">
                            <ul className="content_order__customer-product-list">
                                <li className="content_order__customer-product-item customer-product-item-left"><img src={book.imgProduct} /></li>
                            </ul>
                            <ul className="content_order__customer-product-list">
                                <li className="content_order__customer-product-item customer-product-item-name">{book.nameProduct}</li>
                            </ul>
                            <ul className="content_order__customer-product-list">
                                <li className="content_order__customer-product-item customer-product-item-right ">{book.numberDetail}</li>
                                <li className="content_order__customer-product-item customer-product-item-right">{book.nameStatus}</li>
                                <li className="content_order__customer-product-item customer-product-item-right">{numeral(book.numberDetail * book.priceProduct * (1 - book.bonusSale)).format('00,0 đ')}VND</li>
                                <li className="content_order__customer-product-item customer-product-item-delete "><i className="fa-solid fa-trash" /></li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default OrderCustomer;