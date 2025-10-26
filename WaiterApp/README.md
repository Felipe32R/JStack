# 🍽️ WaiterApp

A complete system for **restaurant order management**, where **customers place their orders directly from the table using the mobile app**, and **waiters receive and update the orders in real time** through a **web dashboard**.

---

## 🚀 Overview

This project was built to **modernize restaurant service**, eliminating manual order-taking and improving communication between customers, waiters, and the kitchen.


1. **Ordering App** — used by customers at the tables.  
2. **Web Dashboard** — used by waiters and staff.  
3. **Backend API** — handles all data management and real-time communication.


### ✨ Key Features

- 📋 **Interactive Menu:** Displays categories and products with descriptions, images, and prices.  
- ➕ **Order Creation:** Customers can select items, set quantities, and send orders directly from their table.  
- ⏱️ **Real-Time Tracking:** Orders update automatically (e.g., “In preparation,” “Ready,” “Delivered”).  
- 💳 **Order Summary:** Shows details like items, notes, and total price.  
 


### 📸 Main Screens





<img width="1919" height="913" alt="Screenshot_6" src="https://github.com/user-attachments/assets/126a70f4-315e-40ec-ae5f-e518b6891f3b" />
<img width="1917" height="913" alt="Screenshot_8" src="https://github.com/user-attachments/assets/37aac70e-4720-463e-b71a-e6c8dcd3acab" />
<img width="1912" height="909" alt="Screenshot_7" src="https://github.com/user-attachments/assets/3b3a47fc-7213-45a1-abf8-18de52a25279" />


<p align="center">
  <img src="https://github.com/user-attachments/assets/1c59b3af-58f0-49b4-a0db-37bd517a5269" width="30%" />
  <img src="https://github.com/user-attachments/assets/f4420085-ec2c-4188-83a4-efc8ffe47c9d" width="30%" />
</p>
<p align="center">
  <img src="https://github.com/user-attachments/assets/da808bd8-ad14-453c-b3fa-8acadf103c42" width="30%" />
  <img src="https://github.com/user-attachments/assets/6c78585f-2ac8-43b5-aa55-fd0089d60669" width="30%" />
  <img src="https://github.com/user-attachments/assets/af96dd66-c6b8-40cb-a2e9-5767f82cb141" width="30%" />
</p>




## 🔄 System Flow

1. The **customer** opens the app, selects their table, and **places an order**.  
2. The **backend** receives the order and instantly notifies the **web dashboard** via **Socket.IO**.  
3. The **waiter** updates the order status as it progresses.  
4. The **app** receives updates automatically, showing the real-time status.



## 🛠️ Technologies Used

| Area | Technologies |
|------|--------------|
| **Frontend (App)** | React Native, Expo, Axios, Socket.IO |
| **Frontend (Dashboard)** | React, Vite, Socket.IO Client |
| **Backend** | Node.js, Express, MongoDB, Mongoose, Socket.IO |
| **Communication** | WebSockets (Socket.IO) |
| **Others** | ESLint, Prettier, dotenv |



