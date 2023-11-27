import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Recent from "./salesdata/chartsdata";

import Pageheader from "../../../layouts/pageheader/pageheader";
import LiveFeed from "./LiveFeed";
import TopKeywords from "./TopKeywords";

export default function Sales() {
  const breadcrumbs = ["Dashboard", "Home"];
  return (
    <div>
      <Pageheader items={breadcrumbs} />

      <Row className=" row-deck">
        <Col xxl={6} xl={12} lg={12}>
          <LiveFeed />
        </Col>
        <Col xxl={3} xl={6} lg={12} md={12}>
          <Card>
            <Card.Header className="border-bottom">
              <Card.Title className=" mb-0">Sales Activities</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="timeline-label">
                <div className="sales-activity mb-4 fs-13">
                  <span className="text-muted ms-5">14:20</span>
                  <h6 className="my-1 ms-5 fw-semibold">New Customer</h6>
                  <p className="mb-0 ms-5 text-muted fs-12">
                    <Link to="#" className="text-azure fw-semibold p-0">
                      Jhon124
                    </Link>{" "}
                    successfully Signed{" "}
                  </p>
                </div>
                <div className="sales-activity mb-4">
                  <span className="text-muted ms-5">08:00</span>
                  <h6 className="my-1 mb-0 ms-5 fw-semibold">
                    Potential Customer
                  </h6>
                  <p className="mb-0 ms-5 text-muted fs-12">
                    User{" "}
                    <Link to="#" className="text-azure">
                      Charlie_T
                    </Link>{" "}
                    checked out{" "}
                    <Link to="#" className="text-purple">
                      Item #42
                    </Link>
                    .{" "}
                    <Link to="#" className="text-success fw-semibold">
                      View
                    </Link>
                  </p>
                </div>
                <div className="sales-activity mb-4">
                  <span className="text-muted ms-5">16:24</span>
                  <h6 className="my-1 mb-0 ms-5 fw-semibold">
                    New Ticket Arrived
                  </h6>
                  <p className="mb-0 ms-5 text-muted fs-12">
                    User{" "}
                    <Link to="#" className="text-azure">
                      Michael85
                    </Link>{" "}
                    Submitted a ticket{" "}
                    <Link to="#" className="text-success fw-semibold">
                      Details
                    </Link>
                  </p>
                </div>
                <div className="sales-activity">
                  <span className="text-muted ms-5">04:16</span>
                  <h6 className="my-1 mb-0 ms-5 fw-semibold">
                    Monthly Sales Report
                  </h6>
                  <p className="mb-0 ms-5 text-muted fs-12">
                    <Link to="#" className="text-danger">
                      4 days left
                    </Link>{" "}
                    notification to submit the monthly sales report.
                    <Link to="#" className="text-success fw-semibold">
                      View report
                    </Link>
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3} xl={6} lg={12} md={12}>
          <Card>
            <Card.Header className=" border-bottom">
              <Card.Title className=" mb-0">Social Platforms</Card.Title>
            </Card.Header>
            <Card.Body className=" px-0">
              <Recent />
            </Card.Body>
            {/* <Card.Footer>
              <Row className=" pb-0 mb-0">
                <Col
                  md={6}
                  className="col justify-content-center text-center border-end"
                >
                  <p className="mb-0 d-flex fw-semibold text-muted justify-content-center">
                    <span className="legend bg-primary"></span>Last Month
                  </p>
                  <h4 className="mb-0 fw-semibold">$3,006</h4>
                </Col>
                <Col md={6} className=" col text-center float-end">
                  <p className="mb-0 d-flex fw-semibold text-muted justify-content-center ">
                    <span className="legend bg-secondary"></span>This Month
                  </p>
                  <h4 className="mb-0 fw-semibold">$4,026</h4>
                </Col>
              </Row>
            </Card.Footer> */}
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm={12} className="col-12 ">
          <TopKeywords />
        </Col>
      </Row>
    </div>
  );
}
