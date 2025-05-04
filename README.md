# 🚗 Rent Cars React

A modern car rental web application frontend built with React. This project allows users to browse available cars, view detailed information, and choose a vehicle to rent.

---

## ✨ Features

- Browse a catalog of available rental cars
- View detailed information for each vehicle
- Rent their chosen car for a specific amount of time
- Responsive design suitable for all devices

---

## 📦 Dependencies

This project uses the following core libraries:

| Package                     | Version     | Purpose                                      |
|----------------------------|-------------|----------------------------------------------|
| `axios`                    | ^1.7.7      | HTTP requests                                |
| `js-cookie`                | ^3.0.5      | Manage cookies (auth tokens, etc.)           |
| `react`                    | ^18.3.1     | Core React library                           |
| `react-dom`                | ^18.3.1     | DOM rendering for React                      |
| `react-feather`            | ^2.0.10     | Feather icons for React                      |
| `react-intersection-observer` | ^9.13.1 | Detect element visibility (lazy loading, etc.) |
| `react-loading-skeleton`   | ^3.5.0      | Skeleton loading screens                     |
| `react-router-dom`         | ^6.26.2     | Routing and navigation                       |
| `react-toastify`           | ^10.0.5     | Notifications and toasts                     |
| `styled-components`        | ^6.1.13     | CSS-in-JS styling                            |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/highonlinux420/rent-cars-react.git
   cd rent-cars-react
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server
   ```bash
   npm run dev
   ```

---

## 🛠️ Available Scripts

| Command           | Description                               |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Start Vite dev server with hot reload     |
| `npm run build`   | Build the app for production into `dist/` |
| `npm run preview` | Preview the production build locally      |
| `npm run lint`    | Run ESLint to check code style            |

---

## 🗂️ Project Structure
```
rent-cars-react/
├── public/                 # Static assets (favicon, robots.txt)
├── src/
│   ├── assets/             # Images, icons
│   ├── fonts/              # Fonts
│   ├── components/         # Reusable UI components
│   ├── pages/              # Website Routes/Pages
│   ├── GlobalStyles.jsx    # Global CSS
│   ├── CONSTANTS.js        # Constant Variables and 
│   ├── App.jsx             # App root component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── vite.config.js          # Vite configuration
└── package.json
```

---

## 🔌 API
This app expects a RESTful API at the base URL defined in CONSTANTS.js file. Endpoints:
### Authentication

-   **GET** `/auth/is-authorized`
Check if the client is authorized using the access_token.

-   **POST** `/auth/refresh`
Refresh the access_token.

### Login
-   **POST** `/login`
Handle user login; returns `access_token` and `refresh_token`.

### Cars
-   **GET** `/cars/all`  
    Get a list of all cars.
    
-   **GET** `/cars/top-three` 
    Get the top 3 cars (e.g., most popular or featured).

### Filtering & Searching
-   **POST** `/cars/types`  
Get car **types** available in a specific timeframe and for a specific brand

-   **POST** `/cars/brands`  
Get car **brands** available in a specific timeframe.

-   **POST** `/cars/filtered`  
Get filtered cars by **type**, **brand**, and **timeframe**.

### Specific Car

-   **POST** `/car/specific`  
Get detailed information for a specific car.

### Rentals

-   **POST** `/car/rent`  
Rent a specific car for a given timeframe.

### Counts & Statistics
-   **GET** `/count`  
    Get the number of cars and clients/users.
