import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import { translateFile as messages } from "./messages/index";
import flatten from "flat";

const ProviderLang = ({ children }) => {
  const lang = useSelector((state) => state.lang.locale);

  return (
    <IntlProvider
      key={lang}
       locale={lang}
      // locale="en-GB" 
    /*   defaultRichTextElements={{
        b: (chunks) => <b>{chunks}</b>,
        br: () => <br />,
      }} */
      defaultLocale="en-GB" 
     /*  messages={messages[lang]} */
      messages={flatten(messages[lang])}
      textComponent={Fragment}
    >
      {children}
    </IntlProvider>
  );
};

ProviderLang.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default ProviderLang;
