import { FormattedMessage } from "react-intl";

export const Banner = {
  title: <FormattedMessage id="php.Banner.title" defaultMessage="PHP/Laravel for Beginners"/>,

  desc:
  <FormattedMessage id="php.Banner.desc" defaultMessage="Learn the fundamentals of PHP, one of the most popular languages of modern web development. Add some Laravel for more Function..."/>,

  btn: <FormattedMessage id="php.Banner.btn1" defaultMessage="Apply Now"/>,
};
export const Card = [
  {
    title: <FormattedMessage id="php.Card.title1" defaultMessage="Certificate"/>,
    desc: <FormattedMessage id="php.Card.desc1" defaultMessage="Earn a Certificate of Completion after you take this Course."/>,
  },
  {
    title: <FormattedMessage id="php.Card.title2" defaultMessage="Join Us"/>,
    desc: <FormattedMessage id="php.Card.desc2" defaultMessage="35 645 127 People have taken this Course."/>,
  },
  {
    title: <FormattedMessage id="php.Card.title3" defaultMessage="Duration"/>,
    desc: <FormattedMessage id="php.Card.desc3" defaultMessage="Time of completion for this course is 18 Hours."/>,
  },
  {
    title: <FormattedMessage id="php.Card.title4" defaultMessage="Prerequisites"/>,
    desc: <FormattedMessage id="php.Card.desc4" defaultMessage="You should have knowledge on HTML and CSS"/>,
  },
];

export const SyllabusData = [
  {
    title:"PHP Variables",
  },
  {
    title:"PHP Functions",
  },
  {
    title:"PHP Arrays",
  },
];

export const Info = {
  title:<FormattedMessage id="php.Info.title" defaultMessage="Learn one of the most valuable Languages"/>,
  desc:
  <FormattedMessage id="php.Info.desc" defaultMessage="PHP is one of the most used Programming Languages, it is easy implementable with HTML, so it is accessible by most Developers. It is a skill that will be very useful to you as you can write the most complex scripts with ease..."/>
}

export const Skill = {
  title: <FormattedMessage id="php.Skill.title" defaultMessage="The Teacher of this Course"/>,
  desc: <FormattedMessage id="php.Skill.desc" defaultMessage="Albrim Paqarizi is a very talented Developer who loves to teach others new skills, he will be the right choice for you..."/>,
  btn: <FormattedMessage id="php.Skill.btn" defaultMessage="View Profile"/>,
  link:"bleart",
  name:"Albrim Paqarizi",
  job:"Backend Developer",
  skills:[
    {skill:"HTML Support"},
    {skill:"Variables"},
    {skill:"Dynamic"},
    {skill:"Web Appliactions"},
  ]
}