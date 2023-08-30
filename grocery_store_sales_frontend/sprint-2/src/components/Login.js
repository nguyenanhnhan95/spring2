function Login({controlFalse}){
    return(
        <>
        <div className="login">
        <div className="login__back">
          <div className="login__content">
            <div className="login__header">
              <h1>Đăng nhập</h1>
            </div>
            <div className="login__section">
              <input className="login__section-input-first" type="text" placeholder="Email của bạn" />
              <input className="login__section-input-last" type="password" placeholder="Mật khẩu của bạn" />
              <div className="icon__password"><i className="fa-solid fa-eye fa-xs" /></div>
              <button className="login__section-button">Đăng Nhập</button>
              <div className="login__section-footer">
                <p>Quên mật khẩu</p>
                <p>Đăng Ký</p>
              </div>
              <button className="login__section-button-return" onClick={controlFalse} type="button">Quay lại</button>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default Login;