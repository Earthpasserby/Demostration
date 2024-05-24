import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { TfiAngleLeft } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { GoLock } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import { TiInfoLarge } from "react-icons/ti";

const Signup = () => {
  const gradientStyle = {
    background:
      "linear-gradient(180deg, #59599B 0%, #24243E 59.38%, #0F0C29 100%)",
  };
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col className="Col-1" md={4} style={gradientStyle}>
            <div className="first-Img">
              <Image src="/./star.png" />
            </div>
            <div>
              <Image
                src="/./hand.png"
                className="img-fluid moved-image"
                style={{ height: "708.63px", width: "1259.78px" }}
              />
            </div>
            <div className="text d-flex align-items-center justify-content-center">
              <div>
                <div>
                  <h1 style={{ color: "#ffffff" }}>
                    Partnership for Business Growth
                  </h1>
                </div>
                <div className="State-ment">
                  <p style={{ color: "#ffffff" }}>
                    Partnerships are pivotal for business growth, enabling
                    companies to leverage mutual strengths, share risks, and
                    capitalize on opportunities.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <div className="d-flex justify-content-between Return-home">
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className="topleft">
                  <Button type="btn" variant="Secondary">
                    <TfiAngleLeft style={{ fontSize: "20px" }} />
                    <span className="spanButton">Return Home</span>
                  </Button>
                </div>
              </Link>
              <p className="Member">
                Already a Member?
                <span>
                  <Link style={{ color: "black" }}> LOG IN NOW</Link>
                </span>
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-center mt-5">
              <div>
                <div>
                  <h2 className="H-Text">BECOME AN EXCLUSIVE MEMBER</h2>
                  <p className="text-center P-text">
                    SIGN UP AND JOIN THE PARTNERSHIP
                  </p>
                </div>
                <div className="input-container">
                  <IoPersonOutline className="input-icon" />
                  <input
                    type="text"
                    className="input-field"
                    name="name"
                    placeholder="Johnson Doe"
                  />
                </div>
                <div className="input-container mt-4">
                  <GoMail className="input-icon mt-1" />
                  <input
                    type="email"
                    className="input-field"
                    name="email"
                    placeholder="example@email.com"
                  />
                </div>
                <div className="input-container mt-4">
                  <GoLock className="input-icon" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                    name="password"
                    placeholder="**********"
                  />
                  <span
                    onClick={toggleShowPassword}
                    className="show-Visibility"
                  >
                    {showPassword ? "HIDE" : "SHOW"}
                  </span>
                </div>
                <div className="d-grid mt-4">
                  <Button
                    size="lg"
                    className="bt1"
                    style={{ background: "#24243E" }}
                  >
                    Become a Member
                    <FaArrowRight className="icon" />
                  </Button>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "170px" }}>
              <div className=" d-flex justify-content-between">
                <div className="copy-lite">
                  <span>Copyright 2021 - 2022 FoxHub All rights Reserved</span>
                </div>
                <div className="Help">
                  <TiInfoLarge />
                  <span>Need help?</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signup;
