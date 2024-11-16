## TODO application 
This is a simple todo application. 
- Anyone can add todos.
- They can see their added todos.
- They can mark their todos as done if completed. 
- They can mark their todos as not done (if marked completed by mistake). 
- They can remove some todos if needed. 

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB instance running (local or cloud)

### Backend Setup

- Navigate to the backend directory: 
    cd backend
- Install the dependencies
    npm install
- Create a .env file in the backend directory and add your MongoDB connection string
    MONGODB_URL=your_mongodb_connection_string
- Start the backend server
    npm start

### Frontend Setup

- Navigate to the frontend directory: 
    cd frontend
- Install the dependencies
    npm install
- Start the frontend server
    npm run dev