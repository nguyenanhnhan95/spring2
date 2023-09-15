import '../css/manage-order.css'
import { Link } from 'react-router-dom';
import '../css/home.css'
import { useEffect, useState } from 'react';
import { getOrderManageDB } from '../service/OrderService';
import numeral from 'numeral';
function ManageOrder() {
    const [orders, setOrders] = useState([])
    const [name, setName] = useState("")
    const headers={
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
    }
    useEffect(() => {
        getOrderManage()
    }, [])
    const getOrderManage = () => {
        getOrderManageDB(name,headers).then((data) => {
            setOrders(data.content)
            console.log(data.content)
        })
            .catch(() => {
                alert("loi")
            })
    }
    return (
        <>
            <div className="manage__order">
                <div className="home__header">
                    <div className="home__header--content">
                        <div className="home__header--content--item"><i className="fa-solid fa-folder"></i><span>Quản Lý Đơn Hàng </span> </div>
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
                            <th>Trạng thái đơn hàng</th>
                            <th>Tổng Tiền</th>
                            <th>Thao Tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders && orders.map((order) => (
                            <tr key={order.id}>
                                <td>1</td>
                                <td>{order.nameUser}</td>
                                <td>{order.addressUser}</td>
                                <td>{order.dateOrder}</td>
                                <td>
                                    <select class="table__manage-order-select">
                                        <option selected={order.nameStatus === "Chờ xác nhận"} class="table__manage-order-option">Chờ xác nhận</option>
                                        <option selected={order.nameStatus === "Đang giao"} class="table__manage-order-option">Đang giao</option>
                                        <option selected={order.nameStatus === "Hoàn Thành"} class="table__manage-order-option">Hoàn thành</option>
                                        <option selected={order.nameStatus === "Đã hủy"} class="table__manage-order-option">Đã hủy</option>
                                        <option selected={order.nameStatus === "Trả hàng/Hoàn tiền"} class="table__manage-order-option">Trả hàng/Hoàn tiền</option>
                                    </select>
                                </td>
                                <td>{numeral(order.totalPrice).format('00,0 đ')}VND</td>
                                <td><i className="fa-solid fa-circle-info" /></td>
                            </tr>
                        ))}
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