function Home(){
  return(
    <>
    <div>
        {/* header */}
        <div className="agileits_header">
          <div className="container">
            <div className="w3l_offers">
         <a href="products.html">SHOP NOW</a>
            </div>
            <div className="agile-login">
              <ul>
                <li><a href="login.html">Login</a></li>
                <li><a href="contact.html">Help</a></li>
              </ul>
            </div>
            <div className="product_list_header">  
              <form action="#" method="post" className="last"> 
                <input type="hidden" name="cmd" defaultValue="_cart" />
                <input type="hidden" name="display" defaultValue={1} />
                <button className="w3view-cart" type="submit" name="submit" value><i className="fa fa-cart-arrow-down" aria-hidden="true" /></button>
              </form>  
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        <div className="logo_products">
          <div className="container">
            <div className="w3ls_logo_products_left1">
              <ul className="phone_email">
                <li><i className="fa fa-phone" aria-hidden="true" />Order online or call us : (+0123) 234 567</li>
              </ul>
            </div>
            <div className="w3ls_logo_products_left">
              <h1><a href="index.html">super Market</a></h1>
            </div>
            <div className="w3l_search">
              <form action="#" method="post">
                <input type="search" name="Search" placeholder="Search for a Product..." required />
                <button type="submit" className="btn btn-default search" aria-label="Left Align">
                  <i className="fa fa-search" aria-hidden="true"> </i>
                </button>
                <div className="clearfix" />
              </form>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        {/* //header */}
        {/* navigation */}
        <div className="navigation-agileits">
          <div className="container">
            <nav className="navbar navbar-default">
              {/* Brand and toggle get grouped for better mobile display */}
              <div className="navbar-header nav_2">
                <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div> 
              <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="index.html" className="act">Home</a></li>	
                  {/* Mega Menu */}
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Groceries<b className="caret" /></a>
                    <ul className="dropdown-menu multi-column columns-3">
                      <div className="row">
                        <div className="multi-gd-img">
                          <ul className="multi-column-dropdown">
                            <h6>All Groceries</h6>
                            <li><a href="groceries.html">Dals &amp; Pulses</a></li>
                            <li><a href="groceries.html">Almonds</a></li>
                            <li><a href="groceries.html">Cashews</a></li>
                            <li><a href="groceries.html">Dry Fruit</a></li>
                            <li><a href="groceries.html"> Mukhwas </a></li>
                            <li><a href="groceries.html">Rice &amp; Rice Products</a></li>
                          </ul>
                        </div>	
                      </div>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Household<b className="caret" /></a>
                    <ul className="dropdown-menu multi-column columns-3">
                      <div className="row">
                        <div className="multi-gd-img">
                          <ul className="multi-column-dropdown">
                            <h6>All Household</h6>
                            <li><a href="household.html">Cookware</a></li>
                            <li><a href="household.html">Dust Pans</a></li>
                            <li><a href="household.html">Scrubbers</a></li>
                            <li><a href="household.html">Dust Cloth</a></li>
                            <li><a href="household.html"> Mops </a></li>
                            <li><a href="household.html">Kitchenware</a></li>
                          </ul>
                        </div>
                      </div>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Personal Care<b className="caret" /></a>
                    <ul className="dropdown-menu multi-column columns-3">
                      <div className="row">
                        <div className="multi-gd-img">
                          <ul className="multi-column-dropdown">
                            <h6>Baby Care</h6>
                            <li><a href="personalcare.html">Baby Soap</a></li>
                            <li><a href="personalcare.html">Baby Care Accessories</a></li>
                            <li><a href="personalcare.html">Baby Oil &amp; Shampoos</a></li>
                            <li><a href="personalcare.html">Baby Creams &amp; Lotion</a></li>
                            <li><a href="personalcare.html"> Baby Powder</a></li>
                            <li><a href="personalcare.html">Diapers &amp; Wipes</a></li>
                          </ul>
                        </div>
                      </div>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Packaged Foods<b className="caret" /></a>
                    <ul className="dropdown-menu multi-column columns-3">
                      <div className="row">
                        <div className="multi-gd-img">
                          <ul className="multi-column-dropdown">
                            <h6>All Accessories</h6>
                            <li><a href="packagedfoods.html">Baby Food</a></li>
                            <li><a href="packagedfoods.html">Dessert Items</a></li>
                            <li><a href="packagedfoods.html">Biscuits</a></li>
                            <li><a href="packagedfoods.html">Breakfast Cereals</a></li>
                            <li><a href="packagedfoods.html"> Canned Food </a></li>
                            <li><a href="packagedfoods.html">Chocolates &amp; Sweets</a></li>
                          </ul>
                        </div>
                      </div>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Beverages<b className="caret" /></a>
                    <ul className="dropdown-menu multi-column columns-3">
                      <div className="row">
                        <div className="multi-gd-img">
                          <ul className="multi-column-dropdown">
                            <h6>Tea &amp; Coeffe</h6>
                            <li><a href="beverages.html">Green Tea</a></li>
                            <li><a href="beverages.html">Ground Coffee</a></li>
                            <li><a href="beverages.html">Herbal Tea</a></li>
                            <li><a href="beverages.html">Instant Coffee</a></li>
                            <li><a href="beverages.html"> Tea </a></li>
                            <li><a href="beverages.html">Tea Bags</a></li>
                          </ul>
                        </div>
                      </div>
                    </ul>
                  </li>
                  <li><a href="gourmet.html">Gourmet</a></li>
                  <li><a href="offers.html">Offers</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        {/* //navigation */}
        {/* breadcrumbs */}
        <div className="breadcrumbs">
          <div className="container">
            <ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
              <li><a href="index.html"><span className="glyphicon glyphicon-home" aria-hidden="true" />Home</a></li>
              <li className="active">Groceries</li>
            </ol>
          </div>
        </div>
        {/* //breadcrumbs */}
        {/*- groceries -*/}
        <div className="products">
          <div className="container">
            <div className="col-md-4 products-left">
              <div className="categories">
                <h2>Categories</h2>
                <ul className="cate">
                  <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Fruits And Vegetables</a></li>
                  <ul>
                    <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Cuts &amp; Sprouts</a></li>
                    <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Flowers</a></li>
                    <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Fresh Herbs &amp; Seasonings</a></li>
                    <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Fresh Vegetables</a> </li>
                    <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />International Vegetables</a> </li>
                    <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Organic Fruits &amp; Vegetables</a></li>
                  </ul>
                  <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Grocery &amp; Staples</a></li>
                  <ul>
                    <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Dals &amp; Pulses</a> </li>
                    <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Dry Fruits</a> </li>
                    <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Edible Oils &amp; Ghee</a> </li>
                    <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Flours &amp; Sooji</a> </li>
                    <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Masalas &amp; Spices</a> </li>
                    <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Organic Staples</a> </li>
                    <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Rice &amp; Rice Products</a> </li>
                    <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Salt, Sugar &amp; Jaggery</a></li>
                  </ul>
                  <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />PersonalCare</a></li>
                  <ul>
                    <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Baby Care</a> </li>
                    <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Cosmetics</a> </li>
                    <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Deos &amp; Perfumes</a> </li>
                    <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Skin Care</a> </li>
                    <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Sanitary Needs</a> </li>
                    <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Oral Care</a> </li>
                    <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Personal Hygiene</a> </li>
                    <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Shaving Needs</a></li>
                  </ul>
                </ul>
              </div>																																												
            </div>
            <div className="col-md-8 products-right">
              <div className="products-right-grid">
                <div className="products-right-grids">
                  <div className="sorting">
                    <select id="country" onchange="change_country(this.value)" className="frm-field required sect">
                      <option value="null">Default sorting</option>
                      <option value="null">Sort by popularity</option> 
                      <option value="null">Sort by average rating</option>					
                      <option value="null">Sort by price</option>								
                    </select>
                  </div>
                  <div className="sorting-left">
                    <select id="country1" onchange="change_country(this.value)" className="frm-field required sect">
                      <option value="null">Item on page 9</option>
                      <option value="null">Item on page 18</option> 
                      <option value="null">Item on page 32</option>					
                      <option value="null">All</option>								
                    </select>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
              <div className="agile_top_brands_grids">
                <div className="col-md-4 top_brand_left">
                  <div className="hover14 column">
                    <div className="agile_top_brand_left_grid">
                      <div className="agile_top_brand_left_grid_pos">
                        <img src="images/offer.png" alt=" " className="img-responsive" />
                      </div>
                      <div className="agile_top_brand_left_grid1">
                        <figure>
                          <div className="snipcart-item block">
                            <div className="snipcart-thumb">
                              <a href="single.html"><img title=" " alt=" " src="images/14.png" /></a>		
                              <p>Toor Dal</p>
                              <h4>$35.99 <span>$55.00</span></h4>
                            </div>
                            <div className="snipcart-details top_brand_home_details">
                              <form action="#" method="post">
                                <fieldset>
                                  <input type="hidden" name="cmd" defaultValue="_cart" />
                                  <input type="hidden" name="add" defaultValue={1} />
                                  <input type="hidden" name="business" defaultValue=" " />
                                  <input type="hidden" name="item_name" defaultValue="Fortune Sunflower Oil" />
                                  <input type="hidden" name="amount" defaultValue="35.99" />
                                  <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                  <input type="hidden" name="currency_code" defaultValue="USD" />
                                  <input type="hidden" name="return" defaultValue=" " />
                                  <input type="hidden" name="cancel_return" defaultValue=" " />
                                  <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                                </fieldset>
                              </form>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 top_brand_left">
                  <div className="hover14 column">
                    <div className="agile_top_brand_left_grid">
                      <div className="agile_top_brand_left_grid_pos">
                        <img src="images/offer.png" alt=" " className="img-responsive" />
                      </div>
                      <div className="agile_top_brand_left_grid1">
                        <figure>
                          <div className="snipcart-item block">
                            <div className="snipcart-thumb">
                              <a href="single.html"><img title=" " alt=" " src="images/15.png" /></a>		
                              <p>Moong Dal</p>
                              <h4>$30.99 <span>$45.00</span></h4>
                            </div>
                            <div className="snipcart-details top_brand_home_details">
                              <form action="#" method="post">
                                <fieldset>
                                  <input type="hidden" name="cmd" defaultValue="_cart" />
                                  <input type="hidden" name="add" defaultValue={1} />
                                  <input type="hidden" name="business" defaultValue=" " />
                                  <input type="hidden" name="item_name" defaultValue="basmati rise" />
                                  <input type="hidden" name="amount" defaultValue="30.99" />
                                  <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                  <input type="hidden" name="currency_code" defaultValue="USD" />
                                  <input type="hidden" name="return" defaultValue=" " />
                                  <input type="hidden" name="cancel_return" defaultValue=" " />
                                  <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                                </fieldset>
                              </form>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 top_brand_left">
                  <div className="hover14 column">
                    <div className="agile_top_brand_left_grid">
                      <div className="agile_top_brand_left_grid_pos">
                        <img src="images/offer.png" alt=" " className="img-responsive" />
                      </div>
                      <div className="agile_top_brand_left_grid_pos">
                        <img src="images/offer.png" alt=" " className="img-responsive" />
                      </div>
                      <div className="agile_top_brand_left_grid1">
                        <figure>
                          <div className="snipcart-item block">
                            <div className="snipcart-thumb">
                              <a href="single.html"><img src="images/16.png" alt=" " className="img-responsive" /></a>
                              <p>Channa</p>
                              <h4>$80.99 <span>$105.00</span></h4>
                            </div>
                            <div className="snipcart-details top_brand_home_details">
                              <form action="#" method="post">
                                <fieldset>
                                  <input type="hidden" name="cmd" defaultValue="_cart" />
                                  <input type="hidden" name="add" defaultValue={1} />
                                  <input type="hidden" name="business" defaultValue=" " />
                                  <input type="hidden" name="item_name" defaultValue="Pepsi soft drink" />
                                  <input type="hidden" name="amount" defaultValue={80.00} />
                                  <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                  <input type="hidden" name="currency_code" defaultValue="USD" />
                                  <input type="hidden" name="return" defaultValue=" " />
                                  <input type="hidden" name="cancel_return" defaultValue=" " />
                                  <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                                </fieldset>
                              </form>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="agile_top_brands_grids">
                <div className="col-md-4 top_brand_left">
                  <div className="hover14 column">
                    <div className="agile_top_brand_left_grid">
                      <div className="agile_top_brand_left_grid_pos">
                        <img src="images/offer.png" alt=" " className="img-responsive" />
                      </div>
                      <div className="agile_top_brand_left_grid1">
                        <figure>
                          <div className="snipcart-item block">
                            <div className="snipcart-thumb">
                              <a href="single.html"><img title=" " alt=" " src="images/17.png" /></a>		
                              <p>Arhar Dal</p>
                              <h4>$35.99 <span>$55.00</span></h4>
                            </div>
                            <div className="snipcart-details top_brand_home_details">
                              <form action="#" method="post">
                                <fieldset>
                                  <input type="hidden" name="cmd" defaultValue="_cart" />
                                  <input type="hidden" name="add" defaultValue={1} />
                                  <input type="hidden" name="business" defaultValue=" " />
                                  <input type="hidden" name="item_name" defaultValue="Fortune Sunflower Oil" />
                                  <input type="hidden" name="amount" defaultValue="35.99" />
                                  <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                  <input type="hidden" name="currency_code" defaultValue="USD" />
                                  <input type="hidden" name="return" defaultValue=" " />
                                  <input type="hidden" name="cancel_return" defaultValue=" " />
                                  <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                                </fieldset>
                              </form>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 top_brand_left">
                  <div className="hover14 column">
                    <div className="agile_top_brand_left_grid">
                      <div className="agile_top_brand_left_grid_pos">
                        <img src="images/offer.png" alt=" " className="img-responsive" />
                      </div>
                      <div className="agile_top_brand_left_grid1">
                        <figure>
                          <div className="snipcart-item block">
                            <div className="snipcart-thumb">
                              <a href="single.html"><img title=" " alt=" " src="images/14.png" /></a>		
                              <p>Toor Dal</p>
                              <h4>$30.99 <span>$45.00</span></h4>
                            </div>
                            <div className="snipcart-details top_brand_home_details">
                              <form action="#" method="post">
                                <fieldset>
                                  <input type="hidden" name="cmd" defaultValue="_cart" />
                                  <input type="hidden" name="add" defaultValue={1} />
                                  <input type="hidden" name="business" defaultValue=" " />
                                  <input type="hidden" name="item_name" defaultValue="basmati rise" />
                                  <input type="hidden" name="amount" defaultValue="30.99" />
                                  <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                  <input type="hidden" name="currency_code" defaultValue="USD" />
                                  <input type="hidden" name="return" defaultValue=" " />
                                  <input type="hidden" name="cancel_return" defaultValue=" " />
                                  <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                                </fieldset>
                              </form>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 top_brand_left">
                  <div className="hover14 column">
                    <div className="agile_top_brand_left_grid">
                      <div className="agile_top_brand_left_grid_pos">
                        <img src="images/offer.png" alt=" " className="img-responsive" />
                      </div>
                      <div className="agile_top_brand_left_grid_pos">
                        <img src="images/offer.png" alt=" " className="img-responsive" />
                      </div>
                      <div className="agile_top_brand_left_grid1">
                        <figure>
                          <div className="snipcart-item block">
                            <div className="snipcart-thumb">
                              <a href="single.html"><img src="images/15.png" alt=" " className="img-responsive" /></a>
                              <p>Moong Dal</p>
                              <h4>$80.99 <span>$105.00</span></h4>
                            </div>
                            <div className="snipcart-details top_brand_home_details">
                              <form action="#" method="post">
                                <fieldset>
                                  <input type="hidden" name="cmd" defaultValue="_cart" />
                                  <input type="hidden" name="add" defaultValue={1} />
                                  <input type="hidden" name="business" defaultValue=" " />
                                  <input type="hidden" name="item_name" defaultValue="Pepsi soft drink" />
                                  <input type="hidden" name="amount" defaultValue={80.00} />
                                  <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                  <input type="hidden" name="currency_code" defaultValue="USD" />
                                  <input type="hidden" name="return" defaultValue=" " />
                                  <input type="hidden" name="cancel_return" defaultValue=" " />
                                  <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                                </fieldset>
                              </form>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="agile_top_brands_grids">
                <div className="col-md-4 top_brand_left">
                  <div className="hover14 column">
                    <div className="agile_top_brand_left_grid">
                      <div className="agile_top_brand_left_grid_pos">
                        <img src="images/offer.png" alt=" " className="img-responsive" />
                      </div>
                      <div className="agile_top_brand_left_grid1">
                        <figure>
                          <div className="snipcart-item block">
                            <div className="snipcart-thumb">
                              <a href="single.html"><img title=" " alt=" " src="images/16.png" /></a>		
                              <p>Channa</p>
                              <h4>$35.99 <span>$55.00</span></h4>
                            </div>
                            <div className="snipcart-details top_brand_home_details">
                              <form action="#" method="post">
                                <fieldset>
                                  <input type="hidden" name="cmd" defaultValue="_cart" />
                                  <input type="hidden" name="add" defaultValue={1} />
                                  <input type="hidden" name="business" defaultValue=" " />
                                  <input type="hidden" name="item_name" defaultValue="Fortune Sunflower Oil" />
                                  <input type="hidden" name="amount" defaultValue="35.99" />
                                  <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                  <input type="hidden" name="currency_code" defaultValue="USD" />
                                  <input type="hidden" name="return" defaultValue=" " />
                                  <input type="hidden" name="cancel_return" defaultValue=" " />
                                  <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                                </fieldset>
                              </form>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 top_brand_left">
                  <div className="hover14 column">
                    <div className="agile_top_brand_left_grid">
                      <div className="agile_top_brand_left_grid_pos">
                        <img src="images/offer.png" alt=" " className="img-responsive" />
                      </div>
                      <div className="agile_top_brand_left_grid1">
                        <figure>
                          <div className="snipcart-item block">
                            <div className="snipcart-thumb">
                              <a href="single.html"><img title=" " alt=" " src="images/17.png" /></a>		
                              <p>Arhar Dal</p>
                              <h4>$30.99 <span>$45.00</span></h4>
                            </div>
                            <div className="snipcart-details top_brand_home_details">
                              <form action="#" method="post">
                                <fieldset>
                                  <input type="hidden" name="cmd" defaultValue="_cart" />
                                  <input type="hidden" name="add" defaultValue={1} />
                                  <input type="hidden" name="business" defaultValue=" " />
                                  <input type="hidden" name="item_name" defaultValue="basmati rise" />
                                  <input type="hidden" name="amount" defaultValue="30.99" />
                                  <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                  <input type="hidden" name="currency_code" defaultValue="USD" />
                                  <input type="hidden" name="return" defaultValue=" " />
                                  <input type="hidden" name="cancel_return" defaultValue=" " />
                                  <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                                </fieldset>
                              </form>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 top_brand_left">
                  <div className="hover14 column">
                    <div className="agile_top_brand_left_grid">
                      <div className="agile_top_brand_left_grid_pos">
                        <img src="images/offer.png" alt=" " className="img-responsive" />
                      </div>
                      <div className="agile_top_brand_left_grid_pos">
                        <img src="images/offer.png" alt=" " className="img-responsive" />
                      </div>
                      <div className="agile_top_brand_left_grid1">
                        <figure>
                          <div className="snipcart-item block">
                            <div className="snipcart-thumb">
                              <a href="single.html"><img src="images/14.png" alt=" " className="img-responsive" /></a>
                              <p>Toor Dal</p>
                              <h4>$80.99 <span>$105.00</span></h4>
                            </div>
                            <div className="snipcart-details top_brand_home_details">
                              <form action="#" method="post">
                                <fieldset>
                                  <input type="hidden" name="cmd" defaultValue="_cart" />
                                  <input type="hidden" name="add" defaultValue={1} />
                                  <input type="hidden" name="business" defaultValue=" " />
                                  <input type="hidden" name="item_name" defaultValue="Pepsi soft drink" />
                                  <input type="hidden" name="amount" defaultValue={80.00} />
                                  <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                  <input type="hidden" name="currency_code" defaultValue="USD" />
                                  <input type="hidden" name="return" defaultValue=" " />
                                  <input type="hidden" name="cancel_return" defaultValue=" " />
                                  <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                                </fieldset>
                              </form>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clearfix"> </div>
              </div>
              <nav className="numbering">
                <ul className="pagination paging">
                  <li>
                    <a href="#" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                    </a>
                  </li>
                  <li className="active"><a href="#">1<span className="sr-only">(current)</span></a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li>
                    <a href="#" aria-label="Next">
                      <span aria-hidden="true">»</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        {/*- groceries -*/}
        {/* //footer */}
        <div className="footer">
          <div className="container">
            <div className="w3_footer_grids">
              <div className="col-md-3 w3_footer_grid">
                <h3>Contact</h3>
                <ul className="address">
                  <li><i className="glyphicon glyphicon-map-marker" aria-hidden="true" />1234k Avenue, 4th block, <span>New York City.</span></li>
                  <li><i className="glyphicon glyphicon-envelope" aria-hidden="true" /><a href="mailto:info@example.com">info@example.com</a></li>
                  <li><i className="glyphicon glyphicon-earphone" aria-hidden="true" />+1234 567 567</li>
                </ul>
              </div>
              <div className="col-md-3 w3_footer_grid">
                <h3>Information</h3>
                <ul className="info"> 
                  <li><i className="fa fa-arrow-right" aria-hidden="true" /><a href="about.html">About Us</a></li>
                  <li><i className="fa fa-arrow-right" aria-hidden="true" /><a href="contact.html">Contact Us</a></li>
                  <li><i className="fa fa-arrow-right" aria-hidden="true" /><a href="short-codes.html">Short Codes</a></li>
                  <li><i className="fa fa-arrow-right" aria-hidden="true" /><a href="faq.html">FAQ's</a></li>
                  <li><i className="fa fa-arrow-right" aria-hidden="true" /><a href="products.html">Special Products</a></li>
                </ul>
              </div>
              <div className="col-md-3 w3_footer_grid">
                <h3>Category</h3>
                <ul className="info"> 
                  <li><i className="fa fa-arrow-right" aria-hidden="true" /><a href="groceries.html">Groceries</a></li>
                  <li><i className="fa fa-arrow-right" aria-hidden="true" /><a href="household.html">Household</a></li>
                  <li><i className="fa fa-arrow-right" aria-hidden="true" /><a href="personalcare.html">Personal Care</a></li>
                  <li><i className="fa fa-arrow-right" aria-hidden="true" /><a href="packagedfoods.html">Packaged Foods</a></li>
                  <li><i className="fa fa-arrow-right" aria-hidden="true" /><a href="beverages.html">Beverages</a></li>
                </ul>
              </div>
              <div className="col-md-3 w3_footer_grid">
                <h3>Profile</h3>
                <ul className="info"> 
                  <li><i className="fa fa-arrow-right" aria-hidden="true" /><a href="products.html">Store</a></li>
                  <li><i className="fa fa-arrow-right" aria-hidden="true" /><a href="checkout.html">My Cart</a></li>
                  <li><i className="fa fa-arrow-right" aria-hidden="true" /><a href="login.html">Login</a></li>
                  <li><i className="fa fa-arrow-right" aria-hidden="true" /><a href="registered.html">Create Account</a></li>
                </ul>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
          <div className="footer-copy">
            <div className="container">
              <p>© 2017 Super Market. All rights reserved | Design by <a href="http://w3layouts.com/">W3layouts</a></p>
            </div>
          </div>
        </div>	
        <div className="footer-botm">
          <div className="container">
            <div className="w3layouts-foot">
              <ul>
                <li><a href="#" className="w3_agile_facebook"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                <li><a href="#" className="agile_twitter"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                <li><a href="#" className="w3_agile_dribble"><i className="fa fa-dribbble" aria-hidden="true" /></a></li>
                <li><a href="#" className="w3_agile_vimeo"><i className="fa fa-vimeo" aria-hidden="true" /></a></li>
              </ul>
            </div>
            <div className="payment-w3ls">	
              <img src="images/card.png" alt=" " className="img-responsive" />
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        {/* //footer */}	
        {/* Bootstrap Core JavaScript */}
        {/* top-header and slider */}
        {/* here stars scrolling icon */}
        {/* //here ends scrolling icon */}
        {/* main slider-banner */}
        <link href="css/skdslider.css" rel="stylesheet" />
        {/* //main slider-banner */} 
      </div>
    </>
  )
}
export default Home