import React, { Component } from "react";
import { Fade } from "react-reveal";

import Awards from "../../containers/awards/Awards";
import AwardImg from "./AwrdsImg";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
class Home extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                <AwardImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Achivements
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  Participation and Awards
                </p>
              </div>
            </div>
          </Fade>
          <Awards theme={this.props.theme} />

          {/* time line comes here */}
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
