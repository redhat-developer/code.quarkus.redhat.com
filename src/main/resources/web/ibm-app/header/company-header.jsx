import React from 'react';
import './company-header.scss';
import { CompanyHeader as LibCompanyHeader } from '../../lib';
import { createLinkTracker, useAnalytics }  from '../../lib';
import { FaAngleLeft } from 'react-icons/fa';
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
                <div className="brand">
                    <a href="https://www.ibm.com"  onClick={linkClick}>IBM</a>&nbsp;Enterprise Build of Quarkus
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