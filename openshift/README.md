```bash
export INTERNAL_BUILD_SECRET=<secret>
oc create is code-quarkus-internal
oc create secret generic code-quarkus-internal-build-secret \
--from-literal=WebHookSecretKey=$INTERNAL_BUILD_SECRET
oc apply -f build-config.yaml
```


````bash
export INTERNAL_BUILD_SECRET=<secret>
curl -X POST -k https://api.ocp4.prod.psi.redhat.com:6443/apis/build.openshift.io/v1/namespaces/code-quarkus/buildconfigs/code-quarkus-internal-build/webhooks/$INTERNAL_BUILD_SECRET/generic
````