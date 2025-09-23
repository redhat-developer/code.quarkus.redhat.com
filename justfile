export QUARKUS_REGISTRIES := "registry.quarkus.redhat.com,registry.quarkus.io"
export BOOTSTRAP_MAVEN_REPOS := "redhat-ga"
export BOOTSTRAP_MAVEN_REPO_REDHAT_GA_URL := "https://maven.repository.redhat.com/ga"
export IO_QUARKUS_CODE_OFFERING_SUPPORT_TAG := "redhat-support"

dev-rh:
  quarkus dev -Dquarkus.profile=dev,redhat
dev-ibm:
  quarkus dev -Dquarkus.profile=dev,ibm
dev-camel:
  quarkus dev -Dquarkus.profile=dev,redhat-camel
build:
  quarkus build -DskipTests
start-ibm:
  QUARKUS_PROFILE="prod,ibm" java -jar target/quarkus-app/quarkus-run.jar
start-redhat:
  QUARKUS_PROFILE="prod,redhat" java -jar target/quarkus-app/quarkus-run.jar
