# Bike Rental Hub

## Student Information
- **Student Name:** Depesh Sikarwar
- **Roll Number:** 2502201530027
- **Assigned Problem Statement Number:** 07

## Project Description
Bike Rental Hub is a React-based web application for renting bikes online. Users can browse available bikes, filter them by type, view detailed information, rent bikes for a selected number of hours, and return them when done.

## Tech Stack
- React 19
- React Router v7
- Vite
- CSS

## Instructions to Install Dependencies and Run the Application

1. Clone the repository:
   ```
   git clone https://github.com/depeshsikarwar/depeshsikarwar-midsem-phase2.git
   ```

2. Navigate into the project directory:
   ```
   cd depeshsikarwar-midsem-phase2
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open the URL shown in the terminal (usually http://localhost:5173) in your browser.

## Features
- Home page showing total bikes, available bikes and rented bikes count
- Bike listing with filter by type (All, Scooter, Bike, Electric)
- Bike detail page with hours counter (1 to 12) and total rent calculation
- Rent and Return functionality
- Rented bikes page with total price per hour
- Reusable BikeCard component
- Dynamic routing with useParams

## Folder Structure
```
Assignment92/
├── public/
├── src/
│   ├── App.jsx           - Main component with routes and state
│   ├── App.css           - All the styles
│   ├── main.jsx          - Entry point
│   ├── bikes.js          - Bike data array
│   ├── BikeCard.jsx      - Reusable card component for a single bike
│   ├── BikeList.jsx      - Displays grid of bike cards
│   ├── BikeDetail.jsx    - Detail page for a single bike with hour selector
│   ├── Filters.jsx       - Dropdown filter by bike type
│   └── RentedBikes.jsx   - Shows all currently rented bikes
├── index.html
├── package.json
└── vite.config.js
```

## Pages and Routes
| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Dashboard with bike stats |
| `/bikes` | BikeList + Filters | Browse and filter all bikes |
| `/bikes/:id` | BikeDetail | View bike details, select hours, rent/return |
| `/rented` | RentedBikes | View all rented bikes with total hourly cost |
