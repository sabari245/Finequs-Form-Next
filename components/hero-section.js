import React from 'react'

import PropTypes from 'prop-types'

const HeroSection = (props) => {
  return (
    <>
      <div className={`hero-section-container ${props.rootClassName} `}>
        <div className="hero-section-hero">
          <div className="hero-section-container1">
            <h1 className="hero-section-text">
              Get a Personal Loan under 5 minutes
            </h1>
            <span className="hero-section-text1">
              <span>
                Enjoy attractive interest rates starting at 9.9% p.a. with
                flexible EMI options.
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="hero-section-btn-group">
              <button className="hero-section-register button">
                <span>{props.text1}</span>
                <svg viewBox="0 0 1024 1024" className="hero-section-icon">
                  <path d="M414.165 798.165l256-256c16.683-16.683 16.683-43.691 0-60.331l-256-256c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"></path>
                </svg>
              </button>
            </div>
          </div>
          <img
            alt="image"
            src="/external/hero-1200w.jpg"
            className="hero-section-image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .hero-section-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
          }
          .hero-section-hero {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            margin-top: 0px;
            min-height: 50vh;
            align-items: center;
            padding-top: 0px;
            padding-left: var(--dl-space-space-threeunits);
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .hero-section-container1 {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .hero-section-text {
            width: 679px;
            font-size: 3rem;
            max-width: 450px;
          }
          .hero-section-text1 {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .hero-section-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .hero-section-register {
            display: flex;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-finequs-bluetext);
          }
          .hero-section-icon {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .hero-section-image {
            width: 50%;
            height: 361px;
            object-fit: cover;
          }

          @media (max-width: 991px) {
            .hero-section-hero {
              flex-direction: column;
            }
            .hero-section-container1 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .hero-section-text {
              text-align: center;
            }
            .hero-section-text1 {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .hero-section-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .hero-section-text1 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .hero-section-register {
              display: none;
            }
            .hero-section-image {
              width: 80%;
            }
          }
          @media (max-width: 479px) {
            .hero-section-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .hero-section-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .hero-section-btn-group {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

HeroSection.defaultProps = {
  text1: 'Apply Now',
  rootClassName: '',
}

HeroSection.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default HeroSection
