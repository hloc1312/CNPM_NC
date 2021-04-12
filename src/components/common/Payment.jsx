import React from 'react'
import '../css/Payment.css'
export default function Payment() {
    return (
        <div className="form-include" >
            <div className="form ">
                <div className="form-img">
                    <img src="img/manager-1.jpg" alt=""/>
                </div>
                <div className="form-desc">
                    <h3 className="form-desc-heading">Stella Maris Beach Danang</h3>
                    <p className="form-desc-type">Loại voucher</p>
                    <p className="form-desc-time">Thời hạn sử dụng</p>
                    <p className="form-price-text">Giá: 30000</p>
                    <p className="form-price-quality">Số lượng:</p>
                    <button type="button" className="form-price-btn-tru">-</button>
                    <input type="text" className="form-price-input" value={1}/>
                    <button type="button" className="form-price-btn-cong">+</button>
                </div>
                {/* <div className="form-price">
                    
                </div> */}
            </div>
            <div className="form-total">
                <h3 className="total-price">Tổng tiền: 100000</h3>
                <button type="button" className="btn-buy">Thanh Toán</button>
            </div>
        </div>
    )
}
