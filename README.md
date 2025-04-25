# officeFit - Smart Furniture E-Commerce App

**officeFit** is a modern, responsive e-commerce application that allows users to explore, view, and purchase high-quality office furniture such as chairs, desks, tables, and bookshelf cabinets. Built with **React** and powered by a mock backend using **JSON Server**, officeFit offers an intuitive shopping experience with dynamic product routing and cart functionality.

---

## Features

-  **Product Categorization** — Browse furniture by category: Chairs, Desks, Conference Tables, and Bookshelves.
-  **View Product Details** — Click on a product to view an interactive, detailed product page.
-  **Cart Functionality** — Add items to cart and review them before checkout.
-  **Search & Filter** — Quickly find items with built-in search capabilities.
-  **Responsive Design** — Optimized for desktop, tablet, and mobile devices.
-  **Beautiful UI** — Styled with Tailwind CSS and Boxicons for a sleek user interface.
-  **Mock API** — Uses `json-server` to simulate real API calls from a local `db.json` file.

---

## Folder Structure

officeFit/ │ ├── public/ │ └── db.json # JSON Server database │ ├── src/ │ ├── components/ # Reusable UI components (Navbar, Footer, Cards) │ ├── pages/ # Category-specific pages (Chairs, Desks, etc.) │ ├── context/ # Cart context for global state │ ├── App.jsx # Main component with route logic │ ├── routes.jsx # Centralized route definitions │ └── main.jsx # Entry point │ ├── package.json └── README.md


---

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **Routing:** React Router DOM
- **State Management:** React Context API
- **Icons:** Boxicons
- **Backend:** JSON Server (Fake REST API)

---

##  Getting Started

### Prerequisites

- Node.js ≥ v18
- npm

### Installation

1. **Clone the repo**

```bash
git clone https://github.com/victorngigi/officeFit.git
cd officeFit
Install dependencies

bash
Copy
Edit
npm install
Start the frontend

bash
Copy
Edit
npm run dev
Start JSON Server

Port 3000 is usually taken by Vite, so we use 3001:

bash
Copy
Edit
npx json-server public/db.json --port 3001
Visit your app

Frontend: http://localhost:5173

JSON Server: http://localhost:3001

Usage Tips
Make sure the fetch URLs in your components point to http://localhost:3001.

All category data (chairs, desks, etc.) are stored in public/db.json.

To modify products or categories, simply edit the db.json file.

📷 Screenshots
Coming soon! Add some to show off your UI 

## Contributors


Victor Ngigi 
Darwin Osteen 
Celestene Macheo
Enock Cheruiyot
Arnold Wanaina
Cloud Odhiambo

 #License
This project is licensed under the MIT License.

# Acknowledgements
React

Tailwind CSS

Boxicons

JSON Server

 Built with love and a whole lot of console.log().