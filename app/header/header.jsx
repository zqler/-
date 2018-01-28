import  React from "react";
import { withRouter,Link } from "react-router-dom";
import {setLoginOut} from '../../src/Permission';
import "./header.scss";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout(){
    const { history } = this.props;
    // 
    setLoginOut(); 
    history.push('/login');
  }
  render() {
    let { title, url,name,user} = this.props;
    if (!title && url && name &&user) return null;
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
               
                <Link to={url} className="user-name">
                  <i className="icon questions-icon">
                    <em />
                  </i>
                  <span id="ctl01_spanMyq">{name}</span>
                  </Link>
              
              </dt>
              <dd className="line" />
            </dl>
            <dl className="user-info pull-left">
              <dt className="icon user-icon">
                <em />
              </dt>
              <dd className="spinner-list">
                <a href="javascript:void(0)" className="user-name">
                  <span id="ctl01_lblUserName" style={{ textAlign: "center" }}>
                   {user}
                  </span>
                  <span className="caret" />
                </a>
              </dd>
            </dl>
            <dl id="ctl01_hrefWjxout" className="user-info pull-left IE-8">
              <a className="user-name" onClick={this.handleLogout}>
                <dt className="icon out-icon" />
                <dd className="spinner-list">
                  <span>退出</span>
                </dd>
              </a>
            </dl>
          </div>
        </div>
      </div>;
  }
}
export default withRouter(Header);