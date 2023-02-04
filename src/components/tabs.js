import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './tabs.css'

const Tabs = (props) => {
  const [openTab, setOpenTab] = useState('html')
  return (
    <div className={`tabs-container ${props.rootClassName} `}>
      <div className="tabs-container1">
        <div onClick={() => setOpenTab('html')} className="tabs-container2">
          <span className="tabs-text">{props.text}</span>
        </div>
        <div onClick={() => setOpenTab('strapi')} className="tabs-container3">
          <span className="tabs-text1">{props.text1}</span>
        </div>
      </div>
      {openTab === 'html' && (
        <div className="tabs-container4">
          <h1 className="">{props.heading1}</h1>
        </div>
      )}
      {openTab === 'strapi' && (
        <div className="tabs-container5">
          <h1 className="">{props.heading}</h1>
        </div>
      )}
    </div>
  )
}

Tabs.defaultProps = {
  text1: 'Strapi',
  text: 'HTML',
  heading: 'Strapi',
  heading1: 'HTML',
  rootClassName: '',
}

Tabs.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  heading1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Tabs
