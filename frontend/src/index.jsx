import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11';
import reportWebVitals from './reportWebVitals';
import {CodeQuarkus, fetchConfig, fetchPlatform} from '@quarkusio/code-quarkus.components';
import './theme.scss';
import {RedHatHeader} from './header/redhat-header';

const PUBLIC_URL = process.env.PUBLIC_URL && `${process.env.PUBLIC_URL}/`;
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || PUBLIC_URL;
const CLIENT_NAME = window.location.hostname;
const REQUEST_OPTIONS = {headers: {'Client-Name': CLIENT_NAME}};

const tagsDef = [
    {
        name: 'code',
        color: '#be9100',
        description: 'This extension provides starter code (may not be available in all languages).'
    },
    {
        name: 'stable',
        hide: true
    },
    {
        name: 'supported',
        href: 'https://access.redhat.com/support/offerings/production/soc/',
        color: '#6AB983'
    },
    {
        name: 'supported-in-jvm',
        description: 'Support in JVM, means that this extension is tested and verified for usage in a Java Virtual Machine, while usage in Native is considered Technology Preview',
        color: '#6AB983'
    },
    {
        name: 'dev-support',
        href: 'https://access.redhat.com/support/offerings/production/soc/',
        color: '#6AB983'
    },
    {
        name: 'tech-preview',
        description: 'Technology Preview features provide early access to upcoming product innovations, enabling you to test functionality and provide feedback during the development process. However, these features are not fully supported under Red Hat Subscription Level Agreements.',
        color: '#4A97E8'
    },
    {
        name: 'deprecated',
        description: 'This feature is likely to be replaced or removed in a future version of Red Hat build of Quarkus. See release notes on docs.redhat.com for more information',
        color: '#ff004a'
    }
];


const api = {
    backendUrl: BACKEND_URL,
    clientName: CLIENT_NAME,
    requestOptions: REQUEST_OPTIONS,
    tagsDef
};

ReactDOM.render(
    <React.StrictMode>
        <CodeQuarkus api={api} configApi={fetchConfig} platformApi={fetchPlatform} header={RedHatHeader}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
