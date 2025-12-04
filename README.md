# Employee Management System

A full-stack Employee Management System built with Spring Boot, React, and MySQL.

## Tech Stack

- *Backend:* Spring Boot, MySQL, JPA/Hibernate
- *Frontend:* React.js, Axios
- *Database:* MySQL

## Features

- Add, View, Edit, Delete employees
- Search by name, email, department
- Pagination (10 records per page)
- Dashboard with employee statistics
- Responsive design

## Prerequisites

- Java 17+
- Node.js 16+
- MySQL 8.0+
- Maven

## Setup Instructions

### 1. Database Setup

sql
CREATE DATABASE EmployeeManagement;


### 2. Backend Setup

bash
cd backend


Update src/main/resources/application.properties:

properties
spring.datasource.url=jdbc:mysql://localhost:3306/EmployeeManagement
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD
spring.jpa.hibernate.ddl-auto=update


Run backend:

bash
./mvnw spring-boot:run


Backend runs at: http://localhost:8080

### 3. Frontend Setup

bash
cd frontend
npm install
npm start


Frontend runs at: http://localhost:3000

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/employees | Get all employees |
| GET | /api/employees/{id} | Get employee by ID |
| POST | /api/employees | Create employee |
| PUT | /api/employees/{id} | Update employee |
| DELETE | /api/employees/{id} | Delete employee |

### Sample Request

*POST /api/employees*

json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "department": "IT",
  "salary": 50000
}


## Project Structure


├── backend/
│   ├── src/main/java/com/ems/
│   │   ├── controller/
│   │   ├── service/
│   │   ├── repository/
│   │   └── model/
│   └── application.properties
└── frontend/
    ├── src/
    │   ├── components/
    │   └── services/
    └── package.json


## Screenshots

Add your screenshots in screenshots/ folder:
- Dashboard
- Employee List
- Add/Edit Employee

## Author

*Sanjana V U*  
Submission for Aquant HR Assignment

## Contact

- Email: rahul@acquanthr.com, sujith@acquanthr.com
