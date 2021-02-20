import React from "react";
import "./Footer.scss";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { ReactComponent as Facebook } from "../../../Assets/Svg/facebook.svg";
import { ReactComponent as Instagram } from "../../../Assets/Svg/instagram.svg";
import { ReactComponent as Linkedin } from "../../../Assets/Svg/linkedin.svg";
import { ReactComponent as Twitter } from "../../../Assets/Svg/twitter.svg";
import { FormattedMessage } from "react-intl";
import LangOptions from "../../Shared/LangOptions";

const links = [
  {
    category: <FormattedMessage id="footer.Career" defaultMessage="Career" />,
    links: [
      {
        link: <FormattedMessage id="footer.Career.1" defaultMessage="Success Stories" />,
        to: "/success-stories",
      },
      {
        link: <FormattedMessage id="footer.Career.2" defaultMessage="Job Opportunities" />,
        to: "/job-opportunities",
      },
      {
        link: <FormattedMessage id="footer.Career.3" defaultMessage="Open Positions" /> ,
        to: "/open-positions",
      },
      {
        link: <FormattedMessage id="footer.Career.4" defaultMessage="Send a Message"/>,
        to: "/contact-us",
      },
    ],
  },
  {
    category: <FormattedMessage id="footer.Studies" defaultMessage="Studies"/> ,
    links: [
      {
        link: <FormattedMessage id="footer.Studies.1" defaultMessage="Programs"/>,
        to: "/programs",
      },
      {
        link: <FormattedMessage id="footer.Studies.2" defaultMessage="Application"/>,
        to: "/application",
      },
      {
        link: <FormattedMessage id="footer.Studies.3" defaultMessage="Scholarships"/>,
        to: "/scholarships",
      },
      {
        link: <FormattedMessage id="footer.Studies.4" defaultMessage="Online"/>,
        to: "/online",
      },
    ],
  },
  {
    category: <FormattedMessage id="footer.Trainings" defaultMessage="Trainings"/>,
    links: [
      {
        link: <FormattedMessage id="footer.Trainings.1" defaultMessage="Professional"/>,
        to: "/professional",
      },
      {
        link: <FormattedMessage id="footer.Trainings.2" defaultMessage="Testing Center"/>,
        to: "/testing-center",
      },
      {
        link: <FormattedMessage id="footer.Trainings.3" defaultMessage="Certifications"/>,
        to: "/certifications",
      },
      {
        link: <FormattedMessage id="footer.Trainings.4" defaultMessage="Rent a Class"/>,
        to: "/rent-class",
      },
    ],
  },
  {
    category: <FormattedMessage id="footer.Projects" defaultMessage="Projects"/>,
    links: [
      {
        link: <FormattedMessage id="footer.Projects.1" defaultMessage="Reliability"/>,
        to: "/reliability",
      },
      {
        link: <FormattedMessage id="footer.Projects.2" defaultMessage="Training Providers"/>,
        to: "/training-providers",
      },
      {
        link: <FormattedMessage id="footer.Projects.3" defaultMessage="Women on ICT"/>,
        to: "/women-ict",
      },
      {
        link: <FormattedMessage id="footer.Projects.4" defaultMessage="Other"/>,
        to: "/other",
      },
    ],
  },
  {
    category: <FormattedMessage id="footer.AboutUs" defaultMessage="About Us"/>,
    links: [
      {
        link: <FormattedMessage id="footer.AboutUs.1" defaultMessage="Contact"/>,
        to: "/contact-us",
      },
      {
        link: <FormattedMessage id="footer.AboutUs.2" defaultMessage="Locations"/>,
        to: "/locations",
      },
      {
        link: <FormattedMessage id="footer.AboutUs.3" defaultMessage="Terms and Conditions"/>,
        to: "/terms",
      },
      {
        link: <FormattedMessage id="footer.AboutUs.4" defaultMessage="Privacy Policy"/>,
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
          <p className="description">
            <FormattedMessage
              id="footer.info"
              defaultMessage="Outkos Academy is here to help and change the future of learning with our various modern solutions."
            />
          </p>
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
            <a
              href="http://facebook.com"
              target="_blank"
              className="social-media-link"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
            <a
              href="http://facebook.com"
              target="_blank"
              className="social-media-link"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="http://facebook.com"
              target="_blank"
              className="social-media-link"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
            <a
              href="http://facebook.com"
              target="_blank"
              className="social-media-link"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
          </div>
          <div className="copyright">
            <FormattedMessage
              id="footer.Copyright"
              defaultMessage="Copyright 2020.All rights reserved"
            />
          </div>
          <div className="language-switch">
            <LangOptions />
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
