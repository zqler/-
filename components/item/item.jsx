import React from "react";
import { Link, hashHistory } from "react-router-dom";
import PropTypes from "prop-types";
import "./item.scss";
class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static propTypes = {
    data: PropTypes.array
  };
  static defaultProps = {
    data: []
  };
  render() {
    let { data } = this.props;
    return (
      <div className="list">
        {data.map((item, i) => {
          const id = item.code;
          return (
            <dl className="item" key={i}>
              <dt className="item-top">
                <div className="pull-left">
                  <Link
                    to={`/Details/${item.code}`}
                    className="title pull-left"
                  >
                    {item.name}
                  </Link>
                  <div className="pull-left item-id">ID:{item.code}</div>
                </div>
                <div className="pull-right">
                  <div className="pull-left item-date">{item.date}</div>
                </div>
              </dt>
              <dd className="item-bot">
                {item.desc || "暂时无数据,程序员休假去了"}
              </dd>
            </dl>
          );
        })}
      </div>
    );
  }
}

export default Item;
