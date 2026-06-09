# Smart Garbage Collection System

## Overview

The Smart Garbage Collection System is a web-based waste management platform designed to connect citizens, garbage collection drivers, and administrators through a centralized system.

The platform allows citizens to create waste collection requests by selecting their location on Google Maps, enables drivers to accept and complete assigned requests, and provides administrators with analytics, driver performance tracking, ratings, and salary management.

This project was developed using Node.js, Express.js, MySQL, HTML, CSS, and JavaScript.

---

## Features

### Customer Module

* User Registration and Login
* Create Waste Collection Requests
* Select Pickup Location using Google Maps
* Automatic Address Detection using Reverse Geocoding
* View Request History
* Track Request Status

  * Pending
  * Assigned
  * Completed
* Submit Driver Ratings and Reviews
* Prevent Multiple Reviews for the Same Request

---

### Driver Module

* Driver Registration and Login
* View Available Waste Collection Requests
* Accept Requests
* Navigate to Pickup Location using Google Maps
* Complete Assigned Requests
* Earn Points Based on Waste Type
* View:

  * Total Completed Requests
  * Total Points Earned
  * Salary
  * Average Rating

---

### Admin Module

#### Dashboard

* Total Customers
* Total Drivers
* Total Requests
* Pending Requests
* Assigned Requests
* Completed Requests

#### Request Log

* View All Requests
* Customer Name
* Driver Name
* Waste Type
* Quantity
* Collection Date
* Status
* Search and Filter Functionality

#### Driver Salary Management

* Driver ID
* Driver Name
* Total Points
* Salary Calculation

#### Driver Analytics

* Driver Ratings
* Average Rating
* Total Reviews
* Top Drivers Leaderboard

---

## Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MySQL

### APIs

* Google Maps JavaScript API
* Google Geocoding API

---

## Database Tables

### Users

Stores customer, driver, and admin information.

### Requests

Stores waste collection requests and assignment details.

### Driver Points

Stores points earned by drivers for completed requests.

### Reviews

Stores customer ratings and reviews for drivers.

---

## Points System

| Waste Type | Points |
| ---------- | ------ |
| General    | 5      |
| Organic    | 8      |
| Recyclable | 10     |
| Hazardous  | 15     |

---

## Salary Calculation

Driver salary is calculated based on total points earned.

```text
Salary = Total Points × 10
```

Example:

```text
50 Points = ₹500
100 Points = ₹1000
```

---

## Project Structure

```text
Smart-Garbage-Collection-System

├── db
│   └── db.js
│
├── pages
│   ├── admin.html
│   ├── customer.html
│   ├── driver.html
│   ├── login.html
│   ├── register.html
│   └── css
│       └── style.css
│
├── server.js
├── package.json
├── package-lock.json
└── dumpit.sql
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/SMART-GARBAGE-COLLECTION-SYSTEM.git
```

### Navigate to Project

```bash
cd SMART-GARBAGE-COLLECTION-SYSTEM
```

### Install Dependencies

```bash
npm install
```

### Configure Database

1. Create a MySQL database.
2. Import `dumpit.sql`.
3. Update database credentials inside:

```text
db/db.js
```

### Start Server

```bash
node server.js
```

Server runs on:

```text
http://localhost:3000
```

---

## Future Enhancements

* Real-Time Driver Tracking
* SMS/Email Notifications
* Route Optimization using Dijkstra Algorithm
* AI-Based Waste Prediction
* Mobile Application Integration
* PDF Report Generation
* Advanced Analytics Dashboard

---

## Project Outcome

The Smart Garbage Collection System provides a digital solution for waste management by improving communication between citizens and collection drivers, reducing response time, and increasing operational transparency through analytics and performance tracking.

---
