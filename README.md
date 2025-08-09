This project implements a responsive authentication flow with Next.js, TypeScript, and SCSS Modules. It features a login page with phone number validation and a dashboard that displays user information after successful authentication.

Features
✅ Phone number validation (Iranian format: 09xxxxxxxxx)

✅ User authentication with random user API

✅ Protected routes with automatic redirection

✅ Responsive design with SCSS Modules

✅ Reusable UI components (Button, Input)

✅ Persistent user session with localStorage

✅ Loading states and error handling

Tech Stack
Framework: Next.js (App Router)

Language: TypeScript

Styling: SCSS Modules with nesting support

Component Library: Custom reusable components

State Management: React hooks

Getting Started
Prerequisites
Node.js (v18+)

npm (v9+)

Installation
Clone the repository:

bash
git clone https://github.com/your-username/auth-dashboard-flow.git
cd auth-dashboard-flow
Install dependencies:

bash
npm install
# or
yarn install
Run the development server:

bash
npm run dev
# or
yarn dev
Open your browser at:

text
- Network:      http://192.168.34.169:3000

Production Build
bash
npm run build
npm start
API Integration
The authentication flow uses the following API:

Endpoint: https://randomuser.me/api/?results=1&nat=us

Method: GET

Purpose: Fetch random user data for authentication simulation
