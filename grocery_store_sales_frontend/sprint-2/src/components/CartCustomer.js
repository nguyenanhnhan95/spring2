import { useEffect, useMemo, useReducer, useState } from 'react';
import '../css/cart-customer.css'
import '../css/home.css'
import { deleteCardByIdDB, getCartsByEmailUserDB, updateCartsDB } from '../service/CardService';
import { useNavigate, useParams } from 'react-router-dom';
import numeral from 'numeral';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getCart } from '../actions/cartActions';
import { paymentOrderDB } from '../service/PaymentService';
import { ToastContainer, toast } from 'react-toastify';
function CartCustomer() {
  const [cards, setCards] = useState([])

  const [allProduct, setAllProduct] = useState(false)
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const flagOfCart = useSelector(getCart)
  const [accumulate, setAccumulate] = useState(false)

  const headers = {
    'Authorization': `Bearer ${localStorage.getItem("token")}`,
  }

  useEffect(() => {
    getCarts()
  }, [])
  const getCarts = () => {
    console.log(params.id)
    getCartsByEmailUserDB(params.id).then((data) => {
      console.log(data);
      setCards(data)
      setAllProduct(true)
    }).catch(() => {
      navigate("/")
    })
  }
  console.log(accumulate)
  const controlNumberDetail = (data, number) => {

    if (number < 1) {
      data.numberCart = 1;
    }
    else {
      if (number > data.product.qualityProduct) {
        data.numberCart = data.product.qualityProduct;

        console.log(data)
      } else {
        data.numberCart = number;
        console.log(data)
      }
    }
    console.log(data)
    updateCartsDB(data).then(() => {
      getCarts()

    }).catch(() => {
      navigate("/")
    })
    dispatch(addToCart({ flagCart: flagOfCart }))
  }
  console.log(accumulate);
  const deleteProductInCart = (value) => {
    deleteCardByIdDB(value, headers).then(() => {
      getCarts()
      setTimeout(() => {
        dispatch(addToCart({ flagCart: flagOfCart }))
      }, 100);
    }).catch(() => {
      alert("loi")
    })
  }


  const total = useMemo(() => {
    let result = 0;
    if (cards.length !== 0) {
      result = cards.reduce((accumulator, card) => {
        return accumulator + (card.product.priceProduct * (1 - card.product.bonusSale) * card.numberCart);
      }, 0);
    }
    return result;
  }, [cards]);


  const handlePayMent = (total, point) => {
    const size = cards.length;
    let flagCheckPayment = true;
    console.log(cards[0].product.qualityProduct)
    for (let i=0; i < size; i++) {
      if (cards[i].numberCart > cards[i].product.qualityProduct) {
        toast.error(`Sản phẩm ${cards[i].product.brandProduct} không đủ !`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        flagCheckPayment = false;
        console.log(cards[i].product.brandProduct)
      }
      
    }
    if (flagCheckPayment) {
      paymentOrderDB(total).then((data) => {
        localStorage.setItem("point", point)
        localStorage.setItem("typePayment", "0")
        window.location.href = data;
      }).catch(() => {
        alert("loi")
      })
    }
  }


  return (
    <div className="card_customer">
      <div className="home__header">
        <div className="home__header--content">
          <div className="home__header--content--item"><i className="fa-solid fa-house" /><span>Giỏ hàng</span></div>
        </div>
      </div>
      <div className="card_customer-content">
        <div className="card_customer-right">
          <div className="card_customer-right-header">
            <div className="card_customer-right-header-product">
              <div className="card_customer-right-header-product-item">
                {/* <input type="checkbox" value={!allProduct} checked={allProduct ? true : false} onChange={() => dispatchPayment({type:ADD_ALL_PAYMENT,data:cards})} /> */}
                Sản phẩm
              </div>
            </div>
            <div className="card_customer-right-header-product">
              <ul className="card_customer-right-header-product-list">
                <li className="card_customer-right-header-product-list-item">Đơn giá</li>
                <li className="card_customer-right-header-product-list-item">Số lượng</li>
                <li className="card_customer-right-header-product-list-item">Số tiền</li>
                <li className="card_customer-right-header-product-list-item">thao tác</li>
              </ul>
            </div>
          </div>
          <div className="card_customer-right-content">

            {cards && cards.map((card) => (
              <div key={card.id} className="card_customer-right-content-item">
                <div className="card_customer-right-content-product">
                  <ul className="card_customer-right-content-input-list">
                    {/* <li className="card_customer-right-content-input-item"><input type="checkbox" onChange={() => handleChoiceProduct(card)} /></li> */}
                    <li className="card_customer-right-content-input-item"><img src={card.product.imgProduct} /></li>
                    <li className="card_customer-right-content-input-item"><p>{card.product.brandProduct}</p></li>
                  </ul>
                </div>
                <div className="card_customer-right-content-product-left">
                  <ul className="card_customer-right-content-product-list">
                    <li className="card_customer-right-content-product-list-item">
                      {numeral(card.product.priceProduct).format('00,0 đ')}VND
                    </li>
                    <li className="card_customer-right-content-product-list-item quality__card_customer">
                      <button type="button" onClick={() => controlNumberDetail(card, card.numberCart - 1)}>-</button>
                      <input type="number" placeholder={card.numberCart} readOnly />
                      <button type="button" onClick={() => controlNumberDetail(card, card.numberCart + 1)} >+</button>

                    </li>
                    <li className="card_customer-right-content-product-list-item price_card_customer">{numeral(card.product.priceProduct * (1 - card.product.bonusSale) * card.numberCart).format('00,0 đ')}VND</li>
                    <li className="card_customer-right-content-product-list-item delete_card_customer"><i className="fa-solid fa-xmark fa-2xl" onClick={() => { deleteProductInCart(card.id) }} /></li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card_customer-left">
          <div className="card_customer-left-header">
            <h3>Tổng tiền thanh toán</h3>
          </div>
          {cards.length != 0 ? (

            <div className="card_customer-left-content">
              <div className="card_customer-left-payment">
                <ul className="card_customer-left-payment-list">
                  {cards && cards.map((cardPayment) => (
                    <li className="card_customer-left-payment-item" key={cardPayment.id}>
                      <div className="card_customer-left-payment-product">{cardPayment.product.brandProduct}</div>
                      <div className="card_customer-left-payment-price">
                        {numeral(cardPayment.product.priceProduct * (1 - cardPayment.product.bonusSale) * cardPayment.numberCart).format('00,0 đ')}VND
                      </div>
                    </li>
                  ))}

                </ul>
                {cards[0].users.accumulatedPoints !== 0 ? (
                  <>
                    <div className="card_customer-left-payment-use-point">
                      <div className="card_customer-left-payment-use">Sử dụng điểm tích lũy</div>
                      <div className="card_customer-left-payment-point"><input type="checkbox" checked={accumulate ? true : false} onChange={() => setAccumulate(!accumulate)} /></div>
                    </div>

                  </>
                ) : (
                  <></>
                )}
                <hr />

                {accumulate ? (
                  <>
                    <div className="card_customer-left-payment-total">
                      <div className="card_customer-left-payment-name">Điểm tích lũy</div>

                      <div className="card_customer-left-payment-total-price">-  {numeral(cards[0].users.accumulatedPoints * 10000).format('00,0 đ')}VND</div>
                    </div>
                    <div className="card_customer-left-payment-total">

                      <div className="card_customer-left-payment-name">Tổng tiền</div>

                      <div className="card_customer-left-payment-total-price">{numeral(total - cards[0].users.accumulatedPoints * 10000).format('00,0 đ')}VND</div>

                    </div>
                    <div className="card_customer-left-payment-total button_payment_total">

                      <button type='button' onClick={() => handlePayMent(total - cards[0].users.accumulatedPoints * 10000, cards[0].users.accumulatedPoints)}>Mua hàng</button>
                    </div>
                  </>
                ) :
                  (
                    <>
                      <div className="card_customer-left-payment-total">

                        <div className="card_customer-left-payment-name">Tổng tiền</div>

                        <div className="card_customer-left-payment-total-price">{numeral(total).format('00,0 đ')}VND</div>

                      </div>
                      <div className="card_customer-left-payment-total button_payment_total">

                        <button type='button' onClick={() => handlePayMent(total, 0)}>Mua hàng</button>
                      </div>
                    </>
                  )
                }
              </div>

            </div>

          ) : (null)}

        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}
export default CartCustomer;