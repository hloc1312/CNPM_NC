import React from 'react'
import '../css/Detail.css'
import { EnvironmentOutlined } from '@ant-design/icons';
export default function Detail() {
    return (
        <div className="square_all_1">
            <div className="square_header">
                <h3 className="title">Stella Maris Beach Danang</h3>
                <p className="desc">Khách Sạn</p>
                <p className="location"><EnvironmentOutlined/> 3 Võ Văn Kiệt, Phước Mỹ, Sơn Trà, Đà Nẵng, Việt Nam, 550000</p>
                <hr/>
            </div>
            <div className="square_body">
                <div className="body_img">
                    <img src="img/manager-1.jpg" alt=""/>
                    
                </div>
                <div className="body_desc">
                    <div className="condition">
                        <p className="title-condition" >Điều kiện:</p>
                        <ul className="list-condition">
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                        </ul>

                    </div> 
                    <div className="one">
                        <p>Giá:  300000123213213123123</p>
                        
                    </div>   
                    <div className="one">
                        <form action="/payment">
                            <button type="submit" >Mua</button>
                        </form>
                    </div>   
                </div>
                
                
                
            </div>
                
        </div>
    )
}
