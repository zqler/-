import React from "react";
import {Map,Marker} from "react-amap";
import Permission from "../../src/Permission";
import {connect } from "react-redux";
import { bindActionCreators, Dispatch } from 'redux';
import * as DispatchAction  from './../../redux/action';
import PropTypes from "prop-types";
import "./question.scss";
import { Link } from 'react-router-dom';
class Question extends React.Component {
  constructor(props) {
    super(props);
    this.toolEvents = {
      created: (tool) => {
        this.tool = tool;
      }
    }
    this.mapPlugins = ['ToolBar'];
    this.mapCenter = {longitude: 120, latitude: 35};
    this.markerPosition = {longitude: 111, latitude: 36};
  }
  componentDidMount(){
    const id = this.props.match.params.id;
  }
  onIncreaseClick=()=>{
    this.props.increaseAction();
}
onDecrementClick=()=>{
    this.props.decrementAction();
}
  render() {
    const { value} = this.props;
    return (
      <div>
        这是一个问卷答题页面
        <button onClick={this.onDecrementClick }>Increase</button>
        <span>{value}</span>
        <button onClick={this.onIncreaseClick }>Increase</button>
        <Link to="/">返回首页</Link>  
        <div className="map">
        <Map  amapkey="f6e286ab7441b3e1786ca2f778d11089"  plugins={this.mapPlugins}
          center={this.mapCenter}
          zoom={6}>
          <Marker position={this.markerPosition} />
          </Map>
        </div>
       
      </div>
    );
  }
}
Question.propTypes = {
  value: PropTypes.number.isRequired,
  increaseAction: PropTypes.func.isRequired,
  decrementAction:PropTypes.func.isRequired
}
// function mapStateToProps(state) {
//   return {
//     value: state.count
//   }
// }

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
)(Question);