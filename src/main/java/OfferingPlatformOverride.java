import io.quarkus.code.model.CodeQuarkusExtension;
import io.quarkus.code.model.Preset;
import io.quarkus.code.model.ProjectDefinition;
import io.quarkus.code.service.PlatformOverride;
import io.quarkus.code.service.PlatformService;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;
import java.util.List;
import java.util.Objects;
import java.util.OptionalInt;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Singleton
public class OfferingPlatformOverride implements PlatformOverride {

    @Inject
    OfferingConfig config;

    @Override
    public Function<CodeQuarkusExtension, CodeQuarkusExtension> extensionMapper() {
        return Function.identity();
    }

    @Override
    public List<Preset> presets() {
        switch (config.id()) {
            case "ibm":
                return IBMConstants.IBM_PRESETS;
            case "redhat-camel":
                return RedHatCamelConstants.REDHAT_CAMEL_PRESETS;
            default:
                return PlatformService.DEFAULT_PRESETS.stream()
                        .map(p -> new Preset(p.key(), p.title(), p.icon().replace("_neg", "_pos"), p.extensions()))
                        .toList();
        }
    }

    @Override
    public void onNewProject(ProjectDefinition projectDefinition, Path dir) {
        final List<String> repositories = getRepositories();
        if (repositories == null) {
            return;
        }
        final Path pom = dir.resolve("pom.xml");
        if (Files.isRegularFile(pom)) {
            try {
                final List<String> strings = Files.readAllLines(pom);
                if (strings.stream().anyMatch(s -> s.contains("<repositories>"))) {
                    return;
                }
                OptionalInt lineNumber = IntStream.range(0, strings.size())
                        .filter(i -> strings.get(i).contains("<dependencyManagement>"))
                        .findFirst();
                if (lineNumber.isEmpty()) {
                    throw new RuntimeException(
                            "Platform generated pom.xml is not valid, please, report this error to the administrator.");
                }
                strings.addAll(lineNumber.getAsInt(), repositories);
                Files.writeString(pom, String.join("\n", strings), StandardOpenOption.TRUNCATE_EXISTING);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
    }

    private List<String> getRepositories() {
        return switch (config.id()) {
            case "ibm" -> IBMConstants.IBM_POM_REPOSITORIES;
            default -> null;
        };
    }

    @Override
    public List<String> extensionTagsMapper(List<String> tags) {
        return tags.stream().map(this::mapTag).filter(Objects::nonNull).filter(GlobalConstants.TAGS::contains).toList();
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
