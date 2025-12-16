login-app

Login Page Application

Project Description

This project is a simple Login and Signup application.

The requirement was to create a login page where:
	•	The password is fetched from the database
	•	The entered password is compared with the stored password
	•	A success or error message is shown based on the result

⸻

Technologies Used
	•	Frontend: React, CSS
	•	Backend: Node.js, Express
	•	Database: Supabase (PostgreSQL)

⸻

How It Works

Signup
	1.	User enters email and password
	2.	Backend checks if the user already exists
	3.	Password is stored in the database
	4.	Signup success message is returned

Login
	1.	User enters email and password
	2.	Backend fetches the user data from the database
	3.	Entered password is compared with the stored password
	4.	If matched → login successful
	5.	If not matched → login failed

⸻

How to Run the App

The project has two folders:
	•	Backend → Node.js server
	•	Frontend → React (Vite) application

Run the Backend

Open a terminal and go to the Backend folder.
Install dependencies:

```
npm install
```

Start the server:
```
nodemon app.js
```

Backend runs on:
```
http://localhost:3000
```

Run the Frontend

Open a new terminal and go to the Frontend folder.
Install dependencies:

```
npm install
```

Start the app:

```
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```