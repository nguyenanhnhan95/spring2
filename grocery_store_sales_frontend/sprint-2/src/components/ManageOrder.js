import '../css/manage-order.css'
import { Link, useNavigate } from 'react-router-dom';
import '../css/home.css'
import { useEffect, useState } from 'react';
import { getOrderByIdDB, getOrderManageDB, updateStatusOrderDB } from '../service/OrderService';
import numeral from 'numeral';
import { Field, Form, Formik } from 'formik';
import { getUserByIdDB } from '../service/UserService';
import DetailOrder from './DetailOrder';
import Swal from 'sweetalert2';
function ManageOrder() {
    const [orders, setOrders] = useState([])
    const [order, setOrder] = useState([])
    const [searchOrder, setSearchOrder] = useState(['', '', ''])
    const [page, setPage] = useState(0)
    const [loopCount, setLoopCount] = useState(0)
    const [user, setUser] = useState(null)
    const [orderUser, setOrderUser] = useState([])
    const [controlDetail, setControlDetail] = useState(false)
    const navigate = useNavigate()
    const headers = {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
    }
    let a = 0;
    console.log(orders)
    useEffect(() => {
        getOrderManage()
    }, [page])
    const getOrderManage = () => {
        getOrderManageDB(page, searchOrder[0], searchOrder[1], searchOrder[2], headers).then((data) => {
            let numberPage = Math.ceil(data.totalElements / 5);

            setLoopCount(numberPage)
            setOrders(data.content)
            console.log(data.content)
        })
            .catch(() => {
                alert("loi")
            })
        
    }
    const handleInformationOrder = (value) => {
        console.log(value)
        getOrderByIdDB(value.id, headers).then((datalist) => {
            setOrderUser(datalist.content)
            console.log(datalist.content)
            getUserByIdDB(headers, datalist.content[0].idUser).then((data) => {
                setUser(data)
                setOrder(value)
                console.log(data)
            })
        })
        setTimeout(() => {
            setControlDetail(true)
        }, 200);
    }
    console.log(searchOrder);
    const handleSearchOrder = (value) => {
        getOrderManageDB(page, value.name, value.dateOne, value.dateTwo, headers).then((data) => {
            let numberPage = Math.ceil(data.totalElements / 5);
            setLoopCount(numberPage)
            setOrders(data.content)
            console.log(data.content)
            console.log(page)
        })
            .catch((error) => {
                if (error.response && error.response.status === 404) {
                    setOrders([])
                }
            })

        setSearchOrder([value.name, value.dateOne, value.dateTwo])

    }
    const transferPage = (value) => {
        if (value >= 0 && value < loopCount) {
            setPage(value)
        }
    };
    const handleUpdateStatus = (id, event) => {
        const type = event * 1
        updateStatusOrderDB(id, type, headers).then(() => {
                getOrderManage()
        }).catch(() => {
            console.log("loi")
        })
    }
    useEffect(() => {
        document.title = "Quản lý đơn hàng";
    }, [])
    return (
        <>
            <div className="manage__order">
                <div className="home__header">
                    <div className="home__header--content">
                        <div className="home__header--content--item"><i className="fa-solid fa-folder"></i><span>Quản Lý Đơn Hàng </span> </div>
                    </div>
                </div>

                <div className="manage__order-search">
                    <Formik initialValues={{
                        name: "",
                        dateOne: "",
                        dateTwo: ""
                    }}
                        onSubmit={(value) => {
                            handleSearchOrder(value)
                        }}>
                        <Form>
                            <ul className="manage__order-search-list">

                                <li className="manage__order-search-li">
                                    <span>Từ</span>
                                    <Field className="manage__order-search-input" type="date" name="dateOne" />
                                </li>
                                <li className="manage__order-search-li"><i className="fa-solid fa-right-long fa-xl" /></li>
                                <li className="manage__order-search-li">
                                    <Field className="manage__order-search-input" type="date" name="dateTwo" />
                                </li>
                                <li className="manage__order-search-li">
                                    <Field className="manage__order-search-input" type="text" name='name' placeholder="Tên khách hàng" />
                                </li>
                                <li className="manage__order-search-li">
                                    <button type="submit">Tìm kiếm</button>
                                </li>

                            </ul>
                        </Form>
                    </Formik>
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
                        {orders && orders.map((order, index) => (
                            <tr key={order.id}>
                                <td>{index + 1 + page * 5}</td>
                                <td>{order.nameUser}</td>
                                <td>{order.addressUser}</td>
                                <td>{order.dateOrder}</td>
                                <td>
                                    <select class="table__manage-order-select" onChange={(e) => handleUpdateStatus(order.id, e.target.value)}>
                                        <option selected={order.nameStatus === "Chờ xác nhận"} value={1} class="table__manage-order-option">Chờ xác nhận</option>
                                        <option selected={order.nameStatus === "Đang giao"} value={2} class="table__manage-order-option">Đang giao</option>
                                        <option selected={order.nameStatus === "Hoàn Thành"} value={3} class="table__manage-order-option">Hoàn thành</option>
                                        <option selected={order.nameStatus === "Đã hủy"} value={4} class="table__manage-order-option">Đã hủy</option>
                                        <option selected={order.nameStatus === "Trả hàng/Hoàn tiền"} value={5} class="table__manage-order-option">Trả hàng/Hoàn tiền</option>
                                    </select>
                                </td>
                                <td>{numeral(order.totalPrice).format('00,0 đ')}VND</td>
                                <td><i className="fa-solid fa-circle-info" onClick={() => handleInformationOrder(order)} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="manage-order-pagination">
                    <ul className="manage-order-pagination-list">
                        <li className="manage-order-pagination-item">
                            <button style={{ borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px', minWidth: '100px' }}>Trang {page}/{loopCount - 1}</button>
                        </li>
                        {page !== 0 && (
                            <>
                                <li className="manage-order-pagination-item">
                                    <button
                                        type="button"
                                        onClick={() => transferPage(0)}

                                        className={page <= 10 ? 'active' : ''}
                                    >
                                        <i class="fa-solid fa-angles-left"></i>
                                    </button>
                                </li>

                                <li className="manage-order-pagination-item">
                                    <button
                                        type="button"
                                        onClick={() => transferPage(page - 1)}
                                        disabled={page === 0}
                                    >
                                        <i class="fa-solid fa-angle-left"></i>
                                    </button>
                                </li>
                            </>
                        )}
                        {Array.from({ length: loopCount }, (_, index) => {
                            if (
                                (index >= page - 2 && index <= page + 2) ||
                                (index === 10 && loopCount > 10) ||
                                (index === 20 && loopCount > 20) ||
                                (index === 30 && loopCount > 30) ||
                                (page === 25 && index === 10)
                            ) {
                                return (
                                    <li className="manage-order-pagination-item" key={index}>
                                        <button
                                            type="button"
                                            onClick={() => transferPage(index)}
                                            className={page === index ? 'active' : ''} style={page === index ? { background: 'rgb(122, 88, 3)' } : {}}
                                        >
                                            {index}
                                        </button>
                                    </li>
                                );
                            }
                            return null;
                        })}
                        <li className="manage-order-pagination-item">
                            <button
                                type="button"
                                onClick={() => transferPage(orders[0] + 1)}
                                disabled={orders[0] === loopCount - 1}
                            >
                                <i class="fa-solid fa-angle-left fa-rotate-180"></i>
                            </button>
                        </li>
                        <li className="manage-order-pagination-item">
                            <button
                                type="button"
                                onClick={() => transferPage(loopCount - 1)}
                                style={{ borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }}
                                className={orders[0] === loopCount - 1 ? 'active' : ''}
                            >
                                <i class="fa-solid fa-angles-left fa-rotate-180"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            {controlDetail && (
                <DetailOrder props={[user, orderUser, order, setControlDetail]} />
            )}
        </>
    )
}
export default ManageOrder;