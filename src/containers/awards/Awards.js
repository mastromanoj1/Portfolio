import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "../../assests/images/gcp_logo.png";

import { awards } from "../../portfolio.js";
// Transform

export default class Awards extends Component {
  render() {
    const Icon = (icon_name, fill_colour) => {
      return (
        <span
          className="iconify"
          data-icon={icon_name}
          style={{ color: fill_colour }}
          data-inline="false"
        ></span>
      );
    };
    return (
      <VerticalTimeline>
        {awards.map((ele) => {
          console.log(ele, "ele");
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              contentArrowStyle={{
                borderRight: "7px solid" + ele.icon_backdrop,
              }}
              date={ele.year}
              iconStyle={{ background: ele.icon_backdrop }}
              icon={Icon(ele.icon, ele.icon_color)}
            >
              <div className="card-align">
                <h3 className="vertical-timeline-element-title ">
                  {ele.title}
                </h3>
                <img src={ele.img_url}></img>
                <h4 className="vertical-timeline-element-subtitle">
                  {ele.subTitle}
                </h4>
                <p> {ele.description}</p>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    );
  }
}
