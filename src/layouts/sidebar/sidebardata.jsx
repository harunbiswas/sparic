import React from "react";

const MenuItems = [
  {
    menutitle: "MAIN",
    Items: [
      {
        icon: <i className="side-menu__icon ri-home-4-line"></i>,
        type: "sub",
        Name: "",
        active: true,
        selected: true,
        title: "Dashboard",
        class: "",
        color: "",
        badgetxt: "",
        children: [
          {
            path: `${import.meta.env.BASE_URL}`,
            type: "link",
            active: false,
            selected: false,
            title: "Top Keywords",
          },
          {
            path: `${import.meta.env.BASE_URL}ecommerce`,
            type: "link",
            active: false,
            selected: false,
            title: "Daily Users",
          },
          {
            path: `${import.meta.env.BASE_URL}analytics`,
            type: "link",
            active: false,
            selected: false,
            title: "Social Platforms",
          },
          {
            path: `${import.meta.env.BASE_URL}medical`,
            type: "link",
            active: false,
            selected: false,
            title: "Live Feed",
          },
          {
            path: `${import.meta.env.BASE_URL}crypto`,
            type: "link",
            active: false,
            selected: false,
            title: "Live News",
          },
        ],
      },
    ],
  },
];
export default MenuItems;
