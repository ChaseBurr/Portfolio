import React, { Component } from "react";
import Particles from "react-particles-js";
import { TweenMax, TimelineLite, Power3 } from "gsap/all";
import Projects from "../Projects";

import Navbar from "../Navbar";

import Section from "../Section";
import AboutSection from "../AboutSection";

import styles from "./../../css/Home.module.scss";

const primaryColor = "#171715";
const secondaryColor = "#2d3436";

class Home extends Component {
     constructor(props) {
          super(props);

          // Timelines
          this.frontPageTimeline = new TimelineLite();
     }

     componentDidMount() {
          //   improve load time
          TweenMax.to(document.querySelector(".home"), 0, {
               css: { visibility: "visible" },
          });

          // elements
          const title = this.fontPageContent.querySelector("h1");
          const subTitle = this.fontPageContent.querySelector("h3");
          const viewMyWorkBtn = this.fontPageContent.querySelector("a");

          //  create timeline for frontPageTimeline
          this.frontPageTimeline
               .from(title, 1.3, {
                    x: -1300,
                    ease: Power3.easeInOut,
               })
               .from(subTitle, { x: -1300, ease: Power3.easeInOut }, 1)
               .from(viewMyWorkBtn, { x: -1300, ease: Power3.easeInOut }, 1.3)
               .from(this.navbar, { y: 100, ease: Power3.easeInOut }, 1.4);

          window.onscroll = function () {
               stickyNavbar();
               activeNavbar();
          };

          let navbar = document.querySelector(".navbar");
          let offSet = navbar.offsetTop;
          let home = document.querySelector(".home");
          let about = document.querySelector(".about");
          let portfolio = document.querySelector(".portfolio");
          let contact = document.querySelector(".nav-contact");

          function stickyNavbar() {
               if (window.pageYOffset >= offSet) {
                    navbar.classList.add("sticky");
               } else {
                    navbar.classList.remove("sticky");
               }
          }

          function activeNavbar() {
               if (window.pageYOffset >= offSet - 100) {
                    // Home tab active
                    home.classList.add("active");
                    about.classList.remove("active");
               }
               if (window.pageYOffset >= offSet) {
                    // About tab active
                    about.classList.add("active");
                    home.classList.remove("active");
                    portfolio.classList.remove("active");
               }
               if (window.pageYOffset >= offSet + 725) {
                    // portfolio tab active
                    portfolio.classList.add("active");
                    about.classList.remove("active");
               }
               if (window.pageYOffset >= offSet + 1900) {
                    // contact tab active
                    portfolio.classList.remove("active");
               }
          }
     }

     render() {
          return (
               <div className="home-page" ref={(el) => (this.home = el)}>
                    <div className={styles.main} id="font-page">
                         <div
                              className={styles.main_content}
                              ref={(el) => (this.fontPageContent = el)}
                         >
                              <h1>
                                   Hello, I'm <span>Chase Burr</span>
                              </h1>
                              <h3>I'm a Developer</h3>
                              <a href="#portfolio" className="btn btn-primary">
                                   <span>View My Work</span>
                                   <img src="./../../files/scroll.gif" alt="" />
                              </a>
                         </div>
                         <div className={styles.scroll_gif}></div>
                         <div className="particles">
                              <Particles />
                         </div>
                         <Navbar navbar={this.navbar} />
                    </div>

                    <Section
                         header="about"
                         backgroundColor={primaryColor}
                         ref={(el) => (this.about = el)}
                         hrColor={secondaryColor}
                         hr
                    >
                         <AboutSection />
                         <div style={{ paddingBottom: "100px" }} />
                    </Section>

                    <div id="portfolio" />
                    <Section header="PROJECTS" backgroundColor={secondaryColor}>
                         <Projects />
                    </Section>

                    {/* <Section
                         header="education"
                         backgroundColor={primaryColor}
                         hrColor={secondaryColor}
                         hr
                    ></Section>

                    <div id="work" />
                    <Section
                         header="Work History"
                         backgroundColor={secondaryColor}
                         hrColor={primaryColor}
                         hr
                    >
                         <div className="job-list">
                              <div className="job">
                                   <div>
                                        <div className="company-name">
                                             Sumofiber
                                        </div>
                                        <div className="timeline">
                                             Sep. 2015 - Present
                                        </div>
                                   </div>
                                   <div className="job-description">
                                        <ul>
                                             <li>
                                                  Receive inbound customer calls
                                                  to provide technical support.
                                             </li>
                                             <li>
                                                  Remotely troubleshoot issues.
                                             </li>
                                             <li>
                                                  Created an online order form
                                                  in ReactJS using multiple APIs
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
                    </Section> */}
               </div>
          );
     }
}

export default Home;
