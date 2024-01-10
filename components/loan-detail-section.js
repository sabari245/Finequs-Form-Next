import React from 'react'

import PropTypes from 'prop-types'

const LoanDetailSection = (props) => {
  return (
    <>
      <div className={`loan-detail-section-container ${props.rootClassName} `}>
        <div className="loan-detail-section-hero">
          <div className="loan-detail-section-container1">
            <h1 className="loan-detail-section-text">
              Interest Rate and Charges
            </h1>
            <ul className="list">
              <li className="list-item">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="loan-detail-section-icon"
                >
                  <path d="M409.714 797.143l259.429-259.429c14.286-14.286 14.286-37.143 0-51.429l-259.429-259.429c-14.286-14.286-37.143-14.286-51.429 0l-58.286 58.286c-14.286 14.286-14.286 37.143 0 51.429l175.429 175.429-175.429 175.429c-14.286 14.286-14.286 37.143 0 51.429l58.286 58.286c14.286 14.286 37.143 14.286 51.429 0zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <span className="loan-detail-section-text1">
                  Interest Rate: 9.9% - 45% p.a.
                </span>
              </li>
              <li className="list-item">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="loan-detail-section-icon2"
                >
                  <path d="M409.714 797.143l259.429-259.429c14.286-14.286 14.286-37.143 0-51.429l-259.429-259.429c-14.286-14.286-37.143-14.286-51.429 0l-58.286 58.286c-14.286 14.286-14.286 37.143 0 51.429l175.429 175.429-175.429 175.429c-14.286 14.286-14.286 37.143 0 51.429l58.286 58.286c14.286 14.286 37.143 14.286 51.429 0zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <span className="loan-detail-section-text2">
                  Loan Amount: Up to ₹20 Lakh
                </span>
              </li>
              <li className="list-item">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="loan-detail-section-icon4"
                >
                  <path d="M409.714 797.143l259.429-259.429c14.286-14.286 14.286-37.143 0-51.429l-259.429-259.429c-14.286-14.286-37.143-14.286-51.429 0l-58.286 58.286c-14.286 14.286-14.286 37.143 0 51.429l175.429 175.429-175.429 175.429c-14.286 14.286-14.286 37.143 0 51.429l58.286 58.286c14.286 14.286 37.143 14.286 51.429 0zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <span className="loan-detail-section-text3">
                  Tenure: Upto 48 months
                </span>
              </li>
            </ul>
          </div>
          <img
            alt="image"
            src="/features/details-1200w.webp"
            className="loan-detail-section-image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .loan-detail-section-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .loan-detail-section-hero {
            width: 100%;
            height: 629px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            min-height: auto;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .loan-detail-section-container1 {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .loan-detail-section-text {
            font-size: 2.3rem;
            max-width: 450px;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .loan-detail-section-icon {
            width: 24px;
            height: 24px;
          }
          .loan-detail-section-text1 {
            font-size: 20px;
          }
          .loan-detail-section-icon2 {
            width: 24px;
            height: 24px;
          }
          .loan-detail-section-text2 {
            font-size: 20px;
          }
          .loan-detail-section-icon4 {
            width: 24px;
            height: 24px;
          }
          .loan-detail-section-text3 {
            font-size: 20px;
          }
          .loan-detail-section-image {
            width: 496px;
            height: 534px;
            object-fit: cover;
          }

          @media (max-width: 991px) {
            .loan-detail-section-hero {
              flex-direction: column;
            }
            .loan-detail-section-container1 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .loan-detail-section-text {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .loan-detail-section-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .loan-detail-section-image {
              width: 80%;
            }
          }
          @media (max-width: 479px) {
            .loan-detail-section-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .loan-detail-section-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

LoanDetailSection.defaultProps = {
  rootClassName: '',
}

LoanDetailSection.propTypes = {
  rootClassName: PropTypes.string,
}

export default LoanDetailSection
