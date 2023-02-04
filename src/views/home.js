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
        <div className="home-container04">
          <span className="home-text04">usage</span>
          <svg
            viewBox="0 0 658.2857142857142 1024"
            data-aos="fade-up"
            data-aos-delay="800"
            className="home-icon"
          >
            <path d="M614.286 420.571c0 4.571-2.286 9.714-5.714 13.143l-266.286 266.286c-3.429 3.429-8.571 5.714-13.143 5.714s-9.714-2.286-13.143-5.714l-266.286-266.286c-3.429-3.429-5.714-8.571-5.714-13.143s2.286-9.714 5.714-13.143l28.571-28.571c3.429-3.429 8-5.714 13.143-5.714 4.571 0 9.714 2.286 13.143 5.714l224.571 224.571 224.571-224.571c3.429-3.429 8.571-5.714 13.143-5.714s9.714 2.286 13.143 5.714l28.571 28.571c3.429 3.429 5.714 8.571 5.714 13.143z"></path>
          </svg>
        </div>
      </div>
      <div className="home-container05">
        <div className="home-container06">
          <span className="home-text05">Connect a Strapi Collection</span>
          <div className="home-wrapper">
            <div className="home-container07">
              <div className="home-container08">
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
              <div className="home-container09">
                <span className="home-text07">Strapi</span>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-udtp-700h.png"
                  className="home-pasted-image"
                />
              </div>
            </div>
            <div className="home-container10">
              <span className="home-text08">Result</span>
              <div strapi-collection="people" className="home-container11">
                <div
                  data-aos="zoom-in"
                  strapi-template="true"
                  className="home-container12 card"
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
      <div className="home-container13">
        <div className="home-container14">
          <span className="home-text10">Connect Strapi Single Types</span>
          <div className="home-wrapper1">
            <div className="home-container15">
              <div className="home-container16">
                <span className="home-text11">HTML</span>
                <div className="home-div2 Content">
                  <DangerousHTML
                    html={`<!-- HTML generated using hilite.me -->
<div style="background: #1c1f2b; overflow:auto;width:auto;border-radius:8px;padding:1em 2em;font-size:1.5em;"><pre style="margin: 0; line-height: 125%"><span style="color: #f92672">&lt;div</span> <span style="color: #a6e22e">class=</span><span style="color: #e6db74">&quot;card&quot;</span><span style="color: #f92672">&gt;</span>
  <span style="color: #f92672">&lt;img</span> <span style="color: #a6e22e">strapi-single-type=</span><span style="color: #e6db74">&quot;employee.headshot&quot;</span><span style="color: #f92672">/&gt;</span>
  <span style="color: #f92672">&lt;h2</span> <span style="color: #a6e22e">strapi-single-type=</span><span style="color: #e6db74">&quot;employee.name&quot;</span><span style="color: #f92672">&gt;&lt;/h2&gt;</span>
  <span style="color: #f92672">&lt;p</span> <span style="color: #a6e22e">strapi-single-type=</span><span style="color: #e6db74">&quot;employee.position&quot;</span><span style="color: #f92672">&gt;&lt;/p&gt;</span>
  <span style="color: #f92672">&lt;p</span> <span style="color: #a6e22e">strapi-single-type=</span><span style="color: #e6db74">&quot;employee.story&quot;</span><span style="color: #f92672">&gt;&lt;/p&gt;</span>
<span style="color: #f92672">&lt;/div&gt;</span>
</pre></div>`}
                  ></DangerousHTML>
                </div>
              </div>
              <div className="home-container17">
                <span className="home-text12">Strapi</span>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-j194-700h.png"
                  className="home-pasted-image1"
                />
              </div>
            </div>
            <div className="home-container18">
              <span className="home-text13">Result</span>
              <div data-aos="zoom-in" className="home-container19 card">
                <div className="home-container20">
                  <img
                    alt="image"
                    src="https://play.teleporthq.io/static/svg/default-img.svg"
                    strapi-single-type="employee.headshot"
                    className="home-image2"
                  />
                  <div className="home-container21">
                    <span
                      strapi-single-type="employee.name"
                      className="home-text14"
                    >
                      Jane Doe
                    </span>
                    <span
                      strapi-single-type="employee.position"
                      className="home-text15"
                    >
                      Employee
                    </span>
                  </div>
                </div>
                <span
                  strapi-single-type="employee.story"
                  className="home-text16"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  neque turpis, vulputate id libero sed, dignissim venenatis
                  purus. Integer nec dui tempor, feugiat elit in, vestibulum
                  felis. Nullam mattis in diam id dapibus. Morbi semper at elit
                  vitae rutrum.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
