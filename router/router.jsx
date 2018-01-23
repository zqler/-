import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "../src/layout.jsx"; //布局
import Home from "../app/home/home.jsx"; //主页
import asyncComponent from "./asyncComponent.jsx"; //按需加载

// const SelectExample = asyncComponent(() =>
//   import("../example/select-example/selcect-example.jsx")
// ); //下拉选择框


class Routers extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default Routers;
