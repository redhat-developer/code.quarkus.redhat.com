## Internal cluster cron job for automatic rollout

```bash

### Create the service account:
oc create serviceaccount code-quarkus-robot
oc policy add-role-to-user admin system:serviceaccount:code-quarkus:code-quarkus-robot
oc serviceaccounts get-token code-quarkus-robot

### Create the secret:
oc create secret generic code-quarkus-rollout-secrets --from-literal=oc-token=...

### Create the cronjob:
oc apply -f code-quarkus-rollout-cronjob.yaml


```