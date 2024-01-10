import React from 'react'

import PropTypes from 'prop-types'

import FeatureCard from './feature-card'

const FeaturesSection = (props) => {
  return (
    <>
      <div className={`features-section-container ${props.rootClassName} `}>
        <div className="features-section-features">
          <h1 className="features-section-text">
            <span className="features-section-text1">
              Features and Benefits
            </span>
            <br></br>
          </h1>
          <div className="features-section-container1">
            <FeatureCard
              title="Instant Disbursal"
              image_src="/features/instant-disbursal.svg"
              rootClassName="rootClassName"
            ></FeatureCard>
            <FeatureCard
              title="100% Paperless Process"
              image_src="/features/paperless.svg"
              rootClassName="rootClassName1"
            ></FeatureCard>
            <FeatureCard
              title="Minimal Documentation"
              image_src="/features/doc-200h.jpg"
              rootClassName="rootClassName2"
            ></FeatureCard>
            <FeatureCard
              title="No Collateral Required"
              image_src="/features/collateral-200h.jpg"
              rootClassName="rootClassName3"
            ></FeatureCard>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features-section-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-finequs-red);
          }
          .features-section-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .features-section-text {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            align-self: center;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .features-section-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            align-items: flex-start;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }

          @media (max-width: 991px) {
            .features-section-text {
              align-self: center;
            }
            .features-section-text1 {
              align-self: center;
            }
            .features-section-container1 {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .features-section-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .features-section-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .features-section-container1 {
              grid-gap: var(--dl-space-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

FeaturesSection.defaultProps = {
  rootClassName: '',
}

FeaturesSection.propTypes = {
  rootClassName: PropTypes.string,
}

export default FeaturesSection
