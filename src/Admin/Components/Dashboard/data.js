import { FormattedMessage } from "react-intl";

export const studentsUp = [
	{
    	name: <FormattedMessage id="GraphicDesign.studentsUp.1" defaultMessage="Bardhi" />,
	},
	{
    	name: <FormattedMessage id="GraphicDesign.studentsUp.2" defaultMessage="Fisnik" />,
	}
];

export const studentsDown = [
	{
    	name: <FormattedMessage id="GraphicDesign.studentsDown.1" defaultMessage="Drilon" />,
	},
	{
    	name: <FormattedMessage id="GraphicDesign.studentsDown.2" defaultMessage="Filloreta" />,
	},
	{
    	name: <FormattedMessage id="GraphicDesign.studentsDown.3" defaultMessage="Zana" />,
	}
];

export const NewApplications = [
	{
		name:"Endrit Gashi",
		desc:"Hello Bleart, I am a Beginner Designer looking forward to learn more about design as it is my main career focus. Thanks in Advance.",
		btn1:"Accept",
		btn2:"Deny",
		btn3:"Ask a Question",
	},
	{
		name:"Rina Krasniqi",
		desc:"Hello Bleart, I am a Beginner Designer looking forward to learn more about design as it is my main career focus. Thanks in Advance..",
		btn1:"Accept",
		btn2:"Deny",
		btn3:"Ask a Question",
	},
	/* {
		name:"Robert Demaj",
		desc:"Hello Bleart, I am a Beginner Designer looking forward to learn more about design as it is my main career focus. Thanks in Advance.",
		btn1:"Accept",
		btn2:"Deny",
		btn3:"Ask a Question",
	} */
];

var today = new Date();
var dd = today.getDate();

export const ScheduleDate = [
	{
		date: dd,
		desc:"Designers Meeting",
		info:"08:00 - 10:00",
	},
	{
		date: dd+1,
		desc:"Grading Deadline",
		info:"11:00 - 12:30",
	},
	{
		date: dd+3,
		desc:"New Course Prep",
		info:"13:00 - 16:00",
	}
];

export const ChatData = [
	{
		txt:"I sent the next tasks for you...",
		time:"25m ago",
		layout:"ChatLine2"
	},
	{
		txt:"Thanks bro, will do them soon",
		time:"13m ago",
	},
	{
		txt:"Looking forward to do them",
		time:"11m ago",
	}
];

export const DataFiles = [
	{
		title:"ZIP",
		type:"Color Rules & Harmonies"
	},
	{
		title:"JPG",
		type:"Reference Image"
	},
	{
		title:"DOC",
		type:"Steps & Workflow"
	},
	{
		title:"ZIP",
		type:"Color Rules"
	},
]