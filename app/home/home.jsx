import React from "react";
import Header from "../../app/header/header.jsx";
import Present from "../../app/present/present.jsx";
import "./home.scss";

class Home extends React.Component{
    componentWillMount(){
        let obj={id:1,age:20,sex:"女"};
        console.log(Object.assign({},obj,{age:25}),'测试Js新的API')
    }
    render(){
        return(
            
            <Header title="乐培生调查问卷" url="http://www.baidu.com" />
         
        ) 
    }
}

export default Home;
