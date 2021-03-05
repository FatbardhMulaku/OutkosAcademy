import { FormattedMessage } from "react-intl";

export const UpLinks = [
  {
    link: "admin_panel/dashboard",
    name: <FormattedMessage id="header.UpLinks.1" defaultMessage="Dashboard" />,
  },
  {
    link: "admin_panel/courses",
    name: <FormattedMessage id="header.UpLinks.2" defaultMessage="Courses" />,
  },
  {
    link: "admin_panel/students",
    name: <FormattedMessage id="header.UpLinks.3" defaultMessage="Students" />,
  },
  {
    link: "admin_panel/schedule",
    name: <FormattedMessage id="header.UpLinks.4" defaultMessage="Schedule" />,
  },
  {
    link: "admin_panel/statistics",
    name: <FormattedMessage id="header.UpLinks.4" defaultMessage="Statistics" />,
  },
];

export const DownLinks = [
	{
	  link: "admin_panel/settings",
	  name: <FormattedMessage id="header.DownLinks.1" defaultMessage="Settings" />,
	},
	{
	  link: "admin_panel/account",
	  name: <FormattedMessage id="header.DownLinks.2" defaultMessage="Account" />,
	},
	{
	  link: "admin_panel/LogOut",
	  name: <FormattedMessage id="header.DownLinks.3" defaultMessage="Log Out" />,
	},
  ];

export const LinkItem = [
    {
      url: "/edit_profile",
      name: <FormattedMessage id="downmenu.header.item1" defaultMessage="Edit Profile" />,
    },
    {
      url: "/teach_another_class",
      name: <FormattedMessage id="downmenu.header.item2" defaultMessage="Teach Another Class" />,
    },
    {
      url: "/payout_settings",
      name: <FormattedMessage id="downmenu.header.item3" defaultMessage="Payout Settings" />,
    },
    {
      url: "/log_out",
      name: <FormattedMessage id="downmenu.header.item4" defaultMessage="Log Out" />,
    },
  
]
