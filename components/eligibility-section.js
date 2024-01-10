import React from 'react'

import PropTypes from 'prop-types'

import EligibilityCard from './eligibility-card'

const EligibilitySection = (props) => {
  return (
    <>
      <div className={`eligibility-section-container ${props.rootClassName} `}>
        <div className="eligibility-section-features">
          <h1 className="eligibility-section-text">
            <span className="eligibility-section-text1">
              Eligibility Criteria and Documents Required
            </span>
            <br></br>
          </h1>
          <div className="eligibility-section-container1">
            <EligibilityCard
              title="Indian Citizen, Age: 21-65"
              image_src="/features/citizen.svg"
              rootClassName="eligibility-card-root-class-name12"
            ></EligibilityCard>
            <EligibilityCard
              title="Aadhaar Card / PAN card"
              image_src="/features/id-card-200h.png"
              rootClassName="eligibility-card-root-class-name15"
            ></EligibilityCard>
            <EligibilityCard
              title="Salaried or self-employed Annual income &gt; 3 Lakh"
              image_src="/features/salary.svg"
              rootClassName="eligibility-card-root-class-name14"
            ></EligibilityCard>
            <EligibilityCard
              title="CIBIL score greater than 750"
              image_src="/features/score.svg"
              rootClassName="eligibility-card-root-class-name13"
            ></EligibilityCard>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .eligibility-section-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #b8c4e5;
          }
          .eligibility-section-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .eligibility-section-text {
            color: var(--dl-color-gray-white);
            font-size: 1.5rem;
            align-self: center;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .eligibility-section-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            align-items: flex-start;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .eligibility-section-root-class-name {
            background-color: var(--dl-color-finequs-red);
          }
          @media (max-width: 991px) {
            .eligibility-section-text {
              align-self: center;
            }
            .eligibility-section-text1 {
              align-self: center;
            }
            .eligibility-section-container1 {
              grid-template-columns: 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .eligibility-section-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .eligibility-section-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .eligibility-section-container1 {
              grid-gap: var(--dl-space-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

EligibilitySection.defaultProps = {
  rootClassName: '',
}

EligibilitySection.propTypes = {
  rootClassName: PropTypes.string,
}

export default EligibilitySection
