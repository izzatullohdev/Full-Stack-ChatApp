# WebSocket Real-Time Messaging System

## **Overview**  
This project is a **real-time messaging system** built using WebSockets. The system facilitates communication between users and call center members, where each user is assigned a unique room for conversations. After the conversation ends, the room and all messages are automatically deleted.

---

## **Features**  

- **Real-Time Communication**: Messages are exchanged instantly between users and call center members.
- **Room Management**:
  - Unique rooms for each user.
  - Rooms can be joined and left by call center members.
  - Rooms are deleted when the conversation is marked complete.
- **Authentication & Authorization**:
  - Only registered users and call center members can connect.
  - Secure authentication using JWT tokens.
- **Temporary Message Storage**: Messages are stored only during the conversation and deleted afterward.
- **Admin Tools**: Call center members can manage multiple user conversations.

---

## **Technologies Used**  

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB / PostgreSQL (optional for persistent storage)  
- **WebSocket**: Real-time communication  
- **Authentication**: JWT (JSON Web Token)  
- **Deployment**: Docker, Heroku, or similar  

---

## **Installation**  

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/repository-name.git
   cd repository-name
