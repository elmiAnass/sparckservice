import Layout from "@/src/layout/Layout";
import dynamic from "next/dynamic";
import Link from "next/link";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Index2OnePage = () => {
  return (
    <Layout singleMenu footer={2}>
      {/* Hero Section Start */}
      <section
        id="home"
        className="hero-area-two pt-220 rpt-150 pb-80 rpb-50 rel z-1"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <h1 className="hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s">
            Sparck
            <span className="arrow">
            </span> <br/>
            Web Agancy
          </h1>
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-3 col-lg-4">
              <div className="hero-two-content mb-50 wow fadeInRight delay-0-2s">
                <p>
                Welcome to our web design agency in Morocco. We offer outstanding design and development services with a focus on personalized, creative, and high-performing solutions for your online success.</p>
                <div className="authors-text mt-45">
                  <img src="assets/images/hero/author1.png" alt="Author" />
                  <img src="assets/images/hero/author2.png" alt="Author" />
                  <img src="assets/images/hero/author3.png" alt="Author" />
                  <img src="assets/images/hero/author4.png" alt="Author" />
                  <i className="fal fa-plus" />
                  <span className="text">40+ Popular Clients</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-two-image mb-50 wow zoomIn delay-0-2s">
                <img src="assets/images/hero/hero-two.jpg" alt="Hero" />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="hero-two-btn mb-50 wow fadeInLeft delay-0-2s">
                <Link legacyBehavior href="https://api.whatsapp.com/send/?phone=212625821794&text&type=phone_number&app_absent=0">
                  <a className="explore-more">
                    <i className="fas fa-arrow-right" />{" "}
                    <span>Explore more</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}
      {/* Advertise Area Start */}
      <section className="advertise-banner-area rel z-1">
        <div className="container container-1290">
          <div className="row">
            <div className="col-lg-7 wow fadeInUp delay-0-2s">
              <div
                className="advertise-banner style-one bgc-primary"
                style={{
                  backgroundImage:
                    "url(assets/images/banner/add-banner-bg.png)",
                }}
              >
                <div className="image">
                  <img src="assets/images/banner/add-banner.png" alt="Banner" />
                </div>
                <div className="content mt-20">
                  <span className="number">30+</span>
                  <h6>Project Complete</h6>
                  <hr />
                  <p>Let's Work</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 wow fadeInUp delay-0-4s">
              <div
                className="advertise-banner style-two bg-white"
                style={{
                  backgroundImage: "url(assets/images/banner/star-vector.png)",
                }}
              >
                <h3>Innovative Web Development Solutions</h3>
                <hr className="mb-35" />
                <div className="authors-text">
                  <img src="assets/images/hero/author1.png" alt="Author" />
                  <img src="assets/images/hero/author2.png" alt="Author" />
                  <img src="assets/images/hero/author3.png" alt="Author" />
                  <img src="assets/images/hero/author4.png" alt="Author" />
                  <i className="fal fa-plus" />
                  <span className="text">
                    We denounce indignatione dislike mende charms
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Advertise Area End */}
      {/* Skills Area Start */}
      <section id="skills" className="skills-area pt-100 rpt-70 rel z-1">
        <div className="container container-1590">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <h2>our work technology</h2>
              </div>
            </div>
          </div>
          <div className="skills-wrap">
            <div className="skill-item">
              <img src="assets/images/skills/skill1.png" alt="Skill Icon" />
              <span className="text">Bootstrap</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill2.png" alt="Skill Icon" />
              <span className="text">HTML</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill3.png" alt="Skill Icon" />
              <span className="text">CSS</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill4.png" alt="Skill Icon" />
              <span className="text">javascript</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill5.png" alt="Skill Icon" />
              <span className="text">React</span>
            </div>

            <div className="skill-item">
              <img src="assets/images/skills/skill7.png" alt="Skill Icon" />
              <span className="text">php</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill8.png" alt="Skill Icon" />
              <span className="text">node.js</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill9.png" alt="Skill Icon" />
              <span className="text">Sass</span>
            </div>
            <div className="skill-item">
              <img src="assets/images/skills/skill10.png" alt="Skill Icon" />
              <span className="text">Angular</span>
            </div>
        
        
            <div className="skill-item">
              <img src="assets/images/skills/skill13.png" alt="Skill Icon" />
              <span className="text">Vue.js</span>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Area End */}
      {/* About Us Area start */}
      <section id="about" className="about-area pt-100 rpt-70 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7">
              <div className="about-content">
                <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">About Company</span>
                  <h2>Web Development Agency</h2>
                </div>
                <div className="text-left-border mt-60 mb-65 wow fadeInUp delay-0-2s">
                  <p>
                  Empower your online presence with Sparck Agency – your trusted partner in creating sleek, effective websites. Elevate your brand with our innovative design and cutting-edge technology
                  </p>
                </div>
                <div className="about-counter">
                  <div className="row">
                    <div className="col-md-4 col-sm-6">
                      <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-2s">
                        <Counter end={100} extraClass={"percent"} />
                        <span className="counter-title">
                          Clients Satisfactions
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-3s">
                        <Counter end={93} extraClass={"percent"} />
                        <span className="counter-title">Success Rating</span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-4s">
                        <Counter end={35} extraClass={"percent"} />
                        <span className="counter-title">Project Complete</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Service Style Four start */}
      <section
        id="services"
        className="service-area-four pt-110 rpt-85 pb-100 rpb-70"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Popular Services</span>
                <h2>We Provide Amazing Web Design Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInUp delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                    <i className="flaticon-development" />
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Web Development</a>
                    </Link>
                  </h5>
                </div>
                <div className="image">
                  <img
                    src="assets/images/services/service1.jpg"
                    alt="Service"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInDown delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                    <i className="flaticon-mobile-development" />
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Mobile Application</a>
                    </Link>
                  </h5>
                </div>
                <div className="image">
                  <img
                    src="assets/images/services/service2.jpg"
                    alt="Service"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInUp delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                    <i className="flaticon-brainstorming" />
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Team Agumentation</a>
                    </Link>
                  </h5>
                </div>
                <div className="image">
                  <img
                    src="assets/images/services/service3.jpg"
                    alt="Service"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInDown delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                    <i className="flaticon-brainstorming" />
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Design &amp; Branding</a>
                    </Link>
                  </h5>
                </div>
                <div className="image">
                  <img
                    src="assets/images/services/service4.jpg"
                    alt="Service"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInUp delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                    <i className="flaticon-abstract" />
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>React Js Development</a>
                    </Link>
                  </h5>
                </div>
                <div className="image">
                  <img
                    src="assets/images/services/service5.jpg"
                    alt="Service"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="service-four-item wow fadeInDown delay-0-2s">
                <div className="content">
                  <div className="icon-btn">
                    <i className="flaticon-ux" />
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Front-end development</a>
                    </Link>
                  </h5>
                </div>
                <div className="image">
                  <img
                    src="assets/images/services/service6.jpg"
                    alt="Service"
                  />
                </div>
              </div>
            </div>
        
         
          </div>
        </div>
      </section>
      {/* Service Style Four end */}
      {/* Headline area start */}
      <div className="headline-area bgc-primary pt-80 pb-65">
        <div className="container-fluid">
          <div className="headline-wrap marquee">
            <span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Design</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Product Design</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Web Development</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>SEO Optimization</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>UX/UI Strategy</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Graphics</b>
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      <section className="project-timeline-area pt-90 rpt-75 rel z-1">
        <div className="container container-1290">
          <div className="row justify-content-between align-items-center pb-25">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title mb-30 wow fadeInLeft delay-0-2s">
                <span className="sub-title mb-15">Recent Works Gallery</span>
                <h2>Lat’s Look Our Recent Project Gallery</h2>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link legacyBehavior href="/projects">
                <a className="theme-btn mb-25 wow fadeInRight delay-0-2s">
                  View More Projects <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-timeline wow fadeInUp delay-0-2s">
            <div className="content">
              <span className="serial-number">01</span>
              <h4>
                <Link legacyBehavior href="#">
                  <a>IPTV Website </a>
                </Link>
              </h4>
            </div>
            <div className="image">
              <img
                src="assets/images/projects/Project1.png"
                alt="Project TimeLine Image"
                height={250}
              />
            </div>
            <div className="right-btn">
              <Link legacyBehavior href="https://globalvisioniptv.tech/">
                <a className="details-btn">
                  <i className="fal fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-timeline wow fadeInUp delay-0-2s">
            <div className="content">
              <span className="serial-number">02</span>
              <h4>
                <Link legacyBehavior href="https://diamondtv.online/">
                  <a> Iptv website </a>
                </Link>
              </h4>
            </div>
            <div className="image">
              <img
                src="assets/images/projects/Project2.png"
                alt="Project TimeLine Image"
                height={250}
              />
            </div>
            <div className="right-btn">
              <Link legacyBehavior href="https://diamondtv.online/">
                <a className="details-btn">
                  <i className="fal fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-timeline wow fadeInUp delay-0-2s">
            <div className="content">
              <span className="serial-number">03</span>
              <h4>
                <Link legacyBehavior href="https://globalvisioniptv.tech/">
                  <a>Website IPtv</a>
                </Link>
              </h4>
            </div>
            <div className="image">
              <img
                src="assets/images/projects/Product3.png"
                alt="Project TimeLine Image"
                height={250}
              />
            </div>
            <div className="right-btn">
              <Link legacyBehavior href="/project-details">
                <a className="details-btn">
                  <i className="fal fa-long-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Project Timeline Two Area end */}

      {/* Why Choose Us start */}
      <section className="demo-area pt-100 rpt-70 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8">
              <div className="why-choose-us-content">
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Why Choose Us</span>
                  <h2>Web Design Company That You Can Trust</h2>
                </div>
                <div className="row gap-60">
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="far fa-chevron-right" />
                        <h5>Competitive rates</h5>
                      </div>
                      <p>
                        We use strategic marketing tactics that have been proven
                        programming
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-3s">
                      <div className="why-choose-header">
                        <i className="far fa-chevron-right" />
                        <h5>Premium Development</h5>
                      </div>
                      <p>
                        Sed perspiciatis unde omnie natue site voluptatem
                        accusan doloremque
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-2s">
                      <div className="why-choose-header">
                        <i className="far fa-chevron-right" />
                        <h5>No contracts needed</h5>
                      </div>
                      <p>
                        You can increase, pause or stop our services at any time
                        leaving
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="why-choose-item wow fadeInUp delay-0-3s">
                      <div className="why-choose-header">
                        <i className="far fa-chevron-right" />
                        <h5>Retina Ready &amp; Flexible</h5>
                      </div>
                      <p>
                        Devices show more pixels square inch resulting sharperes
                        images Content
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="why-choose-right wow fadeInLeft delay-0-2s">
                <img
                  src="assets/images/services/why-choose-right.png"
                  alt="Why Choose Right"
                />
                <div className="why-choose-border-shape" />
                <div className="text-shape">
                  <img
                    className="text"
                    src="assets/images/services/web-design-text.svg"
                    alt="Web Design Text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us end */}
      {/* Pricing style three start */}
      <section
        id="pricing"
        className="pricing-area-three pt-75 rpt-100 pb-85 rpb-55"
        style={{
          backgroundImage:
            "url(assets/images/background/pricing-bg-dot-shape.png)",
        }}
      >
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Pricing Package</span>
                <h2>Best Pricing Package For All Web Design Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="flaticon-abstract" />
                </div>
                <h5>Regular Package</h5>
                <span className="price-text">
                  <span className="before">DHS</span>
                  <span className="price">600</span>{" "}
                </span>
                <ul className="list-style-one">
                  <li>Web Development</li>
                  <li>SEO Optimizations</li>
                  <li>Customs Services</li>
                </ul>
                <Link legacyBehavior href="https://api.whatsapp.com/send/?phone=212625821794&text&type=phone_number&app_absent=0">
                  <a className="theme-btn w-100">
                    Choose Package <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-4s">
                <span className="badge">
                  <i className="fas fa-star-of-life" />
                  <i className="fas fa-star-of-life" />
                  popular package
                  <i className="fas fa-star-of-life" />
                  <i className="fas fa-star-of-life" />
                </span>
                <div className="icon">
                  <i className="flaticon-liquid" />
                </div>
                <h5>Silver Package</h5>
                <span className="price-text">
                  <span className="before">DHS</span>
                  <span className="price">750</span>{" "}
                </span>
                <ul className="list-style-one">
                  <li>Web Development</li>
                  <li>SEO Optimizations</li>
                  <li>Customs Services</li>
                  <li>Hebergement in Internet with Domaine</li>

                </ul>
                <Link legacyBehavior href="https://api.whatsapp.com/send/?phone=212625821794&text&type=phone_number&app_absent=0">
                  <a className="theme-btn w-100">
                    Choose Package <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-6s">
                <div className="icon">
                  <i className="flaticon-petals" />
                </div>
                <h5>Golden Package</h5>
                <span className="price-text">
                  <span className="before">DHS</span>
                  <span className="price">1000</span>{" "}
                </span>
                <ul className="list-style-one">
                  <li>Web Development</li>
                  <li>SEO Optimizations</li>
                  <li>Customs Services</li> 
                  <li>Change lifetime</li> 
                  <li>Refund </li> 
                </ul>
                <Link legacyBehavior href="https://api.whatsapp.com/send/?phone=212625821794&text&type=phone_number&app_absent=0">
                  <a className="theme-btn w-100">
                    Choose Package <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing style three end */}
      {/* Headline area start */}
      <div className="headline-area style-two bgc-primary pt-80 pb-65">
        <div className="container-fluid">
          <div className="headline-wrap marquee">
            <span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Clients Say Us</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Global Clients</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Awards Winning</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Clients Say Us</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Global Clients</b>
              </span>
              <span className="marquee-item">
                <i className="fas fa-star-of-life" />
                <b>Awards Winning</b>
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Testimonial Area start */}

    </Layout>
  );
};
export default Index2OnePage;
