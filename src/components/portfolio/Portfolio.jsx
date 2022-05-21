import React, { useEffect, useState } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import {
  frontendPortfolio,
  backendPortfolio,
  fullstackPortfolio,
  allPortfolio
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("all");
  const [data, setdata] = useState([]);

  const list = [
    {
      id: "all",
      title: "All",
    },
    {
      id: "frontend",
      title: "Front-End",
    },
    {
      id: "backend",
      title: "Back-End",
    },
    {
      id: "fullstack",
      title: "Full Stack",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "all":
        setdata(allPortfolio);
        break;
      case "frontend":
        setdata(frontendPortfolio);
        break;
      case "backend":
        setdata(backendPortfolio);
        break;
      case "fullstack":
        setdata(fullstackPortfolio);
        break;
      default:
        setdata(frontendPortfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} />
            <a href={d.github} target="_blank" rel="noreferrer">
              {d.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
