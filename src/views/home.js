import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Lonely Mountainous Kangaroo</title>
        <meta property="og:title" content="Lonely Mountainous Kangaroo" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text10">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11">#about</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12">#gallery</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13">#contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text14">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text15">About</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text16">Gallery</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text17">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text18">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text19">Secondary Action</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text20">
              Welcome to Basque Cheese Cake Cafe!
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text21">Meet the Owner</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text22">Explore Our Delicious Creations</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text23">Get in Touch</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text24">View Our Menu</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text25">Contact Us</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text26">
              Indulge in the creamy and rich flavors of our signature Basque
              cheese cake. Made with love and traditional recipes, each bite
              will transport you to the Basque country.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text27">
              Welcome to our Basque Cheese Cake Cafe
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text28">Irresistible Basque Cheese Cake</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text29">Rich Flavor and Creamy Texture</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text30">
              Welcome to the world of heavenly Basque cheese cakes at our cafe.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text31">
              Indulge in the creamy texture and rich flavor of our signature
              Basque cheese cake.
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text32">Order Now</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text33">
              Made with love and traditional Basque recipe, our cheesecake is a
              true delight for your taste buds.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text34">
              Try our delicious Basque cheese cake today!
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text35">Authentic Basque Cheesecake</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text36">Handcrafted with Love</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text37">Perfect for Any Occasion</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text38">
              Indulge in the rich and creamy flavors of our authentic Basque
              cheesecake, made with high-quality ingredients and traditional
              techniques.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text39">
              Each Basque cheesecake is handcrafted with love and attention to
              detail, ensuring a delicious and satisfying dessert experience.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text40">
              Whether it&apos;s a special celebration or a casual treat, our
              Basque cheesecake is the perfect dessert for any occasion.
            </span>
          </Fragment>
        }
      ></Features25>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text41">
              The Basque cheese cake here is simply divine! I can&apos;t get
              enough of it.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text42">
              I&apos;ve tried Basque cheese cakes from many places, but this
              cafe&apos;s version is the best by far.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text43">
              The creamy texture and rich flavor of the Basque cheese cake here
              is unmatched.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text44">
              I keep coming back for more of this amazing Basque cheese cake.
              It&apos;s addictive!
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text45">
              Read what our customers have to say about our delicious Basque
              cheese cakes.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text46">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text47">Anna Kowalska</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text48">Piotr Nowak</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text49">Magdalena Wiśniewska</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text50">Kamil Szymański</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text51">Food Blogger</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text52">Cake Enthusiast</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text53">Cheese Lover</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text54">Dessert Connoisseur</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text55">
              Feel free to reach out to us for any inquiries or orders.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text56">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text57">Basque Cheese Cake Cafe</span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text58">Link 1</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text59">Link 2</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text60">Link 3</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text61">Link 4</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text62">Link 5</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text63">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text64">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text65">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
