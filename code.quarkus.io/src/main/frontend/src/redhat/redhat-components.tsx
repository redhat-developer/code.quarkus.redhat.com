import React from "react";
import {WarningTriangleIcon} from "@patternfly/react-icons";
import {ExternalLink} from "../core";

export function EnvConfNextStep(props: { onClick: (e: any) => void }) {
    const link = 'https://access.redhat.com/documentation/en-us/red_hat_build_of_quarkus/1.3/html/creating_quarkus_applications_with_apache_maven/con-apache-maven-plug-ins-and-quarkus_quarkus-maven';
    return (
        <p>
            <WarningTriangleIcon style={{color: 'red'}}/>&nbsp;You first need to <ExternalLink
                href={link}
                aria-label="Configure Red Hat online repository"
                onClick={props.onClick}
                style={{display: 'inline', whiteSpace: 'normal'}}
            >configure your environment to use the Red Hat online repository</ExternalLink>.
        </p>
    );
}
