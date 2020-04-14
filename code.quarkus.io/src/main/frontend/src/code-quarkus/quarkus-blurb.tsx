import { Alert, AlertActionCloseButton } from '@patternfly/react-core';
import React from 'react';
import createPersistedState from 'use-persisted-state';
import './quarkus-blurb.scss';
import { useAnalytics } from '../core';

const useQuarkusBlurbVisibleState = createPersistedState('quarkus-blurb-visible-v1');

export function QuarkusBlurb() {
  const analytics = useAnalytics();
  const [visible, setVisible] = useQuarkusBlurbVisibleState<boolean>(true);
  const close = () => {
    analytics.event('UX', 'Blurb', 'Close');
    setVisible(false);
  };
  const feedbackLinkClick = () => {
    analytics.event('UX', 'Blurb', 'Click on "We are listening for feedback" link');
  };
  return (
    <>
      {visible && (
        <Alert className="quarkus-blurb" variant="info" title="This page will help you bootstrap your Quarkus application and discover its extension ecosystem."
               action={<AlertActionCloseButton onClose={close}/>}>
          <p>Think of Quarkus extensions as your project dependencies. Extensions configure, boot and integrate a framework or technology into your Quarkus application. They also do all of the heavy
            lifting of providing the right information to GraalVM for your application to compile natively.</p>
          <br/>
          <p className="desktop-only">Explore the wide breadth of technologies Quarkus applications can be made with. Generate your application!</p>
          <br/>
          <p>[Missing a feature? Found a bug? <a href="https://access.redhat.com/support/cases/#/troubleshoot?product=Red%20Hat%20build%20of%20Quarkus" target="_blank" rel="noopener noreferrer" onClick={feedbackLinkClick}>We are listening for feedback</a>]</p>
        </Alert>
      )}
      <Alert className="mobile-only quarkus-blurb" variant="info" title="On mobile devices, you can explore the list of Quarkus extensions.">
        <p style={{ color: '#ff004a' }}>If you wish to generate code, try it with your desktop browser...</p>
      </Alert>
    </>
  );
}