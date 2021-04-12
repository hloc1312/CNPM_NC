import React from 'react';
import '../css/ManagerVoucher.css';
import { EnvironmentOutlined } from '@ant-design/icons';
export default function ManagerVoucher() {
    return (
        <div>
            <div className="square_all">
                <a href="/detail" className="square_link">
                    <div className="square">
                        <div className="img">
                            <img src="img/manager-1.jpg" alt="" className="square_img"/>
                        </div>
                        <div className="body">
                            <h3 className="square_title">Stella Maris Beach Danang</h3>
                            <p className="square_desc"><EnvironmentOutlined /> 3 Võ Văn Kiệt, Phước Mỹ, Sơn Trà, Đà Nẵng, Việt Nam, 550000</p>
                            <p className="square_price">550000</p>
                        </div>
                    
                    </div>
            </a>
            </div>
        </div>
    )
}
