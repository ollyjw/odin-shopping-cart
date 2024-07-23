import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
        <a href="https://github.com/ollyjw">
          <FontAwesomeIcon icon={faGithub} />
          <span>Olly W Github</span>
        </a>
    </div>
  );
};

export default Footer;
