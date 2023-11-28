import axios from "axios";
import { ArcElement, Chart, Legend, Tooltip, registerables } from "chart.js";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import values from "../../../../values";
Chart.register(...registerables, ArcElement, Tooltip, Legend);

//  AreaChart
function getAreaGradient(ctx) {
  const gradient1 = ctx.createLinearGradient(0, 350, 0, 0);
  gradient1.addColorStop(0, "rgba(70, 127, 207,0)");
  gradient1.addColorStop(1, "rgba(70, 127, 207,.5)");

  return gradient1;
}
function getAreaGradient1(ctx) {
  const gradient2 = ctx.createLinearGradient(0, 280, 0, 0);
  gradient2.addColorStop(0, "rgba(236, 139, 239,0)");
  gradient2.addColorStop(1, "rgba(236, 139, 239,.5)");
  return gradient2;
}
export const AreaChartOption = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: true,
      labels: {
        display: true,

        generateLabels: function (chart) {
          return [
            {
              text: "Users", // Your first legend label
              fillStyle: "rgba(70, 127, 207, 1)", // Your color for the first legend label
              strokeStyle: "rgba(70, 127, 207, 1)",
              lineWidth: 1,
            },
            {
              text: "Hites", // Your second legend label
              fillStyle: "rgba(236, 130, 239, 1)", // Your color for the second legend label
              strokeStyle: "rgba(236, 130, 239, 1)",
              lineWidth: 1,
            },
            // Add more labels as needed
          ];
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        fontColor: "rgba(180, 183, 197, 0.4)",
      },
      title: {
        display: false,
        text: "Months",
      },
      grid: {
        display: true,
        color: "rgba(180, 183, 197, 0.4)",
        drawBorder: false,
      },
    },
    y: {
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        fontColor: "rgba(180, 183, 197, 0.4)",
        stepSize: 10,
        min: 0,
        max: 80,
      },
      title: {
        display: false,
        text: "Revenue",
      },
      grid: {
        display: true,
        color: "rgba(180, 183, 197, 0.4)",
        drawBorder: false,
      },
    },
  },
};

export function AreaChart() {
  const [data, setData] = useState({
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [14, 12, 34, 25, 44, 36, 35, 25, 30, 32, 20, 25],
        borderColor: "#467fcf",
        borderWidth: 1,
        fill: true,
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return;
          }
          return getAreaGradient(ctx, chartArea);
        },
        lineTension: 0.3,
      },
      {
        data: [35, 30, 45, 35, 55, 40, 15, 20, 25, 55, 50, 45],
        borderColor: "#ec82ef",
        borderWidth: 1,
        fill: true,
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return;
          }
          return getAreaGradient1(ctx, chartArea);
        },
        lineTension: 0.3,
      },
    ],
  });

  useEffect(() => {
    axios
      .get(`${values.url}/dailyusers`)
      .then((d) => {
        const labels = [];
        const users = [];
        const click = [];
        d.data?.forEach((item) => {
          labels.push(moment(item.timestamp).format("DD-MMM"));
          users.push(item.users);
          click.push(item.hits);
        });

        setData((prev) => {
          return {
            ...prev,
            labels,
            datasets: [
              {
                ...data.datasets[0],
                data: users,
              },
              {
                ...data.datasets[1],
                data: click,
              },
            ],
          };
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return <Line options={AreaChartOption} data={data} height="300px" />;
}
