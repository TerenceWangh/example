Gradle for java
===============

This repository is used for **java project** build with **gradle**.

Build
-----

you can run the command `gradlew build` to build the project, and then check the output `build/libs/example-1.0.0.jar`.

Gradle
------

**Downloading**

You can download released versions and nightly build artifacts from: https://gradle.org/downloads

**Installing from source**

To create an install from the source tree you can run either of the following:

`./gradlew install -Pgradle_installPath=/usr/local/gradle-source-build`

This will create a minimal installation; just what's needed to run Gradle (i.e. no docs).

You can then build a Gradle based project with this installation:

`/usr/local/gradle-source-build/bin/gradle «some task»`

To create a full installation (includes docs):

`./gradlew installAll -Pgradle_installPath=/usr/local/gradle-source-build`

Java
----

You can read [Document of openjdk](http://openjdk.java.net/) for more.