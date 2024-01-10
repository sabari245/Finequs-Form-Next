import React from 'react'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <div className={`footer-container ${props.rootClassName} `}>
        <footer className="footer-footer">
          <div className="footer-container1">
            <div className="footer-logo">
              <img
                alt="logo"
                src="/external/logo-1500h.png"
                className="footer-image"
              />
            </div>
            <div className="footer-links-container">
              <div className="footer-container2">
                <div className="footer-product-container">
                  <span className="footer-text">Product</span>
                  <a
                    href="https://finequs.com/products/loan"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link"
                  >
                    Loan
                  </a>
                  <a
                    href="https://finequs.com/products/credit-cards"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link01"
                  >
                    Credit Card
                  </a>
                </div>
                <div className="footer-company-container">
                  <span className="footer-text1">Company</span>
                  <a
                    href="https://finequs.com/about-us"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link02"
                  >
                    About Us
                  </a>
                  <a
                    href="https://finequs.com/how-it-works"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link03"
                  >
                    How it Works
                  </a>
                  <a
                    href="https://finequs.com/partners"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link04"
                  >
                    Partners
                  </a>
                  <a
                    href="https://careers.finequs.com/jobs/Careers"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link05"
                  >
                    <span>Careers</span>
                    <br></br>
                  </a>
                </div>
              </div>
              <div className="footer-container3">
                <div className="footer-contact">
                  <span className="footer-text4">Calculator</span>
                  <a
                    href="https://finequs.com/emi-calculator/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="footer-link06"
                  >
                    EMI Calculator
                  </a>
                </div>
                <div className="footer-socials">
                  <span className="footer-text5">Follow Us</span>
                  <div className="footer-icon-group">
                    <a
                      href="https://www.linkedin.com/company/finequs"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="footer-link07"
                    >
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="footer-icon"
                      >
                        <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/Finequs"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="footer-link08"
                    >
                      <svg
                        viewBox="0 0 602.2582857142856 1024"
                        className="footer-icon02"
                      >
                        <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/finequs_for_everyone/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="footer-link09"
                    >
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="footer-icon04"
                      >
                        <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/finequs"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="footer-link10"
                    >
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="footer-icon06"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCut2rdNHvT4ic15GMxoU85g"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="footer-link11"
                    >
                      <svg viewBox="0 0 1024 1024" className="footer-icon08">
                        <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-separator"></div>
          <span className="footer-text6">
            © 2024 Finequs, All Rights Reserved.
          </span>
        </footer>
      </div>
      <style jsx>
        {`
          .footer-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
          }
          .footer-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            border-color: var(--dl-color-finequs-bluetext);
            border-width: 0px;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            border-top-width: 0.75rem;
          }
          .footer-container1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-logo {
            width: 396px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-image {
            height: 5rem;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .footer-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-container2 {
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-product-container {
            width: 93px;
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-link {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link01 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-company-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text1 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-link02 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link03 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link04 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link05 {
            text-decoration: none;
          }
          .footer-container3 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-contact {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text4 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-link06 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-socials {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text5 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-link07 {
            display: contents;
          }
          .footer-icon {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link08 {
            display: contents;
          }
          .footer-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link09 {
            display: contents;
          }
          .footer-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link10 {
            display: contents;
          }
          .footer-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-link11 {
            display: contents;
          }
          .footer-icon08 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .footer-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-900);
          }
          .footer-text6 {
            align-self: center;
          }

          @media (max-width: 991px) {
            .footer-footer {
              flex-direction: column;
            }
            .footer-container2 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .footer-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .footer-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .footer-container1 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .footer-logo {
              align-items: center;
            }
            .footer-image {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .footer-links-container {
              width: 100%;
              align-items: flex-start;
              flex-direction: row;
              justify-content: center;
            }
            .footer-container2 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .footer-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .footer-footer {
              padding: var(--dl-space-space-unit);
            }
            .footer-container1 {
              align-items: center;
              flex-direction: column;
            }
            .footer-image {
              margin-bottom: 0px;
            }
            .footer-links-container {
              align-items: center;
              flex-direction: column;
            }
            .footer-container2 {
              margin-right: 0px;
            }
            .footer-container3 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              align-items: flex-start;
              margin-bottom: 0px;
            }
            .footer-contact {
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer-text6 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  rootClassName: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
}

export default Footer
