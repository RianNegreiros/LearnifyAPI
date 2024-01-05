FROM openjdk:17
VOLUME /tmp
EXPOSE 8080
ADD ./target/ProductCatalog-0.0.1-SNAPSHOT.jar LearnifyAPI.jar
ENTRYPOINT ["java", "-jar","/LearnifyAPI.jar"]