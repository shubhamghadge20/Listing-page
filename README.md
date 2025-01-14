# **Product Listing Application**  

This project is a React-based product listing application that allows users to view, search, filter, and paginate through a list of products fetched from an external API. It uses Bootstrap for styling and React Context for state management.  

---

## **Features**  

- **Search Bar**: Allows users to search for products by name.  
- **Filter Sidebar**: Users can filter products by category.  
- **Pagination**: Displays a limited number of products per page with navigation controls.  
- **Responsive Design**: Ensures a seamless user experience on all screen sizes.  
- **API Integration**: Fetches product data from a public API.  

---

## **Technologies Used**  

- **React**: Frontend library for building user interfaces.  
- **React-Bootstrap**: For responsive and styled UI components.  
- **React Icons**: For adding icons to the UI.  
- **Axios**: For making API requests.  

---

## **Setup and Installation**  

1. Clone the repository:
```bash
   git clone https://github.com/your-repo-url
 ```
```bash
   cd product-listing-app
``` 
2. Install dependencies:  
```bash
npm install
```  
3. Start the development server:
```bash
npm start
```
4.Open your browser and navigate to http://localhost:3000 to view the app.  
# **Usage**

## **View Products**
- Browse the grid of products displayed.

## **Search Products**
- Enter a keyword in the search bar to filter products by name.

## **Filter by Category**
- Use the dropdown in the sidebar to select a specific category.

## **Pagination**
- Use the pagination controls at the bottom to navigate through pages of products.

---

# **Documentation**

## **Code Structure**

### **`src/components`**

- **`ProductCard.js`**: Renders individual product cards with details like image, name, price, and rating.
- **`ProductGrid.js`**: Displays products in a grid layout with responsiveness.
- **`FilterSidebar.js`**: Provides category-based filtering functionality.
- **`SearchBar.js`**: Contains the search bar for filtering products by name.
- **`Pagination.js`**: Handles pagination for navigating through products.

### **`src/context`**

- **`ProductContext.js`**: Manages global state for products, search term, filters, and pagination using React Context API.

### **`src/services`**

- **`api.js`**: Contains the function to fetch products from the external API (`https://fakestoreapi.com/products`).

### **`src/App.js`**

- Main application file that integrates all components and provides the layout.

---

## **Fetching and Rendering Product Data**

### **Fetching Data**
- The `fetchProducts` function in `api.js` uses Axios to retrieve data from the API.
- Data is formatted to include:
  - `id`
  - `name`
  - `price`
  - `rating`
  - `image`
  - `category`

### **State Management**
- The `ProductContext` manages the product data and state for:
  - Filters
  - Search
  - Pagination
- Provides methods to filter products based on search terms and categories.

### **Rendering Products**
- The `ProductGrid` component receives filtered and paginated data from the context.
- Each product is passed to the `ProductCard` component, which displays the product details.

