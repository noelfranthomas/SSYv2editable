import React from 'react'
import './Footer.css'
import FooterLogo from './FooterLogo'

export default () => (
    <div className="footerStack">
      <div className="footer">
        <div className="footerStack">
          <div className="logo">
            <FooterLogo />
          </div>
          <h3 className="logo vertPadding taCenter">
            Stars For Sheltered Youth
          </h3>
          <i className="taCenter">
           "Stars for Scholarly Youth (SSY) is a University of Calgary club that seeks to establish equal opportunities and extracurricular excellence for youth in shelters and foster homes."
          </i>
        </div>
      </div>
    <br />

    <hr width="70%" size="2" align="center" />

    <div className="section taCenter">
      © Stars for Scholarly Youth {new Date().getFullYear()}
    </div>
  </div>
)
