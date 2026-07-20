import React from 'react';
import './resources-nav.scss';
import { Dropdown } from 'react-bootstrap';
import { FaAngleDown } from 'react-icons/fa';
import { getCamelIntegration, buildResourceLinks } from './camel-version-utils';
import { createLinkTracker } from '../../lib';

export function ResourcesNav({ extensions, streamKey, analytics }) {
    const integration = getCamelIntegration(extensions);
    if (!integration) return null;

    const links = buildResourceLinks(integration.version, streamKey);
    const linkTracker = createLinkTracker(analytics, 'UX', 'Resources');

    return (
        <div className="resources-nav">
            <div className="resources-nav-container">
                <Dropdown className="resources-nav-item">
                    <Dropdown.Toggle variant="link" className="resources-nav-link" id="documentation-dropdown">
                        Documentation&nbsp;&nbsp;<FaAngleDown />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {links.documentation.map((link, i) => (
                            <Dropdown.Item
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={linkTracker}
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
                        onClick={linkTracker}
                    >
                        Examples
                    </a>
                </div>
            </div>
        </div>
    );
}
