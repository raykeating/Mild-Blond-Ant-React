import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Mild Blond Ant</title>
        <meta property="og:title" content="Mild Blond Ant" />
      </Helmet>
      <div className="home-container01">
        <div className="home-container02">
          <div data-aos="fade-right" className="home-container03">
            <img
              alt="image"
              src="/playground_assets/strapifylogo-600h.png"
              className="home-image"
            />
            <span className="home-text">
              <span>It&apos;s like Tailwind or Bootstrap.</span>
              <br></br>
              <br></br>
              <span>But for Strapi CMS integration</span>
            </span>
          </div>
          <div data-aos="fade-left" className="home-div">
            <DangerousHTML
              data-aos="fade-left"
              html={`<!-- HTML generated using hilite.me --><div style="background: #1c1f2b; overflow:auto;width:auto;border-radius:8px;padding:1em 2em;font-size:1.5em;"><pre style="margin: 0; line-height: 125%"><span style="color: #f92672">&lt;script</span>
<span style="color: #f92672">  </span><span style="color: #a6e22e">src=</span><span style="color: #e6db74">&quot;https://strapify-script.s3.amazonaws.com/strapify-v0.0.1.js&quot;</span>
  <span style="color: #a6e22e">data-strapi-api-url=</span><span style="color: #e6db74">&quot;ENTER YOUR STRAPI URL HERE&quot;</span>
  <span style="color: #a6e22e">type=</span><span style="color: #e6db74">&quot;text/javascript&quot;</span><span style="color: #f92672">&gt;</span>
<span style="color: #f92672">&lt;/script&gt;</span>
</pre></div>

`}
            ></DangerousHTML>
          </div>
        </div>
      </div>
      <div className="home-container04">
        <div className="home-container05">
          <span className="home-text05">Connect a Strapi Collection</span>
          <div className="home-wrapper">
            <div className="home-container06">
              <div className="home-container07">
                <span className="home-text06">HTML</span>
                <div className="home-div1 Content">
                  <DangerousHTML
                    html={`<!-- HTML generated using hilite.me -->
<div style="background: #1c1f2b; overflow:auto;width:auto;border-radius:8px;padding:1em 2em;font-size:1.5em;"><pre style="margin: 0; line-height: 125%"><span style="color: #f92672">&lt;div</span> <span style="color: #a6e22e">strapi-collection=</span><span style="color: #e6db74">&quot;people&quot;</span><span style="color: #f92672">&gt;</span>
  <span style="color: #f92672">&lt;div</span> <span style="color: #a6e22e">strapi-template</span><span style="color: #f92672">&gt;</span>
    <span style="color: #f92672">&lt;img</span> <span style="color: #a6e22e">strapi-field=</span><span style="color: #e6db74">&quot;headshot&quot;</span><span style="color: #f92672">&gt;</span><span style="color: #f92672">&lt;/img&gt;</span>
    <span style="color: #f92672">&lt;p</span> <span style="color: #a6e22e">strapi-field=</span><span style="color: #e6db74">&quot;name&quot;</span><span style="color: #f92672">&gt;</span><span style="color: #fff"></span><span style="color: #f92672">&lt;/p&gt;</span>
  <span style="color: #f92672">&lt;/div&gt;</span>
<span style="color: #f92672">&lt;/div&gt;</span>
</pre></div>



`}
                  ></DangerousHTML>
                </div>
              </div>
              <div className="home-container08">
                <span className="home-text07">Strapi</span>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-udtp-700h.png"
                  className="home-pasted-image"
                />
              </div>
            </div>
            <div className="home-container09">
              <span className="home-text08">Result</span>
              <div strapi-collection="people" className="home-container10">
                <div
                  data-aos="zoom-in"
                  strapi-template="true"
                  className="home-container11 card"
                >
                  <img
                    alt="image"
                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                    strapi-field="headshot"
                    className="home-image1"
                  />
                  <span strapi-field="name" className="home-text09">
                    Jane Doe
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
