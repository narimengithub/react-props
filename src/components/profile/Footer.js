import React, { Component } from "react";
import {style} from "typestyle";
import {
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
class Footer extends Component {
  
  render() {
    const myStylea={
      paddingLeft: "5px",
      fontSize:"22px",
      textDecoration: "none",
      };

      const styleImg={
        borderStyle: "hidden",
        borderRadius:"5px",
        width:"40px",
        height:"40px",
      }
    return (
      <div className="container-1"style={{
        color: "#f1f1f1",
        textAlign: "center",
        fontFamily: "'Saira Semi Condensed', sans-serif",
        fontSize: "16px",
        backgroundImage: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
      }}>
        <img
          id="contactimg"
          src="/images/contactlogo.png"
          width="180px"
          height="180px"
          alt="contactlogo" style={{ borderStyle: "hidden",backgroundColor: "#f1f1f1", borderRadius: "90px",textTransform: "uppercase"}}
        />
        <h3>
          <strong>narimen chaabene</strong>
        </h3>
        <h4> address : sakiet ezzit </h4>
        <h4>Email: narimenchaabene@gmail.com</h4>
        <h4>Telephone : 21431501</h4>

        <a href="https://www.facebook.com/narimen.chaabene" style={myStylea}>
          <span style={{ color: "antiquewhite" }}>
            <FaFacebook />
          </span>
        </a>
        <a href="https://github.com/narimengithub/formarion-react" style={myStylea}>
          <span className="icon fa fa-github" style={{ color: "antiquewhite" }}>
            <FaGithub />
          </span>
        </a>
      </div>
    )
  }}

export default Footer;
