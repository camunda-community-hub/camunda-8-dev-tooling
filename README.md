[![Community Extension](https://img.shields.io/badge/Community%20Extension-An%20open%20source%20community%20maintained%20project-FF4700)](https://github.com/camunda-community-hub/community)
![Compatible with: Camunda Platform 8](https://img.shields.io/badge/Compatible%20with-Camunda%20Platform%208-0072Ce)
[![](https://img.shields.io/badge/Lifecycle-Incubating-blue)](https://github.com/Camunda-Community-Hub/community/blob/main/extension-lifecycle.md#incubating-)

# DMN & FEEL tester for Camunda Platform 8 using React, Java and Spring Boot

This project is a a bunch of tools that can be helpful while developing DMN and FEEL expressions to test them.


## First steps with the application

The application requires a running Zeebe engine.
You can run Zeebe locally using the instructions below for Docker Compose
or have a look at our
[recommended deployment options for Camunda Platform](https://docs.camunda.io/docs/self-managed/platform-deployment/#deployment-recommendation.).

Run the application via
```
./mvnw spring-boot:run
```

UI [http://localhost:8080/](http://localhost:8080/)
Swagger UI: [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)
