# Microservice Architecture Practice With Node.js and Express

This repository demonstrates a **basic microservice architecture** using **Node.js** and **Express**, connected through an **API Gateway**.

The project is intended for learning and practice purposes, showcasing how independent services communicate through a gateway layer.

---

## 🧩 Services Overview

| Service Name     | Description                     | Port |
| ---------------- | ------------------------------- | ---- |
| auth-service     | User authentication & auth APIs | 3001 |
| products-service | Product management APIs         | 3002 |
| cart-service     | Cart management APIs            | 3003 |
| api-gateway      | Central entry point (proxy)     | 3000 |

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* express-http-proxy (API Gateway)

---

## 📦 API Gateway Dependencies

Install required dependencies inside **api-gateway**:

```bash
npm install express express-http-proxy
```

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/Lucky-Bhure/Microservice-Architecture-Practice-With-NodeAndExpress.git
cd Microservice-Architecture-Practice-With-NodeAndExpress
```

---

## ▶️ Running the Services

> Start **each service in a separate terminal**.

### 1️⃣ Auth Service

```bash
cd auth-service
npm install
node index.js
```

Runs on **[http://localhost:3001](http://localhost:3001)**

---

### 2️⃣ Products Service

```bash
cd products-service
npm install
node index.js
```

Runs on **[http://localhost:3002](http://localhost:3002)**

---

### 3️⃣ Cart Service

```bash
cd cart-service
npm install
node index.js
```

Runs on **[http://localhost:3003](http://localhost:3003)**

---

### 4️⃣ API Gateway

```bash
cd api-gateway
npm install
node index.js
```

Runs on **[http://localhost:3000](http://localhost:3000)**

---

## 🌐 API Gateway Routes

All client requests should go through the **API Gateway (port 3000)**.

### 🔐 Auth Service APIs

| Action   | Method | Endpoint                                  |
| -------- | ------ | ----------------------------------------- |
| Register | POST   | `http://localhost:3000/api/auth/register` |
| Login    | POST   | `http://localhost:3000/api/auth/login`    |

---

### 📦 Product Service APIs

| Action           | Method | Endpoint                    |
| ---------------- | ------ | --------------------------- |
| Create Product   | POST   | `/api/product/create`      |
| Get All Products | GET    | `/api/product/all`         |
| Get Product      | GET    | `/api/product/details/:id` |
| Update Product   | POST   | `/api/product/update/:id`  |
| Delete Product   | DELETE | `/api/product/delete/:id`  |

---

### 🛒 Cart Service APIs

| Action           | Method | Endpoint               |
| ---------------- | ------ | ---------------------- |
| Add to Cart      | POST   | `/api/cart/add`        |
| Get Cart Details | GET    | `/api/cart/all`        |
| Update Cart Item | POST   | `/api/cart/update/:id` |
| Delete Cart Item | DELETE | `/api/cart/delete/:id` |

---

## 📁 Sample Express Routes

### Auth Routes

```js
router.post("/login", login);
router.post("/register", registerUser);
```

### Product Routes

```js
router.post("/create", createProduct);
router.get("/all", getProducts);
router.get("/details/:id", getProduct);
router.post("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);
```

### Cart Routes

```js
router.post("/add", addToCart);
router.get("/all", getCartDetails);
router.post("/update/:id", updateCartElement);
router.delete("/delete/:id", deleteCartElement);
```

---

## 📌 Notes

* Each service is **independent and loosely coupled**
* API Gateway handles routing and service abstraction
* No database is required (can be extended easily)

---

## 📄 License

This project is for educational purposes.

---

## 👨‍💻 Author

**Lucky Bhure**

Happy Coding! 🚀
