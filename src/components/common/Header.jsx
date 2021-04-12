import React, { useState } from 'react';
import '../css/Header.css';
import { Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
export default function Header() {
    // header
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    
    return (
        <div className="header">
            <div className="header-logo">
                <MenuOutlined  type="primary" onClick={showDrawer} style={{marginRight:'16px',fontSize:'20px',lineHeight:'48px',color:'#0770cd'}}>
                </MenuOutlined>
                <Drawer
                    title=""
                    placement="left"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                    <a href="/header" style={{display:'block'}}>Trang Chủ</a >
                    <a href="1" style={{display:'block'}}>Đặt Chỗ</a >
                    <a href="1" style={{display:'block'}}>Hộp Thư Của Tôi</a >
                </Drawer>
                <a href="/">
                    traveloka
                  <img src="https://phuquoctrip.com/images/iconTravelloka.png" alt="bird" className="header-logo-img"/>
                </a>
            </div>
            <div className="header-right">
                <a href="/promotion">Khuyến Mãi</a>
                <a href="/cooperate">Hợp Tác Với Chúng Tôi</a>
                <a href="/save">Đã Lưu</a>
                <a href="/book">Đặt Chỗ Của Tôi</a>
                <a className="login" href="/login">
                    Đăng Nhập
                   
                </a>
                <a className="register" href="/register">Đăng Kí</a>
            </div>
            
        </div>
    )
}
