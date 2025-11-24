import React from 'react';
import './company-header.scss';
import {CompanyHeader as LibCompanyHeader} from '../../lib';
import {createLinkTracker, useAnalytics} from '../../lib';
import {FaAngleLeft} from 'react-icons/fa';
import rhLogo from '../media/redhat-logo.svg';
import {ResourcesNav} from './resources-nav';

export function CompanyHeader(props) {
    const analytics = useAnalytics();
    const linkClick = (e) => {
        const link = e.target.getAttribute('href');
        analytics.event('UX', 'Click on header link', link);
    };
    const linkTracker = createLinkTracker(analytics, 'UX', 'Header');
    const isCodeQuarkusReferrer = document.referrer.includes("code.quarkus.io");

    // Extract platform stream key from streamProps
    // The streamKey is passed via props.streamProps.streamKey
    const platformStream = props.streamProps?.streamKey;

    return (
        <>
            <LibCompanyHeader {...props} brand={(
                <>
                    <a className="logo" href="https://www.redhat.com" onClick={linkClick}>
                        <img className="logo" alt="Red Hat Logo"
                             src={rhLogo}/>
                        Red Hat
                    </a>
                    <div className="build">
                    &nbsp;build of&nbsp;<a href="https://camel.apache.org/" onClick={linkClick}>Apache Camel</a>&nbsp;for Quarkus
                    </div>
                </>
            )}>
                <>
                    {isCodeQuarkusReferrer && (
                        <div className="nav-container">
                            <a href="https://code.quarkus.io" onClick={linkTracker}><FaAngleLeft/> Back to code.quarkus.io</a>
                        </div>
                    )}
                </>
            </LibCompanyHeader>
            <ResourcesNav analytics={analytics} platformStream={platformStream} />
        </>
    );
}