import React from "react";
import Header from "../../app/header/header.jsx"; 
import Item from "../../components/item/item.jsx"  
import Permission from '../../src/Permission';
import Api from "../../api/api.jsx";
import Util from "../../components/util/util.jsx";
import "./home.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: {
        title: "乐培生调查问卷",
        url: "/",
        name: "我的问卷",
        user: 15108252197
      },
      listData: []
    };

    this.exitLogin = this.exitLogin.bind(this);
  }
  exitLogin() {
    this.setState({ isLogin: false });
  }
  showTips(tip) {
    this.setState({
      errorTips: tip,
      showFade: true
    });
    setTimeout(() => {
      this.setState({
        showFade: false
      });
    }, 1000);
  }
  componentWillMount() {
    Util.fetchHandler({
      url: Api.getLisData,
      type: "get",
      success: data => {
        this.setState={
           listData: data
        }
      },
      error: data => {
        this.showTips(data.errorMsg);
      }
    });
  }
  render() {

    return (
      <div>
        <Header data={this.state.header} exitLogin={this.exitLogin} />
        <div className="list">
          {this.state.listData.map((data) =>(
              <Item data={data} key={data.id} />
          ))
            
          }
         
        </div>
      </div>
    );
  }
}

export default Permission(Home);







 