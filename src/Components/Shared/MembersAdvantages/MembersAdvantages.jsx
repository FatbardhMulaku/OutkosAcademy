import React from "react";
import "./MembersAdvantages.scss";
import { ReactComponent as Certificate } from "../../../Assets/Svg/certificate.svg";
import { ReactComponent as UserPlus } from "../../../Assets/Svg/user-plus.svg";
import { ReactComponent as Watch } from "../../../Assets/Svg/watch.svg";
import { ReactComponent as Check } from "../../../Assets/Svg/check.svg";
import SvgCard from "../SvgCard/SvgCard";

const MembersAdvantages = () => {
  return (
    <div className="members-advantages">
      <div className="main-container">
        <h2 className="sub-title">Benefits from being a Member</h2>

        <div className="benefits-area">
          <SvgCard title="Certificate" styles="center borderless" svg={<Certificate className="certificate fill-style" />}>
            <p className="paragraph-3">Earn a Certificate of Completion after you take a Course. This is a Big Plus for you...</p>
          </SvgCard>
          <SvgCard title="Join Us" styles="center borderless beforeLeftHalf"  svg={<UserPlus className="user-plus stroke-style" />}>
            <p className="paragraph-3">
              <b>20 000 000+</b> People have taken our Courses
            </p>
          </SvgCard>
          <SvgCard title="Duration" styles="center borderless beforeLeftHalf hideBeforeIpad"  svg={<Watch className="watch stroke-style" />}>
            <p className="paragraph-3">
              Time of completion for most courses is <b>~ 12 Hours</b>
            </p>
          </SvgCard>
          <SvgCard title="Prerequisites" styles="center borderless beforeLeftHalf"  svg={<Check className="check stroke-style" />}>
            <p className="paragraph-3">
              You <b>Don't</b> need any knowledge beforehand for most of the Courses
            </p>
          </SvgCard>
        </div>
      </div>
    </div>
  );
};

export default MembersAdvantages;
