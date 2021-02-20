import { FormattedMessage } from "react-intl";

export const Banner = {
  title: <FormattedMessage id="aboutus.title.1" defaultMessage="Get yourself a professional"/>,

  desc:
  <FormattedMessage id="aboutus.desc.1" defaultMessage="Say goodbye to generic instructions. Start learning practical skills that earn you raises and advance your career."/>,

  btn: <FormattedMessage id="aboutus.btn.1" defaultMessage="Reserve your spot"/>,
};

export const items = [
  {
    item: <FormattedMessage id="aboutus.items.1" defaultMessage="Programs which are developed based on the work market demands."/>,
  },
  {
    item: <FormattedMessage id="aboutus.items.2" defaultMessage="Hands-on practical work in an academic year."/>,
  },
  {
    item:<FormattedMessage id="aboutus.items.3" defaultMessage="Classrooms and laboratiories optimaly equiped."/>,
  },
  {
    item:
    <FormattedMessage id="aboutus.items.4" defaultMessage="Professional lecturers who also currentlly work in the equivalent field."/>,
  },
];

export const Card = {
  title: <FormattedMessage id="aboutus.title.id1" defaultMessage="How to become a student at Outkos Academy?"/>,
  btn: <FormattedMessage id="aboutus.btn.id1" defaultMessage="Start Now"/>,
  cards: [
    {
      title: <FormattedMessage id="aboutus.card.title.1" defaultMessage="Preconditions"/>,
      desc:
      <FormattedMessage id="aboutus.card.desc.1" defaultMessage="To have finished high school, to posses knowledge of English language and Mathematics."/>
        ,
    },
    {
      title: <FormattedMessage id="aboutus.card.title.2" defaultMessage="Application"/>,
      desc: <FormattedMessage id="aboutus.card.desc.2" defaultMessage=" Filling out the application form. "/>,
    },
    {
      title: <FormattedMessage id="aboutus.card.title.3" defaultMessage="Exam"/>,
      desc: <FormattedMessage id="aboutus.card.desc.3" defaultMessage="Good scores in the entrance exam taken at Outkos Academy."/>,
    },
    {
      title: <FormattedMessage id="aboutus.card.title.4" defaultMessage="Registration"/>,
      desc: <FormattedMessage id="aboutus.card.desc.4" defaultMessage="Providing necessary documents and signing the contract"/>,
    },
  ],
};

export const Info = [
  {
    title: <FormattedMessage id="aboutus.info.title.1" defaultMessage="Mission"/>,
    desc:
    <FormattedMessage id="aboutus.info.desc.1" defaultMessage="We aim to strengthen the link between labor market needs and the informal education system. By identifying the most demanded skills in the contemporary labor market, we conceive of courses that will deliver these skills as efficiently and quickly as possible.."/>,
  },
  {
    title: <FormattedMessage id="aboutus.info.title.2" defaultMessage="Vision"/>,
    desc:
    <FormattedMessage id="aboutus.info.desc.2" defaultMessage="We will be the meeting point for all interested parties to improve their skills that will enable them to develop a successful career in both the local and global labor markets."/>,
  },
];
