import React from 'react'
import '../css/Search.css';
import { Input, AutoComplete } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { DatePicker, Select,Button  } from 'antd';


export default function Search() {
    //css btn
   
    //form select
    const { Option } = Select;
    
    function onChange(value) {
        console.log(`selected ${value}`);
    }
    
    function onBlur() {
        console.log('blur');
    }
    
    function onFocus() {
        console.log('focus');
    }
    
    function onSearch(val) {
        console.log('search:', val);
    }
    // form date
    const { RangePicker } = DatePicker;
    // form search
    const renderTitle = (title) => (
        <span>
          {title}
          <a
            style={{
              float: 'right',
            }}
            href="https://www.google.com/search?q=antd"
            target="_blank"
            rel="noopener noreferrer"
          >
            more
          </a>
        </span>
      );
      
      const renderItem = (title, hotel) => ({
        value: title,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {title}
            <span>
            <HomeOutlined /> {hotel}
            </span>
          </div>
        ),
      });
      
      const options = [
        {
          label: renderTitle('Kết Quả Tìm Kiếm Gần Đây'),
          options: [renderItem('Đà Lạt', '1600 khách sạn'), renderItem('Đà Nẵng', '1205 khách sạn')],
        },
        {
          label: renderTitle('Điểm Đến Phổ Biến'),
          options: [
           renderItem('Hà Nội', '10324 khách sạn'),
           renderItem('Hà Tĩnh', '43 khách sạn'),
           renderItem('Quãng Ngãi', '90 khách sạn'),
           renderItem('Ninh Bình', '250 khách sạn'),
           renderItem('Vũng Tàu', '16 khách sạn')],
        },
      
      ];
      
      const Complete = () => (
        <AutoComplete
          dropdownClassName="certain-category-search-dropdown"
          dropdownMatchSelectWidth={500}
          style={{
            width: '100%',
          }}
          options={options}
        >
          <Input.Search size="large" placeholder="Thành phố, khách sạn, điểm đến" />
        </AutoComplete>
      );
    return (
        <div className="form-control">
            <div className="form-left">
                <ul className="select-items">
                    <li><a href="1">Vé Máy Bay</a></li>
                    <li><a href="1">Khách Sạn</a></li>
                    <li><a href="1">Combo Tiết Kiệm</a></li>
                    <li><a href="1">Đưa Đón Sân Bay</a></li>
                    <li><a href="1">Xperience</a></li>
                    <li><a href="1">Cho Thuê Xe</a></li>
                    <li><a href="1">JR Pass</a></li>
                </ul>
            </div>
            <div className="form-right">
                <div className="form-item">
                    <div className="form-item-label"> 
                    <a href="1">Khách Sạn Xem Gần Đây</a></div>
                    <div className="form-item-input"></div>
                </div>
                <div className="form-item">
                    <div className="form-item-label">
                    <p>Thành Phố Địa, Điểm Hoặc Tên Khách Sạn:</p>
                    </div>
                    <div className="form-item-input">
                    <Complete/>
                    </div>
                </div>
                <div className="form-item">
                    <div className="form-item-label"><p>Nhận/ Trả Phòng:</p></div>
                    <div className="form-item-input"><RangePicker /></div>
                </div>
                <div className="form-item">
                    <div className="form-item-label"> <p>Số Đêm:</p></div>
                    <div className="form-item-input">
                    <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Đêm"
                            optionFilterProp="children"
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="one">1 đêm</Option>
                            <Option value="two">2 đêm</Option>
                            <Option value="three">3 đêm</Option>
                            <Option value="four">4 đêm</Option>
                            <Option value="five">5 đêm</Option>
                        </Select>
                    </div>
                </div>
                <div className="form-item">
                    <div className="form-item-label">
                    <p>Khách Và Phòng:</p>
                    </div>
                    <div className="form-item-input">
                    <Input placeholder="Phòng, Người" style={{width:'50%'}}/>
                    </div>
                </div>
                <Button style={{backgroundColor:'#f96d01',color:'#fff',width:'218px',height:'38px',marginTop:'16px'}} className="search-btn">Tìm Khách Sạn</Button>               
            </div>
        </div>
    )
}
 