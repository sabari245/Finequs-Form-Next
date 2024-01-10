import React from 'react'

import PropTypes from 'prop-types'

const CtaSection = (props) => {
  return (
    <>
      <div className={`cta-section-container ${props.rootClassName} `}>
        <div className="cta-section-banner">
          <div className="cta-section-container1">
            <h1 className="cta-section-text">
              Get Personal Loan Online Approval in Less than 5 mins
            </h1>
            <div className="cta-section-container2">
              <button className="cta-section-register button">
                <span>{props.text1}</span>
                <svg viewBox="0 0 1024 1024" className="cta-section-icon">
                  <path d="M414.165 798.165l256-256c16.683-16.683 16.683-43.691 0-60.331l-256-256c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"></path>
                </svg>
              </button>
            </div>
          </div>
          <img
            alt="image"
            src="/external/footer.svg"
            className="cta-section-image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .cta-section-container {
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: transparent;
          }
          .cta-section-banner {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            justify-content: space-between;
            background-color: var(--dl-color-finequs-red);
          }
          .cta-section-container1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-sixunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .cta-section-text {
            color: var(--dl-color-gray-white);
            align-self: flex-start;
            text-align: left;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .cta-section-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .cta-section-register {
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
          .cta-section-icon {
            fill: var(--dl-color-gray-white);
            width: 24px;
            height: 24px;
          }
          .cta-section-image {
            width: 294px;
            height: 249px;
            object-fit: cover;
            flex-shrink: 0;
          }
          .cta-section-root-class-name {
            align-self: center;
          }
          @media (max-width: 991px) {
            .cta-section-banner {
              flex-direction: column;
            }
            .cta-section-container1 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .cta-section-container2 {
              justify-content: center;
            }
            .cta-section-image {
              width: var(--dl-size-size-xxlarge);
              height: var(--dl-size-size-xxlarge);
            }
          }
          @media (max-width: 767px) {
            .cta-section-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .cta-section-register {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .cta-section-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .cta-section-container2 {
              align-items: center;
              flex-direction: column;
            }
            .cta-section-image {
              width: var(--dl-size-size-xlarge);
              height: var(--dl-size-size-xlarge);
            }
          }
        `}
      </style>
    </>
  )
}

CtaSection.defaultProps = {
  rootClassName: '',
  text1: 'Apply Now',
}

CtaSection.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
}

export default CtaSection
