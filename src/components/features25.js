import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features25-container2 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 0 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features25-text4">
                      Authentic Basque Cheesecake
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features25-text5">
                      Indulge in the rich and creamy flavors of our authentic
                      Basque cheesecake, made with high-quality ingredients and
                      traditional techniques.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 1 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features25-text6">
                      Handcrafted with Love
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features25-text3">
                      Each Basque cheesecake is handcrafted with love and
                      attention to detail, ensuring a delicious and satisfying
                      dessert experience.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal3"
          >
            <div className="features25-divider-container3">
              {activeTab === 2 && <div className="features25-container5"></div>}
            </div>
            <div className="features25-content3">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features25-text2">
                      Perfect for Any Occasion
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features25-text1">
                      Whether it&apos;s a special celebration or a casual treat,
                      our Basque cheesecake is the perfect dessert for any
                      occasion.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature3Description: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1694003259477-4df5af198964?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1ODcxNDg5OHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature3ImgAlt: 'Occasion Cheesecake Image',
  feature3Title: undefined,
  feature2ImgAlt: 'Handcrafted Cheesecake Image',
  feature2Description: undefined,
  feature1ImgAlt: 'Basque Cheesecake Image',
  feature1Title: undefined,
  feature1Description: undefined,
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1623820480456-fbac3e0f8681?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1ODcxNDk1OXw&ixlib=rb-4.1.0&q=80&w=1080',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1ODcxNDk1OHw&ixlib=rb-4.1.0&q=80&w=1080',
  feature2Title: undefined,
}

Features25.propTypes = {
  feature3Description: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2Title: PropTypes.element,
}

export default Features25
