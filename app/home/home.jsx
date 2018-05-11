import React from "react";
import Header from "../../app/header/header.jsx";
import Item from "../../components/item/item.jsx";
import Permission from "../../src/Permission";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as DispatchAction  from './../../redux/action';
import PropTypes from "prop-types";
import Api from "../../api/api.jsx";
import Util from "../../components/util/util.jsx";
import "./home.scss";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: {
        title: "调查问卷",
        url: "/",
        name: "我的问卷",
        user: 15108252197
      },
      List: [],
      loading: true
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
        setTimeout(() => {
          this.setState({
            List: data.list,
            loading: false
          });
        }, 500);
      },
      error: data => {
        this.showTips(data.errorMsg);
      }
    });
  }
  onIncreaseClick=()=>{
        this.props.increaseAction();
  }
   onDecrementClick=()=>{
        this.props.decrementAction();
  }
  render() {
    let { List, loading, header } = this.state;
    const { value} = this.props;
    return (
      <div>
        
        <button onClick={this.onDecrementClick }>Increase</button>
        <span>{value}</span>
        <button onClick={this.onIncreaseClick }>Increase</button>
        <Header data={header} exitLogin={this.exitLogin} />
        {loading ? <div>加载中。。。</div> : <Item data={List} />}
      </div>
    );
  }
}

// export default Permission(Home);
Home.propTypes = {
  value: PropTypes.number.isRequired,
  increaseAction: PropTypes.func.isRequired,
  decrementAction:PropTypes.func.isRequired
}

// function mapDispatchToProps(dispatch) {
//   return {
//     onIncreaseClick: () => dispatch(increaseAction)
//   }
// }

// Action Creator
// const increaseAction = { type: 'increase' }
// export default   Permission(Question);
export default connect(
  (state)=>{
    const value= state.count;
    return {value}
   },
  //  {
  //   increaseAction
  // }
 
    (dispatch:Dispatch)=>bindActionCreators(DispatchAction,dispatch),
)( Permission(Home));
