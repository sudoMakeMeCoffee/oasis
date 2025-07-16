## OASIS - Versimilitude 

`/signup` - user registration

`signin` - user login

`/team` - team creation

`/challenges` - available challenges

## Setup

```bash
cd frontend/
npm i
npm run dev
```

create application.properties file

```
backend/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com.example.demo/   # Your Java source code
│   │   └── resources/
│   │       └── application.properties
├── pom.xml or build.gradle
└── README.md

```
```
spring.application.name=Oasis
spring.datasource.url=jdbc:mysql://localhost:3306/oasis
spring.datasource.name=oasis
spring.datasource.username=yourMysqlUsername
spring.datasource.password=mysqlPassword
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
server.port = 8080
spring.jpa.hibernate.ddl-auto=update
```

```bash
cd backend/
./mvnw spring-boot:run
```
