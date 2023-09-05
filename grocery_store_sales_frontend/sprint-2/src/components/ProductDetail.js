function ProductDetail({controlDetail}) {
    return (
        <>
            <div className="detail__product">
                <div className="detail__product-cover">
                    <div className="detail__product-box">
                        <div className="header__detail__product">
                            <h1>Thông Tin Sản Phẩm</h1>
                            <div className="close__detail__product-box"><i className="fa-solid fa-xmark fa-2xl" onClick={controlDetail}/></div>
                        </div>
                        <div className="content__detail__product">
                            <div className="detail__product__left">
                                <div className="detail__product__left-item">
                                    <img src="img.png" />
                                </div>
                            </div>
                            <div className="detail__product__right">
                                <div className="detail__product__right__content">
                                    <ul className="detail__product__right__list">
                                        <li className="detail__product__right__item"><h2>Bia Laure Bạc</h2><div className="name_detail_product-right" /></li>
                                        <li className="detail__product__right__item"><span className="name_detail_product-right"><del>152000 </del></span><span className="name_detail_product-left">1500000 VND</span></li>
                                        <li className="detail__product__right__item detail__product__description"><div className="name_detail_product-right">Mô tả sản phẩm</div><div className="name_detail_product-left">Chất lượng hảo hạng từ năm 1909
                                            Bia Larue lần đầu tiên được sản xuất vào năm 1909 bởi một nhà nấu bia người Pháp tên Victor Larue.</div></li>
                                        <li className="detail__product__right__item"><div className="name_detail_product-right">Nơi sản xuất</div><div className="name_detail_product-left" /></li>
                                        <li className="detail__product__right__item"><div className="name_detail_product-right">Hướng dẫn sử dụng</div><div className="name_detail_product-left" /></li>
                                        <li className="detail__product__right__item"><div className="name_detail_product-right">Vận chuyển</div><div className="name_detail_product-left" /></li>
                                        <li className="detail__product__right__item"><div className="name_detail_product-right">Đơn vị</div><div className="name_detail_product-left">Thùng</div></li>
                                        <li className="detail__product__right__item"><div className="name_detail_product-right">Số lượng
                                        </div><div className="name_detail_product-left number__detail__order">
                                                <button type="button">+</button><input placeholder={0} type="number" /><button type="button">-</button><span className="number__detail_product--other">500 sản phẩm có sẵn </span>
                                            </div></li>
                                    </ul>
                                    <div className="detail__product__button">
                                        <button className="detail__product__button-cart"><i className="fa-solid fa-cart-plus" />Thêm vào giỏ hàng</button>
                                        <button className="detail__product__button-pay">Mua Ngay</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductDetail;