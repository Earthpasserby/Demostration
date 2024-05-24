import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEnvelope } from "react-icons/fa";

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
            <div className=" d-flex align-align-items-center justify-content-center">
              <div>
                <h2>BECOME AN EXCLUSIVE MEMBERS</h2>
                <p>SIGN UP and join the partnership</p>
              </div>
            </div>

            <div className="input-icons">
              <FaEnvelope className="env" />
              <input
                type="text"
                className="input-field"
                name="email"
                placeholder="Your email : "
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default signup;
