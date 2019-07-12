# 使用IDEA创建SpringBoot项目
## 使用IntelliJ IDEA创建
- 菜单栏中选择：File => New => Project，打开如下图所示的窗口：
选择Spring Initializr
![extra1-1.png](/images/springboot/extra/extra1/1.png)

- 点击Next，可以看到如下图所示的窗口：
![extra1-2.png](/images/springboot/extra/extra1/2.png)
填写Group（组织包名）、Artifact（唯一的标识符对应项目名称）、Version（版本号）、Name(项目名称)、Description(描述)等信息
![extra1-3.png](/images/springboot/extra/extra1/3.png)

- 继续点击Next，进入选择Spring Boot版本和依赖管理的窗口：
添加web依赖： web=> Spring Web Starter
![extra1-4.png](/images/springboot/extra/extra1/4.png)

- 点击Next，进入最后关于工程的一些信息。最后，点击Finish就能完成工程的构建了。
## 项目结构解析
![extra1-5.png](/images/springboot/extra/extra1/5.png)

通过上面步骤完成了基础项目的创建。如上图所示，Spring Boot的基础结构共三个文件（具体路径根据用户生成项目时填写的Group所有差异）：

- src/main/java下的程序入口：Chapter11Application
- src/main/resources下的配置文件：application.properties
- src/test/下的测试入口：Chapter11ApplicationTests
生成的Chapter1Application和Chapter1ApplicationTests类都可以直接运行来启动当前创建的项目。

## 项目依赖解析
打开pom.xml，看看Spring Boot项目的依赖：
```
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.1.6.RELEASE</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>org.badger</groupId>
    <artifactId>chapter1</artifactId>
    <version>1.0.0-SNAPSHOT</version>
    <name>chapter1</name>
    <description>chapter1 project for Spring Boot</description>

    <properties>
        <java.version>1.8</java.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>

</project>

```
如上所示，pom.xml主要有四个部分：

- 项目信息：创建时候输入的信息，也就是Maven项目的基本元素，包括：groupId、artifactId、version、name、description等
- parent：继承spring-boot-starter-parent的依赖管理，控制版本与打包等内容，这里采用最新版本2.1.6
- dependencies：项目具体依赖，包含了spring-boot-starter-web用于实现HTTP接口（依赖中包含了Spring MVC）；spring-boot-starter-test用于编写单元测试的依赖包。
- build：构建配置部分。默认使用了spring-boot-maven-plugin，配合spring-boot-starter-parent就可以把Spring Boot应用打包成JAR来直接运行。

> 到此简单的springboot项目创建就完成了
