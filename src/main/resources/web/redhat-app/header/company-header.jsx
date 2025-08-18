import React from 'react';
import './company-header.scss';
import { CompanyHeader as LibCompanyHeader } from '../../lib';
import { createLinkTracker, useAnalytics }  from '../../lib';
import { FaAngleLeft } from 'react-icons/fa';
import rhLogo from '../media/redhat-logo.svg';
import quarkusLogo from '../media/quarkus-logo.svg';
export function CompanyHeader(props) {
    const analytics = useAnalytics();
    const linkClick = (e) => {
        const link = e.target.getAttribute('href');
        analytics.event('UX', 'Click on header link', link);
    };
    const linkTracker = createLinkTracker(analytics,'UX', 'Header');
    const isCodeQuarkusReferrer = document.referrer.includes("code.quarkus.io");
    return (
        <LibCompanyHeader {...props} quarkusLogo={quarkusLogo}>
            <>
                <div className="redhat-brand">

                    <a href="https://www.redhat.com"  onClick={linkClick}>
                        <img className="logo" alt="Red Hat Logo"
                             src={rhLogo}/>
                    </a>
                </div>
                {isCodeQuarkusReferrer && (
                    <div className="nav-container">
                        <a href="https://code.quarkus.io" onClick={linkTracker}><FaAngleLeft/> Back to code.quarkus.io</a>
                    </div>
                )}
               </>
        </LibCompanyHeader>
    );
}