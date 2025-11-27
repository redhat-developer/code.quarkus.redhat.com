import io.quarkus.code.model.Preset;

import java.util.List;

class IBMConstants {

    private IBMConstants() {
    }

    public static final List<Preset> IBM_PRESETS = List.of(
            // Some presets are duplicated to support platforms before and after the Big Reactive Renaming
            new Preset("rest-service", "REST service",
                    GlobalConstants.ICONS_ASSETS_URL + "/ibm-presets/rest-service.svg",
                    List.of("io.quarkus:quarkus-rest")),
            new Preset("db-service", "REST service with database",
                    GlobalConstants.ICONS_ASSETS_URL + "/ibm-presets/db-service.svg",
                    List.of("io.quarkus:quarkus-rest", "io.quarkus:quarkus-rest-jackson",
                            "io.quarkus:quarkus-hibernate-orm-panache", "io.quarkus:quarkus-jdbc-postgresql")),
            new Preset("event-driven-kafka", "Event driven service with Kafka",
                    GlobalConstants.ICONS_ASSETS_URL + "/ibm-presets/event-driven.svg",
                    List.of("io.quarkus:quarkus-messaging-kafka")),
            new Preset("cli", "Command-line tool",
                    GlobalConstants.ICONS_ASSETS_URL + "/ibm-presets/cli.svg",
                    List.of("io.quarkus:quarkus-picocli")),
            new Preset("webapp-mvc", "Web app with Model-View-Controller",
                    GlobalConstants.ICONS_ASSETS_URL + "/ibm-presets/webapp-mvc.svg",
                    List.of("io.quarkiverse.renarde:quarkus-renarde", "io.quarkiverse.web-bundler:quarkus-web-bundler")),
            new Preset("webapp-npm", "Web app with NPM UI",
                    GlobalConstants.ICONS_ASSETS_URL + "/ibm-presets/webapp-npm.svg",
                    List.of("io.quarkus:quarkus-rest", "io.quarkus:quarkus-rest-jackson",
                            "io.quarkiverse.quinoa:quarkus-quinoa")),
            new Preset("webapp-qute", "Web app with ServerSide Rendering",
                    GlobalConstants.ICONS_ASSETS_URL + "/ibm-presets/webapp-qute.svg",
                    List.of("io.quarkiverse.qute.web:quarkus-qute-web", "io.quarkiverse.web-bundler:quarkus-web-bundler")),
            new Preset("ai-infused", "AI Infused service",
                    GlobalConstants.ICONS_ASSETS_URL + "/ibm-presets/ai-infused.svg",
                    List.of("io.quarkiverse.langchain4j:quarkus-langchain4j-openai",
                            "io.quarkiverse.langchain4j:quarkus-langchain4j-easy-rag")));

    //language=xml
    static final List<String> IBM_POM_REPOSITORIES = """
                <repositories>
                    <repository>
                        <id>ibm-enterprise-maven-repository</id>
                        <url>https://maven.repository.ibm.com/releases/</url>
                        <releases>
                            <enabled>true</enabled>
                        </releases>
                        <snapshots>
                            <enabled>true</enabled>
                        </snapshots>
                    </repository>
                </repositories>
                <pluginRepositories>
                    <pluginRepository>
                        <id>ibm-enterprise-maven-repository</id>
                        <url>https://maven.repository.ibm.com/releases/</url>
                        <releases>
                            <enabled>true</enabled>
                        </releases>
                        <snapshots>
                            <enabled>true</enabled>
                        </snapshots>
                    </pluginRepository>
                </pluginRepositories>

            """.lines().toList();

}
