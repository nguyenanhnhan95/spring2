import { useParams } from 'react-router-dom';
import '../css/detail-product.css'
import '../css/home.css'
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { getImgProductsDB, getProductDB, getProductsAllDB, getProductsDB } from '../service/ProductService';
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import numeral from 'numeral';
import { getCartsByEmailUserDB, saveCartsDB, saveCartsProductDetailDB, updateCartsDB } from '../service/CardService';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getCart } from '../actions/cartActions';
function ProductDetail() {
  const pram = useParams();
  const [product, setProduct] = useState(null)
  const [imgProducts, setImgProducts] = useState([])
  const [imgProduct, setImgProduct] = useState("")
  const [products, setProducts] = useState([])
  const [numberProduct, setNumberProduct] = useState(1)
  const dispatch = useDispatch()
  const flagOfCart = useSelector(getCart)
  const headers = {
    'Authorization': `Bearer ${localStorage.getItem("token")}`,
  }


  useEffect(() => {
    getProduct()
    getImgProduct();
  }, [])

  const getProduct = () => {
    getProductDB(pram.id).then((data) => {
      getProductsAllDB(data.typeProduct.id).then((data) => {
        console.log(data.content);
        setProducts(data.content)

      })
      console.log(data);
      setProduct(data)
    })
      .catch(() => {
        alert("loi")
      })
  }
  const handleCart = (value,number) => {
    console.log(value)
    console.log(localStorage.getItem("id"))
    getCartsByEmailUserDB(localStorage.getItem("id")).then((data) => {
      console.log(data)
      let index;
      if (data.length === 0) {
        index = -1;
      } else {
        index = data.findIndex(p => p.product.id === value.id)
      }
      if (index >= 0) {
        if (number > value.qualityProduct) {
          return 0;
        } else {
          if(number==1){
            data[index].numberCart +=1;
          }else{
            data[index].numberCart = number;
          }
          
          console.log(data[index])
          updateCartsDB(data[index]).then(() => {
            console.log(data)
          })

        }

      } else {
        console.log("ccc")
        saveCartsProductDetailDB(value.id,number, headers).then(() => {

          console.log(data.length)

        })
      }
      setTimeout(() => {
        dispatch(addToCart({ flagCart: flagOfCart }))
      }, 100);

    })
  }
  const handleButtonCart = (number) => {

    console.log(number)
    if (0 < number && number <= product.qualityProduct) {
      setNumberProduct(number)
    }
  }


  const getImgProduct = () => {
    getImgProductsDB(pram.id).then((data) => {
      setImgProduct(data[0].imgProducts)
      console.log(data)
      setImgProducts(data)
    })
  }
  const changeImgProduct = (index) => {
    setImgProduct(imgProducts[index].imgProducts)

  }
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  if (product === null) {
    return null
  }
  return (
    <>
      <div className="detail__product_container">
        <div className="home__header">
          <div className="home__header--content">
            <div className="home__header--content--item"><i className="fa-solid fa-house" />
              Chi tiết sản phẩm <i class="fa-solid fa-angle-right"></i>
              {product.typeProduct.nameTypeProduct}<i class="fa-solid fa-angle-right"></i>{product.brandProduct}
            </div>
          </div>
        </div>
        <div className="detail__product_main">
          <div className="detail__product__left">
            <div className="detail__product__left-img-header">
              <img src={imgProduct} />
            </div>
            <div className="detail__product__left-img-footer">
              <ul className="detail__product__left-img-footer-list">
                {imgProducts && imgProducts.map((img, index) => (
                  <li key={index} onMouseOver={() => changeImgProduct(index)} className="detail__product__left-img-footer-item">
                    <img src={img.imgProducts} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="detail__product__right">
            <ul className="detail__product__right-list">
              <li className="detail__product__right-item detail__product__right-item-title">
                {product.nameProduct}
              </li>
              <li className="detail__product__right-item detail__product__right-item-review">
                <div className="detail__product__right-item-review-start">
                  <span>4.8</span> <i className="fa-solid fa-star fa-sm" style={{ color: '#fd0814' }} />
                  <i className="fa-solid fa-star fa-sm" style={{ color: '#fd0814' }} />
                  <i className="fa-solid fa-star fa-sm" style={{ color: '#fd0814' }} />
                  <i className="fa-solid fa-star fa-sm" style={{ color: '#fd0814' }} />
                  <i className="fa-solid fa-star fa-sm" style={{ color: '#fd0814' }} />
                </div>
                <div className="detail__product__right-item-review-number">
                  15 <span className>Đánh giá</span>
                </div>
                <div className="detail__product__right-item-sale-number">
                  15 <span>Đã Bán</span>
                </div>
              </li>
              <li className="detail__product__right-item detail__product__right-item-price">
                <span className="detail__product__right-item-past">{product.bonusSale !== 0 && (
                  <del>{numeral(product.priceProduct).format('00,0 đ')}VND</del>
                )}</span>
                <span className="detail__product__right-item-present">{numeral(product.priceProduct * (1 - product.bonusSale)).format('00,0 đ')}VND</span>
              </li>
              <li className="detail__product__right-item detail__product__right-item-content">
                <div className="detail__product__right-item-left">
                  Vận chuyển
                </div>
                <div className="detail__product__right-item-right">
                  <i className="fa-solid fa-truck-fast" /> Vận chuyển miễn phí
                </div>
              </li>
              <li className="detail__product__right-item detail__product__right-item-content">
                <div className="detail__product__right-item-left">
                  Đơn vị
                </div>
                <div className="detail__product__right-item-right">
                  Thùng
                </div>
              </li>
              <li className="detail__product__right-item detail__product__right-item-content">
                <div className="detail__product__right-item-left">
                  <i className="fa-solid fa-user-shield" /> T &amp; H đảm bảo
                </div>
                <div className="detail__product__right-item-right">
                  7 ngày trả hàng / hoàn tiền
                </div>
              </li>
              <li className="detail__product__right-item detail__product__right-item-content">
                <div className="detail__product__right-item-left number-detail__product__right-item">
                  Số lượng
                </div>
                <div className="detail__product__right-item-right detail__product__right-item-right-card">
                  {product.qualityProduct === 0 ? (
                    <span> Sản phẩm đã hết hàng </span>
                  ) : (
                    <>
                      <button type='button' className="button-number-item" onClick={()=>handleButtonCart(numberProduct-1)}>-</button>
                      <input type="number" readOnly placeholder={numberProduct} />
                      <button type='button' className="button-number-item" onClick={() => handleButtonCart(numberProduct + 1)}>+</button>
                      <span>{product.qualityProduct-numberProduct} Sản phẩm còn lại</span>
                    </>
                  )}

                </div>
              </li>
              {product.qualityProduct !== 0 ? (
                <li className="detail__product__right-item detail__product__right-item-content">
                  <button className="detail__product__right-item-cart-shopping" onClick={() => handleCart(product,numberProduct)}><i className="fa-solid fa-cart-shopping" />Thêm Vào Giỏ Hàng</button>
                  <button className="detail__product__right-item-pay">Mua Ngay</button>

                </li>
              ) : (
                null
              )}

            </ul>
          </div>
        </div>
        <div className="detail__product__detail">
          <div className="detail__product__header">
            <p>Chi tiết sản phẩm</p>
          </div>
          <div className="detail__product__detail--content detail__product__detail--list">
            <div className="detail__product__detail--item ">
              <div className="detail__product__detail--item-right ">
                Thương hiệu
              </div>
              <div className="detail__product__detail--item-left ">
                {product.brandProduct}
              </div>
            </div>
            <div className="detail__product__detail--item ">
              <div className="detail__product__detail--item-right ">
                Nơi sản xuất
              </div>
              <div className="detail__product__detail--item-left ">
                {product.manufactureProduct}
              </div>
            </div>
            <div className="detail__product__detail--item ">
              <div className="detail__product__detail--item-right ">
                Hạn sử dụng
              </div>
              <div className="detail__product__detail--item-left ">
                6 tháng
              </div>
            </div>
            <div className="detail__product__detail--item ">
              <div className="detail__product__detail--item-right ">
                Dung tích
              </div>
              <div className="detail__product__detail--item-left ">
                220 ml
              </div>
            </div>
            <div className="detail__product__detail--item ">
              <div className="detail__product__detail--item-right ">
                thành phần
              </div>
              <div className="detail__product__detail--item-left ">
                {product.ingredientProduct}
              </div>
            </div>
            <div className="detail__product__detail--item ">
              <div className="detail__product__detail--item-right ">
                Cách bảo quản
              </div>
              <div className="detail__product__detail--item-left ">
                {product.preservationProduct}
              </div>
            </div>
            <div className="detail__product__detail--item ">
              <div className="detail__product__detail--item-right ">
                Hướng dẫn sử dụng
              </div>
              <div className="detail__product__detail--item-left ">
                {product.instructionProduct}
              </div>
            </div>
            <div className="detail__product__detail--item ">
              <div className="detail__product__detail--item-right ">
                Miêu tả sản phẩm
              </div>
              <div className="detail__product__detail--item-left ">
                {product.detailProduct}
              </div>
            </div>
          </div>
        </div>
        <div className="detail__product__review">
          <div className="detail__product__review-header">

            <p>Sản phẩm cùng loại</p>
          </div>
          <div className="detail__product__review-content">
            <Carousel breakPoints={breakPoints} responsive={responsive}>
              {products && products.map((product) => (
                <div key={product.id} class="card-detail">
                  <img src={product.imgProduct} />
                  <h4>{product.brandProduct}</h4>
                  <div class="price-detail">
                    {product.bonusSale !== 0 && (
                      <del>{numeral(product.priceProduct).format('00,0 đ')}</del>
                    )}
                    <span>{numeral(product.priceProduct * (1 - product.bonusSale)).format('00,0 đ')}VND</span></div>

                  <button type='button' onClick={()=>handleCart(product,1)}>Thêm giỏ hàng</button>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProductDetail;