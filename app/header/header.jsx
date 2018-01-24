import  React from "react";
import { withRouter } from "react-router";
import "./header.scss";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout(){
    const { history } = this.props;
    // 
    history.push('/login');
  }
  render() {
    let { title, url } = this.props;
    if (!title && url) return null;
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
            <dl className="user-info pull-left">
              <dt className="icon user-icon">
                <em />
              </dt>
              <dd className="spinner-list">
                <a href="javascript:void(0)" className="user-name">
                  <span id="ctl01_lblUserName" style={{ textAlign: "center" }}>
                    15108252197
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