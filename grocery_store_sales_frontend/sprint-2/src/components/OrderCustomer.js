import '../css/order-customer.css'
function OrderCustomer() {
    return (
        <div className="order__customer">
            <div className="home__header">
                <div className="home__header--content">
                    <div className="home__header--content--item"><i className="fa-solid fa-folder"></i><span>Quảng Lý Đơn Hàng </span> </div>
                </div>
            </div>
            <div className="header_order__customer">
                <ul className="header_order__customer--list">
                    <li className="header_order__customer--item">Chờ xác nhận</li>
                    <li className="header_order__customer--item">Đang giao</li>
                    <li className="header_order__customer--item">Hoàn Thành</li>
                    <li className="header_order__customer--item">Đã hủy</li>
                    <li className="header_order__customer--item">Trả hàng/Hoàn tiền</li>
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
                            <img src="https://toplist.vn/images/800px/nice-studio-915688.jpg" alt="" />
                        </div>
                        <div className="content_order__customer-profile-item">
                            <ul className="content_order__customer-profile-list">
                                <li className="content_order__customer-profile-item">
                                    <i className="fa-solid fa-user" />Nguyễn Thị A
                                </li>
                                <li className="content_order__customer-profile-item">
                                    <i className="fa-solid fa-money-bill-trend-up" /> Điểm tích lũy :
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
                    <div className="content_order__customer-product">
                        <ul className="content_order__customer-product-list">
                            <li className="content_order__customer-product-item customer-product-item-left"><img src="img.png" /></li>
                        </ul>
                        <ul className="content_order__customer-product-list">
                            <li className="content_order__customer-product-item customer-product-item-name">Bia larue</li>
                        </ul>
                        <ul className="content_order__customer-product-list">
                            <li className="content_order__customer-product-item customer-product-item-right ">14</li>
                            <li className="content_order__customer-product-item customer-product-item-right">Chờ xử lý</li>
                            <li className="content_order__customer-product-item customer-product-item-right">1.500.000VND</li>
                            <li className="content_order__customer-product-item customer-product-item-delete "><i className="fa-solid fa-trash" /></li>
                        </ul>
                    </div>
                    <div className="content_order__customer-product">
                        <ul className="content_order__customer-product-list">
                            <li className="content_order__customer-product-item customer-product-item-left"><img src="img.png" /></li>
                        </ul>
                        <ul className="content_order__customer-product-list">
                            <li className="content_order__customer-product-item customer-product-item-name">Bia larue</li>
                        </ul>
                        <ul className="content_order__customer-product-list">
                            <li className="content_order__customer-product-item customer-product-item-right ">14</li>
                            <li className="content_order__customer-product-item customer-product-item-right">Chờ xử lý</li>
                            <li className="content_order__customer-product-item customer-product-item-right">1.500.000VND</li>
                            <li className="content_order__customer-product-item customer-product-item-delete "><i className="fa-solid fa-trash" /></li>
                        </ul>
                    </div>
                    <div className="content_order__customer-product">
                        <ul className="content_order__customer-product-list">
                            <li className="content_order__customer-product-item customer-product-item-left"><img src="img.png" /></li>
                        </ul>
                        <ul className="content_order__customer-product-list">
                            <li className="content_order__customer-product-item customer-product-item-name">Bia larue</li>
                        </ul>
                        <ul className="content_order__customer-product-list">
                            <li className="content_order__customer-product-item customer-product-item-right ">14</li>
                            <li className="content_order__customer-product-item customer-product-item-right">Chờ xử lý</li>
                            <li className="content_order__customer-product-item customer-product-item-right">1.500.000VND</li>
                            <li className="content_order__customer-product-item customer-product-item-delete "><i className="fa-solid fa-trash" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OrderCustomer;