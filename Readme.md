# 🚲 Bike Servicing Management System API

A backend RESTful API for managing customers, bikes, and service records in a bike servicing center. Built using **Node.js**, **Express**, **TypeScript**, **Prisma**, and **PostgreSQL**.

---

## 🎯 Objective

The goal is to manage customer information, bike data, and service history efficiently. The system supports:

- CRUD operations for **Customers**, **Bikes**, and **Service Records**
- Special endpoints to **assign**, **update**, and **complete** servicing jobs
- Query overdue or pending services

---

## 🛠 Technologies Used

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Prisma ORM

---

## 🧱 Database Schema

### 1. **Customer Table**

| Field      | Type     | Description                  |
| ---------- | -------- | ---------------------------- |
| customerId | UUID     | Primary key                  |
| name       | String   | Full name of the customer    |
| email      | String   | Unique email address         |
| phone      | String   | Contact number               |
| createdAt  | DateTime | Auto-generated creation date |

---

### 2. **Bike Table**

| Field      | Type   | Description                      |
| ---------- | ------ | -------------------------------- |
| bikeId     | UUID   | Primary key                      |
| brand      | String | Bike brand                       |
| model      | String | Bike model                       |
| year       | Int    | Manufacturing year               |
| customerId | UUID   | Foreign key referencing Customer |

---

### 3. **ServiceRecord Table**

| Field          | Type     | Description                               |
| -------------- | -------- | ----------------------------------------- |
| serviceId      | UUID     | Primary key                               |
| bikeId         | UUID     | Foreign key referencing Bike              |
| serviceDate    | DateTime | Date the service started                  |
| completionDate | DateTime | Nullable. Date service was completed      |
| description    | String   | Details of the service (e.g., oil change) |
| status         | String   | “pending”, “in-progress”, or “done”       |

---

## 📦 API Endpoints

### ✅ Customer Management

- `POST /api/customers` – Create a new customer
- `GET /api/customers` – Fetch all customers
- `GET /api/customers/:id` – Fetch customer by ID
- `PUT /api/customers/:id` – Update customer details
- `DELETE /api/customers/:id` – Delete a customer

---

### ✅ Bike Management

- `POST /api/bikes` – Add a new bike
- `GET /api/bikes` – Fetch all bikes
- `GET /api/bikes/:id` – Fetch a bike by ID

---

### ✅ Service Record Management

- `POST /api/services` – Create a service record
- `GET /api/services` – Fetch all service records
- `GET /api/services/:id` – Fetch service by ID

---

### ✅ Status & Overdue Services

- `GET /api/services/status` – Fetch all services that:
  - Have status = `pending` or `in-progress`
  - AND are older than 7 days from today

---

## 🚀 Getting Started

Follow the steps below to run the project locally:

### 1. **Clone the Repository**

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/bike-servicing-api.git
cd bike-servicing-api
```
