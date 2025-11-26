export QUARKUS_REGISTRIES := "registry.quarkus.redhat.com,registry.quarkus.io"
export BOOTSTRAP_MAVEN_REPOS := "redhat-ga"
export BOOTSTRAP_MAVEN_REPO_REDHAT_GA_URL := "https://maven.repository.redhat.com/ga"
export QUARKUS_REGISTRY_REGISTRY_QUARKUS_REDHAT_COM_RECOMMEND_STREAMS_FROM_COM_REDHAT_QUARKUS_PLATFORM := "3.27"
export QUARKUS_REGISTRY_REGISTRY_QUARKUS_IO_RECOMMEND_STREAMS_FROM_COM_REDHAT_QUARKUS_PLATFORM := "3.27"


dev-rh:
  export QUARKUS_REGISTRY_REGISTRY_QUARKUS_REDHAT_COM_OFFERING="redhat"
  quarkus dev -Dquarkus.profile=dev,redhat

dev-ibm:
  export QUARKUS_REGISTRY_REGISTRY_QUARKUS_REDHAT_COM_OFFERING="ibm"
  quarkus dev -Dquarkus.profile=dev,ibm

dev-camel:
  export QUARKUS_REGISTRY_REGISTRY_QUARKUS_REDHAT_COM_OFFERING="redhat-camel"
  quarkus dev -Dquarkus.profile=dev,redhat-camel
build:
  quarkus build -DskipTests
start-ibm:
  export QUARKUS_REGISTRY_REGISTRY_QUARKUS_REDHAT_COM_OFFERING="ibm"
  QUARKUS_PROFILE="prod,ibm" java -jar target/quarkus-app/quarkus-run.jar
start-rh:
  export QUARKUS_REGISTRY_REGISTRY_QUARKUS_REDHAT_COM_OFFERING="redhat"
  QUARKUS_PROFILE="prod,redhat" java -jar target/quarkus-app/quarkus-run.jar
start-camel:
  export QUARKUS_REGISTRY_REGISTRY_QUARKUS_REDHAT_COM_OFFERING="redhat-camel"
  QUARKUS_PROFILE="prod,redhat-camel" java -jar target/quarkus-app/quarkus-run.jar

