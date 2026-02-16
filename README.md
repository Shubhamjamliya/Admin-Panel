# Standalone Admin Panel

This folder contains the complete Admin Panel extracted from the Appzeto project. It is designed to be easily integrated into or used as a base for other projects.

## Features Included
- Full Admin Dashboard
- User & Vendor Management
- Booking & Service Catalog Management
- Payment & Settlement Systems
- Notification Service Integration
- Settings & Role-based Access Control

## Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Configuration:**
   Update the `.env` file with your API base URL and other credentials:
   ```env
   VITE_API_BASE_URL=your_api_url
   ...
   ```

3. **Run Locally:**
   ```bash
   npm run dev
   ```

4. **Build for Production:**
   ```bash
   npm run build
   ```

## Project Structure
- `src/modules/admin`: Contains all admin-specific pages and logic.
- `src/components`: Shared UI components used by the admin panel.
- `src/routes`: Configured to boot directly into the Admin routes.
- `src/App.jsx`: Main entry point with basic providers (Socket, City, etc.).

## Note
This is a standalone Vite project. Ensure your backend provides the necessary endpoints for the Admin services to function correctly.
