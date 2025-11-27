import io.quarkiverse.playwright.WithPlaywright;
import io.quarkus.test.junit.QuarkusTest;
import io.quarkus.test.junit.QuarkusTestProfile;
import io.quarkus.test.junit.TestProfile;

@QuarkusTest
@WithPlaywright(verbose = true)
@TestProfile(RedHatOfferingTest.TestProfile.class)
public class RedHatOfferingTest extends PlaywrightTestBase {

    @Override
    String getTitle() {
        return "Quarkus - Start coding with code.quarkus.redhat.com";
    }

    public static class TestProfile implements QuarkusTestProfile {

        @Override
        public String getConfigProfile() {
            return "test,redhat";
        }
    }

}
