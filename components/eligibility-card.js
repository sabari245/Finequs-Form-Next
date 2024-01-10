import React from 'react'

import PropTypes from 'prop-types'

const EligibilityCard = (props) => {
  return (
    <>
      <div className={`eligibility-card-feature-card ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="eligibility-card-image"
        />
        <h2 className="eligibility-card-text">{props.title}</h2>
      </div>
      <style jsx>
        {`
          .eligibility-card-feature-card {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .eligibility-card-feature-card:hover {
            transform: scale(1.02);
          }
          .eligibility-card-image {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .eligibility-card-text {
            color: #200000;
            font-size: 1.3rem;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            margin-bottom: 0px;
          }
          .eligibility-card-root-class-name {
            height: 100%;
          }

          .eligibility-card-root-class-name2 {
            height: 100%;
          }
          .eligibility-card-root-class-name3 {
            height: 100%;
          }
          .eligibility-card-root-class-name4 {
            height: 100%;
          }

          .eligibility-card-root-class-name6 {
            height: 100%;
          }
          .eligibility-card-root-class-name7 {
            height: 100%;
          }
          .eligibility-card-root-class-name8 {
            height: 100%;
          }

          .eligibility-card-root-class-name10 {
            height: 100%;
          }
          .eligibility-card-root-class-name11 {
            height: 100%;
          }
          .eligibility-card-root-class-name12 {
            height: 100%;
          }
          .eligibility-card-root-class-name13 {
            height: 100%;
          }
          .eligibility-card-root-class-name14 {
            height: 100%;
          }
          .eligibility-card-root-class-name15 {
            height: 100%;
          }
        `}
      </style>
    </>
  )
}

EligibilityCard.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=200',
  rootClassName: '',
  title1: 'Lorem ipsum',
  title: 'Lorem ipsum',
  image_alt: 'image',
}

EligibilityCard.propTypes = {
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  title1: PropTypes.string,
  title: PropTypes.string,
  image_alt: PropTypes.string,
}

export default EligibilityCard
