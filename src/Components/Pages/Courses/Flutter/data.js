import { FormattedMessage } from "react-intl";

export const Banner = {
  title: <FormattedMessage id="flutter.Banner.title" defaultMessage="Flutter Mobile"/>,

  desc:
  <FormattedMessage id="flutter.Banner.desc" defaultMessage="Flutter is Google's UI toolkit for crafting beautiful, natively compiled applications for mobile, web, and desktop from a single codebase."/>,

  btn: <FormattedMessage id="java.Banner.btn1" defaultMessage="Apply Now"/>,
};
export const Teacher = {
  name: "Albrim Paqarizi",
  job: <FormattedMessage id="flutter.Teacher.job" defaultMessage="Instructor @ Flutter"/>,
  title:<FormattedMessage id="flutter.Teacher.title" defaultMessage="Why This Course?"/> ,
  skills: [
    {
      skill: "Beautiful UI",
    },
    {
      skill: "Functional",
    },
    {
      skill: "Development",
    },
    {
      skill: "C, C++, Dart",
    },
  ],
};

export const Card = [
  {
    title:<FormattedMessage id="flutter.Banner.title1" defaultMessage="Certificate"/>,
    desc:<FormattedMessage id="flutter.Banner.desc1" defaultMessage="Earn a Certificate of Completion after you take this Course."/>
  },
  {
    title:<FormattedMessage id="flutter.Banner.title2" defaultMessage="Join Us"/>,
    desc:<FormattedMessage id="flutter.Banner.desc2" defaultMessage="2 145 784 People have taken this Course."/>
  },
  {
    title:<FormattedMessage id="flutter.Banner.title3" defaultMessage="Duration"/>,
    desc:<FormattedMessage id="flutter.Banner.desc3" defaultMessage="Time of completion for this course is 12 Hours."/>
  },
  {
    title:<FormattedMessage id="flutter.Banner.title4" defaultMessage="Prerequisites"/>,
    desc:<FormattedMessage id="flutter.Banner.desc4" defaultMessage="You should have knowledge on C, C++ and Dart"/>
  }
];

export const Info = [
  {
    title:<FormattedMessage id="flutter.Info.title1" defaultMessage="Overview"/>,
    desc:<FormattedMessage id="flutter.Info.desc1" defaultMessage="This 13 weeks Software Development program will give you in-depth knowledge of Machine Learning techniques. You will take participation in a few Kaggle competitions and create a full-cycle Machine Learning Solution to a real-life problem."/>
  },
  {
    title:<FormattedMessage id="flutter.Info.title2" defaultMessage="Target Audience"/>,
    desc:<FormattedMessage id="flutter.Info.desc2" defaultMessage="This program is perfect for 2-nd and higher year students of technical specialties. Also, it's a good fit for developers who want to gain some expertise in A.I."/>
  }
];

export const SyllabusData = [
  {
    title:"UI Basics",
  },
  {
    title:"Flutter Engine",
  },
  {
    title:"Complex Animations",
  },
];