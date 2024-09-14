NewsApp
A simple web application that fetches the latest news headlines using the GNews API. The frontend is built with React, and the backend is developed using Node.js and Express. It allows users to search for news by category, language, and country.

Table of Contents
Features
Technologies
Getting Started
Installation
Running the App
API Routes
Environment Variables
Future Enhancements
Features
Fetches the latest headlines from GNews.
Allows users to search for news by category, language, and country.
Responsive UI built with React.
Backend service built with Express to interact with the GNews API.
Error handling for denied or missing images.
Technologies
Frontend:
React
Axios for HTTP requests
Tailwind CSS for styling
Backend:
Node.js
Express
Axios for API calls
Dotenv for environment variable management
Cors for handling Cross-Origin Resource Sharing (CORS)
Getting Started
Follow these instructions to set up the project locally.

Prerequisites
Ensure you have the following installed on your machine:

Node.js (v14 or higher)
npm (Node package manager)


Installation
Clone the repository:
git clone https://github.com/jsnerdvibes/NewApp.git
cd NewApp


Backend Setup:
cd backend
npm install

Frontend Setup:
cd frontend
npm install


Running the Backend:

Create a .env file in the backend folder and set your environment variables (API Key) as described in the Environment Variables section

Start the Express server:
npm start
The backend should be running on http://localhost:3000.

Running the Frontend:
Start the React development server:
npm run build
The frontend should be running on http://localhost:5173.


API Routes
/api/topheadings
Description: Fetches top headlines based on the parameters passed (category, language, country).

Method: GET

Parameters:

category (optional): News category (e.g., sports, health, business).
lang (optional): Language code (e.g., en, es).
country (optional): Country code (e.g., us, in).
Example Request:

bash
Copy code
GET http://localhost:3000/api/topheadings?category=sports&lang=en&country=us
Response: JSON object with top news articles.



Environment Variables
Create a .env file in the backend directory to store sensitive information like the API key. Here’s an example:

PORT=3000
API_KEY=your_gnews_api_key












