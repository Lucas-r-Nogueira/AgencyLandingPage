import "./App.scss";
import logo from "./assets/images/logo.svg";
import arrowDown from "./assets/images/icon-arrow-down.svg";
import EmilyImage from "./assets/images/image-emily.jpg";
import ThomasImage from "./assets/images/image-thomas.jpg";
import JennieImage from "./assets/images/image-jennie.jpg";
import Facebook from "./assets/images/icon-facebook.svg";
import Instagram from "./assets/images/icon-instagram.svg";
import Twitter from "./assets/images/icon-twitter.svg";
import Pinterest from "./assets/images/icon-pinterest.svg";

function App() {
  return (
    <>
      <div className="container__hero">
        <div className="container__navbar">
          <div className="logo">
            <img src={logo} alt="Agency creative studio logo" />
          </div>
          <ul className="navbar">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="text">
          <h1>WE ARE CREATIVES</h1>
          <img src={arrowDown} alt="arrow" className="arrow" />
        </div>
      </div>
      <div className="first__layer">
        <div className="left">
          <div className="container__text">
            <h1>Transform your brand</h1>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>

            <p className="button">LEARN MORE</p>
          </div>
        </div>
        <div className="right"></div>
      </div>
      <div className="second__layer">
        <div className="left"></div>
        <div className="right">
          <div className="container__text">
            <h1>Stand out to the right audience</h1>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we'll build and
              extend your brand in digital places
            </p>

            <p className="button">LEARN MORE</p>
          </div>
        </div>
      </div>
      <div className="third__layer">
        <div className="left">
          <div className="container__text">
            <h1>Graphic Design</h1>
            <p>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potencial clients´
              attention
            </p>
          </div>
        </div>
        <div className="right">
          <div className="container__text">
            <h1>Photography</h1>
            <p>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
      <div className="client__testimonials">
        <h1>Client testimonials</h1>
        <div className="cards">
          <div className="card">
            <div className="container__image">
              <img src={EmilyImage} alt="" />
            </div>
            <div className="container__text">
              <p>
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </p>
            </div>
            <div className="container__name">
              <p className="name">Emily R.</p>
              <p className="business">Markiting Director</p>
            </div>
          </div>
          <div className="card">
            <div className="container__image">
              <img src={ThomasImage} alt="" />
            </div>
            <div className="container__text">
              <p>
                Sunnyside’s enthusiasm coupled with their keen interest in our
                brand’s success made it a satisfying and enjoyable experience.
              </p>
            </div>
            <div className="container__name">
              <p className="name"> Thomas S.</p>
              <p className="business"> Chief Operating Officer</p>
            </div>
          </div>
          <div className="card">
            <div className="container__image">
              <img src={JennieImage} alt="" />
            </div>
            <div className="container__text">
              <p>
                Incredible end result! Our sales increased over 400% when we
                worked with Sunnyside. Highly recommended!
              </p>
            </div>
            <div className="container__name">
              <p className="name">Jennie F.</p>
              <p className="business">Business Owner</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container__gallery">
        <div className="bottle"></div>
        <div className="orange"></div>
        <div className="cone"></div>
        <div className="sugar"></div>
      </div>

      <div className="footer">
        <div className="text__logo">
          <img src={logo} alt="" />
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
          </ul>
        </div>
        <div className="socials">
          <a href="#">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="#">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="#">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="#">
            <img src={Pinterest} alt="Pinterest" />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
