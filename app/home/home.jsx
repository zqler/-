import React from "react";
import Header from "../../app/header/header.jsx";   
import Permission from '../../src/Permission';
import "./home.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
     this.exitLogin = this.exitLogin.bind(this);
  }
  exitLogin() {
    this.setState({ isLogin: false });
  }
  componentWillMount() {}
  render() {
    return (
      <div>
        <Header
          title="乐培生调查问卷"
          url="http://www.baidu.com"
          exit="exit"
          exitLogin={this.exitLogin}
        />
      </div>
    );
  }
}

export default Permission(Home);







 