import { FormattedMessage } from "react-intl";

export const Banner = {
  title: (
    <FormattedMessage id="java.Banner.title1" defaultMessage="Java Basics" />
  ),

  desc: (
    <FormattedMessage
      id="java.Banner.desc1"
      defaultMessage="Java is one of the most popular programming languages used in professional application development."
    />
  ),

  btn: <FormattedMessage id="java.Banner.btn1" defaultMessage="Apply Now" />,
};
export const Teacher = {
  name: (
    <FormattedMessage id="java.Teacher.name" defaultMessage="Arber Maksuti" />
  ),
  job: (
    <FormattedMessage
      id="java.Teacher.job"
      defaultMessage="Instructor @ Java"
    />
  ),
  title: (
    <FormattedMessage
      id="java.Teacher.title234"
      defaultMessage="Why This Course?"
    />
  ),
  skills: [
    {
      skill: "Structure",
    },
    {
      skill: "IDE",
    },
    {
      skill: "Variables",
    },
    {
      skill: "Arrays",
    },
  ],
};
export const Card = [
  {
    title: (
      <FormattedMessage id="java.Card.title1" defaultMessage="Certificate" />
    ),
    desc: (
      <FormattedMessage
        id="java.Card.desc1"
        defaultMessage="Earn a Certificate of Completion after you take this Course."
      />
    ),
  },
  {
    title: <FormattedMessage id="java.Card.title2" defaultMessage="Join Us" />,
    desc: (
      <FormattedMessage
        id="java.Card.des2"
        defaultMessage="6 487 458 People have taken this Course."
      />
    ),
  },
  {
    title: <FormattedMessage id="java.Card.title3" defaultMessage="Duration" />,
    desc: (
      <FormattedMessage
        id="java.Card.desc3"
        defaultMessage="Time of completion for this course is 25 Hours."
      />
    ),
  },
  {
    title: (
      <FormattedMessage id="java.Card.title4" defaultMessage="Prerequisites" />
    ),
    desc: (
      <FormattedMessage
        id="java.Card.desc4"
        defaultMessage="There are no prerequisites for this Course."
      />
    ),
  },
];

export const Info = [
  {
    title: <FormattedMessage id="java.Info.title1" defaultMessage="Overview" />,
    desc: (
      <FormattedMessage
        id="java.Info.desc1"
        defaultMessage="This 13 weeks Software Development program will give you in-depth knowledge of Machine Learning techniques. You will take participation in a few Kaggle competitions and create a full-cycle Machine Learning Solution to a real-life problem."
      />
    ),
  },
  {
    title: (
      <FormattedMessage
        id="java.Info.title2"
        defaultMessage="Target Audience"
      />
    ),
    desc: (
      <FormattedMessage
        id="java.Info.desc2"
        defaultMessage="This program is perfect for 2-nd and higher year students of technical specialties. Also, it's a good fit for developers who want to gain some expertise in A.I."
      />
    ),
  },
];

export const SyllabusData = [
  {
    title: "Hello World",
  },
  {
    title: "Conditional Flow",
  },
  {
    title: "Debugging",
  },
];
