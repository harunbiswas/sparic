import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Pageheader from "../../../layouts/pageheader/pageheader";
import { AreaChart } from "../../charts/chartjs/chartdata/barcharts";
import LiveFeed from "./LiveFeed";
import LiveNews from "./LiveNews";
import TopKeywords from "./TopKeywords";
import Recent from "./salesdata/chartsdata";

export default function Sales() {
  const breadcrumbs = ["Dashboard", "Home"];
  return (
    <div>
      <Pageheader items={breadcrumbs} />
      <Row>
        {" "}
        <Col xl={6} sm={12} className="col-12 ">
          <TopKeywords />
        </Col>
        <Col xl={6} sm={12} className="col-12 ">
          <Card>
            <Card.Header>
              <Card.Title>Daily Users</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="chartjs-wrapper-demo">
                <AreaChart />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className=" row-deck">
        <Col xxl={6} xl={12} lg={12}>
          <LiveFeed />
        </Col>
        <Col xxl={3} xl={6} lg={12} md={12}>
          <LiveNews />
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
    </div>
  );
}
