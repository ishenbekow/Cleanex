import React from "react";
import "./Portfolio.css";
import Card1 from "../../assets/1-card.png";
import Card2 from "../../assets/2-card.png";
import Card3 from "../../assets/3-card.png";

const portfolioData = [
  {
    id: 1,
    img: Card1,
    bigText: "Corporate Vehicle Cleaning",
    smallText: "Professional Cleaner",
  },
  {
    id: 2,
    img: Card2,
    bigText: "Corporate Vehicle Cleaning",
    smallText: "Professional Cleaner",
  },
  {
    id: 3,
    img: Card3,
    bigText: "Corporate Vehicle Cleaning",
    smallText: "Professional Cleaner",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="container">
        <h3 className="common-title">OUR TEAM</h3>
        <h2 className="team-title">OUR EXPERT TEAM MEMBERS</h2>
        <div className="port-flex">
          {portfolioData.map((el) => {
            return (
              <div key={el.id} className="port-card">
                <div className="port-img">
                  <img src={el.img} alt="" />
                  <div className="p-links">
                    <div className="port-down">
                      <div className="port-down-text ">
                        <h5>{el.bigText}</h5>
                        <p> {el.smallText}</p>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="white"
                          class="bi bi-arrow-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
