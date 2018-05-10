import React from "react";
import {Map,Marker} from "react-amap";
import Permission from "../../src/Permission";
import { Provider, connect } from "react-redux";
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
  render() {
    const { value, onIncreaseClick } = this.props;
    return (
      <div>
        这是一个问卷答题页面
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
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
  onIncreaseClick: PropTypes.func.isRequired
}
function mapStateToProps(state) {
  return {
    value: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

// Action Creator
const increaseAction = { type: 'increase' }
// export default   Permission(Question);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);