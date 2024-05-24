import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { GoLock } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";
import { TiInfoLarge } from "react-icons/ti";

const signup = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col
            className="Col-1"
            md={4}
            style={{
              backgroundColor: "#24243E",
              height: "900px",
              width: "470.89px",
            }}
          >
            <div className="first-Img">
              <Image src="/./star.png" />
            </div>
            <div className="mx-0 sec-Img">
              <Image
                src="/./hand.png"
                className="img-fluid moved-image"
                style={{ height: "708.63px", width: "1259.78px" }}
              />
            </div>
            <div className="text d-flex align-align-items-center justify-content-center">
              <div>
                <h1 style={{ color: "#ffffff" }}>
                  Partnership for Business Growth
                </h1>
                <p>
                  Partnerships are pivotal for business growth, enabling
                  companies to leverage mutual strengths, share risks, and
                  capitalize on opportunities.
                </p>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <div className="d-flex justify-content-between">
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className="MainButton  topleft">
                  <Button type="btn" variant="Secondary">
                    <span className="mx-2 spanButton">
                      <FaAngleLeft
                        className="mx-2"
                        style={{ fontSize: "25px" }}
                      />
                      Return Home
                    </span>
                  </Button>
                </div>
              </Link>
              <p className="p-2">
                Already a Member?
                <Link style={{ color: "black" }}>LOG IN NOW</Link>
              </p>
            </div>
            <div className="mt-5 d-flex align-align-items-center justify-content-center">
              <div>
                <h2>BECOME AN EXCLUSIVE MEMBERS</h2>
                <p className="mx-5">SIGN UP and join the partnership</p>
              </div>
            </div>

            <div className=" d-flex align-align-items-center justify-content-center">
              <div>
                <div className="input-container">
                  <IoPersonOutline className="input-icon" />
                  <input
                    type="text"
                    className="input-field"
                    name="email"
                    placeholder="Johnson Doe "
                  />
                </div>
                <div className="input-container mt-4">
                  <GoMail className="input-icon" />
                  <input
                    type="text"
                    className="input-field"
                    name="email"
                    placeholder="example@email.com "
                  />
                </div>
                <div className="input-container mt-4">
                  <GoLock className="input-icon" />
                  <input
                    type="text"
                    className="input-field"
                    name="password"
                    placeholder="********** "
                  />
                  <span>
                    <p>show</p>
                  </span>
                </div>
                <div className="d-grid mt-4">
                  <Button
                    size="lg"
                    className="bt1 "
                    style={{ background: "#24243E" }}
                  >
                    Become a Member
                    <FaArrowRight className="icon" />
                  </Button>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "130px" }}>
              <div className="d-flex justify-content-between">
                <p>Copyright 2021 - 2022 FoxHub All rights Reserved</p>
                <p className="p-2">
                  <TiInfoLarge />
                  Need help?
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default signup;
