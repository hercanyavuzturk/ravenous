import "./BusinessLİst.css";
import React, { Component } from "react";
import Business from "../Business/Business";

class BusinessLİst extends React.Component {
  render() {
    return (
      <div className ="BusinessList">
        {this.props.businesses.map((business)=>{
           return <Business business = {business} key={business.id}/>
        })}
        
      </div>
    );
  }
}

export default BusinessLİst;
