import React from 'react';
import './header.scss';

export function Header() {
  return (
    <div className="header">
      <div className="header-content responsive-container">
        <div className="brand">
          <a href="https://www.redhat.com" className="pf-c-nav__link">
            <img className="pf-c-brand" alt="Red Hat Logo" src="https://developers.redhat.com/themes/custom/rhdp2/images/branding/RHLogo_white.svg" />
          </a>
          <a href="/">
            <img src="/static/media/quarkus-logo.svg" className="project-logo" title="Quarkus" alt="Quarkus"/>
          </a>
        </div>
      </div>
    </div>
  );
}