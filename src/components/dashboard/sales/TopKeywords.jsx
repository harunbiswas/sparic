import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { Card, Dropdown, Table } from "react-bootstrap";
import values from "../../../values";

export default function TopKeywords() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${values.url}/topkeywords`)
      .then((d) => {
        setData(d.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Card>
      <Card.Header className=" border-bottom ">
        <Card.Title className=" mb-0">Top Keywords</Card.Title>
        <Dropdown className=" ms-auto">
          <Dropdown.Toggle
            as="a"
            variant="outline-light"
            className="btn btn-outline-default btn-sm fw-bold text-primary fs-12 d-flex align-items-center dropdown-toggle "
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi bi-calendar-date fw-semibold mx-1"></i> Week
          </Dropdown.Toggle>
          <Dropdown.Menu
            className="dropdown-menu-end"
            aria-labelledby="dropdownMenuButton1"
          >
            <Dropdown.Item href="#">Month</Dropdown.Item>
            <Dropdown.Item href="#">Year</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card.Header>
      <Card.Body>
        <div className="table-responsive">
          <Table id="data-table" className="table border p-0 text-nowrap mb-0">
            <thead className="bg-light text-dark">
              <tr>
                <th className="fw-semibold fs-14 border-bottom-0 w-5">ID</th>
                <th className="fw-semibold fs-14 border-bottom-0">Keyword</th>
                <th className="fw-semibold fs-14 border-bottom-0">Date</th>
                <th className="fw-semibold fs-14 border-bottom-0">service</th>
                <th className="fw-semibold fs-14 border-bottom-0">hits</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((d, i) => (
                <tr key={i} className="border-bottom">
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <h6 className="mb-0 fw-semibold text-dark">{d?.id}</h6>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex contact-image">
                      <div className="d-flex mt-1 flex-column ms-2">
                        <h6 className="mb-0 fs-14 fw-semibold text-dark">
                          {d?.keyword}
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td className="fs-13 fw-semibold text-dark">
                    <i className="fe fe-calendar me-2"></i>
                    {moment(new Date(d?.timestamp)).format("dd-mm-YYYY")}
                  </td>
                  <td className="fs-13 fw-semibold text-dark">{d?.service}</td>
                  <td className="fs-13 fw-semibold text-dark">{d?.hits}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
}
