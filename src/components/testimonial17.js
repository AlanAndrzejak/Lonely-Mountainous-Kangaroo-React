import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text34">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text26">
                  Read what our customers have to say about our delicious Basque
                  cheese cakes.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text32">
                            Anna Kowalska
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text37">
                            Food Blogger
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text24">
                        The Basque cheese cake here is simply divine! I
                        can&apos;t get enough of it.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text30">
                            Piotr Nowak
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text35">
                            Cake Enthusiast
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text31">
                        I&apos;ve tried Basque cheese cakes from many places,
                        but this cafe&apos;s version is the best by far.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text33">
                            Magdalena Wiśniewska
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text28">
                            Cheese Lover
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text36">
                        The creamy texture and rich flavor of the Basque cheese
                        cake here is unmatched.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text29">
                            Kamil Szymański
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text27">
                            Dessert Connoisseur
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text25">
                        I keep coming back for more of this amazing Basque
                        cheese cake. It&apos;s addictive!
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  review1: undefined,
  author4Alt: 'Image of Kamil Szymański',
  review4: undefined,
  content1: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1740644545217-892da8cce224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1ODcxNDgxNnw&ixlib=rb-4.1.0&q=80&w=1080',
  author4Position: undefined,
  author3Alt: 'Image of Magdalena Wiśniewska',
  author3Position: undefined,
  author2Alt: 'Image of Piotr Nowak',
  author4Name: undefined,
  author2Name: undefined,
  review2: undefined,
  author1Name: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1623580890503-9f7dca11d8ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1ODcxNDgxNXw&ixlib=rb-4.1.0&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1743582802499-d51bc2a16e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1ODcxNDgxNnw&ixlib=rb-4.1.0&q=80&w=1080',
  author3Name: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1ODcxNDgxN3w&ixlib=rb-4.1.0&q=80&w=1080',
  author1Alt: 'Image of Anna Kowalska',
  heading1: undefined,
  author2Position: undefined,
  review3: undefined,
  author1Position: undefined,
}

Testimonial17.propTypes = {
  review1: PropTypes.element,
  author4Alt: PropTypes.string,
  review4: PropTypes.element,
  content1: PropTypes.element,
  author4Src: PropTypes.string,
  author4Position: PropTypes.element,
  author3Alt: PropTypes.string,
  author3Position: PropTypes.element,
  author2Alt: PropTypes.string,
  author4Name: PropTypes.element,
  author2Name: PropTypes.element,
  review2: PropTypes.element,
  author1Name: PropTypes.element,
  author2Src: PropTypes.string,
  author3Src: PropTypes.string,
  author3Name: PropTypes.element,
  author1Src: PropTypes.string,
  author1Alt: PropTypes.string,
  heading1: PropTypes.element,
  author2Position: PropTypes.element,
  review3: PropTypes.element,
  author1Position: PropTypes.element,
}

export default Testimonial17
