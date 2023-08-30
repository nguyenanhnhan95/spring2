function Footer() {
    return (
        <>
            <div className="footer">
                <div className="header__footer">
                    <ul className="header__footer--list">
                        <li className="header__footer--item"><img src="img/footerone.png" height={64} width={64} /><span>Hoàn trả không gặp rắc rối</span>
                        </li>
                        <li className="header__footer--item"><img src="img/footertwo.png" height={64} width={64} /><span>Giao dịch an toàn</span></li>
                        <li className="header__footer--item"><img src="img/foottertow.png" height={64} width={64} /><span>Vận chuyển cực kì nhanh</span>
                        </li>
                        <li className="header__footer--item"><img src="img/footerfour.png" height={64} width={64} /><span>Đảm bảo chất lượng</span></li>
                    </ul>
                </div>
                <div className="grid__footer--content">
                    <div className="section__footer">
                        <div className="section__footer--content">
                            <h2>Liên Hệ</h2>
                            <ul className="section__footer--list">
                                <li className="section__footer--item"><i className="fa-solid fa-map-location-dot" /><span>Hòa Tiến-Hòa Vang-TP Đà Nẵng</span></li>
                                <li className="section__footer--item"><i className="fa-regular fa-envelope" /><span>nguyenanhnhan@gmail.com</span></li>
                                <li className="section__footer--item"><i className="fa-solid fa-phone" /><span>0393554072</span></li>
                            </ul>
                        </div>
                        <div className="section__footer--content">
                            <h2>Thông Tin</h2>
                            <ul className="section__footer--list">
                                <li className="section__footer--item"><i className="fa-solid fa-arrow-right" /><span>Chính Sách</span></li>
                                <li className="section__footer--item"><i className="fa-solid fa-arrow-right" /><span>Chính Sách Đổi Trả</span></li>
                                <li className="section__footer--item"><i className="fa-solid fa-arrow-right" /><span>Chính Sách Đặt Hàng</span></li>
                                <li className="section__footer--item"><i className="fa-solid fa-arrow-right" /><span>Chính Sách Bảo Mật</span></li>
                            </ul>
                        </div>
                        <div className="section__footer--content">
                            <h2>Hàng Hóa</h2>
                            <ul className="section__footer--list">
                                <li className="section__footer--item"><i className="fa-solid fa-arrow-right" /><span>Bia Và Nước</span></li>
                                <li className="section__footer--item"><i className="fa-solid fa-arrow-right" /><span>Snack và Bánh Kẹo</span></li>
                                <li className="section__footer--item"><i className="fa-solid fa-arrow-right" /><span>Hóa Mỹ Phẩm</span></li>
                                <li className="section__footer--item"><i className="fa-solid fa-arrow-right" /><span>Gạo Và Thực Phẩm Khô</span></li>
                                <li className="section__footer--item"><i className="fa-solid fa-arrow-right" /><span>Thực Phẩm Dinh Dưỡng</span></li>
                            </ul>
                        </div>
                        <div className="section__footer--content">
                            <h2>Hồ Sơ</h2>
                            <ul className="section__footer--list">
                                <li className="section__footer--item"><i className="fa-solid fa-house" /><span>Trang Chủ</span></li>
                                <li className="section__footer--item"><i className="fa-solid fa-bag-shopping fa-lg" /><span>Giỏ Hàng</span></li>
                                <li className="section__footer--item"><i className="fa-solid fa-right-to-bracket" /><span>Đăng Nhập</span></li>
                                <li className="section__footer--item"><i className="fa-solid fa-arrow-right" /><span>Tạo Tài Khoản</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="header__footer--bottom">
                        <div className="header__footer--bottom--item">Địa chỉ: Hòa Tiến - Hòa Vang - TP Đà Nẵng, Việt Nam. Tổng đài hỗ trợ: 0393554072 - Email: nguyenanhnhan@gmail.com</div>
                        <div className="header__footer--bottom--item">© 2015 - Bản quyền thuộc về Công ty TNHH T &amp; N</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;