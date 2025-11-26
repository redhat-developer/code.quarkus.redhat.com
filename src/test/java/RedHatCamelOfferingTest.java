import com.microsoft.playwright.Page;
import io.quarkiverse.playwright.WithPlaywright;
import io.quarkus.test.junit.QuarkusTest;
import io.quarkus.test.junit.QuarkusTestProfile;
import io.quarkus.test.junit.TestProfile;

@QuarkusTest
@WithPlaywright(verbose = true)
@TestProfile(RedHatCamelOfferingTest.TestProfile.class)
public class RedHatCamelOfferingTest extends PlaywrightTestBase {

    @Override
    String getTitle() {
        return "Quarkus - Start coding with code.camel.redhat.com";
    }

    @Override
    void closeIntroductionModal(Page page) {

    }

    public static class TestProfile implements QuarkusTestProfile {

        @Override
        public String getConfigProfile() {
            return "test,redhat-camel";
        }
    }

}
