import * as React from "react"
import { Link, graphql, withPrefix } from 'gatsby'


import Layout from "../components/layout"
import Seo from "../components/seo"
import Helmet from "react-helmet"
import Footer from "../components/footer"

import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title 
  const posts = data.allMarkdownRemark.edges

  

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Greatest Design Portfolio" />
      <Helmet>
        <script src={withPrefix('sound.js')} type="text/javascript" loop />
      </Helmet>
      <>


        <div className="top-nav">
          <div className="container">
            <div className="nav-box">
                <ThemeToggler>
                      {({ theme, toggleTheme }) => (
                        <div className="mode-toggle">
                        <label>
                          <input
                            type="checkbox"
                            onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                            checked={theme === 'dark'}
                            id="dmode"
                          />{' '}
                        </label>
                        </div>
                      )}
                </ThemeToggler>
              <ul className="buttons links">
                  {/* <li>
                    <a className="btn-social" href=""><img src="/ph-badge.png" /></a>
                  </li> */}
                  <li>
                    <a className="btn-social" href="https://twitter.com/intent/tweet?text=Build%20your%20greatest%20portfolio%20in%20Notion%20http%3A%2F%2Fwww.greatestportfolio.com%2F%20by%20%40tanni005" target="_blank"><img src="/twitter-share.png" />
                    </a>
                  </li>
              </ul>
            </div>
          </div>
        </div>


    <section className="hero_section">

        <div className="container">
          <div className="hero_wrapper">
            <div className="hero_img">
            <picture>
              <source srcset="dark.png" media="(prefers-color-scheme: dark)" />
              <source srcset="light.svg" media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)" />
              <img id="screenshot" src="light.svg" />
            </picture>
            </div>
            <div className="hero_details">
              <div className="texts">
                
                <h1>greatest notion design portfolio</h1>
                <p>A free Notion portfolio template made out of goodwill and hope of a better job searching process, includes your processes, case-studies, past work, social media, and feedbacks and testimonials.</p>
              </div>

              <div className="btn-lnks">
                <div className="dwn-links">
                  <button className="btn btn-download">
                    <h4>Download Template </h4>
                  </button>
                  <ul className="dwn-list">
                    <li><a href="https://www.notion.so/Greatest-Design-Portfolio-793948b4ef4e43489f4f4ca9f81af0e8" target="_blank"><img src="/notion.png"/> Open Notion</a></li>
            
                  </ul>
                </div>

                
              </div>
              <div className="license-box">
                
              <div className="license">
                  <p>Free for commercial and personal use under <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank">CC0 License</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features_section">
        <div className="container">
          <div className="feature_box">
            <div className="f_box">
                <div className="box_wrap">
                  <h2>100%</h2>
                  <h4>Customizable</h4>
                </div>
            </div>
            <div className="f_box">
                <div className="box_wrap">
                  <h2>2</h2>
                  <h4>Full Case study templates</h4>
                </div>
            </div>
            <div className="f_box">
                <div className="box_wrap">
                  <h2>8+</h2>
                  <h4>Profile sections within</h4>
                </div>
            </div>
            <div className="f_box">
                <div className="box_wrap">
                  <h2>FREE</h2>
                  <h4>Open source CC0 License</h4>
                </div>
            </div>
          </div>
        </div>
      </section>        
        
        
        <Footer/>
      
      </>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
