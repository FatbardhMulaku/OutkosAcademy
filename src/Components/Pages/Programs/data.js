import img1 from "../../../Assets/Certification/Group2239.jpg";
import img2 from "../../../Assets/Certification/Teacher-amico.jpg";
import { FormattedMessage } from "react-intl";

export const Banner = {
  title: <FormattedMessage id="programs.banner.title1" defaultMessage="We offer 2 Programs for you to Apply"/>,

  desc:
  <FormattedMessage id="programs.banner.desc1" defaultMessage="You can either Learn or give your knowledge to other people. With us you can do whichever you are capable of doing, we would love you to be part of us..."/>,

  btn: <FormattedMessage id="programs.banner.btn1" defaultMessage="Student - Teacher"/>,
};

export const FeaturesData = [
  {
    title: <FormattedMessage id="programs.FeaturesData.titleA1" defaultMessage="Apply as a Student"/>,
    title2: <FormattedMessage id="programs.FeaturesData.titleA2" defaultMessage="Become a Top Student and Learn new things."/>,
    paragraph:
    <FormattedMessage id="programs.FeaturesData.paragraphA1" defaultMessage="Your Successes are waiting for you, reach them faster with our help. Get the knowledge, Develop your Skills, and reach the Top..."/>,
    to: "/",
    link: <FormattedMessage id="programs.FeaturesData.linkA1" defaultMessage="Apply Now"/>,
    img: img1,
  },
  {
    title: <FormattedMessage id="programs.FeaturesData.titleB1" defaultMessage="Apply as a Teacher"/>,
    title2: <FormattedMessage id="programs.FeaturesData.titleB2" defaultMessage="Get the privilege to work with the Best Teacher Team out there."/>,
    paragraph:
    <FormattedMessage id="programs.FeaturesData.paragraphB1" defaultMessage="All of our teachers are 100% satisfied with this Job, because we offer mos of the things ready for you, all you have to do is get that Creative Mind going..."/>
      ,
    to: "/",
    link: <FormattedMessage id="programs.FeaturesData.btnB1" defaultMessage="Apply Now"/>,
    img: img2,
    styles: "reverse",
  },
];
