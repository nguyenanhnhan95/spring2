import { Link } from "react-router-dom";
import "../css/404.css";
import React, { useEffect, useState } from 'react';
function NotFound() {
    return (
        <div className="not__found">
            <div className="text">
                <div className="not__found_404" >404</div>
            </div>
            <div className="container">
                {/* caveman left */}
                <div className="caveman">
                    <div className="leg">
                        <div className="foot">
                            <div className="fingers" />
                        </div>
                    </div>
                    <div className="leg">
                        <div className="foot">
                            <div className="fingers" />
                        </div>
                    </div>
                    <div className="shape">
                        <div className="circle" />
                        <div className="circle" />
                    </div>
                    <div className="head">
                        <div className="eye">
                            <div className="nose" />
                        </div>
                        <div className="mouth" />
                    </div>
                    <div className="arm-right">
                        <div className="club" />
                    </div>
                </div>
                {/* caveman right */}
                <div className="caveman">
                    <div className="leg">
                        <div className="foot">
                            <div className="fingers" />
                        </div>
                    </div>
                    <div className="leg">
                        <div className="foot">
                            <div className="fingers" />
                        </div>
                    </div>
                    <div className="shape">
                        <div className="circle" />
                        <div className="circle" />
                    </div>
                    <div className="head">
                        <div className="eye">
                            <div className="nose" />
                        </div>
                        <div className="mouth" />
                    </div>
                    <div className="arm-right">
                        <div className="club" />
                    </div>
                </div>
            </div>
            {/* //////////////// CREDIT //////////////// */}
            <Link to={"/"}>
                <div id="link">
                    <i className="fab fa-codepen" />
                    <p>Trang chủ</p>
                </div>
            </Link>
        </div>
        
    )

}
export default NotFound;