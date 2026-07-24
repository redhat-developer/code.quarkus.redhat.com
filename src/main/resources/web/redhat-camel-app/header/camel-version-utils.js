export function getCamelIntegration(extensions) {
    if (!extensions) return null;
    for (const ext of extensions) {
        const integrates = ext.integrates;
        if (!Array.isArray(integrates)) continue;
        const camel = integrates.find(i => i.name === 'Camel');
        if (camel) return camel;
    }
    return null;
}

export function buildResourceLinks(camelVersion, streamKey) {
    const parts = camelVersion.split('.');
    const docsVersion = parts.slice(0, 2).join('.');
    const configAnchorVersion = parts.slice(0, 2).join('');
    const streamId = streamKey?.split(':')[1];

    return {
        documentation: [
            { label: 'Red Hat Build of Apache Camel', url: `https://docs.redhat.com/en/documentation/red_hat_build_of_apache_camel/${docsVersion}` },
            { label: 'Product Life Cycle', url: 'https://access.redhat.com/support/policy/updates/jboss_notes#p_rhbocamel' },
            { label: 'Supported Configuration', url: `https://access.redhat.com/articles/6507531#camel-${configAnchorVersion}-ga` },
            { label: 'Release Schedule', url: 'https://access.redhat.com/articles/7021827' },
        ],
        examples: { label: 'Camel Quarkus Examples', url: `https://github.com/apache/camel-quarkus-examples/tree/${streamId}.x` },
    };
}
