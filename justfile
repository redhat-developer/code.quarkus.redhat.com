export QUARKUS_REGISTRIES := "registry.quarkus.redhat.com,registry.quarkus.io"
export BOOTSTRAP_MAVEN_REPOS := "redhat-ga"
export BOOTSTRAP_MAVEN_REPO_REDHAT_GA_URL := "https://maven.repository.redhat.com/ga"


dev-rh:
  export IO_QUARKUS_CODE_OFFERING_SUPPORT_TAG="redhat-support"
  quarkus dev -Dquarkus.profile=dev,redhat

dev-ibm:
  export IO_QUARKUS_CODE_OFFERING_SUPPORT_TAG="ibm-support"
  quarkus dev -Dquarkus.profile=dev,ibm

dev-camel:
  export IO_QUARKUS_CODE_OFFERING_SUPPORT_TAG="camel-support"
  quarkus dev -Dquarkus.profile=dev,redhat-camel
build:
  quarkus build -DskipTests
start-ibm:
  export IO_QUARKUS_CODE_OFFERING_SUPPORT_TAG="ibm-support"
  QUARKUS_PROFILE="prod,ibm" java -jar target/quarkus-app/quarkus-run.jar
start-rh:
  export IO_QUARKUS_CODE_OFFERING_SUPPORT_TAG="redhat-support"
  QUARKUS_PROFILE="prod,redhat" java -jar target/quarkus-app/quarkus-run.jar
start-camel:
  export IO_QUARKUS_CODE_OFFERING_SUPPORT_TAG="redhat-camel-support"
  QUARKUS_PROFILE="prod,redhat-camel" java -jar target/quarkus-app/quarkus-run.jar

