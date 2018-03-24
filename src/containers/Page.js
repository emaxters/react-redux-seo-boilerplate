import React, { Component } from 'react';
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import { loadInitData } from "../actions/index";

class Page extends Component {

  componentWillMount() {
    this.props.loadInitData();
  }

  render() {
    const { title, body } = this.props.data;

    return (
      <div className="p-5">
        <h1>Sub Page</h1>
        <h2>{title}</h2>
        <p>{body}</p>
        <a className={"btn btn-primary"} href="/">Go to Home</a>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadInitData }, dispatch);
}

function mapStateToProps({ data }) {
  return { data };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);