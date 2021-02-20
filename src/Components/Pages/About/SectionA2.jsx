import React from "react";
import Divider from "../../Shared/Divider";
import ListItem from "../../Shared/ListItem/ListItem";
import { items } from "./data";
import { FormattedMessage } from "react-intl";

function SectionA2() {
  return (
    <div className="SectionA2 container">
      <Divider width="15%" />
      <h4>
        <FormattedMessage
          id="whyOutkos.title.10"
          defaultMessage="Why Outkos Academy?"
        />
      </h4>
      <div className="SectionA2__box">
        <div>
          <div className="SectionA2__img BG" />
        </div>
        <div className="my-auto">
          <p>
            <span>
              <FormattedMessage
                id="whyOutkos.title.span"
                defaultMessage="Outkos Academy "
              />
            </span>
            <FormattedMessage
              id="whyOutkos.desc.1"
              defaultMessage=" offers an educational framework that
            merges market needs and the contemporary concept of teaching. We
            provide both theoretical and practical skills which are quickly
            acquired and qualify you for the profession of your dreams."
            />
          </p>
          <div className="teacher-skills">
            {items.map(({ item }, index) => (
              <ListItem key={index}>{item}</ListItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionA2;
