{pkgs}: {
  deps = [
    pkgs.groovy
    pkgs.graalvmCEPackages.graalvm19-ce-full
    pkgs.temurin-jre-bin-17
    pkgs.gradle
    pkgs.gradle_7
   ];
}
