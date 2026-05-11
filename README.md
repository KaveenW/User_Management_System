# User Management System (Full-Stack)

A modern, full-stack web application designed to manage user records with a focus on real-time UI updates and clean architectural patterns. This project demonstrates the integration between a **Java Spring Boot** backend and a **Next.js** frontend.

---

## 🛠 Tech Stack

### **Frontend**

- **Framework:** Next.js (React)
- **Styling:** Tailwind CSS
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Communication:** Fetch API (Async/Await)

### **Backend**

- **Language:** Java 17+
- **Framework:** Spring Boot (Spring Web, Spring Data JPA)
- **Database:** MySQL
- **Architecture:** RESTful API with MVC Pattern

---

## 🏗 Key Engineering Features

- **Lifting State Up:** Centralized state management in the parent component to ensure instant UI synchronization across "Add," "List," and "Edit" views without page refreshes.
- **Asynchronous Operations:** Leveraged `async/await` and the Fetch API for non-blocking communication with the backend.
- **Two-Way Data Binding:** Implemented controlled components in React to sync form state with UI inputs seamlessly.
- **RESTful CRUD:** Fully implemented Create, Read, Update, and Delete endpoints following industry-standard HTTP methods (`GET`, `POST`, `PUT`, `DELETE`).

---

## 🚀 Getting Started

### Prerequisites

- JDK 17 or higher
- Node.js v18+
- MySQL Server

### Installation

1. **Backend Setup:**

   ```bash
   cd user-mngt-system-backend
   # Update application.properties with your MySQL credentials
   ./mvnw spring-boot:run

   ```

2. **Frontend Setup:**

```bash
 cd user-mngt-system-frontend
 npm install
 npm run dev



 The app will be available at `http://localhost:3000`.

---

## 📝 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/users/all` | Fetch all users |
| `POST` | `/api/users/user` | Create a new user |
| `GET` | `/api/users/{id}` | Get specific user details |
| `PUT` | `/api/users/{id}` | Update existing user |
| `DELETE` | `/api/users/{id}` | Remove a user |

---

## 💡 Engineering Concepts Applied

### 1. The React Lifecycle
Used `useEffect` with dependency arrays to manage data fetching, ensuring the application only calls the API when specific state changes (like selecting a user to edit).



### 2. Immutable State Management
Used the Spread Operator (`...user`) to maintain state immutability, a core React principle that prevents unintended side effects and ensures predictable UI updates.

### 3. Asynchronous Data Flow
Implemented `async/await` patterns to handle the latency of network requests, keeping the UI responsive while waiting for the Spring Boot server to process requests.



---
```
