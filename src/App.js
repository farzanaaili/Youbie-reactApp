// bootstrap-import
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './index.css';
// import './assets/css/fonts.css';
// slider
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
// end

import "./App.css";
import logoImg from "./image/youbie-logo.png";
import { FaUserCircle } from "react-icons/fa";
import bghero from "./hero-bg.mp4";
import copyIcon from "./image/copy-icon.svg";
import IntroGraphic from "./image/Introduction-graphic-min.gif";
import trendOne from "./image/trend-1.png";
import trendTwo from "./image/trend-2.png";
import trendThree from "./image/trend-3.png";
import trendFour from "./image/trend-4.png";
import userOne from "./image/user-1.png";
import userTwo from "./image/user-2.png";
import userThree from "./image/user-3.png";
import userFour from "./image/user-4.png";
import userFive from "./image/user-5.png";
import roadmapLine from "./image/roadmap-line.png";
import veryfiedIcon from "./image/verified-icon.svg";
import binanceCoin from "./image/binance-coin.svg";
import settings from "./image/settings.png";
import nftOne from "./image/nft-1.png";
import featuresOne from "./image/features-1.png";
import featuresTwo from "./image/features-2.png";
import featuresThree from "./image/features-3.png";
import goPremiumOne from "./image/go-premium-1.png";
import goPremiumTwo from "./image/go-premium-2.png";
import goPremiumThree from "./image/go-premium-3.png";
import goPremiumFour from "./image/go-premium-4.png";
import tokenonicsImg from "./image/tokenonics-img.png";
import tournamentImg from "./image/tournament-img.png";
import teamOne from "./image/team-1.png";
import teamTwo from "./image/team-2.png";
import teamThree from "./image/team-3.png";
import teamFour from "./image/team-4.png";
import teamFive from "./image/team-5.png";
import teamSix from "./image/team-6.png";
import teamSeven from "./image/team-7.png";
import teamEight from "./image/team-8.png";
import teamNine from "./image/team-9.png";
import teamTen from "./image/team-10.png";

function App() {
  return (
    <div className="wrapper">
      {/* <!--Starts Header Area--> */}
      <header id="main-header" className="header-main">
        <nav className="navigation-menu">
          <div className="container">
            <a href="#" className="brand">
              <img
                src={logoImg}
                alt="Youbie"
                className="brand-logo"
                style={{ width: "162", height: "41" }}
              />
            </a>
            <ul className="nav-menu__nav">
              <li className="nav-menu__nav-item">
                <a href="#" className="nav-item-link">
                  Home
                </a>
              </li>
              <li className="nav-menu__nav-item">
                <a href="#" className="nav-item-link">
                  Explore
                </a>
              </li>
              <li className="nav-menu__nav-item">
                <a href="#" className="nav-item-link">
                  Stream
                </a>
              </li>
              <li className="nav-menu__nav-item">
                <a href="#" className="nav-item-link">
                  Bets
                </a>
              </li>
              <li className="nav-menu__nav-item">
                <a href="#" className="nav-item-link">
                  NFT Marketplace
                </a>
              </li>
              <li className="nav-menu__nav-item">
                <a href="#" className="nav-item-link">
                  Whitepaper
                </a>
              </li>
            </ul>
            <div className="user-group">
              <div className="cta-group">
                <a href="#" className="you-btn">
                  {" "}
                  Buy Premium{" "}
                </a>
                <a href="#" className="you-btn">
                  {" "}
                  Connect Wallet{" "}
                </a>
              </div>
              <div className="dropdown user-details-btn">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="userCridentials"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaUserCircle />

                  <span className="icon">
                    <svg
                      version="1.2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 18 12"
                      width="18"
                      height="12"
                    >
                      <path
                        style={{ fill: "#fff" }}
                        d="m0.9 0.3l8.1 6 8.1-6v5.1l-8.1 6-8.1-6z"
                      />
                    </svg>
                  </span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="userCridentials">
                  <li>
                    <a className="dropdown-item" href="#">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <button type="button" className="menu-btn">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </nav>
      </header>
      {/* <!--Ends Header Area--> */}

      {/* <!--Starts Main Area--> */}
      <main id="main">
        {/* <!-- Hero --> */}
        <section id="hero" className="hero section">
          <div className="bg__holder">
            <video
              className="bg__video"
              id="bgHeroVideo"
              playsInline
              autoPlay
              muted
              loop
              src={bghero}
            >
              <source id="bgVideoSrc" src="#" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* <!--// bg__holder  --> */}
          <div className="container">
            <div className="row align-items-center justify-content-end">
              <div className="col-lg-4 order-1 order-md-0"></div>
              <div className="col-lg-8">
                <div className="hero__content" data-aos="fade-in">
                  <img
                    src={logoImg}
                    alt="Youbie"
                    className="hero__logo"
                    style={{ width: "441", height: "95" }}
                  />
                  <h1 className="heading__1">Uncensored Live Streaming</h1>
                  <p className="para">
                    The first crypto powered, DAO operated, all in one live
                    streaming platform
                  </p>
                  <div className="token-search">
                    <form>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="To Be Announced"
                          aria-describedby="copy-btn"
                        />
                        <span className="input-group-text" id="copy-btn">
                          <img
                            src={copyIcon}
                            alt="Copy"
                            style={{ width: "21", height: "16" }}
                          />
                        </span>
                      </div>
                    </form>
                  </div>
                  <div className="button-group">
                    <a href="#" className="you-btn">
                      Buy
                    </a>
                    <a href="#" className="you-btn">
                      Stake
                    </a>
                    <a href="#" className="you-btn">
                      Watch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Hero --> */}

        {/* <!-- Introduction --> */}
        <section id="introduction" className="introduction section">
          <div className="container">
            <div className="row g-4 align-items-center justify-content-between">
              <div className="col-md-6" data-aos="fade-up">
                <h2 className="heading__2">Introduction</h2>
                <p className="para">
                  Welcome to Youbie. The first crypto powered, DAO operated live
                  streaming platform allow any content creator to easily tap
                  into NFTs and cryptocurrency. The Youbie platform is packed
                  with features such as live streaming, subscription based
                  profiles, selling physical products, selling NFTs and winning
                  cash prizes in gaming tournaments, we truely are the only
                  needed platform to make revenue as a content creator. All
                  within a simple user friendly pannel, content creators are
                  able to manage everything.
                </p>
                <p className="para">
                  As Youbie is powered by cryptocurrency we made sure to make
                  the platform operate with ease. Users can top up their
                  accounts with over 5 differnet cryptocurreny assets and
                  instatnly start tipping, buying physical products and NFTs and
                  subscribing to their favourite creators private profile.
                </p>
              </div>
              <div className="col-md-5" data-aos="fade-up">
                <div className="intro-img">
                  <img
                    src={IntroGraphic}
                    alt="Introduction "
                    className="img-fluid"
                    style={{ width: "574", height: "606" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Introduction --> */}

        {/* <!-- Streamers --> */}
        <section id="streamers" className="streamers section">
          <div
            className="bg__holder"
            style={{ backgroundImage: "url('./image/trend-bg.png')" }}
          ></div>
          {/* <!--// bg__holder  --> */}
          <div className="container">
            <p className="section__para one" data-aos="fade-up">
              #GOSTREAM
            </p>
            <h2 className="heading__1" data-aos="fade-up">
              Trending Streamers
            </h2>
            <p className="section__para two" data-aos="fade-up">
              Hang-out with your favorite streamers!
            </p>



<section 
              id="streamer-splide"
              className="splide streamer-splide"
              aria-label="Streamers slider"
    >
      <div className="splide__track">
                <ul className="splide__list">
          <MDBContainer>
            <MDBRow>
              <MDBCol size='md'>
              <li className="splide__slide">
                    <div className="card streamer-box" data-aos="fade-up">
                      <a href="#" className="strech__link"></a>
                      <div className="card-img-top">
                         <img
                          src={trendOne}
                          alt="Streamer"
                          style={{ width: "397", height: "264" }}
                          className="img-fluid"
                        />
                      </div>
                      <div className="card-body">
                        <div className="user">
                          <span className="user__icon">
                            <img
                              src={userOne}
                              alt="user"
                              style={{ width: "90", height: "135" }}
                              className="img-fluid"
                            />
                          </span>
                          <p className="streamer__tag">Gamer/Creator</p>
                        </div>
                        <div className="title">
                          <h5 className="card-title">Janine</h5>
                          <span className="is-live">LIVE</span>
                        </div>
                        <p className="card-text">
                          50k followers • 15k Premium Subscribers
                        </p>
                      </div>
                    </div>
                  </li>
              </MDBCol>
              <MDBCol size='md'>
              <li className="splide__slide">
                    <div className="card streamer-box" data-aos="fade-up">
                      <a href="#" className="strech__link"></a>
                      <div className="card-img-top">
                        <img
                          src={trendTwo}
                          alt="Streamer"
                          style={{ width: "397", height: "264" }}
                          className="img-fluid"
                        />
                      </div>
                      <div className="card-body">
                        <div className="user">
                          <span className="user__icon">
                            <img
                              src={userTwo}
                              alt="user"
                              style={{ width: "90", height: "135" }}
                              className="img-fluid"
                            />
                          </span>
                          <p className="streamer__tag">Gamer/Creator</p>
                        </div>
                        <div className="title">
                          <h5 className="card-title">Michael</h5>
                          <span className="is-live">LIVE</span>
                        </div>
                        <p className="card-text">
                          10k followers • 5k Premium Subscribers
                        </p>
                      </div>
                    </div>
                  </li>
                  </MDBCol>
              <MDBCol size='md'>
              <li className="splide__slide">
                    <div className="card streamer-box" data-aos="fade-up">
                      <a href="#" className="strech__link"></a>
                      <div className="card-img-top">
                        <img
                          src={trendThree}
                          alt="Streamer"
                          style={{ width: "397", height: "264" }}
                          className="img-fluid"
                        />
                      </div>
                      <div className="card-body">
                        <div className="user">
                          <span className="user__icon">
                            <img
                              src={userThree}
                              alt="user"
                              style={{ width: "90", height: "135" }}
                              className="img-fluid"
                            />
                          </span>
                          <p className="streamer__tag">Content Creator</p>
                        </div>
                        <div className="title">
                          <h5 className="card-title">Dr. Crypto Vendor</h5>
                          <img
                            src={veryfiedIcon}
                            alt="Verified"
                            style={{ width: "16", height: "16" }}
                            className="img-fluid"
                          />
                        </div>
                        <p className="card-text">
                          100k followers • 20k Premium Subscribers
                        </p>
                      </div>
                    </div>
                  </li>
              </MDBCol>
              <MDBCol size='md'>
              <li className="splide__slide">
                    <div className="card streamer-box" data-aos="fade-up">
                      <a href="#" className="strech__link"></a>
                      <div className="card-img-top">
                        <img
                          src={trendFour}
                          alt="Streamer"
                          style={{ width: "397", height: "264" }}
                          className="img-fluid"
                        />
                      </div>
                      <div className="card-body">
                        <div className="user">
                          <span className="user__icon">
                            <img
                              src={userFour}
                              alt="user"
                              style={{ width: "90", height: "135" }}
                              className="img-fluid"
                            />
                          </span>
                          <p className="streamer__tag">Gamer/Creator</p>
                        </div>
                        <div className="title">
                          <h5 className="card-title">Kimberly</h5>
                          <span className="is-live">LIVE</span>
                        </div>
                        <p className="card-text">
                          5k followers • 3.5k Premium Subscribers
                        </p>
                      </div>
                    </div>
                  </li>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          </ul>
          </div>
</section>
            {/* <section
              id="streamer-splide"
              className="splide streamer-splide"
              aria-label="Streamers slider"
            >
              <div className="splide__track">
                <ul className="splide__list">
                  <li className="splide__slide">
                    <div className="card streamer-box" data-aos="fade-up">
                      <a href="#" className="strech__link"></a>
                      <div className="card-img-top">
                         <img
                          src={trendOne}
                          alt="Streamer"
                          style={{ width: "397", height: "264" }}
                          className="img-fluid"
                        />
                      </div>
                      <div className="card-body">
                        <div className="user">
                          <span className="user__icon">
                            <img
                              src={userOne}
                              alt="user"
                              style={{ width: "90", height: "135" }}
                              className="img-fluid"
                            />
                          </span>
                          <p className="streamer__tag">Gamer/Creator</p>
                        </div>
                        <div className="title">
                          <h5 className="card-title">Janine</h5>
                          <span className="is-live">LIVE</span>
                        </div>
                        <p className="card-text">
                          50k followers • 15k Premium Subscribers
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="splide__slide">
                    <div className="card streamer-box" data-aos="fade-up">
                      <a href="#" className="strech__link"></a>
                      <div className="card-img-top">
                        <img
                          src={trendTwo}
                          alt="Streamer"
                          style={{ width: "397", height: "264" }}
                          className="img-fluid"
                        />
                      </div>
                      <div className="card-body">
                        <div className="user">
                          <span className="user__icon">
                            <img
                              src={userTwo}
                              alt="user"
                              style={{ width: "90", height: "135" }}
                              className="img-fluid"
                            />
                          </span>
                          <p className="streamer__tag">Gamer/Creator</p>
                        </div>
                        <div className="title">
                          <h5 className="card-title">Michael</h5>
                          <span className="is-live">LIVE</span>
                        </div>
                        <p className="card-text">
                          10k followers • 5k Premium Subscribers
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="splide__slide">
                    <div className="card streamer-box" data-aos="fade-up">
                      <a href="#" className="strech__link"></a>
                      <div className="card-img-top">
                        <img
                          src={trendThree}
                          alt="Streamer"
                          style={{ width: "397", height: "264" }}
                          className="img-fluid"
                        />
                      </div>
                      <div className="card-body">
                        <div className="user">
                          <span className="user__icon">
                            <img
                              src={userThree}
                              alt="user"
                              style={{ width: "90", height: "135" }}
                              className="img-fluid"
                            />
                          </span>
                          <p className="streamer__tag">Content Creator</p>
                        </div>
                        <div className="title">
                          <h5 className="card-title">Dr. Crypto Vendor</h5>
                          <img
                            src={veryfiedIcon}
                            alt="Verified"
                            style={{ width: "16", height: "16" }}
                            className="img-fluid"
                          />
                        </div>
                        <p className="card-text">
                          100k followers • 20k Premium Subscribers
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="splide__slide">
                    <div className="card streamer-box" data-aos="fade-up">
                      <a href="#" className="strech__link"></a>
                      <div className="card-img-top">
                        <img
                          src={trendFour}
                          alt="Streamer"
                          style={{ width: "397", height: "264" }}
                          className="img-fluid"
                        />
                      </div>
                      <div className="card-body">
                        <div className="user">
                          <span className="user__icon">
                            <img
                              src={userFour}
                              alt="user"
                              style={{ width: "90", height: "135" }}
                              className="img-fluid"
                            />
                          </span>
                          <p className="streamer__tag">Gamer/Creator</p>
                        </div>
                        <div className="title">
                          <h5 className="card-title">Kimberly</h5>
                          <span className="is-live">LIVE</span>
                        </div>
                        <p className="card-text">
                          5k followers • 3.5k Premium Subscribers
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section> */}

            <div className="load-more">
              <a href="#" className="you-btn">
                Browse
              </a>
            </div>
          </div>
        </section>
        {/* <!-- Streamers --> */}

        {/* <!-- Roadmap --> */}
        <section id="roadmap" className="roadmap section">
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-9 order-1 order-lg-0">
                <div className="roadmap__line" data-aos="fade-in">
                  <img
                    src={roadmapLine}
                    alt="Roadmap Line"
                    style={{ width: "1019", height: "101" }}
                    className="img-fluid line"
                  />
                  <div className="icon-group">
                    <span className="icon">
                      <img
                        src={binanceCoin}
                        alt="binance-coin"
                        style={{ width: "28", height: "30" }}
                        className="img-fluid"
                      />
                    </span>
                    <span className="icon">
                      <img
                        src={settings}
                        alt="settings"
                        style={{ width: "28", height: "28" }}
                        className="img-fluid"
                      />
                    </span>
                    <span className="icon">
                      <img
                        src={settings}
                        alt="settings"
                        style={{ width: "28", height: "28" }}
                        className="img-fluid"
                      />
                    </span>
                  </div>
                  <div className="quaters">
                    <div className="quater-1" data-aos="fade-up">
                      <div className="q-block">
                        <h5 className="heading__5">Q1</h5>
                        <div className="content">
                          <h6 className="heading__6">Lorem ipsum dolor</h6>
                          <p className="q-text">
                            sit amet, consectetur adipiscing elit
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="quater-2" data-aos="fade-up">
                      <div className="q-block">
                        <h5 className="heading__5">Q2</h5>
                        <div className="content">
                          <h6 className="heading__6">Lorem ipsum dolor</h6>
                          <p className="q-text">
                            sit amet, consectetur adipiscing elit
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="quater-3" data-aos="fade-up">
                      <div className="q-block">
                        <h5 className="heading__5">Q3</h5>
                        <div className="content">
                          <h6 className="heading__6">Lorem ipsum dolor</h6>
                          <p className="q-text">
                            sit amet, consectetur adipiscing elit
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="quater-4" data-aos="fade-up">
                      <div className="q-block">
                        <h5 className="heading__5">Q4</h5>
                        <div className="content">
                          <h6 className="heading__6">Lorem ipsum dolor</h6>
                          <p className="q-text">
                            sit amet, consectetur adipiscing elit
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3" data-aos="fade-up">
                <h2 className="heading__4">Roadmap</h2>
                <p className="para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="para">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="para">
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Roadmap --> */}

        {/* <!-- NFTs --> */}
        <section id="nfts" className="nfts section">
          <div
            className="bg__holder"
            style={{ backgroundImage: "url('./image/nft-bg.png')" }}
          ></div>
          {/* <!--// bg__holder --> */}
          <div className="container">
            <p className="section__para one" data-aos="fade-up">
              #NFT
            </p>
            <h2 className="heading__1" data-aos="fade-up">
              NFT Marketplace
            </h2>
            <p className="section__para two" data-aos="fade-up">
              Mint, Buy and Sell NFTs
            </p>
            <section
              id="nft-splide"
              className="splide nft-splide"
              aria-label="nft slider"
            >
              <div className="splide__track">
                <ul className="splide__list">
                 <MDBContainer>
                    <MDBRow>
                      <MDBCol>
                    <li className="splide__slide">
                    <div className="card" data-aos="fade-up">
                      <a href="#" className="strech__link"></a>
                      <div className="card-img-top">
                        <img
                          src={nftOne}
                          alt="Streamer"
                          style={{ width: "397", height: "264" }}
                          className="img-fluid"
                        />
                      </div>
                      <div className="card-body">
                        <div className="user">
                          <span className="user__icon">
                            <img
                              src={userOne}
                              alt="user"
                              style={{ width: "90", height: "135" }}
                              className="img-fluid"
                            />
                          </span>
                          <p className="streamer__tag">Nft Collection</p>
                        </div>
                        <div className="block">
                          <p className="text">Gains:</p>
                          <div className="percentage">+99.99%</div>
                        </div>
                        <div className="block">
                          <p className="text">Floor Price:</p>
                          <div className="count">
                            <span className="icon">
                              <img
                                src={binanceCoin}
                                alt="binance-coin"
                                style={{ width: "20", height: "20" }}
                                className="img-fluid"
                              />
                            </span>
                            0.5
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                    </MDBCol>
                    <MDBCol>
                    <li className="splide__slide">
                    <div className="card" data-aos="fade-up">
                      <a href="#" className="strech__link"></a>
                      <div className="card-img-top">
                        <img
                          src={nftOne}
                          alt="Streamer"
                          style={{ width: "397", height: "267" }}
                          className="img-fluid"
                        />
                      </div>
                      <div className="card-body">
                        <div className="user">
                          <span className="user__icon">
                            <img
                              src={userTwo}
                              alt="user"
                              style={{ width: "90", height: "135" }}
                              className="img-fluid"
                            />
                          </span>
                          <p className="streamer__tag">Nft Collection</p>
                        </div>
                        <div className="block">
                          <p className="text">Gains:</p>
                          <div className="percentage">+49.98%</div>
                        </div>
                        <div className="block">
                          <p className="text">Floor Price:</p>
                          <div className="count">
                            <span className="icon">
                              <img
                                src={binanceCoin}
                                alt="binance-coin"
                                style={{ width: "20", height: "20" }}
                                className="img-fluid"
                              />
                            </span>
                            0.5
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                    </MDBCol>
                  <MDBCol>
                  <li className="splide__slide">
                    <div className="card" data-aos="fade-up">
                      <a href="#" className="strech__link"></a>
                      <div className="card-img-top">
                        <img
                          src={nftOne}
                          alt="Streamer"
                          style={{ width: "397", height: "264" }}
                          className="img-fluid"
                        />
                      </div>
                      <div className="card-body">
                        <div className="user">
                          <span className="user__icon">
                            <img
                              src={userThree}
                              alt="user"
                              style={{ width: "90", height: "135" }}
                              className="img-fluid"
                            />
                          </span>
                          <p className="streamer__tag">Nft Collection</p>
                        </div>
                        <div className="block">
                          <p className="text">Gains:</p>
                          <div className="percentage">+39.98%</div>
                        </div>
                        <div className="block">
                          <p className="text">Floor Price:</p>
                          <div className="count">
                            <span className="icon">
                              <img
                                src={binanceCoin}
                                alt="binance-coin"
                                style={{ width: "20", height: "20" }}
                                className="img-fluid"
                              />
                            </span>
                            0.5
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  </MDBCol>
                  <MDBCol>
                  <li className="splide__slide">
                    <div className="card" data-aos="fade-up">
                      <a href="#" className="strech__link"></a>
                      <div className="card-img-top">
                        <img
                          src={nftOne}
                          alt="Streamer"
                          style={{ width: "397", height: "264" }}
                          className="img-fluid"
                        />
                      </div>
                      <div className="card-body">
                        <div className="user">
                          <span className="user__icon">
                            <img
                              src={userFour}
                              alt="user"
                              style={{ width: "90", height: "135" }}
                              className="img-fluid"
                            />
                          </span>
                          <p className="streamer__tag">Nft Collection</p>
                        </div>
                        <div className="block">
                          <p className="text">Gains:</p>
                          <div className="percentage">+29.99%</div>
                        </div>
                        <div className="block">
                          <p className="text">Floor Price:</p>
                          <div className="count">
                            <span className="icon">
                              <img
                                src={binanceCoin}
                                alt="binance-coin"
                                style={{ width: "20", height: "20" }}
                                className="img-fluid"
                              />
                            </span>
                            0.5
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  </MDBCol>
                  </MDBRow>
                 </MDBContainer>
                </ul>
              </div>
            </section>
            <div className="load-more">
              <a href="#" className="you-btn">
                Browse
              </a>
            </div>
          </div>
        </section>
        {/* <!-- NFTs --> */}

        {/* <!-- Features --> */}
        <section id="features" className="features section">
          <div className="container">
            <p className="section__para one" data-aos="fade-up">
              Youbie
            </p>
            <h2 className="heading__1" data-aos="fade-up">
              Features
            </h2>
            <p className="section__para two" data-aos="fade-up">
              Ecosystem and Features
            </p>
            <section
              id="features-splide"
              className="splide features-splide"
              aria-label="features slider"
            >
              <div className="splide__track">
                <ul className="splide__list">
                  <MDBContainer>
                    <MDBRow>
                      <MDBCol>
                      <li className="splide__slide">
                    <div className="feature-box" data-aos="fade-up">
                      <div className="feature-box__img one">
                        <img
                          src={featuresOne}
                          alt="Deposit Methods"
                          className="img-fluid"
                          style={{ width: "195", height: "233" }}
                        />
                      </div>
                      <h3 className="feature-box__title">Deposit Methods</h3>
                      <p className="feature-box__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <a href="#" className="feature-box__link">
                        Read More
                      </a>
                    </div>
                  </li>
                  
                 </MDBCol>
                      <MDBCol>
                      <li className="splide__slide">
                    <div className="feature-box" data-aos="fade-up">
                      <div className="feature-box__img two">
                        <img
                          src={featuresTwo}
                          alt="Low Creator Fees"
                          className="img-fluid"
                          style={{ width: "195", height: "233" }}
                        />
                      </div>
                      <h3 className="feature-box__title">Low Creator Fees</h3>
                      <p className="feature-box__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <a href="#" className="feature-box__link">
                        Read More
                      </a>
                    </div>
                  </li>
                      </MDBCol>
                      <MDBCol>
                      <li className="splide__slide">
                    <div className="feature-box" data-aos="fade-up">
                      <div className="feature-box__img three">
                        <img
                          src={featuresThree}
                          alt="NFT Marketplace"
                          className="img-fluid"
                          style={{ width: "195", height: "233" }}
                        />
                      </div>
                      <h3 className="feature-box__title">NFT Marketplace</h3>
                      <p className="feature-box__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <a href="#" className="feature-box__link">
                        Read More
                      </a>
                    </div>
                  </li>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </ul>
              </div>
            </section>
          </div>
        </section>
        {/* <!-- Features --> */}

        {/* <!-- Go Premium --> */}
        <section id="go-premium" className="go-premium section">
          <div
            className="bg__holder"
            style={{ backgroundImage: "url('./image/go-premium-bg.png')" }}
          ></div>
          {/* <!--// bg__holder  --> */}
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <p className="section__para one" data-aos="fade-up">
                  #BeOneofUs
                </p>
                <h2 className="heading__1" data-aos="fade-up">
                  Go Premium
                </h2>
                <p className="section__para two" data-aos="fade-up">
                  Get exclusive updates
                </p>
                <p className="para" data-aos="fade-up">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <section
              id="go-premium-splide"
              className="splide go-premium-splide"
              aria-label="go-premium slider"
            >
              <div className="splide__track">
                <ul className="splide__list">
                  <MDBContainer>
                    <MDBRow>
                      <MDBCol>
                      <li className="splide__slide">
                    <div className="card-box" data-aos="fade-up">
                      <div className="card-box-top-img">
                        <img
                          src={goPremiumOne}
                          alt="Go Premium"
                          className="img-fluid"
                          width="406"
                          height="271"
                        />
                      </div>
                      <h3 className="card-box__title">1 ON 1 CHAT</h3>
                      <p className="card-box__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </li>
                      </MDBCol>
                      <MDBCol>
                      <li className="splide__slide">
                    <div className="card-box" data-aos="fade-up">
                      <div className="card-box-top-img">
                        <img
                          src={goPremiumTwo}
                          alt="Go Premium"
                          className="img-fluid"
                          width="406"
                          height="271"
                        />
                      </div>
                      <h3 className="card-box__title">EXCLUSIVE NFT</h3>
                      <p className="card-box__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </li>
                      </MDBCol>
                      <MDBCol>
                      <li className="splide__slide">
                    <div className="card-box" data-aos="fade-up">
                      <div className="card-box-top-img">
                        <img
                          src={goPremiumThree}
                          alt="Go Premium"
                          className="img-fluid"
                          style={{ width: "406", height: "271" }}
                        />
                      </div>
                      <h3 className="card-box__title">
                        EXCLUSIVE CRYPTO CALLS
                      </h3>
                      <p className="card-box__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </li>
                      </MDBCol>
                      <MDBCol>
                      <li className="splide__slide">
                    <div className="card-box" data-aos="fade-up">
                      <div className="card-box-top-img">
                        <img
                          src={goPremiumFour}
                          alt="Go Premium"
                          className="img-fluid"
                          style={{ width: "406", height: "271" }}
                        />
                      </div>
                      <h3 className="card-box__title">PRIVATE STREAM</h3>
                      <p className="card-box__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </li>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </ul>
              </div>
            </section>
          </div>
        </section>
        {/* <!-- Go Premium --> */}

        {/* <!-- Tokenomics --> */}
        <section id="tokenomics" className="tokenomics section">
          <div className="container">
            <div className="row gx-4 gy-5 align-items-center">
              <div className="col-lg-4" data-aos="fade-up">
                <div className="tokenomics__img">
                  <img
                    src={tokenonicsImg}
                    alt="Token Stats"
                    className="img-fluid"
                    style={{ width: "320", height: "329" }}
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <p className="section__para one" data-aos="fade-up">
                  Youbie
                </p>
                <h2 className="heading__1" data-aos="fade-up">
                  Tokenomics
                </h2>
                <ul className="stat-list">
                  <li className="stat-list__item" data-aos="fade-up">
                    <div className="stat-item__percentage">75%</div>
                    <div className="stat-item__title">Lorem</div>
                    <p className="stat-item__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </li>
                  <li className="stat-list__item" data-aos="fade-up">
                    <div className="stat-item__percentage">50%</div>
                    <div className="stat-item__title">Lorem</div>
                    <p className="stat-item__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </li>
                  <li className="stat-list__item" data-aos="fade-up">
                    <div className="stat-item__percentage">30%</div>
                    <div className="stat-item__title">Lorem</div>
                    <p className="stat-item__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </li>
                  <li className="stat-list__item" data-aos="fade-up">
                    <div className="stat-item__percentage">20%</div>
                    <div className="stat-item__title">Lorem</div>
                    <p className="stat-item__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </li>
                  <li className="stat-list__item" data-aos="fade-up">
                    <div className="stat-item__percentage">10%</div>
                    <div className="stat-item__title">Lorem</div>
                    <p className="stat-item__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Tokenomics --> */}

        {/* <!-- Tournament --> */}
        <section id="tournament" className="tournament section">
          <div
            className="bg__holder"
            style={{ backgroundImage: "url('./image/tournament-bg.png')" }}
          ></div>
          {/* <!--// bg__holder --> */}
          <div className="container">
            <div className="row gx-4 gx-lg-5 gy-5 align-items-center">
              <div className="col-lg-5">
                <p className="section__para one" data-aos="fade-up">
                  Youbie
                </p>
                <h2 className="heading__1" data-aos="fade-up">
                  Tournament
                </h2>
                <p className="section__para two" data-aos="fade-up">
                  Winner takes it all!
                </p>
                <p className="para" data-aos="fade-up">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <h3 className="heading__3">Coming soon...</h3>
              </div>
              <div className="col-lg-7">
                <div className="tournament-img" data-aos="fade-up">
                  <img
                    src={tournamentImg}
                    alt="Tournament"
                    className="img-fluid"
                    style={{ width: "820", height: "380" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Tournament --> */}

        {/* <!-- Top Teams --> */}
        <section id="top-teams" className="top-teams section">
          <div className="container">
            <div className="row gx-4 gy-5">
              <div className="col-lg-5" data-aos="fade-up">
                <p className="section__para one">#Legneds</p>
                <h2 className="heading__1">Top Ranking Teams</h2>
                <p className="section__para two">
                  Be one of the greatest team!
                </p>
                <p className="para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <h3 className="heading__3">Coming soon...</h3>
              </div>
              <div className="col-lg-7" data-aos="fade-up">
                <ul className="team-list">
                  <li className="team-list__item">
                    <a href="#" className="team-list__item-link">
                      <img
                        src={teamOne}
                        alt="team logo"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li className="team-list__item">
                    <a href="#" className="team-list__item-link">
                      <img
                        src={teamTwo}
                        alt="team logo"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li className="team-list__item">
                    <a href="#" className="team-list__item-link">
                      <img
                        src={teamThree}
                        alt="team logo"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li className="team-list__item">
                    <a href="#" className="team-list__item-link">
                      <img
                        src={teamFour}
                        alt="team logo"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li className="team-list__item">
                    <a href="#" className="team-list__item-link">
                      <img
                        src={teamFive}
                        alt="team logo"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li className="team-list__item">
                    <a href="#" className="team-list__item-link">
                      <img
                        src={teamSix}
                        alt="team logo"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li className="team-list__item">
                    <a href="#" className="team-list__item-link">
                      <img
                        src={teamSeven}
                        alt="team logo"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li className="team-list__item">
                    <a href="#" className="team-list__item-link">
                      <img
                        src={teamEight}
                        alt="team logo"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li className="team-list__item">
                    <a href="#" className="team-list__item-link">
                      <img
                        src={teamNine}
                        alt="team logo"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                  <li className="team-list__item">
                    <a href="#" className="team-list__item-link">
                      <img
                        src={teamTen}
                        alt="team logo"
                        className="img-fluid"
                      />
                    </a>
                  </li>
                </ul>
                {/* <!-- team list slider --> */}
                <section
                  id="team-list-splide"
                  className="splide team-list-splide"
                  aria-label="Team list splide"
                >
                  <div className="splide__track">
                    <ul className="splide__list">
                      <li className="splide__slide">
                        <a href="#" className="team-list__item-link">
                          <img
                            src={teamOne}
                            alt="team logo"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                      <li className="splide__slide">
                        <a href="#" className="team-list__item-link">
                          <img
                            src={teamTwo}
                            alt="team logo"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                      <li className="splide__slide">
                        <a href="#" className="team-list__item-link">
                          <img
                            src={teamThree}
                            alt="team logo"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                      <li className="splide__slide">
                        <a href="#" className="team-list__item-link">
                          <img
                            src={teamFour}
                            alt="team logo"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                      <li className="splide__slide">
                        <a href="#" className="team-list__item-link">
                          <img
                            src={teamFive}
                            alt="team logo"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                      <li className="splide__slide">
                        <a href="#" className="team-list__item-link">
                          <img
                            src={teamSix}
                            alt="team logo"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                      <li className="splide__slide">
                        <a href="#" className="team-list__item-link">
                          <img
                            src={teamSeven}
                            alt="team logo"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                      <li className="splide__slide">
                        <a href="#" className="team-list__item-link">
                          <img
                            src={teamEight}
                            alt="team logo"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                      <li className="splide__slide">
                        <a href="#" className="team-list__item-link">
                          <img
                            src={teamNine}
                            alt="team logo"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                      <li className="splide__slide">
                        <a href="#" className="team-list__item-link">
                          <img
                            src={teamTen}
                            alt="team logo"
                            className="img-fluid"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </section>
                {/* <!-- team list slider --> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Top Teams --> */}

        {/* <!-- Betting --> */}
        <section id="betting" className="betting section">
          <div
            className="bg__holder"
            style={{ backgroundImage: " url('./image/betting-bg.png')" }}
          ></div>
          {/* <!--// bg__holder  --> */}
          <div className="container">
            <div className="row gx-4 gy-5 gx-lg-5">
              <div className="col-xl-6">
                <p className="section__para one" data-aos="fade-up">
                  Youbie
                </p>
                <h2 className="heading__1" data-aos="fade-up">
                  Online Betting
                </h2>
                <p className="section__para two" data-aos="fade-up">
                  Bet, Watch and Earn!
                </p>
                <p className="para" data-aos="fade-up">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="betting-list">
                  <li className="betting-list__item" data-aos="fade-up">
                    <div className="item-img">
                      <img
                        src={trendOne}
                        alt="Bet"
                        style={{ width: "75", height: "68" }}
                        className="img-fluid"
                      />
                    </div>
                    <div className="details">
                      <h4 className="betting__title">Bet</h4>
                      <p className="betting__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </li>
                  <li className="betting-list__item" data-aos="fade-up">
                    <div className="item-img">
                      <img
                        src={trendTwo}
                        alt="Watch"
                        style={{ width: "75", height: "68" }}
                        className="img-fluid"
                      />
                    </div>
                    <div className="details">
                      <h4 className="betting__title">Watch</h4>
                      <p className="betting__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </li>
                  <li className="betting-list__item" data-aos="fade-up">
                    <div className="item-img">
                      <img
                        src={trendThree}
                        alt="Earn"
                        style={{ width: "75", height: "68" }}
                        className="img-fluid"
                      />
                    </div>
                    <div className="details">
                      <h4 className="betting__title">Earn</h4>
                      <p className="betting__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </li>
                </ul>
                <h3 className="heading__3">Coming soon...</h3>
              </div>
              <div className="col-xl-6" data-aos="fade-up">
                <section
                  id="betting-main-carousel"
                  className="splide betting-main-carousel"
                  aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel."
                >
                  <div className="splide__track">
                    <ul className="splide__list">
                      
                      <li className="splide__slide">
                        <img
                          src={trendOne}
                          alt="slide"
                          style={{
                            width: "520",
                            height: "400",
                          }}
                          className="slide__img"
                        />
                      </li>
                      
                      <li className="splide__slide">
                        <img
                          src={trendTwo}
                          alt="slide"
                          style={{
                            width: "520",
                            height: "400",
                          }}
                          className="slide__img"
                        />
                      </li>
                      
                      <li className="splide__slide">
                        <img
                          src={trendThree}
                          alt="slide"
                          style={{ width: "520", height: "400" }}
                          className="slide__img"
                        />
                      </li>
                      
                      <li className="splide__slide">
                        <img
                          src={trendFour}
                          alt="slide"
                          style={{ width: "520", height: "400" }}
                          className="slide__img"
                        />
                      </li>
                      
                      <li className="splide__slide">
                        <img
                          src={trendOne}
                          alt="slide"
                          style={{
                            width: "520",
                            height: "400",
                          }}
                          className="slide__img"
                        />
                      </li>
                      
                      <li className="splide__slide">
                        <img
                          src={trendTwo}
                          alt="slide"
                          style={{
                            width: "520",
                            height: "400",
                          }}
                          className="slide__img"
                        />
                      </li>
                      
                          <li className="splide__slide">
                            <img
                              src={trendThree}
                              alt="slide"
                              style={{
                                width: "520",
                                height: "400",
                              }}
                              className="slide__img"
                            />
                          </li>
                      
                   </ul>
                  </div>
                </section>

                <section
                  id="betting-thumbnail-carousel"
                  className="splide betting-thumbnail-carousel"
                  aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel."
                >
                  <div className="splide__arrows">
                    <button className="splide__arrow splide__arrow--prev">
                      <svg
                        version="1.2"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          width: "18",
                          height: "12",
                          transform: "rotate(90deg)",
                        }}
                      >
                        <path
                          d="m.9.3 8.1 6 8.1-6v5.1l-8.1 6-8.1-6z"
                          style={{ fill: "#fff" }}
                        />
                      </svg>
                    </button>
                    <button className="splide__arrow splide__arrow--next">
                      <svg
                        version="1.2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="12"
                        style={{ transform: "rotate(-90deg)" }}
                      >
                        <path
                          d="m.9.3 8.1 6 8.1-6v5.1l-8.1 6-8.1-6z"
                          style={{ fill: "#fff" }}
                        />
                      </svg>
                    </button>
                  </div>

                  
                </section>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Betting --> */}

        {/* <!-- Newsfeed --> */}
        <section id="newsfeed" className="newsfeed section">
          <div className="container">
            <div className="row gx-4 gy-5 gx-lg-5">
              <div className="col-xl-6">
                <p className="section__para one" data-aos="fade-up">
                  #LATEST
                </p>
                <h2 className="heading__1" data-aos="fade-up">
                  Newsfeed
                </h2>
                <p className="section__para two" data-aos="fade-up">
                  News & Update
                </p>
                <p className="para" data-aos="fade-up">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="latest__posts" data-aos="fade-up">
                  <section
                    id="newsfeed-splide"
                    className="splide newsfeed-splide"
                    aria-label="The newsfeed splide."
                  >
                    <div className="splide__track">
                      <ul className="splide__list">
                        <MDBContainer>
                          <MDBRow>
                            <MDBCol>
                            <li className="splide__slide">
                          <div className="card-box">
                            <div className="card-box__img">
                              <img
                                src={goPremiumFour}
                                alt="Go Premium"
                                className="img-fluid"
                                width="210"
                                height="101"
                              />
                            </div>
                            <div className="card-box__body">
                              <div className="meta">
                                <div className="user">
                                  <i className="fa-solid fa-circle-user"></i>
                                  <a href="#" className="username">
                                    By Lorem
                                  </a>
                                </div>
                                |
                                <div className="date">
                                  <i className="fa-solid fa-calendar-days"></i>
                                  <a href="#" className="text">
                                    April 21, 2022
                                  </a>
                                </div>
                              </div>
                              <p className="card-box__text">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Cum, quisquam!
                              </p>
                              <a href="#" className="readmore">
                                <span className="text">Read More</span>
                                <i className="fa-solid fa-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </li>
                       
                           </MDBCol>
                            <MDBCol>
                            <li className="splide__slide">
                          <div className="card-box">
                            <div className="card-box__img">
                              <img
                                src={goPremiumTwo}
                                alt="Go Premium"
                                className="img-fluid"
                                width="210"
                                height="101"
                              />
                            </div>
                            <div className="card-box__body">
                              <div className="meta">
                                <div className="user">
                                  <i className="fa-solid fa-circle-user"></i>
                                  <a href="#" className="username">
                                    By Lorem
                                  </a>
                                </div>
                                |
                                <div className="date">
                                  <i className="fa-solid fa-calendar-days"></i>
                                  <a href="#" className="text">
                                    April 21, 2022
                                  </a>
                                </div>
                              </div>
                              <p className="card-box__text">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Cum, quisquam!
                              </p>
                              <a href="#" className="readmore">
                                <span className="text">Read More</span>
                                <i className="fa-solid fa-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </li>
                            </MDBCol>
                            <MDBCol>
                            <li className="splide__slide">
                          <div className="card-box">
                            <div className="card-box__img">
                              <img
                                src={goPremiumThree}
                                alt="Go Premium"
                                className="img-fluid"
                                width="210"
                                height="101"
                              />
                            </div>
                            <div className="card-box__body">
                              <div className="meta">
                                <div className="user">
                                  <i className="fa-solid fa-circle-user"></i>
                                  <a href="#" className="username">
                                    By Lorem
                                  </a>
                                </div>
                                |
                                <div className="date">
                                  <i className="fa-solid fa-calendar-days"></i>
                                  <a href="#" className="text">
                                    April 21, 2022
                                  </a>
                                </div>
                              </div>
                              <p className="card-box__text">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Cum, quisquam!
                              </p>
                              <a href="#" className="readmore">
                                <span className="text">Read More</span>
                                <i className="fa-solid fa-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </li>
                            </MDBCol>
                          </MDBRow>
                        </MDBContainer>
                      </ul>
                    </div>
                  </section>
                </div>
              </div>
              <div className="col-xl-6" data-aos="fade-up">
                <div className="feature__post">
                  <div className="card-box">
                    <div className="card-box__img">
                      <img
                        src={goPremiumOne}
                        alt="Go Premium"
                        className="img-fluid"
                        width="210"
                        height="101"
                      />
                    </div>
                    <div className="card-box__body">
                      <div className="meta">
                        <div className="user">
                          <i className="fa-solid fa-circle-user"></i>
                          <a href="#" className="username">
                            By Lorem
                          </a>
                        </div>
                        |
                        <div className="date">
                          <i className="fa-solid fa-calendar-days"></i>
                          <a href="#" className="text">
                            April 21, 2022
                          </a>
                        </div>
                      </div>
                      <h4 className="card-box__title">Website Development</h4>
                      <p className="card-box__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Suscipit repellendus, minus doloremque eaque
                        asperiores cumque voluptatum, explicabo doloribus
                        obcaecati iste nostrum animi voluptas harum accusamus
                        sapiente quam, sunt cum laborum.
                      </p>
                      <a href="#" className="readmore">
                        <span className="text">Read More</span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Newsfeed --> */}

        {/* <!-- Testimonial --> */}
        <section id="testimonial" className="testimonial section">
          <div
            className="bg__holder"
            style={{ backgroundImage: "url('./image/feedback-bg.png')" }}
          ></div>
          {/* <!--// bg__holder  --> */}
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <p className="section__para one" data-aos="fade-up">
                  #TESTIMONIAL
                </p>
                <h2 className="heading__1" data-aos="fade-up">
                  Feedbacks
                </h2>
                <p className="section__para two" data-aos="fade-up">
                  Streamers & Influencers
                </p>
              </div>
            </div>
            <section
              id="testimonial__slider"
              className="splide testimonial__slider"
              aria-label="Splide Basic HTML Example"
              data-aos="fade-up"
            >
              <div className="splide__track">
                <ul className="splide__list">
                  <MDBContainer>
                    <MDBRow>
                      <MDBCol>
                      <li className="splide__slide">
                    <div className="card-box">
                      <div className="user">
                        <div className="user__img">
                          <img
                            src={userFour}
                            alt="user"
                            style={{ width: "90", height: "135" }}
                            className="img-fluid"
                          />
                        </div>
                        <div className="card-box__content">
                          <h5 className="card-box__title">Kimberly</h5>
                          <p className="designation">Gamer/Creator</p>
                        </div>
                      </div>
                      <div className="stars">
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                              style={{ fill: "#feb600" }}
                            />
                          </svg>
                        </span>
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                              style={{ fill: "#feb600" }}
                            />
                          </svg>
                        </span>
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                              style={{ fill: "#feb600" }}
                            />
                          </svg>
                        </span>
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                              style={{ fill: "#feb600" }}
                            />
                          </svg>
                        </span>
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                              style={{ fill: "#feb600" }}
                            />
                          </svg>
                        </span>
                      </div>
                      <p className="card-box__text">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. ”
                      </p>
                    </div>
                  </li>     
                  </MDBCol>
                      <MDBCol>
                      <li className="splide__slide">
                    <div className="card-box">
                      <div className="user">
                        <div className="user__img">
                          <img
                            src={userThree}
                            alt="user"
                            style={{ width: "116", height: "146" }}
                            className="img-fluid"
                          />
                        </div>
                        <div className="card-box__content">
                          <h5 className="card-box__title">Dr. Crypto Vendor</h5>
                          <p className="designation">Content Creator</p>
                        </div>
                      </div>
                      <div className="stars">
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                              style={{ fill: "#feb600" }}
                            />
                          </svg>
                        </span>
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                              style={{ fill: "#feb600" }}
                            />
                          </svg>
                        </span>
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                              style={{ fill: "#feb600" }}
                            />
                          </svg>
                        </span>
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                              style={{ fill: "#feb600" }}
                            />
                          </svg>
                        </span>
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                              style={{ fill: "#feb600" }}
                            />
                          </svg>
                        </span>
                      </div>
                      <p className="card-box__text">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. ”
                      </p>
                    </div>
                  </li>
                      </MDBCol>
                      <MDBCol>
                      <li className="splide__slide">
                    <div className="card-box">
                      <div className="user">
                        <div className="user__img">
                          <img
                            src={userFive}
                            alt="Client"
                            style={{width:"116",
                            height:"146"}}
                            className="img-fluid"
                          />
                        </div>
                        <div className="card-box__content">
                          <h5 className="card-box__title">Lily</h5>
                          <p className="designation">Content Creator</p>
                        </div>
                      </div>
                      <div className="stars">
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                              style={{ fill: "#feb600" }}
                            />
                          </svg>
                        </span>
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                              style={{ fill: "#feb600" }}
                            />
                          </svg>
                        </span>
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                              style={{ fill: "#feb600" }}
                            />
                          </svg>
                        </span>
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                              style={{ fill: "#feb600" }}
                            />
                          </svg>
                        </span>
                        <span className="star">
                          <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="18"
                          >
                            <path
                              d="m10.1.1 3.1 5.6 6.2 1.2-4.3 4.6.7 6.4-5.7-2.7-5.8 2.7.8-6.4L.8 6.9 7 5.7 10.1.1"
                              style={{ fill: "#feb600" }}
                            />
                          </svg>
                        </span>
                      </div>
                      <p className="card-box__text">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. ”
                      </p>
                    </div>
                  </li>
                      </MDBCol>

                    </MDBRow>
                  </MDBContainer>
                </ul>
              </div>
            </section>
          </div>
        </section>
        {/* <!-- Testimonial --> */}
      </main>
      {/* <!--Ends Main Area--> */}

      {/* <!--Starts Footer Area--> */}
      <footer id="footer">
        {/* <!-- Footer widgets --> */}
        <section id="footer-widgets" className="section footer-widgets">
          <div className="container">
            <div className="row gx-4 gy-5">
              <div className="col-lg-6">
                <div className="row gx-4 gy-5">
                  <div className="col-sm-6" data-aos="fade-up">
                    <h2 className="heading__1">Youbie</h2>
                    <p className="para">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="col-sm-6 d-none d-md-block">
                    <div className="widget" data-aos="fade-up">
                      <h4 className="widget__title">LEGAL & SAFETY</h4>
                      <ul className="footer-nav">
                        <li className="footer-nav__item">
                          <a href="#" className="footer-nav__item-link">
                            Terms & Conditions
                          </a>
                        </li>
                        <li className="footer-nav__item">
                          <a href="#" className="footer-nav__item-link">
                            Privacy Policy
                          </a>
                        </li>
                        <li className="footer-nav__item">
                          <a href="#" className="footer-nav__item-link">
                            Cookies Policy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row gx-4 gy-5">
                  <div className="col-sm-6 col-md-4 d-md-none">
                    <div className="widget" data-aos="fade-up">
                      <h4 className="widget__title">LEGAL & SAFETY</h4>
                      <ul className="footer-nav">
                        <li className="footer-nav__item">
                          <a href="#" className="footer-nav__item-link">
                            Terms & Conditions
                          </a>
                        </li>
                        <li className="footer-nav__item">
                          <a href="#" className="footer-nav__item-link">
                            Privacy Policy
                          </a>
                        </li>
                        <li className="footer-nav__item">
                          <a href="#" className="footer-nav__item-link">
                            Cookies Policy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <div className="widget" data-aos="fade-up">
                      <h4 className="widget__title">Links</h4>
                      <ul className="footer-nav">
                        <li className="footer-nav__item">
                          <a href="#" className="footer-nav__item-link">
                            Website.com
                          </a>
                        </li>
                        <li className="footer-nav__item">
                          <a href="#" className="footer-nav__item-link">
                            Site.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <div className="widget" data-aos="fade-up">
                      <h4 className="widget__title">Socials</h4>
                      <ul className="footer-nav">
                        <li className="footer-nav__item">
                          <a href="#" className="footer-nav__item-link">
                            Twitter
                          </a>
                        </li>
                        <li className="footer-nav__item">
                          <a href="#" className="footer-nav__item-link">
                            Facebook
                          </a>
                        </li>
                        <li className="footer-nav__item">
                          <a href="#" className="footer-nav__item-link">
                            Instagram
                          </a>
                        </li>
                        <li className="footer-nav__item">
                          <a href="#" className="footer-nav__item-link">
                            Youtube
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <div className="widget" data-aos="fade-up">
                      <h4 className="widget__title">Company</h4>
                      <ul className="footer-nav">
                        <li className="footer-nav__item">
                          <a href="#" className="footer-nav__item-link">
                            {" "}
                            About{" "}
                          </a>
                        </li>
                        <li className="footer-nav__item">
                          <a href="#" className="footer-nav__item-link">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Footer widgets --> */}

        {/* <!-- Copyright --> */}
        <section id="copyright" className="copyright">
          <div className="container">
            <p className="text">COPYRIGHT 2022, CREATED BY YOUBIE</p>
          </div>
        </section>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!--Ends Footer Area--> */}

      {/* <!--Starts Extra Elements Area--> */}
      <section id="extra-elems">
        <aside className="mobile-menu">
          <ul className="nav-menu__nav">
            <li className="nav-menu__nav-item">
              <a href="#" className="nav-item-link">
                Home
              </a>
            </li>
            <li className="nav-menu__nav-item">
              <a href="#" className="nav-item-link">
                Explore
              </a>
            </li>
            <li className="nav-menu__nav-item">
              <a href="#" className="nav-item-link">
                Stream
              </a>
            </li>
            <li className="nav-menu__nav-item">
              <a href="#" className="nav-item-link">
                Bets
              </a>
            </li>
            <li className="nav-menu__nav-item">
              <a href="#" className="nav-item-link">
                NFT Marketplace
              </a>
            </li>
            <li className="nav-menu__nav-item">
              <a href="#" className="nav-item-link">
                Whitepaper
              </a>
            </li>
          </ul>
          <div className="user-group">
            <div className="cta-group">
              <a href="#" className="you-btn">
                {" "}
                Buy Premium{" "}
              </a>
              <a href="#" className="you-btn">
                {" "}
                Connect Wallet{" "}
              </a>
            </div>
            <div className="dropdown user-details-btn">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="userCridentials"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-circle-user"></i>
                <span className="icon">
                  <svg
                    version="1.2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 18 12"
                    width="18"
                    height="12"
                  >
                    <path
                      style={{ fill: "#fff" }}
                      d="m0.9 0.3l8.1 6 8.1-6v5.1l-8.1 6-8.1-6z"
                    />
                  </svg>
                </span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="userCridentials">
                <li>
                  <a className="dropdown-item" href="#">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </section>
      {/* <!--Ends Extra Elements Area--> */}
    </div>
  );
}

export default App;
