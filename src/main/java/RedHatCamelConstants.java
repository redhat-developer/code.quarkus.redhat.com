import io.quarkus.code.model.Preset;

import java.util.List;

public class RedHatCamelConstants {

    private RedHatCamelConstants() {
    }

    static final List<Preset> REDHAT_CAMEL_PRESETS = List.of(
            // Some presets are duplicated to support platforms before and after the Big Reactive Renaming
            new Preset("web-service", "Web service",
                    GlobalConstants.ICONS_ASSETS_URL + "/redhat-camel-presets/orange-rest_pos.svg",
                    List.of("org.apache.camel.quarkus:camel-quarkus-rest",
                            "org.apache.camel.quarkus:camel-quarkus-rest-openapi",
                            "org.apache.camel.quarkus:camel-quarkus-cxf-soap",
                            "io.quarkiverse.cxf:quarkus-cxf")),
            new Preset("db-service", "REST service with database",
                    GlobalConstants.ICONS_ASSETS_URL + "/redhat-camel-presets/orange-db-service_pos.svg",
                    List.of("org.apache.camel.quarkus:camel-quarkus-rest",
                            "org.apache.camel.quarkus:camel-quarkus-aws2-ddb",
                            "org.apache.camel.quarkus:camel-quarkus-cassandraql",
                            "org.apache.camel.quarkus:camel-quarkus-jdbc",
                            "org.apache.camel.quarkus:camel-quarkus-jpa",
                            "org.apache.camel.quarkus:camel-quarkus-kudu",
                            "org.apache.camel.quarkus:camel-quarkus-ldap",
                            "org.apache.camel.quarkus:camel-quarkus-mongodb",
                            "org.apache.camel.quarkus:camel-quarkus-mybatis",
                            "org.apache.camel.quarkus:camel-quarkus-sql")),
            new Preset("event-driven-kafka", "Event driven service with Kafka",
                    GlobalConstants.ICONS_ASSETS_URL + "/redhat-camel-presets/orange-event-driven-kafka_pos.svg",
                    List.of("org.apache.camel.quarkus:camel-quarkus-kafka",
                            "org.apache.camel.quarkus:camel-quarkus-jms")),
            new Preset("ai-infused", "AI Infused service",
                    GlobalConstants.ICONS_ASSETS_URL + "/redhat-camel-presets/orange-ai-infused_pos.svg",
                    List.of("org.apache.camel.quarkus:camel-quarkus-langchain4j-agent",
                            "org.apache.camel.quarkus:camel-quarkus-langchain4j-chat",
                            "org.apache.camel.quarkus:camel-quarkus-langchain4j-tokenizer",
                            "org.apache.camel.quarkus:camel-quarkus-langchain4j-tools",
                            "org.apache.camel.quarkus:camel-quarkus-langchain4j-web-search")));
}
