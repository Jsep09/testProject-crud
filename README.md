# testProject-crud

This is a CRUD application built using Docker, MySQL, Node.js (Express), and React. The project demonstrates how to set up a full-stack application with a MySQL database and frontend integrated with React.

## Prerequisites

Before you begin, ensure that you have the following software installed:

- [Docker](https://www.docker.com/get-started) - For running containers.
- [Docker Compose](https://docs.docker.com/compose/) - For orchestrating multiple containers.

## Project Structure

The project is structured as follows:

## Getting Started

To set up and run this project locally, follow these steps:

### 1. Clone the Repository

Clone the project to your local machine:

```bash
git clone https://github.com/your-username/testProject-crud.git
cd testProject-crud
```

### 2. Set up Environment Variables

Ensure the necessary environment variables are set in the `docker-compose.yml` file for the backend and MySQL service.

Open `docker-compose.yml` and make sure the backend and MySQL configurations include the correct environment settings, such as database credentials.

```yaml
backend:
  environment:
    - MYSQL_HOST=mysql
    - MYSQL_PORT=3306
    - MYSQL_USER=root
    - MYSQL_PASSWORD=12345
    - MYSQL_DATABASE=crud
```

### 3. Run the project

```bash
docker-compose up --build
```

This command will:

- Build the Docker images for the frontend, backend, and MySQL services.
- Start the MySQL container for the database.
- Start the backend service (Node.js with Express).
- Start the frontend service (React).

Once the containers are up and running, the application should be accessible locally.

### 4. Database Initialization (Optional)

You can manually initialize the database by following these steps:

1. Access the MySQL container:

   ```bash
   docker exec -it mysql-container mysql -u root -p
   ```

2. After logging into MySQL, run the following SQL commands to create the tables and insert sample data:

   ```sql
   USE crud;

   -- Create users table if it doesn't exist
   CREATE TABLE IF NOT EXISTS users (
       id INT PRIMARY KEY AUTO_INCREMENT,
       firstname VARCHAR(100) NOT NULL,
       lastname VARCHAR(100) NOT NULL,
       nickname VARCHAR(50) NOT NULL,
       birthdate DATE NOT NULL,
       age INT NOT NULL,
       gender VARCHAR(100),
       create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
   );

   -- Insert sample data
   INSERT INTO users (firstname, lastname, nickname, birthdate, age, gender)
   VALUES ('Paul', 'Atreides', 'Paul', '2001-09-04', 23, 'Male');
   ```

### 5. Accessing the Application

Once the containers are running, you can access the application as follows:

- **Frontend (React)**: Open your browser and visit [http://localhost:5173](http://localhost:5173).
- **Backend (Node.js API)**: The backend API can be accessed at [http://localhost:8080](http://localhost:8080).

The frontend communicates with the backend to perform CRUD operations on the MySQL database.

### 6. Stopping the Application

To stop the Docker containers, run:

```bash
docker-compose down

```
