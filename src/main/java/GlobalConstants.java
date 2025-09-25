import java.util.Set;

class GlobalConstants {

    private GlobalConstants() {
    }

    static final String ICONS_ASSETS_URL = "/assets/icons";

    static final Set<String> TAGS = Set.of(
            "with:starter-code", "status:stable", "status:preview", "status:experimental", "status:deprecated",
            "support:full-support", "support:supported-in-jvm", "support:dev-support", "support:dev-preview",
            "support:tech-preview", "support:deprecated");
}
