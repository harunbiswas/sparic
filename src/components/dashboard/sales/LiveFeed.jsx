import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import values from "../../../values";

export default function LiveFeed() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${values.url}/livefeed`)
      .then((d) => {
        setData(d.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <Card className="d-inline-block overflow-hidden">
      <Card.Header className="custom-header">
        <Card.Title className=" mb-0">Live Feed</Card.Title>
      </Card.Header>
      <Card.Body className=" overflow-hidden p-0">
        <div className="table-responsive">
          <table className="table border-0 mb-0 text-nowrap">
            <thead>
              <tr>
                <th className="border-top-0 text-dark fw-semibold ps-5 fs-13">
                  s.no
                </th>
                <th className="border-top-0 text-dark fw-semibold fs-13">
                  Bio
                </th>
                <th className="border-top-0 text-dark fw-semibold fs-13">
                  Keyworkd
                </th>
                <th className="border-top-0 text-dark fw-semibold pe-5  fs-13">
                  meaning
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((d, i) => (
                <tr key={i} className="border-bottom">
                  <td className="ps-5">
                    <div className="text-body">{i + 1}</div>
                  </td>
                  <td>
                    <div className="text-dark fw-semibold">{d?.bio}</div>
                  </td>
                  <td>
                    <div className="text-dark fw-semibold">{d?.keyword}</div>
                  </td>
                  <td>
                    <div className="text-dark fw-semibold">{d?.meaning}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card.Body>
    </Card>
  );
}
