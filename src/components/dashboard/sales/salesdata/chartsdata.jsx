import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import "react-data-table-component-extensions/dist/index.css";
import values from "../../../../values";

export default function Recent() {
  const [data, setData] = useState({
    series: [55, 78, 35, 35, 10],
    options: {
      labels: [
        "Discord",
        "Facebook",
        "Instagram",
        "Slack",
        "Twitch",
        "Twitter",
      ],
      chart: {
        height: 350,
        type: "donut",
        redrawOnWindowResize: true,
      },
      dataLabels: {
        enabled: false,
      },

      legend: {
        show: false,
      },
      stroke: {
        show: true,
        width: 0,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "84%",
            background: "transparent",
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: "20px",
                color: "#495057",
                offsetY: -4,
              },
              value: {
                show: true,
                fontSize: "18px",
                color: undefined,
                offsetY: 8,
                formatter: function (val) {
                  return val + "%";
                },
              },
              total: {
                show: true,
                showAlways: true,
                label: "Total",
                fontSize: "22px",
                fontWeight: 600,
                color: "#495057",
              },
            },
          },
        },
      },
      responsive: [
        {
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
      colors: ["#5eba00", "#467fcf", "#3ec7e8", "#ffc107", "#5c509b"],
    },
  });

  useEffect(() => {
    axios
      .get(`${values.url}/socialplatforms`)
      .then((d) => {
        setData((prev) => {
          return {
            ...prev,
            series: [
              d.data[0]?.Discord,
              d.data[0]?.Facebook,
              d.data[0]?.Instagram,
              d.data[0]?.Slack,
              d.data[0]?.Twitch,
              d.data[0]?.Twitter,
            ],
          };
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div id="chart">
      <ReactApexChart
        options={data.options}
        series={data.series}
        type="donut"
        height={280}
      />
    </div>
  );
}
