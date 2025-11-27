import io.quarkus.code.model.Preset;

import java.util.List;

public class RedHatConstants {

    private RedHatConstants() {
    }

    //language=xml
    static final List<String> REDHAT_POM_REPOSITORIES = """
                <repositories>
                    <repository>
                        <id>red-hat-enterprise-maven-repository</id>
                        <url>https://maven.repository.redhat.com/ga/</url>
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
                        <id>red-hat-enterprise-maven-repository</id>
                        <url>https://maven.repository.redhat.com/ga/</url>
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
