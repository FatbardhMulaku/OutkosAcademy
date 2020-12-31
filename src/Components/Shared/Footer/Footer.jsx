import React from "react";
import "./Footer.scss";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { ReactComponent as Facebook } from "../../../Assets/Svg/facebook.svg";
import { ReactComponent as Instagram } from "../../../Assets/Svg/instagram.svg";
import { ReactComponent as Linkedin } from "../../../Assets/Svg/linkedin.svg";
import { ReactComponent as Twitter } from "../../../Assets/Svg/twitter.svg";
const links = [
  {
    category: "Career",
    links: [
      {
        link: "Success Stories",
        to: "/success-stories",
      },
      {
        link: "Job Opportunities",
        to: "/job-opportunities",
      },
      {
        link: "Open Positions",
        to: "/open-positions",
      },
      {
        link: "Send a Message",
        to: "/contact-us",
      },
    ],
  },
  {
    category: "Studies",
    links: [
      {
        link: "Programs",
        to: "/programs",
      },
      {
        link: "Application",
        to: "/application",
      },
      {
        link: "Scholarships",
        to: "/scholarships",
      },
      {
        link: "Online",
        to: "/online",
      },
    ],
  },
  {
    category: "Trainings",
    links: [
      {
        link: "Professional",
        to: "/professional",
      },
      {
        link: "Testing Center",
        to: "/testing-center",
      },
      {
        link: "Certifications",
        to: "/certifications",
      },
      {
        link: "Rent a Class",
        to: "/rent-class",
      },
    ],
  },
  {
    category: "Projects",
    links: [
      {
        link: "Reliability",
        to: "/reliability",
      },
      {
        link: "Training Providers",
        to: "/training-providers",
      },
      {
        link: "Women on ICT",
        to: "/women-ict",
      },
      {
        link: "Other",
        to: "/other",
      },
    ],
  },
  {
    category: "About Us",
    links: [
      {
        link: "Contact",
        to: "/contact-us",
      },
      {
        link: "Locations",
        to: "/locations",
      },
      {
        link: "Terms and Conditions",
        to: "/terms",
      },
      {
        link: "Privacy Policy",
        to: "/privacy-policy",
      },
    ],
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="main-container">
        <div className="top">
          <Logo footer />
          <p className="description">Outkos Academy is here to help and change the future of learning with our various modern solutions.</p>
        </div>
        <div className="divider"></div>
        <div className="middle">
          <div className="links-area">
            {links.map((l, i) => {
              return <FooterLinksCategory {...l} key={i} />;
            })}
          </div>
        </div>
        <div className="divider"></div>
        <div className="bottom">
          <div className="social-media-links">
            <a href="http://facebook.com" target="_blank" className="social-media-link" rel="noopener noreferrer">
              <Facebook />
            </a>
            <a href="http://facebook.com" target="_blank" className="social-media-link" rel="noopener noreferrer">
              <Instagram />
            </a>
            <a href="http://facebook.com" target="_blank" className="social-media-link" rel="noopener noreferrer">
              <Linkedin />
            </a>
            <a href="http://facebook.com" target="_blank" className="social-media-link" rel="noopener noreferrer">
              <Twitter />
            </a>
          </div>
          <div className="copyright">Copyright 2020.All rights reserved</div>
          <div className="language-switch">
            <button>English</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLinksCategory = (props) => {
  return (
    <article className="footer__links-category">
      <span className="category">{props.category}</span>
      <div className="links">
        {props.links.map((l, i) => {
          return (
            <Link className="footer-link" to={l.to} key={i}>
              {l.link}
            </Link>
          );
        })}
      </div>
    </article>
  );
};

export default Footer;
