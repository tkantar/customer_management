Customer Management Project
This project is a simple customer management application developed with Spring Boot for the backend and React for the frontend. Postgres is used as the database.

Prerequisites
Before running the project, make sure you have the following prerequisites installed on your system:

Java 21 or higher
Maven for dependency management in the backend
Node.js (with npm or Yarn) for dependency management in the frontend
PostgreSQL as the database
Setup Instructions
Backend Setup (Spring Boot)
Clone the repository:

bash
Copy code
git clone https://github.com/tkantar/customer_management.git
Navigate to the backend directory:

bash
Copy code
cd customer
Set up the PostgreSQL database:

Create a new database in PostgreSQL. Take note of the database name, username, and password.

Configure application.properties:

Go to src/main/resources/application.properties and update the following database configuration values:

properties
Copy code
spring.datasource.url=jdbc:postgresql://localhost:5432/your_database
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
Run the backend:

Use Maven to start the backend:

bash
Copy code
mvn spring-boot:run
Frontend Setup (React)
Navigate to the frontend directory:

bash
Copy code
cd ../frontend
Install dependencies:

Run the following command to install the required npm modules:

bash
Copy code
npm install
or if you're using Yarn:

bash
Copy code
yarn install
Run the frontend:

Start the React application:

bash
Copy code
npm start
or if you're using Yarn:

bash
Copy code
yarn start
Access the application:

Open your browser and go to http://localhost:3000 to view the application.
