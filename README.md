# REAL-TIME-COLLABORATIVE-DOCUMENT-EDITOR


*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: ABISHEK M

*INTERN ID*: CT06DR1496

*DOMAIN*: FULL STACK WEB DEVELOPMENT

*DURATION*: 6 WEEKS

*MENTOR*: NEELA SANTHOS

*DESCRIPTION*:<br> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This real-time collaborative document editor is developed as part of CODTECH Internship Task 3 and demonstrates the implementation of a multi-user, real-time editing system using React.js, Node.js, Socket.IO, and MongoDB. The primary objective of this project is to allow multiple users to edit a shared document simultaneously while ensuring that all changes are synchronized instantly across connected clients without requiring page refreshes.

WebSockets form the core communication layer of the application, enabling continuous, bidirectional data exchange between the frontend and backend. Socket.IO is used to manage real-time events such as text updates, user presence, typing indicators, and editor attribution, ensuring a smooth and responsive collaboration experience even when multiple users are editing the document concurrently.

The application allows users to enter a username and join a shared document session. Once connected, users can edit the document in real time, view typing indicators that show when another user is actively editing, and see which user last modified the document. All document content is automatically saved to MongoDB, ensuring data persistence even if the page is refreshed or the browser is closed.

The frontend is built using React.js, providing a clean, responsive, and user-friendly interface. The editor layout is centered and styled using modern CSS and Flexbox principles to maintain readability and usability across different screen sizes. The backend, built with Node.js and Express.js, handles real-time socket connections, document management, and user tracking. This project runs locally on localhost and does not require deployment to an online server to meet the internship requirements.

Overall, this project demonstrates key real-world concepts such as real-time collaboration, state synchronization, client-server communication, and database persistence, making it a practical example of modern full-stack web application development.

*Steps to Run*:

<ol>
  <li>git clone https://github.com/abishekM1732/REAL-TIME-COLLABORATIVE-DOCUMENT-EDITOR.git and cd REAL-TIME-COLLABORATIVE-DOCUMENT-EDITOR</li>

  <li>Navigate to the backend folder (if applicable) and install dependencies using npm install</li>

  <li>Ensure MongoDB service is running locally</li>

  <li>Start the backend server using node server.js (or npm start)</li>

  <li>Verify the server is running on http://localhost:3000 (or the port specified in the project)</li>

  <li>Open a web browser and navigate to the frontend URL (usually http://localhost:3000)</li>

  <li>Create or open a document from the interface</li>

  <li>Open the same document in multiple browser tabs or devices to test real-time collaboration</li>

  <li>Start editing and observe real-time content synchronization between users</li>
</ol>


*TECH STACK*;

*Frontend*:

<ul> <li>React.js</li> <li>HTML5</li> <li>CSS3 (modern flexbox layout, responsive design)</li> <li>JavaScript (ES6+)</li> <li>Socket.IO Client</li> </ul>

*Backend*:

<ul> <li>Node.js</li> <li>Express.js</li> <li>Socket.IO Server</li> <li>MongoDB</li> </ul>

*Other Tools*:

<ul> <li>NPM (Node Package Manager)</li> <li>Git & GitHub for version control</li> <li>.gitignore used to exclude node_modules</li> </ul>

*ScreenShots*:<br>

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/53b982e9-d568-4247-a167-43ab66506baa" /> <br><br>
<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/db46d334-6e1a-4880-b8ce-f9194f249b7e" />
