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

const categories = {
  frontend: "Frontend Developer",
  ui: "User Interface",
  ux: "User Experience",
  react: "React Developer",
  angular: "Angular Developer",
  backend: "Backend Developer",
  mobile: "Mobile Development",
  webPlatform: "Web Platforms",
};

export const courses = [
  {
    id: "reactjs",
    name: "ReactJs",
    description:
      "React is a JavaScript library for building userinterfaces. It is maintained by Facebook and a community of individual developers and companies.",
    type: "Online Course",
    availability: "24/7",
    price: 200,
    duration: 16,
    category: [categories.frontend, categories.react],
    svg: <React />,
    link:"/Courses/react"
  },
  {
    id: "java",
    name: "Java Basics for Beginners",
    description: "Java is one of the most popular programming languages used in professional application development.",
    type: "Online Course",
    availability: "24/7",
    price: 240,
    duration: 35,
    category: [categories.backend],
    svg: <Java />,
    link:"/Courses/java"
  },
  {
    name: "PHP/Laravel for Beginners",
    description: "Laravel is a rapid application development framework with easy learning curve.",
    type: "Online Course",
    availability: "24/7",
    price: 150,
    duration: 20,
    category: [categories.backend],
    svg: <Laravel />,
    link:"/Courses/php"
  },
  {
    name: "Flutter Mobile for Beginners",
    description:
      "Flutter is Google's UI toolkit for crafting beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
    type: "Online Course",
    availability: "24/7",
    price: 220,
    duration: 25,
    category: [categories.mobile],
    svg: <Flutter />,
    link:"/Courses/flutter"
  },
  {
    name: "UI/UX Design for Beginners",
    description:
      "User interface design is the design of user interfaces for machines and software with the focus on maximizing usability and the user experience.",
    type: "Online Course",
    availability: "24/7",
    price: 150,
    duration: 6,
    category: [categories.ui, categories.ux],
    svg: <Design />,
    link:"/Courses/graphic-design"
  },
  {
    name: "Training for Angular",
    description: "Angular is an application design framework  and development platform for creating  efficient and sophisticated single-page apps",
    type: "Online Course",
    availability: "24/7",
    price: 250,
    duration: 25,
    category: [categories.angular, categories.frontend],
    svg: <Angular />,
    link:"/Courses/angular"
  },
  {
    name: "VueJs Advanced Training",
    description:
      "Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.",
    type: "Online Course",
    availability: "24/7",
    price: 200,
    duration: 12,
    category: [categories.frontend],
    svg: <Vue />,
    link:"/Courses/vue"
  },
  {
    name: "Introduction to Wordpress",
    description: "Wordpress is the no.1 Website Builder in the industry. You can start your own blog, online shop and much more for free...",
    type: "Online Course",
    availability: "24/7",
    price: 100,
    duration: 4,
    category: [categories.webPlatform, categories.frontend],
    svg: <Wordpress />,
    link:"/Courses/wordpress"
  },
  {
    name: "Python Training",
    description:
      "Python is an interpreted, high-level, general-purpose programming language. Python's design philosophy emphasizes code readability.",
    type: "Online Course",
    availability: "24/7",
    price: 200,
    duration: 17,
    category: [categories.backend],
    svg: <Python />,
    link:"/Courses/python"
  },
  {
    id: "Golang",
    name: "Golang  Training",
    description:
      "Go (or Golang) is an open source programming language designed to build fast, reliable, and efficient software at scale.",
    type: "Online Course",
    availability: "24/7",
    price: 70,
    duration: 7,
    category: [categories.frontend],
    svg: <GoLang />,
    link:"/Courses/Golang"
  },
];
