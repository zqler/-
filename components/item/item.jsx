import React from 'react';
import { Link } from "react-router-dom";
import './item.scss';
class Item extends  React.Component{
    constructor(props){
          super(props);
    };
    render(){
        const {id,name,date}= this.state.data;
        if (!id && name && date) return null;
        return <dl className="item">
            <dt className="item-top">
              <div className="pull-left">
                <Link to="/" className="title pull-left">
                   {name || null}
                </Link>
                <div className="pull-left item-id">ID:{id || null}</div>
              </div>
              <div className="pull-right">
                <div className="pull-left item-date">
                  {date || null}
                </div>
               
              </div>
            </dt>
            <dd className="item-bot" />
          </dl>;      
    }
}
export default Item;