import { useMemo } from "react";
import "../css/detail-order.css"
import numeral from 'numeral';
function DetailOrder(props) {
    const [user, orderUser, order, setControlDetail] = props.props;;
    const accumulatePoint = useMemo(() => {
        let result = 0;
        if (orderUser.length !== 0) {
            result = orderUser.reduce((accumulator, card) => {
                return accumulator + (card.priceProduct * (1 - card.bonusSale) * card.numberDetail);
            }, 0);
        }
        return result - order.totalPrice;
    }, [orderUser])
    return (
        <div className="detail__order-customer-container">
            <div className="detail__order-customer-ground">
                <div className="detail__order-customer-content">
                    <div className="detail__order-customer-content-header">
                        <i className="fa-solid fa-xmark fa-2xl cancel-information-order" onClick={() => setControlDetail(false)} />
                        <h1>Thông Tin Đơn Hàng</h1>
                    </div>
                    <div className="detail__order-customer-content-information-customer">
                        <div className="detail__order-customer-content-information-right ">
                            <label>Tên khách hàng</label>
                            <span>{user.nameUser}</span>
                        </div>
                        <div className="detail__order-customer-content-information-left ">
                            <label>Số điện thoại</label>
                            <span>{user.phoneUser}</span>
                        </div>
                    </div>
                    <div className="detail__order-customer-content-information-customer">
                        <div className="detail__order-customer-content-information-right ">
                            <label>Địa chỉ</label>
                            <span>{user.addressUser}</span>
                        </div>
                        <div className="detail__order-customer-content-information-left ">
                            <label>Ngày đặt hàng</label>
                            <span>{order.dateOrder}</span>
                        </div>
                    </div>
                    <table className="detail__order-table-information-order-customer">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên Sản Phẩm</th>
                                <th>Số Lượng</th>
                                <th>Gía Tiền</th>
                                <th>Tổng Tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderUser && orderUser.map((orderDetail, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{orderDetail.nameProduct}</td>
                                    <td>{orderDetail.numberDetail}</td>
                                    <td>{orderDetail.priceProduct}</td>
                                    <td>{numeral(orderDetail.priceProduct * orderDetail.numberDetail * (1 - orderDetail.bonusSale)).format('00,0 đ')}VNĐ
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {accumulatePoint !== 0 && (
                        <>
                            <div className="detail__order-customer-content-accumulate-customer">
                                <div className="detail__order-customer-content-accumulate-right ">
                                    Sử dụng điểm tích lũy
                                </div>
                                <div className="detail__order-customer-content-accumulate-left ">
                                    -{numeral(accumulatePoint).format('00,0 đ')}VNĐ
                                </div>
                            </div>
                            <div className="detail__order-customer-content-accumulate-customer">
                                <div className="detail__order-customer-content-accumulate-right ">
                                </div>
                                <div className="detail__order-customer-content-accumulate-left ">
                                    {numeral(order.totalPrice - accumulatePoint).format('00,0 đ')}VNĐ
                                </div>
                            </div>
                        </>
                    )}


                </div>
            </div>
        </div>
    )
}
export default DetailOrder;