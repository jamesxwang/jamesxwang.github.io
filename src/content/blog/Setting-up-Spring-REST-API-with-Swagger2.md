---
title: Setting up Spring REST API with Swagger2
date: 2018-07-15 22:53:32
tags: [Java,Spring Boot,Swagger2,RESTful API]
categories: ["Study Notes", "Back End"]
---
### Overview
When creating a RESTful API, good documentation is instrumental.<br>
Moreover, every change in the API should be simultaneously described in the reference documentation. Accomplishing this manually is a tedious exercise, so automation of the process was inevitable.
<!-- more -->
If you are not familiar with Swagger, you should visit <a href="http://swagger.io">its web page</a> to learn more before continuing with this article.

### Target Project
The creation of the REST service I use is my own project--<a href="http://amazingxu.xyz">amazingxu.xyz</a>. Source code are available on my <a href="http://github.com/jamesxwang">Github</a>.

### Adding the Maven Dependency
To add it to our Maven project, we need to add dependencies in the pom.xml file.
```xml
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger2</artifactId>
    <version>2.2.2</version>
</dependency>

<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger-ui</artifactId>
    <version>2.2.2</version>
</dependency>
```

### Integrating Swagger 2 into the Project
#### Java Configuration
The configuration of Swagger mainly centers around the Docket bean.
```java
@Bean
public Docket createRestApi() {
    ParameterBuilder tokenPar = new ParameterBuilder();
    List<Parameter> pars = new ArrayList<>();
    tokenPar.name("Authorization")
            .description("Token")
            .modelRef(new ModelRef("string"))
            .defaultValue("Bearer ")
            .parameterType("header")
            .required(false).build();
    pars.add(tokenPar.build());

    return new Docket(DocumentationType.SWAGGER_2)
            .select()
            .apis(RequestHandlerSelectors.withMethodAnnotation(ApiOperation.class))
            .build()
            .globalOperationParameters(pars)
            .apiInfo(apiInfo());
}
```
Swagger 2 is enabled through the<code>@EnableSwagger2</code> annotation.<br>
By adding <code>@Api(value="VALUE",description="DESC")</code> , <code>@RestController</code> and <code>@RequestMapping("ReqMap")</code> annotation to the controller in the Spring Boot project, RESTful API UI can be seen by visiting http://amazingxu.xyz/swagger-ui.html

<br><br>
##### References:
http://www.baeldung.com/swagger-2-documentation-for-spring-rest-api