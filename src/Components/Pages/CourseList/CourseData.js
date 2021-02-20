import { ReactComponent as React } from "../../../Assets/Svg/react.svg";
import { ReactComponent as Angular } from "../../../Assets/Svg/angular.svg";
import { ReactComponent as Vue } from "../../../Assets/Svg/vue.svg";
import { ReactComponent as Wordpress } from "../../../Assets/Svg/wordpress.svg";
import { ReactComponent as GoLang } from "../../../Assets/Svg/GoLang.svg";
import { ReactComponent as Python } from "../../../Assets/Svg/python.svg";
import { ReactComponent as Java } from "../../../Assets/Svg/java.svg";
import { ReactComponent as Laravel } from "../../../Assets/Svg/laravel.svg";
import { ReactComponent as Flutter } from "../../../Assets/Svg/flutter.svg";
import { ReactComponent as Design } from "../../../Assets/Svg/uiux.svg";
import { FormattedMessage } from "react-intl";

const categories = {
  frontend: <FormattedMessage id="course.category.id1" defaultMessage="Frontend Developer"/>,
  ui: <FormattedMessage id="course.category.id2" defaultMessage="User Interface"/>,
  ux: <FormattedMessage id="course.category.id3" defaultMessage="User Experience"/>,
  react: <FormattedMessage id="course.category.id4" defaultMessage="React Developer"/>,
  angular: <FormattedMessage id="course.category.id5" defaultMessage="Angular Developer"/>,
  backend: <FormattedMessage id="course.category.id6" defaultMessage="Backend Developer"/>,
  mobile: <FormattedMessage id="course.category.id7" defaultMessage="Mobile Development"/>,
  webPlatform: <FormattedMessage id="course.category.id8" defaultMessage="Web Platforms"/>,
};

export const courses = [
  {
    id: "reactjs",
    name: "ReactJs",
    description:
    <FormattedMessage id="course.data.react.1" defaultMessage="React is a JavaScript library for building userinterfaces. It is maintained by Facebook and a community of individual developers and companies."/>,
    type: <FormattedMessage id="course.data.OnlineCourse.1" defaultMessage="Online Course"/>,
    availability: "24/7",
    price: 200,
    duration: 16,
    category: [categories.frontend, categories.react],
    svg: <React />,
    link:"/Courses/react"
  },
  {
    id: "java",
    name:<FormattedMessage id="course.data.java.1" defaultMessage="Java Basics for Beginners"/>,
    description: 
    <FormattedMessage id="course.data.java.2" defaultMessage="Java is one of the most popular programming languages used in professional application development."/>,
    type: <FormattedMessage id="course.data.OnlineCourse.1" defaultMessage="Online Course"/>,
    availability: "24/7",
    price: 240,
    duration: 35,
    category: [categories.backend],
    svg: <Java />,
    link:"/Courses/java"
  },
  {
    name: <FormattedMessage id="course.data.php.1" defaultMessage="PHP/Laravel for Beginners"/>,
    description: <FormattedMessage id="course.data.php.2" defaultMessage="Laravel is a rapid application development framework with easy learning curve."/>,
    type: <FormattedMessage id="course.data.OnlineCourse.1" defaultMessage="Online Course"/>,
    availability: "24/7",
    price: 150,
    duration: 20,
    category: [categories.backend],
    svg: <Laravel />,
    link:"/Courses/php"
  },
  {
    name: <FormattedMessage id="course.data.flutter.1" defaultMessage="Flutter Mobile for Beginners"/>,
    description:
    <FormattedMessage id="course.data.flutter.2" defaultMessage="Flutter is Google's UI toolkit for crafting beautiful, natively compiled applications for mobile, web, and desktop from a single codebase."/>,
    type: <FormattedMessage id="course.data.OnlineCourse.1" defaultMessage="Online Course"/>,
    availability: "24/7",
    price: 220,
    duration: 25,
    category: [categories.mobile],
    svg: <Flutter />,
    link:"/Courses/flutter"
  },
  {
    name: <FormattedMessage id="course.data.uiux.1" defaultMessage="UI/UX Design for Beginners"/>,
    description:
    <FormattedMessage id="course.data.uiux.2" defaultMessage="User interface design is the design of user interfaces for machines and software with the focus on maximizing usability and the user experience."/> ,
    type: <FormattedMessage id="course.data.OnlineCourse.1" defaultMessage="Online Course"/>,
    availability: "24/7",
    price: 150,
    duration: 6,
    category: [categories.ui, categories.ux],
    svg: <Design />,
    link:"/Courses/graphic-design"
  },
  {
    name: <FormattedMessage id="course.data.angular.1" defaultMessage="Training for Angular"/>,
    description: 
    <FormattedMessage id="course.data.angular.2" defaultMessage="Angular is an application design framework  and development platform for creating  efficient and sophisticated single-page apps"/>,
    type: <FormattedMessage id="course.data.OnlineCourse.1" defaultMessage="Online Course"/>,
    availability: "24/7",
    price: 250,
    duration: 25,
    category: [categories.angular, categories.frontend],
    svg: <Angular />,
    link:"/Courses/angular"
  },
  {
    name: <FormattedMessage id="course.data.vue.1" defaultMessage="VueJs Advanced Training"/>,
    description:
    <FormattedMessage id="course.data.vue.2" defaultMessage="Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable."/>,
    type: <FormattedMessage id="course.data.OnlineCourse.1" defaultMessage="Online Course"/>,
    availability: "24/7",
    price: 200,
    duration: 12,
    category: [categories.frontend],
    svg: <Vue />,
    link:"/Courses/vue"
  },
  {
    name: <FormattedMessage id="course.data.wordpress.1" defaultMessage="Introduction to Wordpress"/>,
    description: <FormattedMessage id="course.data.wordpress.2" defaultMessage="Wordpress is the no.1 Website Builder in the industry. You can start your own blog, online shop and much more for free..."/>,
    type: <FormattedMessage id="course.data.OnlineCourse.1" defaultMessage="Online Course"/>,
    availability: "24/7",
    price: 100,
    duration: 4,
    category: [categories.webPlatform, categories.frontend],
    svg: <Wordpress />,
    link:"/Courses/wordpress"
  },
  {
    name: <FormattedMessage id="course.data.python.1" defaultMessage="Python Training"/>,
    description:
    <FormattedMessage id="course.data.python.2" defaultMessage="Python is an interpreted, high-level, general-purpose programming language. Python's design philosophy emphasizes code readability."/>,
    type: <FormattedMessage id="course.data.OnlineCourse.1" defaultMessage="Online Course"/>,
    availability: "24/7",
    price: 200,
    duration: 17,
    category: [categories.backend],
    svg: <Python />,
    link:"/Courses/python"
  },
  {
    id: "Golang",
    name: <FormattedMessage id="course.data.golang.1" defaultMessage="Golang  Training"/>,
    description:
    <FormattedMessage id="course.data.golang.2" defaultMessage="Go (or Golang) is an open source programming language designed to build fast, reliable, and efficient software at scale."/>,
    type: <FormattedMessage id="course.data.OnlineCourse.1" defaultMessage="Online Course"/>,
    availability: "24/7",
    price: 70,
    duration: 7,
    category: [categories.frontend],
    svg: <GoLang />,
    link:"/Courses/Golang"
  },
];
