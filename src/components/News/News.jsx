import "./News.css";
import { newsDB } from "./newsData";

const News = () => {
  return (
    <section className="news">
      <div className="container">
        <h3 className="common-title">LATEST NEWS</h3>
        <h2 className="news-title">READ OUR LATEST BLOG</h2>

        {/* news tab */}

        <div className="news-tab-flex">
          <h5>CLEANEX BLOG</h5>
          <h5>
            See All <i className="bi bi-arrow-right"></i>
          </h5>
        </div>

        {/* news cards */}

        <div className="news-cards">
          {newsDB.map((news) => {
            return (
              <div className="n-card" key={news.id}>
                <img src={news.newsImg} alt="news img" />
                <div className="card-content">
                  <div className="n-card-box">
                    <h4>{news.newsDate}</h4>
                  </div>
                  <div className="user-info">
                    <div>
                      <img src={news.newsAuthorImg} alt="" />
                    </div>
                    <div>
                      <h6>{news.newsAuthorName}</h6>
                      <p>{news.newsAuthorRole}</p>
                    </div>
                  </div>
                  <div className="news-description">
                    <h5>QUICK WORKER FINDING</h5>
                    <p>
                      Amet minim mollit non deserunt ullamcosit aliqua dolor.
                    </p>
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

export default News;
