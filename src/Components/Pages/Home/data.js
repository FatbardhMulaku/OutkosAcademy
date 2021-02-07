import { ReactComponent as React } from "../../../Assets/Svg/react.svg";
import { ReactComponent as Wordpress } from "../../../Assets/Svg/wordpress.svg";
import { ReactComponent as Laravel } from "../../../Assets/Svg/laravel.svg";
import { ReactComponent as Flutter } from "../../../Assets/Svg/flutter.svg";
import { ReactComponent as Design } from "../../../Assets/Svg/uiux.svg";

export const UseFeatures = {
	title: "Start Learning New Things",
	btn: "Apply Now",
};

export const Banner = {
	title: "Learn Valuable Skills from the World's Best",
  
	desc:
	  "Say goodbye to generic instructions. Start learning practical skills that earn you raises and advance your career.",
  
	btn: "Learn More",

	lists:[
		{
			list:"Success Guaranteed"
		},
		{
			list:"Certified Courses"
		},
		{
			list:"Verified Teachers"
		}
	]
  };

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
    name: "PHP/Laravel for Beginners",
    description: "PHP is a server scripting language, Laravel is a rapid application development framework with easy learning curve.",
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
];

export const TeacherData = [
    {
      name: "Bleart Kepuska",
      job: "Graphic / Visual Designer / Photo Editor",
      Followers: "10 587",
      Following: "26",
      img:"TeacherSkill_Bleart BG",
    },
    {
      name: "Rrezon Orllati",
      job: "Graphic / Visual Designer / UI / UX",
      Followers: "9 478",
      Following: "18",
      img:"TeacherSkill_Rrezon BG",
    },
    {
      name: "Fatbardh Mulaku",
      job: "Developer / Frontend / React / HTML",
      Followers: "175 578",
      Following: "198",
      img:"TeacherSkill_Fatbardh BG",
    },
    {
      name: "Albion Metolli",
      job: "UI UX Designer / Illustration / Visual Designer",
      Followers: "24 548",
      Following: "68",
      img:"TeacherSkill_Albion BG",
    },
    {
      name: "Albrim Paqarizi",
      job: "Developer / Frontend / React / HTML",
      Followers: "145 578",
      Following: "198",
      img:"TeacherSkill_Albrim BG",
    },
];