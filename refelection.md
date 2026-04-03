# Reflection – Practical 2: Weather API Dashboard
## What I Built
I created a Weather API Dashboard using HTML, CSS, and plain JavaScript. The application lets users search for current weather information, save locations, modify existing entries, and remove them. This setup allowed me to implement all four primary HTTP methods—GET, POST, PUT, and DELETE—commonly used in RESTful API design.
## Key Concepts Applied
### 1. HTTP Methods (GET, POST, PUT, DELETE)
This was the first time I used all four HTTP methods in an actual project. I gained a clearer understanding of their distinct roles: GET retrieves data, POST adds new data, PUT updates existing data, and DELETE removes it.
### 2. Fetch API
I relied on JavaScript’s Fetch API to handle all network requests. I learned how to build URLs with query parameters for GET calls, and how to include headers and a JSON body when making POST and PUT requests.
### 3. Async/Await
To manage asynchronous operations, I used async/await syntax. It made the code more readable and easier to follow than nested promises. I also implemented try/catch blocks to catch and handle errors without disrupting the user experience.
### 4. Using External APIs
The project integrates two external APIs. OpenWeatherMap provided real-time weather data based on city names, while JSONPlaceholder acted as a simulated backend for managing saved locations—allowing me to test create, update, and delete functions.
### 5. DOM Manipulation
I updated the page dynamically by modifying the innerHTML of elements, rendering weather results and location cards based on data received from API responses.
## Key Takeaways
- How to perform full CRUD operations (GET, POST, PUT, DELETE) using the Fetch API
- How to parse and use JSON data from API responses
- How to manage API errors and present clear feedback to users
- How to implement a tabbed interface using JavaScript logic
- How to use a hidden modal form to edit and update stored data
## Challenges Encountered
### Challenge 1: API Key Authentication Issues
Initially, my weather data requests returned a 401 unauthorized error.
Solution:
I discovered that my OpenWeatherMap API key hadn’t been fully activated. Once it was active and I confirmed it was correctly included in the request URL, the issue was resolved.
### Challenge 2: Handling JSONPlaceholder Response Format
The response body from JSONPlaceholder arrived as a plain string instead of parsed JSON, which caused problems when trying to extract city and country data.
Solution:
I added a try/catch block around the JSON.parse() function. If parsing fails, the app now safely displays the raw text instead of breaking.
### Challenge 3: UI Not Reflecting Deletion
Even after a successful DELETE request, the deleted location still appeared on the screen.
Solution:
I found that the IDs being compared—one a string, the other a number—were not matching due to type differences. Converting the ID properly with parseInt() fixed the filtering issue.
## Final Thoughts
This exercise gave me hands-on experience with client-server communication via APIs. Using real services like OpenWeatherMap made the learning process more tangible than theoretical study alone. I now feel better equipped to interpret API documentation and develop interactive JavaScript applications that exchange data with external systems.