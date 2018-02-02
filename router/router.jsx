import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../app/home/home.jsx"; //主页
import Details from "../app/question/question.jsx";
import asyncComponent from "./asyncComponent.jsx"; //按需加载
import Login from "../app/login/login.jsx";
import "../asset/style/common.scss"
// const SelectExample = asyncComponent(() =>
//   import("../example/select-example/selcect-example.jsx")
// ); //下拉选择框


class Routers extends React.Component {
  render() {
    return(
      <Router>
    
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path='/details' component={Details}/>
          >
        </Switch>
      
      </Router>
    ) 
  }
}

export default Routers;
