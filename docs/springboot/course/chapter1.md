# 第一章：快速入门 

## 源码地址
- [Github: SpringBootTutorial/Chapter1](https://github.com/wbc505357999/SpringBootTutorial/tree/master/Chapter1)
- [Gitee: SpringBootTutorial/Chapter1](https://gitee.com/505357999/SpringBootTutorial/tree/master/Chapter1)

## 通过IDEA创建SpringBoot项目
- [使用IDEA创建SpringBoot项目](../extra/extra1.md)

## 引入web模块
> 此处创建项目时候已经有引入，可跳过

pom.xml引入两个模块：
- spring-boot-starter-web：web模块,快速web应用开发,嵌套了tomcat
- spring-boot-starter-test：测试模块，包括JUnit、Hamcrest、Mockito
```
<dependencies>
    <!-- web包  -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <!-- test包 -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
    	<scope>test</scope>
    </dependency>
</dependencies>
```
## 添加maven插件
> 此处创建项目时候已经有引入，可跳过

pom.xml引入插件：
- spring-boot-maven-plugin 能够以Maven的方式为应用提供Spring Boot的支持，即为Spring Boot应用提供了执行Maven操作的可能
```
<plugins>
    <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
    </plugin>
</plugins>
```

## 创建配置文件
> 创建application.yml或者application.properties 

配置文件说明
- springboot 默认的端口号为：8080，使用server.port可更改端口号，此时浏览器访问：127.0.0.1:8080/chapter1即可查看。
- 需要修改默认端口号时及上下文路径时，只需要在application.yml设置以下属性：

```
# server config
server:
  # 端口号
  port: 8080
  # 应用上下文路径
  servlet:
     context-path: /chapter1
# spring config
spring:
  # application config
  application:
    # 应用名
    name: spring-boot-chapter1
```

## 创建应用程序启动类
```
@SpringBootApplication
public class Chapter1Application {
    public static void main(String[] args) {
        SpringApplication.run(Chapter1Application.class, args);
    }
}
```

## 创建hello RESTful风格接口
```
@RestController
public class HelloController {

    @RequestMapping("/hello")
    public String hello() {
        return "Hello World";
    }
}
```

## 运行应用程序
### 1、打开应用程序启动类Chapter1Application以main方法启动
- 直接Chapter1Application,右键 run 'Chapter1Application' 即可。
- 看见以下提示，说明启动成功：
```
Tomcat started on port(s): 8080 (http) with context path '/chapter1'
```

### 2、浏览器输入http://localhost:8080/chapter1/hello访问显示Hello World

## 项目结构
![chapter1-1.png](/images/springboot/course/chapter1/1.png)

> 自此，简单的SpringBoot就开发完成了。比起原来的springmvc时的开发效率，简直是一个质的飞跃，无需再烦扰烦人的xml配置文件了。
