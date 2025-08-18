import io.vertx.core.http.HttpMethod;
import io.vertx.ext.web.Router;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.enterprise.event.Observes;
import jakarta.inject.Inject;
import org.eclipse.microprofile.config.inject.ConfigProperty;

@ApplicationScoped
public class StaticBlockFilter {

    private final String blockStaticName;

    @Inject
    public StaticBlockFilter(@ConfigProperty(name = "block-static-name") String blockStaticName) {
        this.blockStaticName = blockStaticName;
    }

    public void init(@Observes Router router) {
        router.routeWithRegex(HttpMethod.GET, "(?i)/static/.*" + blockStaticName + ".*").handler(ctx -> {
            ctx.fail(404);
        });
    }

}