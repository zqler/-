import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import './item.scss';
class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  static propTypes = {
    data: PropTypes.array,
    loading: PropTypes.bool
  };
  static defaultProps = {
    data: [],
    loading: false
  };
  render() {
    let { data,loading } = this.props;
    console.log(data);
    return (
        <div className="list">
        {
       
      data.map((item, i) => {
             const path = { 
               pathName: "/details",
               query:item.id
               };
            return <dl className="item" key={i}>
                <dt className="item-top">
                  <div className="pull-left">
                    <Link to={path} className="title pull-left">
                      {item.name}
                    </Link>
                    <div className="pull-left item-id">
                      ID:{item.code}
                    </div>
                  </div>
                  <div className="pull-right">
                    <div className="pull-left item-date">
                      {item.date}
                    </div>
                  </div>
                </dt>
                <dd className="item-bot">
                  {item.desc || "暂时无数据,程序员休假去了"}
                </dd>
              </dl>;
        })
       }
         </div>
    )
    }
  }


export default Item;