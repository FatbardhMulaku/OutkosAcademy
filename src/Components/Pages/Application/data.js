import { FormattedMessage } from "react-intl";

export const Banner = {
  title: (
    <FormattedMessage
      id="Application.Banner.title"
      defaultMessage="After you apply here, the wait is over."
    />
  ),

  desc: (
    <FormattedMessage
      id="Application.Banner.desc"
      defaultMessage="We just ask for basic info about you you don't need anything special. Then we will contact you as soon as possible..."
    />
  ),
  btn: (
    <FormattedMessage
      id="Application.Banner.btn"
      defaultMessage="Get Started"
    />
  ),
};
