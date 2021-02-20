import React from "react";
import { FormattedMessage } from "react-intl";

const translate = (id, txt) => (
  <FormattedMessage id={id} defaultMessage={txt} />
);

export default translate;
