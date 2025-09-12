import io.smallrye.config.ConfigMapping;
import io.smallrye.config.WithParentName;

@ConfigMapping(prefix = "io.quarkus.code.offering")
public interface OfferingConfig {
    @WithParentName
    String id();
}
