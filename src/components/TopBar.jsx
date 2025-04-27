import "../styles/topbar.css";
import Email from "../icons/Email";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import TikTok from "../icons/TikTok";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="left">
        <div className="email">
          <Email /> info@somestore.com
        </div>
        <div className="social">
          <Facebook /> <Instagram /> <TikTok />
        </div>
      </div>
      <div className="links">
        <span style={{ borderRight: "1.5px solid black" }}>Join our team</span>
        <span style={{ borderRight: "1.5px solid black" }}>Sponorship</span>
        <span>Our stores</span>
      </div>
    </div>
  );
};

export default TopBar;
