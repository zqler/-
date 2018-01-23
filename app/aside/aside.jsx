import React from "react";
import {NavLink} from 'react-router-dom';
import "./aside.scss";
class Aside extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div id="asideNav">
            <div className="logArea">
              <NavLink to="/">
                <img src={require("../../asset/images/logo.jpg")} />
              </NavLink>
            </div>
            <div className="nav">
              <p>组件列表</p>
              <ul>
                <li>
                  <NavLink to="/selcet" activeStyle={{ color: "#f73352" }}>
                    下拉选择框
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/checkbox" activeStyle={{ color: "#f73352" }}>
                    复选框
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/alert" activeStyle={{ color: "#f73352" }}>
                    消息提示框
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dialog" activeStyle={{ color: "#f73352" }}>
                    模态框
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/table" activeStyle={{ color: "#f73352" }}>
                    表格
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/datepicker" activeStyle={{ color: "#f73352" }}>
                    日期选择器
                  </NavLink>
                </li>
                <li>
                  <a  onClick={this.props.exitLogin}>
                    注销
                  </a>
                </li>
              </ul>
            </div>
          
          </div>;
    }
}
export default Aside


