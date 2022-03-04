import React, { useRef } from "react";
import { Link } from "react-router-dom";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import Select from "../components/select/select";
import Option from "../components/select/option";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";

SwiperCore.use([Navigation, Pagination]);

const Landing = () => {
  const num1PrevRef = useRef(null);
  const num1NextRef = useRef(null);

  const testimonialsPrevRef = useRef(null);
  const testimonialsNextRef = useRef(null);

  return (
    <div className="landing-container">
      <div className="appbar">
        <div className="section header">
          <div className="page-container">
            <div className="d-flex justify-content-between align-items-center">
              <div className="contact">
                <a className="me-50" href="tel:+65 3158 5747">
                  <img src="./assets/vectors/call.svg" alt="call" /> +65 3158
                  5747
                </a>
                <a href="mailto:incodm@gmail.com">
                  <img src="./assets/vectors/email.svg" alt="email" />
                  incodm@gmail.com
                </a>
              </div>
              <div className="language">
                <Select rootClassName="mb-0" placeholder="Canada (English)">
                  <Option value="Canada (English)">Canada (English)</Option>
                  <Option value="UK (English)">UK (English)</Option>
                </Select>
              </div>
            </div>
          </div>
        </div>
        <div className="section navbar">
          <div className="page-container pt-30">
            <Link className="logo" to="/">
              <img src="./assets/vectors/logo.svg" alt="logo" />
            </Link>
            <div className="nav-container">
              <div className="nav">
                <Link to="/products">Products</Link>
                <Link to="/solution">Solution</Link>
                <Link to="/service">Customer Stories</Link>
                <Link to="/resources">Resources</Link>
              </div>
              <div className="btns">
                <button
                  className="btn btn-primary p-2"
                  style={{ width: 42, height: 42 }}
                >
                  <img src="./assets/vectors/magnifier.svg" alt="magnifier" />
                </button>
                <button className="btn btn-primary">REQUEST A DEMO</button>
                <button className="btn btn-primary-outlined no-min-width">
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section hero">
        <div className="page-container">
          <div className="container-fluid px-0">
            <div className="row">
              <div className="col-lg-6">
                <div className="title-sm">CONSTRUCION MANAGEMENT SOFTWARE</div>
                <h1 className="mt-20 mb-30">
                  The <span className="text-primary-1">Construction</span> Cost
                  Management Report
                </h1>

                <p className="mb-50">
                  See how Procore breaks down communication silos from precon to
                  closeout so you can build with less risk and better profits.
                  Easy-to-use, mobile project management software that improves
                  efficiency.
                </p>

                <div className="btns-container">
                  <button className="me-20 btn btn-primary">
                    REQUEST A DEMO
                  </button>
                  <button className="btn btn-primary-outlined no-min-width">
                    LOGIN
                  </button>
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  className="w-100"
                  src="./assets/vectors/landing-hero-right.svg"
                  alt="vector"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section brands">
        <div className="page-contaienr">
          <div className="container-fluid px-0">
            <div className="row gx-5">
              <div className="col-lg-3 text-center">
                <img src="./assets/vectors/brand-1.svg" alt="brand" />
              </div>
              <div className="col-lg-3 text-center">
                <img src="./assets/vectors/brand-2.svg" alt="brand" />
              </div>
              <div className="col-lg-3 text-center">
                <img src="./assets/vectors/brand-3.svg" alt="brand" />
              </div>
              <div className="col-lg-3 text-center">
                <img src="./assets/vectors/brand-4.svg" alt="brand" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section contributors">
        <div className="page-container">
          <div className="main-title">
            <h2>
              <span className="text-primary-1">1M+</span> construction projects.
              <span className="text-primary-1">125+</span> countries.
            </h2>

            <p>
              See how Procore breaks down communication silos from precon to
              closeout so you can build with less risk and better profits.
              Easy-to-use, mobile project management software that improves
              efficiency.
            </p>
          </div>

          <div className="designations">
            <div className="designation-item active">
              <img src="./assets/vectors/user-1.svg" alt="user-1" />

              <h3>Owner</h3>
            </div>
            <div className="designation-item">
              <img src="./assets/vectors/user-2.svg" alt="user-2" />

              <h3>Main Contractor</h3>
            </div>
            <div className="designation-item">
              <img src="./assets/vectors/user-3.svg" alt="user-3" />

              <h3>Sub Contractor</h3>
            </div>
          </div>

          <div className="role-rights">
            <div className="container-fluid px-0">
              <div className="row gx-5">
                <div className="col-lg-6">
                  <h3 className="fs-28 fw-400 mb-50">
                    Take control of your construction projects with visibility
                    into every step of the process.
                  </h3>

                  <div className="rights-main">
                    {[
                      {
                        title: "Mange Data Across Projects",
                        text: "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.",
                      },
                      {
                        title: "Build Collaboratively",
                        text: "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.",
                      },
                      {
                        title: "Improve As You Grow",
                        text: "Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.",
                      },
                    ].map((el, idx) => {
                      const { title, text } = el;
                      return (
                        <Collapse
                          key={"coll" + idx}
                          icon="./assets/vectors/minus.svg"
                          title={title}
                        >
                          <p>{text}</p>
                        </Collapse>
                      );
                    })}
                  </div>

                  <button className="btn btn-primary mt-30">LEARN MORE</button>
                </div>
                <div className="col-lg-6 d-flex justify-content-center align-items-center">
                  <img
                    className="w-100 ms-lg-5"
                    src="./assets/img/house-plan.png"
                    alt="house-plan"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section products">
        <div className="page-container">
          <div className="main-title">
            <h2>
              Recommended <span className="text-primary-1">Products</span> for
              Main Contractors
            </h2>
            <p className="mt-20">
              See how Procore breaks down communication silos from precon to
              closeout so you can build with less risk and better profits.
              Easy-to-use, mobile project management software that improves
              efficiency.
            </p>
          </div>

          <div className="container-fluid px-0">
            <div className="row g-3">
              {[
                {
                  icon: "./assets/vectors/product-1.svg",
                  name: "Project Management",
                  desc: "Easy-to-use, mobile project management software that improves efficiency by connecting site and office for real-time visibility.",
                },
                {
                  icon: "./assets/vectors/product-2.svg",
                  name: "Project Financials",
                  desc: "Manage accurate budgets with reliable data drawn from the site. See in real time how your spending decisions affect the profit you’ll have at closeout.",
                },
                {
                  icon: "./assets/vectors/product-3.svg",
                  name: "Quality & Safety",
                  desc: "Mitigate risks and make tough decisions using real-time data from the site. Manage site diaries, inspections and incidents all in one place.",
                },
                {
                  icon: "./assets/vectors/product-4.svg",
                  name: "Design Coordination",
                  desc: "Bridge the gap between VDC teams and the operations team to quickly log, assign and access coordination issues in one central location.",
                },
                {
                  icon: "./assets/vectors/product-5.svg",
                  name: "Invoice Management",
                  desc: "Streamline billing across stakeholders so everyone has access to the latest information in one organised platform.",
                },
                {
                  icon: "./assets/vectors/product-6.svg",
                  name: "Tender Management",
                  desc: "Save time throughout the tendering process with features that let you distribute information, collect tenders and track coverage all in one place.",
                },
              ].map((el, idx) => {
                const { icon, name, desc } = el;

                return (
                  <div key={"prod" + idx} className="col-lg-4">
                    <div className="product-card text-center h-100">
                      <div className="h-100 d-flex flex-column justify-content-between">
                        <div>
                          <img className="mb-20" src={icon} alt="icon" />
                          <h4 className="fs-20 mb-10">{name}</h4>
                          <p>{desc}</p>
                        </div>

                        <button className="btn btn-primary-text mt-20">
                          LEARN MORE
                          <img
                            className="ms-20"
                            src="./assets/vectors/arrow-right.svg"
                            alt="arrow-right"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="section integrations">
        <div className="page-container">
          <div className="main">
            <div className="container-fluid px-0">
              <div className="row">
                <div className="col-lg-7 col-xxl-6">
                  <div className="text">
                    <h2 className="mb-20">
                      Tap into 300+ integrations. Curated for you.
                    </h2>

                    <p>
                      See how connecting the apps you love with the Procore
                      platform makes it easy to seamlessly manage construction.
                    </p>
                  </div>
                </div>

                <div className="col-lg-5 col-xxl-6">
                  <div className="company-brands">
                    <div className="row">
                      <div className="col-4 col-xxl">
                        <img
                          src="./assets/vectors/integration-1.svg"
                          alt="integration"
                        />
                      </div>
                      <div className="col-4 col-xxl">
                        <img
                          src="./assets/vectors/integration-2.svg"
                          alt="integration"
                        />
                      </div>
                      <div className="col-4 col-xxl">
                        <img
                          src="./assets/vectors/integration-3.svg"
                          alt="integration"
                        />
                      </div>
                      <div className="col-4 col-xxl">
                        <img
                          src="./assets/vectors/integration-4.svg"
                          alt="integration"
                        />
                      </div>
                      <div className="col-4 col-xxl">
                        <img
                          src="./assets/vectors/integration-5.svg"
                          alt="integration"
                        />
                      </div>
                      <div className="col-4 col-xxl">
                        <img
                          src="./assets/vectors/integration-6.svg"
                          alt="integration"
                        />
                      </div>
                      <div className="col-4 col-xxl">
                        <img
                          src="./assets/vectors/integration-7.svg"
                          alt="integration"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section switch-to-us">
        <div className="page-container">
          <div className="main-title">
            <h2>
              There are so many <span className="text-primary-1">reasons</span>{" "}
              to switch to us.
            </h2>

            <p>
              See how Procore breaks down communication silos from precon to
              closeout so you can build with less risk and better profits.
              Easy-to-use, mobile project management software that improves
              efficiency.
            </p>
          </div>

          <div className="cards">
            <div className="container-fluid px-0">
              <div className="row">
                {[
                  {
                    img: "./assets/vectors/reason-1.svg",
                    title: "“From precon to closeout in one system.“",
                    desc: "Collaborate from precon to closeout by connecting your entire tech stack.",
                  },
                  {
                    img: "./assets/vectors/reason-2.svg",
                    title: "“Our safety culture impacts the future.“",
                    desc: "Make sure everyone goes home at the end of the day with a proactive",
                  },
                  {
                    img: "./assets/vectors/reason-1.svg",
                    title: "“From precon to closeout in one system.“",
                    desc: "See how owners, head contractors, and specialty contractors build better",
                  },
                  {
                    img: "./assets/vectors/reason-1.svg",
                    title: "“From precon to closeout in one system.“",
                    desc: "Move from slow, manual processes to the future an automated, digital ",
                  },
                ].map((el, idx) => {
                  const { img, title, desc } = el;

                  return (
                    <div key={"card-reason" + idx} className="col-lg-3">
                      <div className="reason-card">
                        <img className="w-100" src={img} alt="" />

                        <h4 className="fs-20 mt-20 mb-10">{title}</h4>

                        <p>{desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section testimonials">
        <div className="page-container">
          <div className="container-fluid px-0">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="left">
                  <div className="text">
                    <h2 className="mb-20">Happy customers</h2>

                    <p className="mb-20">
                      Feedback from these happy customers helps us in reaching
                      the heights
                    </p>
                  </div>

                  <div className="row g-3">
                    {[
                      {
                        icon: "./assets/vectors/happy-1.svg",
                        num: 2442,
                      },
                      {
                        icon: "./assets/vectors/happy-2.svg",
                        num: 2442,
                      },
                      {
                        icon: "./assets/vectors/happy-3.svg",
                        num: 2442,
                      },
                      {
                        icon: "./assets/vectors/happy-4.svg",
                        num: 2442,
                      },
                    ].map((el, idx) => {
                      const { icon, num } = el;

                      return (
                        <div className="col-lg-6" key={"rev" + idx}>
                          <div className="happy-card">
                            <img className="icon" src={icon} alt="icon" />

                            <div className="d-flex justify-content-center align-items-center mt-20 gap-3">
                              <div className="reviews flex-shrink-0">
                                <img
                                  className="me-1"
                                  src="./assets/vectors/star.svg"
                                  alt="star"
                                />
                                <img
                                  className="me-1"
                                  src="./assets/vectors/star.svg"
                                  alt="star"
                                />
                                <img
                                  className="me-1"
                                  src="./assets/vectors/star.svg"
                                  alt="star"
                                />
                                <img
                                  className="me-1"
                                  src="./assets/vectors/star.svg"
                                  alt="star"
                                />
                                <img
                                  className="me-1"
                                  src="./assets/vectors/star-dim.svg"
                                  alt="star-dim"
                                />
                              </div>

                              <div className="num">{num}</div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="right">
                  <div className="main d-flex flex-column">
                    <div className="text-end mb-20">
                      <img
                        className="quotes"
                        src="./assets/vectors/quotes.svg"
                        alt="quotes"
                      />
                    </div>

                    <div className="slides flex-grow-1">
                      <div className="main-slides">
                        <Swiper
                          onInit={(swiper) => {
                            function update() {
                              swiper.params.navigation.prevEl =
                                testimonialsPrevRef.current;
                              swiper.params.navigation.nextEl =
                                testimonialsNextRef.current;
                              swiper.navigation.init();
                              swiper.navigation.update();

                              console.log(
                                testimonialsPrevRef,
                                testimonialsNextRef
                              );
                            }

                            update();

                            setTimeout(update, 1000);
                          }}
                          navigation={{
                            prevEl: testimonialsPrevRef.current,
                            nextEl: testimonialsNextRef.current,
                          }}
                          slidesPerView={1}
                        >
                          {[
                            {
                              img: "./assets/vectors/testimonial-user-1.svg",
                              name: "Jenny Wilson",
                              designation: "Vice President",
                              comment:
                                "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.",
                            },
                            {
                              img: "./assets/vectors/testimonial-user-1.svg",
                              name: "Jenny Wilson",
                              designation: "Vice President",
                              comment:
                                "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.",
                            },
                            {
                              img: "./assets/vectors/testimonial-user-1.svg",
                              name: "Jenny Wilson",
                              designation: "Vice President",
                              comment:
                                "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.",
                            },
                          ].map((el, idx) => {
                            const { img, name, designation, comment } = el;

                            return (
                              <SwiperSlide key={"tesim" + idx}>
                                <div className="tesim">
                                  <div className="d-flex title">
                                    <img src={img} alt="testimonial-user" />

                                    <div className="text ms-3">
                                      <h4 className="fs-20">{name}</h4>
                                      <p className="designation mt-2">
                                        {designation}
                                      </p>
                                    </div>
                                  </div>

                                  <div className="comment mt-4">{comment}</div>
                                </div>
                              </SwiperSlide>
                            );
                          })}
                        </Swiper>
                      </div>

                      <div className="navigation mt-5">
                        <button ref={testimonialsPrevRef} className="btn">
                          <img
                            className="slider-nav prev"
                            src="./assets/vectors/slider-nav-prev.svg"
                            alt="prev"
                          />
                        </button>
                        <button ref={testimonialsNextRef} className="btn">
                          <img
                            className="slider-nav next ms-20"
                            src="./assets/vectors/slider-nav-next.svg"
                            alt="next"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section number-1">
        <div className="page-container">
          <div className="main-title">
            <h2>
              Procore named #1 in
              <span className="text-primary-1"> JBKnowledge’s Annual</span>{" "}
              ConTech Report.
            </h2>
            <p>
              See how Procore breaks down communication silos from precon to
              closeout so you can build with less risk and better profits.
              Easy-to-use, mobile project management software that improves
              efficiency.
            </p>
          </div>

          <div className="cards">
            <div className="swiper-wrap">
              <div
                ref={num1PrevRef}
                className="btn prev btn-slider-nav btn-contained-2"
              >
                <img src="./assets/vectors/arrow-left.svg" alt="arrow-left" />
              </div>
              <div
                ref={num1NextRef}
                className="btn next btn-slider-nav btn-contained-2"
              >
                <img src="./assets/vectors/arrow-right.svg" alt="arrow-right" />
              </div>
              <Swiper
                onInit={(swiper) => {
                  function update() {
                    swiper.params.navigation.prevEl = num1PrevRef.current;
                    swiper.params.navigation.nextEl = num1NextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }

                  update();

                  setTimeout(update, 1000);
                }}
                navigation={{
                  prevEl: num1PrevRef.current,
                  nextEl: num1NextRef.current,
                }}
                spaceBetween={20}
                slidesPerView={3}
              >
                {[
                  {
                    img: "./assets/vectors/report-1.svg",
                    text: "Construction Executive Magazine Top Construction Technology Firms",
                  },
                  {
                    img: "./assets/vectors/report-2.svg",
                    text: "G2 Best Construction Management Software",
                  },
                  {
                    img: "./assets/vectors/report-3.svg",
                    text: "The Software Report Top 100 Software Companies of 2021",
                  },
                  {
                    img: "./assets/vectors/report-1.svg",
                    text: "Construction Executive Magazine Top Construction Technology Firms",
                  },
                  {
                    img: "./assets/vectors/report-2.svg",
                    text: "G2 Best Construction Management Software",
                  },
                  {
                    img: "./assets/vectors/report-3.svg",
                    text: "The Software Report Top 100 Software Companies of 2021",
                  },
                ].map((el, idx) => {
                  const { img, text } = el;

                  return (
                    <SwiperSlide key={"rep-card" + idx}>
                      <div className="report-card">
                        <img src={img} alt="rep-img" />

                        <p className="mt-20 text-dark">{text}</p>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className="section get-it">
        <div className="page-container">
          <div className="main">
            <div className="main-title mb-20">
              <h2>See what Procore can do for you.</h2>

              <p>
                Our users reported 90%+ customer satisfaction in 2020. Schedule
                a personal walkthrough to see the impact our software can have
                on your business.
              </p>
            </div>

            <div className="buttons text-center">
              <a href="#0">
                <img
                  className="me-2"
                  src="./assets/vectors/download-google.svg"
                  alt="google"
                />
              </a>
              <a href="#0">
                <img
                  className="ms-2"
                  src="./assets/vectors/download-app-store.svg"
                  alt="app-store"
                />
              </a>
            </div>

            <div className="d-flex justify-content-center mt-20">
              <button className="btn btn-white">REQUEST DEMO</button>
            </div>
          </div>
        </div>
      </div>

      <div className="section landing-footer">
        <div className="main">
          <div className="page-container">
            <div className="container-fluid px-0">
              <div className="row g-xxl-5">
                <div className="col-2">
                  <div className="logo">
                    <img
                      style={{ maxWidth: 120 }}
                      className="d-block w-100"
                      src="./assets/vectors/logo.svg"
                      alt="logo"
                    />
                  </div>
                </div>
                <div className="col-2">
                  <h4>Products</h4>

                  <div className="links">
                    <a href="#0">Platform Overview</a>
                    <a href="#0">Analytics</a>
                    <a href="#0">App Marketplace</a>
                    <a href="#0">BIM</a>
                    <a href="#0">Design Cooperation</a>
                  </div>
                </div>
                <div className="col-2">
                  <h4>Solutions</h4>

                  <div className="links">
                    <a href="#0">Main Contractors</a>
                    <a href="#0">Owners</a>
                    <a href="#0">Subcontractors</a>
                  </div>
                </div>
                <div className="col-2">
                  <h4>Events</h4>

                  <div className="links">
                    <a href="#0">Groundbreak</a>
                    <a href="#0">Webinars</a>
                  </div>
                </div>
                <div className="col-2">
                  <h4>Resources</h4>

                  <div className="links">
                    <a href="#0">Resource Center</a>
                    <a href="#0">eBooks</a>
                    <a href="#0">Community</a>
                    <a href="#0">Job Industry News</a>
                    <a href="#0">Support</a>
                  </div>
                </div>
                <div className="col-2">
                  <h4>Company</h4>

                  <div className="links">
                    <a href="#0">About</a>
                    <a href="#0">Blog</a>
                    <a href="#0">Careers</a>
                    <a href="#0">Investors</a>
                    <a href="#0">Legal</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer className="mt-0" />
    </div>
  );
};

export default Landing;
