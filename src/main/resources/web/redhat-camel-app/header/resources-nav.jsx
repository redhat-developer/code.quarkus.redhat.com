import React from 'react';
import './resources-nav.scss';
import { Dropdown } from 'react-bootstrap';
import {FaAngleDown} from 'react-icons/fa';
import { getVersionFromStream, getLinksForVersion, VERSION_LINKS } from './version-links';

export function ResourcesNav({ analytics, platformStream }) {
    // Check if this specific platform stream has configured links
    // Don't render if no links are configured for this version
    if (platformStream && !VERSION_LINKS[platformStream]) {
        return null;
    }

    // Get the version and corresponding links based on the platform stream
    const version = getVersionFromStream(platformStream);
    const links = getLinksForVersion(version);

    const handleLinkClick = (label, url) => {
        if (analytics) {
            analytics.event('UX', 'Click on resources link', `${label}: ${url}`);
        }
    };

    return (
        <div className="resources-nav">
            <div className="resources-nav-container">
                <Dropdown className="resources-nav-item">
                    <Dropdown.Toggle variant="link" className="resources-nav-link" id="documentation-dropdown">
                        Documentation&nbsp;&nbsp;<FaAngleDown />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {Object.entries(links.documentation).map(([key, link]) => (
                            <Dropdown.Item
                                key={key}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => handleLinkClick(link.label, link.url)}
                            >
                                {link.label}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <div className="resources-nav-item">
                    <a
                        className="resources-nav-link"
                        href={links.examples.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleLinkClick(links.examples.label, links.examples.url)}
                    >
                        Examples
                    </a>
                </div>
            </div>
        </div>
    );
}
