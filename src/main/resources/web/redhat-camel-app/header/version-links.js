/**
 * Version-specific links configuration for Red Hat Build of Apache Camel.
 *
 * This file contains all external resource links organized by platform stream ID.
 * Each stream includes documentation links and examples repository links.
 *
 * Structure:
 * - documentation: Links shown in the Documentation dropdown menu
 * - examples: Direct link to examples shown in the Examples nav item
 *
 * To add a new version:
 * 1. Add a new entry to VERSION_LINKS with the platform stream ID as key
 * 2. Include all required documentation links
 * 3. Verify all URLs are accessible
 */

export const VERSION_LINKS = {
    'com.redhat.quarkus.platform:3.27': {
        documentation: {
            main: {
                label: 'Red Hat Build of Apache Camel',
                url: 'https://docs.redhat.com/en/documentation/red_hat_build_of_apache_camel/4.14'
            },
            lifecycle: {
                label: 'Product Life Cycle',
                url: 'https://access.redhat.com/support/policy/updates/jboss_notes#p_rhbocamel'
            },
            configuration: {
                label: 'Supported Configuration',
                url: 'https://access.redhat.com/articles/6507531#camel-414-ga'
            },
            schedule: {
                label: 'Release Schedule',
                url: 'https://access.redhat.com/articles/7021827'
            }
        },
        examples: {
            label: 'Camel Quarkus Examples',
            url: 'https://github.com/apache/camel-quarkus-examples/tree/3.27.x'
        }
    }
};

/**
 * Default platform stream to use when no version is selected or matched.
 */
export const DEFAULT_VERSION = 'com.redhat.quarkus.platform:3.27';

/**
 * Gets the platform stream key from a platform stream identifier.
 *
 * @param {string} platformStream - The platform stream ID from the registry
 * @returns {string} The platform stream key to use for looking up links
 */
export function getVersionFromStream(platformStream) {
    if (!platformStream) {
        return DEFAULT_VERSION;
    }

    // Check if we have links for this exact platform stream
    if (VERSION_LINKS[platformStream]) {
        return platformStream;
    }

    // Fallback to default
    return DEFAULT_VERSION;
}

/**
 * Gets all resource links for a specific platform stream.
 *
 * @param {string} platformStream - The platform stream key
 * @returns {object} Object containing documentation and examples links
 */
export function getLinksForVersion(platformStream) {
    return VERSION_LINKS[platformStream] || VERSION_LINKS[DEFAULT_VERSION];
}
