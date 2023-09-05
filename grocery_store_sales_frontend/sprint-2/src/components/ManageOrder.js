import '../css/manage-order.css'
import { Link } from 'react-router-dom';
import '../css/home.css'
function ManageOrder() {
    return (
        <>
            <div className="manage__order">
                <div className="home__header">
                    <div className="home__header--content">
                        <div className="home__header--content--item"><i className="fa-solid fa-folder"></i><span>Quảng Lý Đơn Hàng </span> </div>
                    </div>
                </div>
            
                <div className="manage__order-search">
                    <ul className="manage__order-search-list">
                        <li className="manage__order-search">
                            <span>Từ</span><input type="date" />
                        </li>
                        <li className="manage__order-search"><i className="fa-solid fa-right-long fa-xl" /></li>
                        <li className="manage__order-search">
                            <input type="date" />
                        </li>
                        <li className="manage__order-search">
                            <input type="text" placeholder="Tên khách hàng" />
                        </li>
                        <li className="manage__order-search">
                            <button type="button">Tìm kiếm</button>
                        </li>
                    </ul>
                </div>
                <table className="table__manage-order">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên Khách Hàng</th>
                            <th>Địa Chỉ</th>
                            <th>Ngày Đặt Đơn</th>
                            <th>Tổng Tiền</th>
                            <th>Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Nguyễn Anh Nhàn</td>
                            <td>Hòa Tiến-Hòa Vang-TP Đà Nẵng</td>
                            <td>2020-04-15</td>
                            <td>150000VND</td>
                            <td><i className="fa-solid fa-circle-info" /></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Nguyễn Anh Nhàn</td>
                            <td>Hòa Tiến-Hòa Vang-TP Đà Nẵng</td>
                            <td>2020-04-15</td>
                            <td>150000VND</td>
                            <td><i className="fa-solid fa-circle-info" /></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Nguyễn Anh Nhàn</td>
                            <td>Hòa Tiến-Hòa Vang-TP Đà Nẵng</td>
                            <td>2020-04-15</td>
                            <td>150000VND</td>
                            <td><i className="fa-solid fa-circle-info" /></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Nguyễn Anh Nhàn</td>
                            <td>Hòa Tiến-Hòa Vang-TP Đà Nẵng</td>
                            <td>2020-04-15</td>
                            <td>150000VND</td>
                            <td><i className="fa-solid fa-circle-info" /></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Nguyễn Anh Nhàn</td>
                            <td>Hòa Tiến-Hòa Vang-TP Đà Nẵng</td>
                            <td>2020-04-15</td>
                            <td>150000VND</td>
                            <td><i className="fa-solid fa-circle-info" /></td>
                        </tr>
                    </tbody>
                </table>
                <div className="manage-order-pagination">
                    <ul className="manage-order-pagination-list">
                        <li className="manage-order-pagination-item">
                            <button className="manage-order-pagination-item-first" type="button"><i className="fa-solid fa-angle-left" />
                            </button>
                        </li>
                        <li className="manage-order-pagination-item">
                            <button type="button">1</button>
                        </li>
                        <li className="manage-order-pagination-item">
                            <button type="button">2</button>
                        </li>
                        <li className="manage-order-pagination-item">
                            <button type="button">3</button>
                        </li>
                        <li className="manage-order-pagination-item">
                            <button className="manage-order-pagination-item-last" type="button"><i className="fa-solid fa-angle-right" />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default ManageOrder;