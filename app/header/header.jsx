import  React from "react";
import "./header.scss";
class Header extends React.Component{
    constructor(props){
        super(props);
    }
  render(){
    let {title,url} = this.props;
    if  (!title && url) return null;
    return <div className="header">
        <div className="my-container clearfix">
          <div className="logo pull-left">
            <a href="" className="hover">
              {title || null}
            </a>
          </div>
          <div className="user-wrapper pull-right" id="userbutton">
            <dl className="my-question pull-left">
              <dt className="box user-info">
                <a className="user-name" href={url}>
                  <i className="icon questions-icon">
                    <em />
                  </i>
                  <span id="ctl01_spanMyq">我的问卷</span>
                </a>
              </dt>
              <dd className="line" />
            </dl>
          </div>
        </div>
      </div>; 
  }
}
export default Header;