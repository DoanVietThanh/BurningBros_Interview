# Infinite Scrolling Product List with Search

This project is a **React** (or **Vue**) application built with **TypeScript** that implements an infinite scrolling list of products, along with a search functionality. The product data is fetched from a public API, and the application is designed to handle state updates efficiently.

## Author

- Đoàn Viết Thanh [https://www.facebook.com/fullstack2k3/]

## Deployment

- Deployed on Vercel [https://burning-bros-interview.vercel.app/]

## Features

- **Infinite Scrolling:** Fetches the next 20 products when the user scrolls to the end of the list.
- **Product Display:** Lists products with essential information such as name, price, and image.
- **Search Functionality:** Allows users to search for products by name, with results dynamically updating as the user types.
- **API Integration:** Fetches product data from the [DummyJSON Product API](https://dummyjson.com/docs/products).
- **TypeScript:** Ensures type safety and code robustness.

## Requirements

- **Node.js** (version 14 or above)
- **npm** (for package management)

## Getting Started

### Installation

1. **Clone the repository:**

   - git clone https://github.com/DoanVietThanh/BurningBros_Interview

2. **Install dependencies:**

   - npm install

### Running the Application

1. **Start the development server:**

   - npm start

2. **Open your browser** and navigate to `http://localhost:5173` to view the application.

### API Integration

- **Search:** Integrates with the `/products/search` endpoint to fetch and display products based on user input.

### Code Structure

- **`src/actions/`**: Utility API actions.
- **`src/components/`**: Contains React (or Vue) components.
- **`src/constants/`**: Store the constants in the application.
- **`src/layouts/`**: Create the layouts in the application.
- **`src/lib/`**: Created automatically from shadcn UI, that help to merge class.
- **`src/pages/`**: Contains all pages in the application.
- **`src/routes/`**: Show routes in the application.
- **`src/types/`**: TypeScript interfaces and types.

### Future Enhancements

- Scroll to top button
- Implement error handling and loading states.
- Add unit tests for components and hooks.
- Improve UI/UX with better styling and animations.
