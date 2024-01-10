import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard = (props) => {
  return (
    <>
      <div className={`feature-card-feature-card ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="feature-card-image"
        />
        <h2 className="feature-card-text">{props.title}</h2>
      </div>
      <style jsx>
        {`
          .feature-card-feature-card {
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
          .feature-card-feature-card:hover {
            transform: scale(1.02);
          }
          .feature-card-image {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .feature-card-text {
            color: #200000;
            font-size: 1.3rem;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .feature-card-root-class-name {
            height: 100%;
          }

          .feature-card-root-class-name2 {
            height: 100%;
          }
          .feature-card-root-class-name3 {
            height: 100%;
          }
          .feature-card-root-class-name4 {
            height: 100%;
          }

          .feature-card-root-class-name6 {
            height: 100%;
          }
          .feature-card-root-class-name7 {
            height: 100%;
          }
        `}
      </style>
    </>
  )
}

FeatureCard.defaultProps = {
  image_alt: 'image',
  title: 'Lorem ipsum',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=200',
}

FeatureCard.propTypes = {
  image_alt: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
}

export default FeatureCard
