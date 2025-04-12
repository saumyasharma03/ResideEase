# **ResideEase - Accommodation Booking Platform**

**ResideEase** is a full-stack Progressive Web App (PWA) designed for booking accommodations such as hotels, PGs (Paying Guests), and flats. The platform features two distinct user roles—**Admin** and **User**—and integrates various advanced functionalities including real-time chat, payment gateway, QR code-based check-in/check-out, and downloadable PDF receipts.

## **Features**

- **User Panel:**
  - Browse and filter available accommodations (hotels, PGs, flats)
  - View detailed property information with map integration powered by OpenStreetMap API
  - Book accommodations and receive instant booking confirmations
  - Secure login and authentication via JWT
  - Make payments via Razorpay payment gateway
  - Downloadable PDF receipts for bookings
  - QR code-based check-in/check-out for smooth user experience

- **Admin Panel:**
  - Manage property listings (hotels, PGs, flats)
  - View and manage user bookings
  - Administer chat conversations and interact with users
  - Generate and view real-time reports

- **Real-Time Chat:**
  - Instant communication between users and property managers using **Socket.io**.

- **QR Check-In/Check-Out:**
  - Secure check-in/check-out using QR codes for smooth user flow.

## **Tech Stack**

- **Frontend:**  
  - React.js, Tailwind CSS, PWA (Progressive Web App) features  
- **Backend:**  
  - Node.js, Express.js  
- **Database:**  
  - MongoDB  
- **Authentication:**  
  - JWT (JSON Web Token)  
- **Payment Gateway:**  
  - Razorpay  
- **Real-Time Communication:**  
  - Socket.io  
- **Map Integration:**  
  - OpenStreetMap API  
- **PDF Generation:**  
  - PDF Renderer library (for generating downloadable receipts)  
- **QR Code:**  
  - QR code generation and scanning for check-in/check-out
    

## **Installation and Setup**

### 1. Clone the repository

```bash
git clone https://github.com/your-username/resideease.git
cd resideease
```
### 2. Install Dependencies
For backend
```bash
cd backend
npm install
```
For Frontend
```bash
cd vite-project
npm install
```
### 3. Set up environment variables
Create a .env file in both server and client directories and add the necessary environment variables such as:

JWT_SECRET (for authentication)

MONGODB_URI (MongoDB connection string)

PORT (choose a port for your server)

### 4. Run the development environment
```bash
cd backend
node server.js
```
```bash
cd vite-project
npm run dev
```

### Visit the app:
### Go to http://localhost:5173 to access the platform.


