//创建登录验证组件，在所有需要验证的组件下面包装。
import React from "react";
import Login from "../app/login/login.jsx";
import { storage } from "./localStorage";
const session = storage(sessionStorage);

export function setLoginStatus(flag = 0) {
    session.setItem("login", flag);
}
export function setLoginOut() {
    session.removeItem("login");
}
export default Component => {
    return class Permission extends React.Component {
        render() {
            if (session.getItem("login") == 1) {
                return React.createElement(Component, {...this.props });
            }
            return React.createElement(Login, {...this.props });
        }
    };
};