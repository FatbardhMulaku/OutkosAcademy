import { ReactComponent as React } from "../../../Assets/Svg/react.svg";
import { ReactComponent as Wordpress } from "../../../Assets/Svg/wordpress.svg";
import { ReactComponent as Laravel } from "../../../Assets/Svg/laravel.svg";
import { ReactComponent as Flutter } from "../../../Assets/Svg/flutter.svg";
import { ReactComponent as Design } from "../../../Assets/Svg/uiux.svg";
import { FormattedMessage } from "react-intl";

export const UseFeatures = {
  title: (
    <FormattedMessage
      id="home.UseFeatures.1"
      defaultMessage="Start Learning New Things"
    />
  ),
  btn: <FormattedMessage id="home.UseFeatures.2" defaultMessage="Apply Now" />,
};

export const Banner = {
  title: (
    <FormattedMessage
      id="home.Banner.title1"
      defaultMessage="Learn Valuable Skills from the World's Best"
    />
  ),

  desc: (
    <FormattedMessage
      id="home.Banner.desc1"
      defaultMessage="Say goodbye to generic instructions. Start learning practical skills that earn you raises and advance your career."
    />
  ),

  btn: <FormattedMessage id="home.Banner.btn1" defaultMessage="Learn More"/>,

  lists: [
    {
      list: <FormattedMessage id="home.Banner.list1" defaultMessage="Success Guaranteed"/>,
    },
    {
      list: <FormattedMessage id="home.Banner.list2" defaultMessage="Certified Courses"/>,
    },
    {
      list: <FormattedMessage id="home.Banner.list3" defaultMessage="Verified Teachers"/>,
    },
  ],
};

const categories = {
  frontend: <FormattedMessage id="home.categories.nr1" defaultMessage="Frontend Developer"/>,
  ui: <FormattedMessage id="home.categories.nr2" defaultMessage="User Interface"/>,
  ux: <FormattedMessage id="home.categories.nr3" defaultMessage="User Experience"/>,
  react: <FormattedMessage id="home.categories.nr4" defaultMessage="React Developer"/>,
  angular: <FormattedMessage id="home.categories.nr5" defaultMessage="Angular Developer"/>,
  backend: <FormattedMessage id="home.categories.nr6" defaultMessage="Backend Developer"/>,
  mobile: <FormattedMessage id="home.categories.nr7" defaultMessage="Mobile Development"/>,
  webPlatform: <FormattedMessage id="home.categories.nr8" defaultMessage="Web Platforms"/>,
};

export const courses = [
  {
    id: "reactjs",
    name: "ReactJs",
    description:
    <FormattedMessage id="home.courses.reactjs.id1" defaultMessage="React is a JavaScript library for building userinterfaces. It is maintained by Facebook and a community of individual developers and companies."/>,
    type: <FormattedMessage id="home.courses.id112" defaultMessage="Online Course"/>,
    availability: "24/7",
    price: 200,
    duration: 16,
    category: [categories.frontend, categories.react],
    svg: <React />,
    link: "/Courses/react",
  },
  {
    name: <FormattedMessage id="home.categories.php.1" defaultMessage="PHP/Laravel for Beginners"/>,
    description:
    <FormattedMessage id="home.categories.php.2" defaultMessage="PHP is a server scripting language, Laravel is a rapid application development framework with easy learning curve."/>,
    type: <FormattedMessage id="home.courses.id112" defaultMessage="Online Course"/>,
    availability: "24/7",
    price: 150,
    duration: 20,
    category: [categories.backend],
    svg: <Laravel />,
    link: "/Courses/php",
  },
  {
    name: <FormattedMessage id="home.categories.flutter.1" defaultMessage="Flutter Mobile for Beginners"/>,
    description:
    <FormattedMessage id="home.categories.flutter.2" defaultMessage="Flutter is Google's UI toolkit for crafting beautiful, natively compiled applications for mobile, web, and desktop from a single codebase."/>,
    type: <FormattedMessage id="home.courses.id112" defaultMessage="Online Course"/>,
    availability: "24/7",
    price: 220,
    duration: 25,
    category: [categories.mobile],
    svg: <Flutter />,
    link: "/Courses/flutter",
  },
  {
    name: <FormattedMessage id="home.categories.uiux.1" defaultMessage="UI/UX Design for Beginners"/>,
    description:
    <FormattedMessage id="home.categories.uiux.2" defaultMessage="User interface design is the design of user interfaces for machines and software with the focus on maximizing usability and the user experience."/>,
    type: <FormattedMessage id="home.courses.id112" defaultMessage="Online Course"/>,
    availability: "24/7",
    price: 150,
    duration: 6,
    category: [categories.ui, categories.ux],
    svg: <Design />,
    link: "/Courses/graphic-design",
  },
  {
    name: <FormattedMessage id="home.categories.Wordpress.1" defaultMessage="Introduction to Wordpress"/>,
    description:
    <FormattedMessage id="home.categories.Wordpress.2" defaultMessage="Wordpress is the no.1 Website Builder in the industry. You can start your own blog, online shop and much more for free..."/>,
    type: <FormattedMessage id="home.courses.id112" defaultMessage="Online Course"/>,
    availability: "24/7",
    price: 100,
    duration: 4,
    category: [categories.webPlatform, categories.frontend],
    svg: <Wordpress />,
    link: "/Courses/wordpress",
  },
];

export const TeacherData = [
  {
    name: "Bleart Kepuska",
    job: "Graphic / Visual Designer / Photo Editor",
    Followers: "10 587",
    Following: "26",
    img: "TeacherSkill_Bleart BG",
  },
  {
    name: "Rrezon Orllati",
    job: "Graphic / Visual Designer / UI / UX",
    Followers: "9 478",
    Following: "18",
    img: "TeacherSkill_Rrezon BG",
  },
  {
    name: "Fatbardh Mulaku",
    job: "Developer / Frontend / React / HTML",
    Followers: "175 578",
    Following: "198",
    img: "TeacherSkill_Fatbardh BG",
  },
  {
    name: "Albion Metolli",
    job: "UI UX Designer / Illustration / Visual Designer",
    Followers: "24 548",
    Following: "68",
    img: "TeacherSkill_Albion BG",
  },
  {
    name: "Albrim Paqarizi",
    job: "Developer / Frontend / React / HTML",
    Followers: "145 578",
    Following: "198",
    img: "TeacherSkill_Albrim BG",
  },
];
