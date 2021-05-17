import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="disclamer">
          <h2>Disclaimer</h2>
          <p>The template was built for helping and providing hope in these tough times. Any similarity to another template, available or unknown, is purely coincidental. You are free to duplicate this template for your personal or professional use. This portfolio is a part of notion and I am not a owner of Notion. Just putting this out there, if it was not clear :) </p>
        </div>
        <div className="product">
          <h2>Have some doubts? Or just wanna chill?</h2>
          <div className="product-wrap">
            <div className="product-box">
                <a href="https://calendly.com/tanishqbhatia/30min" target="_blank" className="btn btn-coffee">
                  <h4>Schedule on calendly</h4>
                </a>
                <a href="https://www.buymeacoffee.com/tanishqbhatia" target="_blank" className="btn btn-ramen">
                  <h4>Buy me a Ramen bowl</h4>
                </a>
              
            </div>
          </div>
        </div>

        <div className="yeah-credit">
        <div className="maker">
          <h3> Built with hope and love by <span><a href="https://www.linkedin.com/in/tanishqbhatia/">Tanishq Bhatia</a> @designwithtanishq</span></h3>
          <ul className="scl-lnk">
            <li><a href="https://dribbble.com/tanishqbhatia" target="__blank"><strong>dribbble</strong></a></li>
            <li> <a href="https://twitter.com/tanni005" target="__blank"><strong>twitter</strong></a></li>
            <li> <a href="https://www.instagram.com/designwithtanishq/" target="__blank"><strong>instagram</strong></a></li>
          </ul>
          
          <h2>Inspiration: <a href="https://www.pablostanley.com/" target="__blank"><strong>pablostanley</strong></a> & <a href="https://vijayverma.co/" target="__blank"><strong>realvjy</strong></a></h2>
          
        </div>



        </div>
      </div>
    </footer>
  )
}

export default Footer