import React from "react";
import "./question.scss";
class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const id = this.props.match.params.id;
    return (
      <div>
        这是一个问卷答题页面
        <p>{id}</p>
      </div>
    );
  }
}
export default Question;
