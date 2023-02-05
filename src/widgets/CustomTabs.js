import React, { useState } from "react";

import DangerousHTML from "dangerous-html/react";
import PropTypes from "prop-types";

import "./CustomTabs.css";

const CustomTabs = (props) => {
  const [selectedTab, setSelectedTab] = useState("html");
  return (
    <div className={`tabs-container ${props.rootClassName} `}>
      <div className="tabs-container1">
        <div
          onClick={() => setSelectedTab("html")}
          className="tabs-container2"
          style={
            selectedTab === "html"
        ? { backgroundColor: "#181826" }
              : { backgroundColor: "#1c1f2b" }
          }
        >
          <span className="tabs-text">{props.heading1}</span>
        </div>
        <div
          onClick={() => setSelectedTab("strapi")}
          className="tabs-container3"
          style={
            selectedTab === "strapi"
              ? { backgroundColor: "#181826" }
              : { backgroundColor: "#1c1f2b" }
          }
        >
          <span className="tabs-text1">{props.heading2}</span>
        </div>
      </div>
      {selectedTab === "html" && (
        <div className="tabs-container4">
          <div className="tabs-div minimal-scrollbar Content">
            <DangerousHTML
              html={`<!-- HTML generated using hilite.me -->
<div class="minimal-scrollbar" style="overflow:auto;width:auto;border-radius:8px;padding:1em 2em;font-size:2em; display: flex; justify-content: center; align-items: center; height: 100%;"><pre style="margin: 0; line-height: 125%"><span style="color: #f92672">&lt;div</span> <span style="color: #a6e22e">class=</span><span style="color: #e6db74">&quot;card&quot;</span><span style="color: #f92672">&gt;</span>
  <span style="color: #f92672">&lt;img</span> <span style="color: #a6e22e">strapi-single-type=</span><span style="color: #e6db74">&quot;employee.headshot&quot;</span><span style="color: #f92672">/&gt;</span>
  <span style="color: #f92672">&lt;h2</span> <span style="color: #a6e22e">strapi-single-type=</span><span style="color: #e6db74">&quot;employee.name&quot;</span><span style="color: #f92672">&gt;&lt;/h2&gt;</span>
  <span style="color: #f92672">&lt;p</span> <span style="color: #a6e22e">strapi-single-type=</span><span style="color: #e6db74">&quot;employee.position&quot;</span><span style="color: #f92672">&gt;&lt;/p&gt;</span>
  <span style="color: #f92672">&lt;p</span> <span style="color: #a6e22e">strapi-single-type=</span><span style="color: #e6db74">&quot;employee.story&quot;</span><span style="color: #f92672">&gt;&lt;/p&gt;</span>
<span style="color: #f92672">&lt;/div&gt;</span>
</pre></div>`}
              className=""
            ></DangerousHTML>
          </div>
        </div>
      )}
      {selectedTab === "strapi" && (
        <div className="tabs-container5">
          <img
            alt={props.pastedImage_alt}
            src={props.pastedImage_src}
            loading="eager"
            className="tabs-pasted-image"
            />
          </div>
      )}
    </div>
  );
};

CustomTabs.defaultProps = {
  pastedImage_src: "/playground_assets/pastedImage-rcl8.png",
  rootClassName: "",
  heading2: "Strapi",
  heading1: "HTML",
  pastedImage_alt: "pastedImage",
};

CustomTabs.propTypes = {
  pastedImage_src: PropTypes.string,
  rootClassName: PropTypes.string,
  heading2: PropTypes.string,
  heading1: PropTypes.string,
  pastedImage_alt: PropTypes.string,
};

export default CustomTabs;
