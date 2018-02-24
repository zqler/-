import React from "react";
import "./question.scss";
class Question extends React.Component{
    constructor(props) {
        super(props)
        
    }
    render() {
        const id = this.props.match.params.id;
        console.log(id);
        return (
             <div>
                  这是一个问卷答题页面
                  <p>{id}</p>
             </div>
        )
    }
}
export default Question;