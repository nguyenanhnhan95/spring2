import { useCallback, useContext, useEffect, useLayoutEffect, useState } from "react";
import ProductDetail from "./ProductDetail";
import '../css/home.css'
import '../css/detail-product.css'
import numeral from 'numeral';
import Swal from "sweetalert2";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { getProductDB, getProductsDB } from "../service/ProductService";
import { Await, Link, useNavigate, useSearchParams, useParams, useLocation } from "react-router-dom";
import { addToCart, getCart } from "../actions/cartActions";
import { getCartsByEmailUserDB, getCartsByIdProduct, saveCartsDB, updateCartsDB } from "../service/CardService";
import { getSearch, getSearchStatus, searchListProduct } from "../actions/searchAction";
import 'react-toastify/dist/ReactToastify.css';
import { paidOrderDB } from "../service/PaymentService";
import { ToastContainer, toast } from "react-toastify";


function Home() {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState()
  const [page, setPage] = useState(0)
  const [loopCount, setLoopCount] = useState(0)
  const navigate = useNavigate();
  const { searchParam } = useParams();
  const [search, setSearch] = useState("")
  const location = useLocation();
  const [priceOrder, setPriceOrder] = useState("")
  const dispatch = useDispatch();
  const flagOfCart = useSelector(getCart)
  const dataSearch = useSelector(getSearch)
  const [sort, setSort] = useState(0)

  if (isNaN(loopCount)) {
    setLoopCount(1)
  }

  const flagSearch = useSelector(getSearchStatus)
  const headers = {
    'Authorization': `Bearer ${localStorage.getItem("token")}`,
  }

  useEffect(() => {

    getProduct()
  }, [flagSearch, sort])
  useEffect(() => {
    document.title = "Trang chủ"
  }, [])
  const getProduct = () => {
    getProductsDB(dataSearch[0], dataSearch[1], dataSearch[2], dataSearch[3], dataSearch[4]).then((data) => {
      console.log(data.content);
      console.log(search);
      let numberPage = Math.ceil(data.totalElements / 10);
      console.log(numberPage)
      setLoopCount(numberPage)
      setProducts(data.content)
    })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: 'Yêu cầu nhập dữ liệu!',
          showConfirmButton: false,
          timer: 1500
        })
      })
  }

  console.log(dataSearch)
  const transferPage = (value) => {
    if (value >= 0 && value < loopCount) {
      dataSearch[0] = value

      dispatch(searchListProduct({ search: dataSearch, flagSearch: flagSearch }));
    }
  };
  const handleSetSort = (event) => {
    setSort(event.target.value)
    console.log(event.target.value * 1)
    console.log(dataSearch)
    const valueOne = dataSearch;
    valueOne[0] = 0;
    valueOne[4] = event.target.value * 1
    console.log(valueOne)
  }
  const onAddToCart = (value) => {
    if (localStorage.getItem("nameUser") == null) {
      Swal.fire({
        icon: "warning",
        timer: 1500,
        title: "Bạn cần đăng nhập .",
        showCancelButton: true,
        confirmButtonText: "Có",
        cancelButtonText: "Không",
      }).then((res) => {
        if (res.isConfirmed) {
          navigate("/login")
        } else if (res.dismiss == Swal.DismissReason.cancel) { }
      })
    } else {
      let statusAdd;
      console.log(localStorage.getItem("id"))
      getCartsByEmailUserDB(localStorage.getItem("id")).then((data) => {
        console.log(data)
        let index;
        getProductDB(value.id).then((product) => {
          if (data.length === 0) {
            index = -1;
          } else {
            index = data.findIndex(p => p.product.id === product.id)
          }
          if (index >= 0) {
            if (data[index].numberCart === value.qualityProduct) {
              toast.error('Bạn đặt vượt số lượng hiện có !', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            } else {
              data[index].numberCart += 1;
              console.log(data[index])
              updateCartsDB(data[index]).then(() => {
                toast.success(' Bạn đã thêm vào giỏ hàng ' + value.brandProduct + '!', {
                  position: "top-right",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              }).catch(()=>{
                toast.error('Hệ thống bị vui lòng đặt lại !', {
                  position: "top-right",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
              });
              })
              statusAdd = 1;
            }

          } else {
            console.log("ccc")
            saveCartsDB(product.id, headers).then(() => {

              toast.success(' Bạn đã thêm vào giỏ hàng ' + value.brandProduct + '!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });

            }).catch(()=>{
              toast.error('Hệ thống bị vui lòng đặt lại !', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            })
            statusAdd = 0;
          }
         
          setTimeout(() => {
            dispatch(addToCart({ flagCart: flagOfCart }))
          }, 200);

        })

      })
    }
  }

  const handleSearchTypeProduct = (value) => {
    const valueOne = dataSearch;
    valueOne[0] = 0;
    valueOne[4] = 0;
    valueOne[3] = value * 1
    setSort(0)
    dispatch(searchListProduct({ search: valueOne, flagSearch: flagSearch }))
  }
  const isWithinThirtyDays = (date) => {
    const dateObject = new Date(date);
    const currentDate = new Date();
    const differenceInTime = currentDate.getTime() - dateObject.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays < 30;
  };
  return (
    <>
      <div className="home">
        <div className="home__header">
          <div className="home__header--content">
            <Link style={{ "textDecoration": "none" }} to={"/"} onClick={() => dispatch(searchListProduct({
              search: [0, 0, "", 0, 0],
              flagSearch: flagSearch
            }))}><div className="home__header--content--item"><i className="fa-solid fa-house" /><span>Trang Chủ</span></div></Link>
          </div>
        </div>
        <div className="home__content">
          <div className="home-filter">
            <ul className="home-filter-list">
              <li className="home-filter-item"><span className="home-filter__label">Sắp xếp theo</span>
                <button className="home-filter-item-button" type="button" onClick={() => handleSearchTypeProduct(1)}>Phổ biến</button>
              </li>
              <li className="home-filter-item">
                <button className="home-filter-item-button" onClick={() => handleSearchTypeProduct(2)} type="button">Mới nhất</button>
              </li>
              <li className="home-filter-item">
                <button className="home-filter-item-button" onClick={() => handleSearchTypeProduct(3)} type="button">Bán chạy</button>
              </li>
              <li className="home-filter-item"><select value={sort} onChange={handleSetSort} className="home-filter-item-select">
                <option value={0 * 1}>Giá</option>
                <option value={2 * 1}>Gía: Thấp Đến Cao</option>
                <option value={1 * 1}>Gía: Cao Đến Thấp</option>
              </select></li>
            </ul>
            <ul className="home-filter-list">
              <li className="home-filter-item">{dataSearch[0] + 1}/{loopCount}</li>
              <li className="home-filter-item">
                <button className="home-filter-item-pagination" onClick={() => transferPage(dataSearch[0] - 1)}
                  disabled={dataSearch[0] === 0} type="button"><i className="fa-solid fa-angle-left" />
                </button>
                <button style={{ marginRight: '15px' }} className="home-filter-item-pagination"
                  onClick={() => transferPage(dataSearch[0] + 1)}
                  disabled={dataSearch[0] === loopCount - 1} type="button"><i className="fa-solid fa-angle-right" /></button>
              </li>
            </ul>
          </div>
          <div className="home__content-product">
            <ul className="home__product-list">
              {products && products.map((product) => (
                <li className="home__product-item" key={product.id}>
                  <div className="grip__colum-2">
                    <div className="card" >
                      <Link to={`/productDetail/${product.id}`} style={{ textDecoration: 'none' }}>
                        <img src={product.imgProduct} alt="Denim Jeans" style={{ width: '100%' }} />
                        <h3>{product.brandProduct}</h3>
                        <p className="price">

                          {product.bonusSale !== 0 && (
                            <del>{product.priceProduct * (1 - product.bonusSale)}VNĐ</del>
                          )}

                          <span className="price-no-bonus">{numeral(product.priceProduct).format('00,0 đ')}VNĐ</span></p>
                      </Link>
                      <div className="card__review_customer">
                        <div className="card__review_customer-item">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                        <div className="card__review_customer-item">Đã bán {product.totalSold}</div>
                      </div>
                      {isWithinThirtyDays(product.releaseDate) && (
                        <img className="cart__img-new-prouct" src="img/new_product_two.png" />
                      )}
                      {product.qualityProduct === 0 && (
                        <div className="cart__img-product-sold-out-item">

                          <Link to={`/productDetail/${product.id}`} style={{ textDecoration: 'none' }}><img className="cart__img-product-sold-out" src="img/sold-out.png" /></Link>
                        </div>
                      )}
                      {localStorage.getItem("nameRole") === "ROLE_ADMIN" ? (
                        <p>
                          <button type="button"  >Thêm giỏ hàng</button>
                        </p>
                      ) : (
                        <p>
                          <button type="button" onClick={() => onAddToCart(product)} >Thêm giỏ hàng</button>
                        </p>
                      )}

                      {product.bonusSale !== 0 && (
                        <div className="card__sale-off">
                          <div className="card__sale-off-percent">{product.bonusSale * 100}%</div>
                          <div className="card__sale-off-discount">GIẢM</div>
                        </div>
                      )}

                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="home-pagination">
            <ul className="home-pagination-list">
              <li className="home-pagination-item">
                <button className="home-pagination-item-first" type="button"><i className="fa-solid fa-angle-left" />
                </button>
              </li>
              <li className="home-pagination-item">
                <button type="button">1</button>
              </li>
              <li className="home-pagination-item">
                <button type="button">2</button>
              </li>
              <li className="home-pagination-item">
                <button type="button">3</button>
              </li>
              <li className="home-pagination-item">
                <button className="home-pagination-item-last" type="button"><i className="fa-solid fa-angle-right" />
                </button>
              </li>
            </ul>
          </div> */}
          <div className="home-pagination">
            <ul className="home-pagination-list">
              <li className="home-pagination-item">
                <button style={{ borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px', minWidth: '100px' }}>Trang {dataSearch[0]+1}/{loopCount }</button>
              </li>
              {dataSearch[0] !== 0 && (
                <>
                  <li className="home-pagination-item ">
                    <button
                      type="button"
                      onClick={() => transferPage(0)}

                      className={dataSearch[0] <= 10 ? 'active' : ''}
                    >
                      <i class="fa-solid fa-angles-left"></i>
                    </button>
                  </li>

                  <li className="home-pagination-item">
                    <button
                      type="button"
                      onClick={() => transferPage(dataSearch[0] - 1)}
                      disabled={dataSearch[0] === 0}
                    >
                      <i class="fa-solid fa-angle-left"></i>
                    </button>
                  </li>
                </>
              )}
              {Array.from({ length: loopCount }, (_, index) => {
                if (
                  (index >= dataSearch[0] - 2 && index <= dataSearch[0] + 2) ||
                  (index === 10 && loopCount > 10) ||
                  (index === 20 && loopCount > 20) ||
                  (index === 30 && loopCount > 30) ||
                  (dataSearch[0] === 25 && index === 10)
                ) {
                  return (
                    <li className="home-pagination-item" key={index}>
                      <button
                        type="button"
                        onClick={() => transferPage(index)}
                        className={dataSearch[0] === index ? 'active' : ''} style={dataSearch[0] === index ? { background: 'rgb(122, 88, 3)' } : {}}
                      >
                        {index+1}
                      </button>
                    </li>
                  );
                }
                return null;
              })}
              <li className="home-pagination-item">
                <button
                  type="button"
                  onClick={() => transferPage(dataSearch[0] + 1)}
                  disabled={dataSearch[0] === loopCount - 1}
                >
                  <i class="fa-solid fa-angle-left fa-rotate-180"></i>
                </button>
              </li>
              <li className="home-pagination-item">
                <button
                  type="button"
                  onClick={() => transferPage(loopCount - 1)}
                  style={{ borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }}
                  className={dataSearch[0] === loopCount - 1 ? 'active' : ''}
                >
                  <i class="fa-solid fa-angles-left fa-rotate-180"></i>
                </button>
              </li>
            </ul>
          </div>
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
    </>
  )
}
export default Home;