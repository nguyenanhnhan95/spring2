function Home(){
    return (
        <>
        <div className="home">
        <div className="home__header">
          <div className="home__header--content">
            <div className="home__header--content--item"><i className="fa-solid fa-house" /><span>Trang Chủ</span></div>
          </div>
        </div>
        <div className="home__content">
          <div className="home-filter">
            <ul className="home-filter-list">
              <li className="home-filter-item"><span className="home-filter__label">Sắp xếp theo</span>
                <button className="home-filter-item-button" type="button">Phổ biến</button>
              </li>
              <li className="home-filter-item">
                <button className="home-filter-item-button" type="button">Mới nhất</button>
              </li>
              <li className="home-filter-item">
                <button className="home-filter-item-button" type="button">Bán chạy</button>
              </li>
              <li className="home-filter-item"><select className="home-filter-item-select">
                  <option>Gía</option>
                  <option>Gía: Thấp Đến Cao</option>
                  <option>Gía: Cao Đến Thấp</option>
                </select></li>
            </ul>
            <ul className="home-filter-list">
              <li className="home-filter-item">1/5</li>
              <li className="home-filter-item">
                <button className="home-filter-item-pagination" type="button"><i className="fa-solid fa-angle-left" />
                </button>
                <button style={{marginRight: '15px'}} className="home-filter-item-pagination" type="button"><i className="fa-solid fa-angle-right" /></button>
              </li>
            </ul>
          </div>
          <div className="home__content-product">
            <ul className="home__product-list">
              <li className="home__product-item">
                <div className="grip__colum-2">
                  <div className="card">
                    <img src="https://cdn.tgdd.vn/Products/Images/2282/79011/bhx/thung-24-lon-bia-larue-xanh-330ml-202307281707452455_300x300.jpg" alt="Denim Jeans" style={{width: '100%'}} />
                    <h1>Larue</h1>
                    <p className="price">$19.99</p>
                    <p>
                      <button type="button">Add to Cart</button>
                    </p>
                  </div>
                </div>
              </li>
              <li className="home__product-item">
                <div className="grip__colum-2">
                  <div className="card">
                    <img src="https://cdn.tgdd.vn/Products/Images/2282/79011/bhx/thung-24-lon-bia-larue-xanh-330ml-202307281707452455_300x300.jpg" alt="Denim Jeans" style={{width: '100%'}} />
                    <h1>Larue</h1>
                    <p className="price">$19.99</p>
                    <p>
                      <button type="button">Add to Cart</button>
                    </p>
                  </div>
                </div>
              </li>
              <li className="home__product-item">
                <div className="grip__colum-2">
                  <div className="card">
                    <img src="https://cdn.tgdd.vn/Products/Images/2282/79011/bhx/thung-24-lon-bia-larue-xanh-330ml-202307281707452455_300x300.jpg" alt="Denim Jeans" style={{width: '100%'}} />
                    <h1>Larue</h1>
                    <p className="price">$19.99</p>
                    <p>
                      <button type="button">Add to Cart</button>
                    </p>
                  </div>
                </div>
              </li>
              <li className="home__product-item">
                <div className="grip__colum-2">
                  <div className="card">
                    <img src="https://cdn.tgdd.vn/Products/Images/2282/79011/bhx/thung-24-lon-bia-larue-xanh-330ml-202307281707452455_300x300.jpg" alt="Denim Jeans" style={{width: '100%'}} />
                    <h1>Larue</h1>
                    <p className="price">$19.99</p>
                    <p>
                      <button type="button">Add to Cart</button>
                    </p>
                  </div>
                </div>
              </li>
              <li className="home__product-item">
                <div className="grip__colum-2">
                  <div className="card">
                    <img src="https://cdn.tgdd.vn/Products/Images/2282/79011/bhx/thung-24-lon-bia-larue-xanh-330ml-202307281707452455_300x300.jpg" alt="Denim Jeans" style={{width: '100%'}} />
                    <h1>Larue</h1>
                    <p className="price">$19.99</p>
                    <p>
                      <button type="button">Add to Cart</button>
                    </p>
                  </div>
                </div>
              </li>
              <li className="home__product-item">
                <div className="grip__colum-2">
                  <div className="card">
                    <img src="https://cdn.tgdd.vn/Products/Images/2282/79011/bhx/thung-24-lon-bia-larue-xanh-330ml-202307281707452455_300x300.jpg" alt="Denim Jeans" style={{width: '100%'}} />
                    <h1>Larue</h1>
                    <p className="price">$19.99</p>
                    <p>
                      <button type="button">Add to Cart</button>
                    </p>
                  </div>
                </div>
              </li>
              <li className="home__product-item">
                <div className="grip__colum-2">
                  <div className="card">
                    <img src="https://cdn.tgdd.vn/Products/Images/2282/79011/bhx/thung-24-lon-bia-larue-xanh-330ml-202307281707452455_300x300.jpg" alt="Denim Jeans" style={{width: '100%'}} />
                    <h1>Larue</h1>
                    <p className="price">$19.99</p>
                    <p>
                      <button type="button">Add to Cart</button>
                    </p>
                  </div>
                </div>
              </li>
              <li className="home__product-item">
                <div className="grip__colum-2">
                  <div className="card">
                    <img src="https://cdn.tgdd.vn/Products/Images/2282/79011/bhx/thung-24-lon-bia-larue-xanh-330ml-202307281707452455_300x300.jpg" alt="Denim Jeans" style={{width: '100%'}} />
                    <h1>Larue</h1>
                    <p className="price">$19.99</p>
                    <p>
                      <button type="button">Add to Cart</button>
                    </p>
                  </div>
                </div>
              </li>
              <li className="home__product-item">
                <div className="grip__colum-2">
                  <div className="card">
                    <img src="https://cdn.tgdd.vn/Products/Images/2282/79011/bhx/thung-24-lon-bia-larue-xanh-330ml-202307281707452455_300x300.jpg" alt="Denim Jeans" style={{width: '100%'}} />
                    <h1>Larue</h1>
                    <p className="price">$19.99</p>
                    <p>
                      <button type="button">Add to Cart</button>
                    </p>
                  </div>
                </div>
              </li>
              <li className="home__product-item">
                <div className="grip__colum-2">
                  <div className="card">
                    <img src="https://cdn.tgdd.vn/Products/Images/2282/79011/bhx/thung-24-lon-bia-larue-xanh-330ml-202307281707452455_300x300.jpg" alt="Denim Jeans" style={{width: '100%'}} />
                    <h1>Larue</h1>
                    <p className="price">$19.99</p>
                    <p>
                      <button type="button">Add to Cart</button>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="home-pagination">
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
          </div>
        </div>
      </div>
        </>
    )
}
export default Home;