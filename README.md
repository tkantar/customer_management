Customer Management Project<br/>
This project is a simple customer management application developed with Spring Boot for the backend and React for the frontend. Postgres is used as the database.<br/>

Prerequisites<br/>
Before running the project, make sure you have the following prerequisites installed on your system:<br/>

Java 11 or higher
Maven for dependency management in the backend
Node.js (with npm or Yarn) for dependency management in the frontend
PostgreSQL as the database

Setup Instructions
Backend Setup (Spring Boot)
Clone the repository:
git clone https://github.com/tkantar/customer_management.git

Navigate to the backend directory:
cd customer_management/backend

Set up the PostgreSQL database: Create a new database in PostgreSQL. Take note of the database name, username, and password.

Configure application.properties: Go to src/main/resources/application.properties and update the following database configuration values:

spring.datasource.url=jdbc:postgresql://localhost:5432/your_database
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update

Run the backend: Use Maven to start the backend.

Frontend Setup (React)

Navigate to the frontend directory:

cd ../frontend
Install dependencies:

Run the following command to install the required npm modules:

npm install
or if you're using Yarn: yarn install

Run the frontend:

Start the React application:

npm start
or if you're using Yarn: yarn start

Access the application: Open your browser and go to http://localhost:3000 to view the application.
