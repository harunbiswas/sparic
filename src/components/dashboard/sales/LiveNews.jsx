import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import values from "../../../values";

export default function LiveNews() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${values.url}/livenews`)
      .then((d) => {
        console.log(d.data);
        setData(d.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  function truncateText(text, maxWords) {
    const words = text.split(" ");
    const truncatedWords = words.slice(0, maxWords);
    if (words.length > maxWords) {
      return truncatedWords.join(" ") + " " + "...";
    } else {
      return truncatedWords.join(" ");
    }
  }
  return (
    <Card>
      <Card.Header className="border-bottom">
        <Card.Title className=" mb-0">Live News</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="timeline-label">
          {data?.map((d, i) => (
            <div className="sales-activity mb-4 fs-13">
              <span className="text-muted ms-5">
                {moment(d.dateSubmitted).format("DD:MM")}
              </span>
              <Link to="/" className="text-dark">
                <h6 className="my-1 ms-5 fw-semibold">
                  {truncateText(d.title, 5)}
                </h6>
              </Link>
              <p className="mb-0 ms-5 text-muted fs-12">
                {truncateText(d.bio, 8)}
              </p>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}
