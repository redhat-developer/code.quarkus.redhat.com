import { fetchPlatform as originalFetchPlatform } from '../lib';

// TODO remove after https://github.com/quarkusio/code.quarkus.io/issues/1755

// Map of stream keys to custom Java version configurations
// Key: full stream key including platform (e.g., 'com.redhat.quarkus.platform:3.20')
// Value: { versions: number[], recommended?: number }
const CUSTOM_JAVA_VERSIONS = {
    // Override Java versions for stream 3.32 - remove java 25
    'com.redhat.quarkus.platform:3.32': {
        versions: [17, 21],
        recommended: 21
    },
};

/**
 * Gets custom Java version configuration for a stream
 * @param {Object} stream - The stream object
 * @returns {Object|null} - Custom java compatibility config or null
 */
function getCustomJavaVersions(stream) {
    // Check if there's a custom configuration for this stream key
    if (CUSTOM_JAVA_VERSIONS[stream.key]) {
        const custom = CUSTOM_JAVA_VERSIONS[stream.key];
        return {
            versions: custom.versions,
            recommended: custom.recommended || custom.versions[0] || stream.javaCompatibility.recommended
        };
    }

    // You can also add conditional logic here
    // Example: All non-LTS streams only get Java 17
    // if (!stream.lts) {
    //     return {
    //         versions: [17],
    //         recommended: 17
    //     };
    // }

    return null;
}

/**
 * Wrapper for fetchPlatform that modifies javaCompatibility for specific streams
 */
export async function fetchPlatform(api, streamKey, platformOnly = false) {
    const platform = await originalFetchPlatform(api, streamKey, platformOnly);

    platform.streams = platform.streams.map(stream => {
        const customJavaVersions = getCustomJavaVersions(stream);
        if (customJavaVersions) {
            return {
                ...stream,
                javaCompatibility: customJavaVersions
            };
        }

        return stream;
    });

    return platform;
}
