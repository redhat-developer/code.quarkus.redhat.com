import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-app-polyfill/ie11';
import {CodeQuarkus, fetchConfig, fetchPlatform} from '../lib';
import './theme.scss';
import {CompanyHeader} from './header/company-header';

// Disable QuarkusBlurb popup for redhat-camel variant
if (typeof localStorage !== 'undefined') {
    localStorage.setItem('quarkus-blurb-visible-v1', 'true');
}

const API_URL = window.API_URL;
const CLIENT_NAME = window.location.hostname;
const REQUEST_OPTIONS = {headers: {'Client-Name': CLIENT_NAME}};

const tagsDef = [
    {
        name: 'support:full-support',
        description: 'Full-support for development and production phases.',
        color: '#0E6027',
        background: '#A7F0BA'

    },
    {
        name: 'support:supported-in-jvm',
        description: 'Support in JVM, means that this extension is tested and verified for usage in a Java Virtual Machine.',
        color: '#0E6027',
        background: '#D4F4E1'
    },
    {
        name: 'support:dev-support',
        description: 'Support and advice for development phase.',
        color: '#704214',
        background: '#FFDFA6'
    },
    {
       name: 'support:dev-preview',
        href: 'https://access.redhat.com/support/offerings/devpreview',
        color: '#6929C4',
        background: '#E8DAFF'
    },
    {
        name: 'support:tech-preview',
        description: 'Technology Preview features provide early access to upcoming product innovations, enabling you to test functionality and provide feedback during the development process. However, these features are not fully supported under Red Hat Subscription Level Agreements.',
        color: '#0043CE',
        background: '#D0E2FF'
    },
    {
        name: 'support:deprecated',
        description: 'This feature is likely to be replaced or removed in a future version of Red Hat build of Quarkus. See release notes on docs.redhat.com for more information.',
        background: '#6a737d',
        color: '#ffffff',
    },
    {
        name: 'status:preview',
        background: '#1f6feb',
        color: '#ffffff',
        description: 'This is work in progress. API or configuration properties might change as the extension matures. Give us your feedback :)'
    },
    {
        name: 'status:experimental',
        background: '#d73a49',
        color: '#ffffff',
        description: 'Early feedback is requested to mature the idea. There is no guarantee of stability nor long term presence in the platform until the solution matures.'
    },
    {
        name: 'status:deprecated',
        background: '#6a737d',
        color: '#ffffff',
        description: 'This extension has been deprecated. It is likely to be replaced or removed in a future version of Quarkus'
    },
    {
        name: 'with:starter-code',
        color: '#A2191F',
        background: '#FFD7D9',
        description: 'This extension provides starter code (may not be available in all languages).'
    },
    {
        name: 'status:stable',
        hide: true
    }
];


const api = {
    backendUrl: API_URL,
    clientName: CLIENT_NAME,
    requestOptions: REQUEST_OPTIONS,
    tagsDef
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <CodeQuarkus api={api} configApi={fetchConfig} platformApi={fetchPlatform} header={CompanyHeader}/>
    </React.StrictMode>
);
