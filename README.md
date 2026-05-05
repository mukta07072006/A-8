Sun Cart
A modern, high-performance e-commerce platform designed for a seamless shopping experience. Sun Cart bridges the gap between high-end UI design and robust backend functionality, ensuring users can browse, manage, and purchase products with ease.

🌐 Live URL
https://suncart-assignment-8.vercel.app/

🎯 Purpose
The primary goal of Sun Cart is to provide a scalable and secure shopping environment. It focuses on solving the fragmentation in online retail by offering a centralized dashboard for users to track orders, a responsive interface for mobile users, and a secure authentication layer to protect user data.

✨ Key Features
Secure Authentication: Integrated with Better-Auth for social (Google) and credential-based sign-ins.

Dynamic Product Catalog: Real-time product fetching and filtering based on categories.

Responsive UI/UX: Built with a mobile-first approach using Tailwind CSS for a fluid experience across all devices.

Interactive Shopping Cart: Persistent cart management allowing users to add, remove, and adjust quantities easily.

User Dashboard: A dedicated space for authenticated users to manage their profiles and view session details.

📦 Tech Stack & NPM Packages
This project leverages the latest web technologies to ensure speed and developer productivity:

Core Frameworks:

next: The React framework for production.

react: For building the user interface.

react-dom: Entry point to the DOM and server renderers.

Authentication:

better-auth: A comprehensive auth library for the server and client.

@better-fetch/fetch: A type-safe fetch wrapper used for session handling.

Styling & UI:

tailwindcss: A utility-first CSS framework for rapid UI development.

lucide-react: For clean, consistent iconography throughout the app.

framer-motion: (If applicable) For smooth animations and transitions.

Utilities:

clsx & tailwind-merge: For managing conditional CSS classes efficiently.

🚀 Getting Started
To run this project locally:

Clone the repository:

Bash
git clone https://github.com/your-username/sun-cart.git
Install dependencies:

Bash
npm install
Set up Environment Variables:
Create a .env.local file and add your BETTER_AUTH_SECRET and NEXT_PUBLIC_APP_URL.

Run the development server:

Bash
    npm run dev
    ```