import "./Team.css";
import Devon from "../../assets/Devon.png";
import Cody from "../../assets/Cody.png";
import Ralph from "../../assets/Ralph.png";
import Bessie from "../../assets/Bessie.png";

const teamData = [
  {
    id: 1,
    img: Devon,
    userName: "Devon Lane",
    userRole: "Window Cleaner",
  },
  {
    id: 2,
    img: Cody,
    userName: "Cody Fisher",
    userRole: "House Cleaner",
  },
  {
    id: 3,
    img: Ralph,
    userName: "Ralph Edwards",
    userRole: "Commercial Cleaner",
  },
  {
    id: 4,
    img: Bessie,
    userName: "Bessie Cooper",
    userRole: "Floor Cleaner",
  },
];

const Team = () => {
  return (
    <section className="team">
      <div className="container">
        <h3 className="common-title">OUR TEAM</h3>
        <h2 className="team-title">OUR EXPERT TEAM MEMBERS</h2>
        <div className="team-flex">
          {teamData.map((el) => {
            return (
              <div key={el.id} className="team-card">
                <div className="img">
                  <img src={el.img} alt="" />
                  <div className="t-links">
                    <i className="bi bi-facebook"></i> |
                    <i className="bi bi-twitter"></i>|
                    <i className="bi bi-linkedin"></i>
                  </div>
                </div>
                <h5>{el.userName}</h5>
                <p> {el.userRole}</p>
              </div>
            );
          })} 
        </div>
      </div>
    </section>
  );
};

export default Team;
