import io.quarkus.code.model.CodeQuarkusExtension;
import io.quarkus.code.model.Preset;
import io.quarkus.code.service.PlatformOverride;
import io.quarkus.code.service.PlatformService;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;

import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.function.Function;

@Singleton
public class OfferingPlatformOverride implements PlatformOverride {

    public static final List<Preset> IBM_PRESETS = List.of(
            // Some presets are duplicated to support platforms before and after the Big Reactive Renaming
            new Preset("rest-service", "REST service",
                    "https://raw.githubusercontent.com/redhat-developer/code.quarkus.redhat.com/refs/heads/main/assets/icons/ibm-presets/rest-service.svg",
                    List.of("io.quarkus:quarkus-rest")),
            new Preset("db-service", "REST service with database",
                    "https://raw.githubusercontent.com/redhat-developer/code.quarkus.redhat.com/refs/heads/main/assets/icons/ibm-presets/db-service.svg",
                    List.of("io.quarkus:quarkus-rest", "io.quarkus:quarkus-rest-jackson",
                            "io.quarkus:quarkus-hibernate-orm-panache", "io.quarkus:quarkus-jdbc-postgresql")),
            new Preset("event-driven-kafka", "Event driven service with Kafka",
                    "https://raw.githubusercontent.com/redhat-developer/code.quarkus.redhat.com/refs/heads/main/assets/icons/ibm-presets/event-driven.svg",
                    List.of("io.quarkus:quarkus-messaging-kafka")),
            new Preset("cli", "Command-line tool",
                    "https://raw.githubusercontent.com/redhat-developer/code.quarkus.redhat.com/refs/heads/main/assets/icons/ibm-presets/cli.svg",
                    List.of("io.quarkus:quarkus-picocli")),
            new Preset("webapp-mvc", "Web app with Model-View-Controller",
                    "https://raw.githubusercontent.com/redhat-developer/code.quarkus.redhat.com/refs/heads/main/assets/icons/ibm-presets/webapp-mvc.svg",
                    List.of("io.quarkiverse.renarde:quarkus-renarde", "io.quarkiverse.web-bundler:quarkus-web-bundler")),
            new Preset("webapp-npm", "Web app with NPM UI",
                    "https://raw.githubusercontent.com/redhat-developer/code.quarkus.redhat.com/refs/heads/main/assets/icons/ibm-presets/webapp-npm.svg",
                    List.of("io.quarkus:quarkus-rest", "io.quarkus:quarkus-rest-jackson",
                            "io.quarkiverse.quinoa:quarkus-quinoa")),
            new Preset("webapp-qute", "Web app with ServerSide Rendering",
                    "https://raw.githubusercontent.com/redhat-developer/code.quarkus.redhat.com/refs/heads/main/assets/icons/ibm-presets/webapp-qute.svg",
                    List.of("io.quarkiverse.qute.web:quarkus-qute-web", "io.quarkiverse.web-bundler:quarkus-web-bundler")),
            new Preset("ai-infused", "AI Infused service",
                    "https://raw.githubusercontent.com/redhat-developer/code.quarkus.redhat.com/refs/heads/main/assets/icons/ibm-presets/ai-infused.svg",
                    List.of("io.quarkiverse.langchain4j:quarkus-langchain4j-openai",
                            "io.quarkiverse.langchain4j:quarkus-langchain4j-easy-rag")));

    @Inject
    OfferingConfig config;

    private static final Set<String> TAGS = Set.of(
            "with:starter-code", "status:stable", "status:preview", "status:experimental", "status:deprecated",
            "support:full-support", "support:supported-in-jvm", "support:dev-support", "support:dev-preview",
            "support:tech-preview", "support:deprecated");

    @Override
    public Function<CodeQuarkusExtension, CodeQuarkusExtension> extensionMapper() {
        return Function.identity();
    }

    @Override
    public List<Preset> presets() {
        switch (config.id()) {
            case "ibm":
                return IBM_PRESETS;
            default:
                return PlatformService.DEFAULT_PRESETS.stream()
                        .map(p -> new Preset(p.key(), p.title(), p.icon().replace("_neg", "_pos"), p.extensions()))
                        .toList();
        }
    }

    @Override
    public List<String> extensionTagsMapper(List<String> tags) {
        return tags.stream().map(this::mapTag).filter(Objects::nonNull).filter(TAGS::contains).toList();
    }

    private String mapTag(String s) {
        final String tagName = config.supportTag();
        if (s.equals(tagName + ":supported")) {
            return "support:full-support";
        }
        if (s.startsWith(tagName + ":")) {
            return s.replace(tagName + ":", "support:");
        } else if (s.contains("-support:")) {
            return null;
        }
        return s;
    }
}
