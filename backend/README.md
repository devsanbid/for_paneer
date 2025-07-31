# EcoSwap Backend API

A comprehensive backend API for the EcoSwap buy/sell marketplace platform built with Express.js, Sequelize, and PostgreSQL.

## Features

- **User Management**: Registration, authentication, and profile management for buyers, sellers, and admins
- **Product Management**: CRUD operations for products with image upload support
- **Order Management**: Complete order processing workflow
- **Review System**: Product and seller rating/review system
- **Admin Panel**: Administrative functions for managing users, products, and analytics
- **File Upload**: Image upload with Multer for products and profiles
- **Authentication**: JWT-based authentication with role-based access control

## Tech Stack

- **Framework**: Express.js
- **Database**: PostgreSQL with Sequelize ORM
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer
- **Validation**: Express Validator
- **Password Hashing**: bcryptjs

## Project Structure

```
backend/
├── config/
│   └── database.js          # Database configuration
├── controllers/
│   ├── authController.js    # Authentication logic
│   ├── userController.js    # User management
│   ├── productController.js # Product management
│   ├── orderController.js   # Order processing
│   ├── reviewController.js  # Review system
│   └── adminController.js   # Admin functions
├── middleware/
│   ├── auth.js             # Authentication middleware
│   └── upload.js           # File upload middleware
├── models/
│   ├── index.js            # Model associations
│   ├── User.js             # User model
│   ├── Product.js          # Product model
│   ├── Category.js         # Category model
│   ├── ProductImage.js     # Product image model
│   ├── Order.js            # Order model
│   ├── OrderItem.js        # Order item model
│   └── Review.js           # Review model
├── routes/
│   ├── auth.js             # Authentication routes
│   ├── user.js             # User routes
│   ├── product.js          # Product routes
│   ├── order.js            # Order routes
│   ├── review.js           # Review routes
│   └── admin.js            # Admin routes
├── seeders/
│   └── seed.js             # Database seeder
├── uploads/                # File upload directory
├── .env                    # Environment variables
├── package.json            # Dependencies
└── server.js              # Main server file
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- Bun package manager

### Installation

1. **Install dependencies**:
   ```bash
   bun install
   ```

2. **Database Setup**:
   - Create a PostgreSQL database named `shop`
   - Update database credentials in `.env` file if needed

3. **Environment Variables**:
   - Copy `.env` file and update values as needed
   - Make sure to change JWT_SECRET in production

4. **Database Migration and Seeding**:
   ```bash
   bun run seed
   ```

5. **Start the server**:
   ```bash
   # Development mode
   bun run dev
   
   # Production mode
   bun start
   ```

The server will start on `http://localhost:5000`

## Default Accounts

After seeding, you can use these accounts:

- **Admin**: admin@ecoswap.com / admin123
- **Seller**: seller@ecoswap.com / seller123
- **Buyer**: buyer@ecoswap.com / buyer123

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Users
- `GET /api/users/search` - Search users
- `GET /api/users/stats` - Get user statistics
- `GET /api/users/:id` - Get user profile by ID
- `PUT /api/users/profile` - Update user profile
- `PUT /api/users/change-password` - Change password
- `PUT /api/users/deactivate` - Deactivate account

### Products
- `GET /api/products` - Get all products (with filters)
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/seller` - Get seller's products
- `POST /api/products` - Create new product (seller only)
- `PUT /api/products/:id` - Update product (seller only)
- `DELETE /api/products/:id` - Delete product (seller only)

### Orders
- `POST /api/orders` - Create new order (buyer only)
- `GET /api/orders/buyer` - Get buyer's orders
- `GET /api/orders/seller` - Get seller's orders
- `GET /api/orders/:id` - Get order by ID
- `PUT /api/orders/:id/status` - Update order status (seller/admin)

### Reviews
- `POST /api/reviews` - Create review (buyer only)
- `GET /api/reviews/user` - Get user's reviews
- `GET /api/reviews/product/:productId` - Get product reviews
- `GET /api/reviews/seller/:sellerId` - Get seller reviews
- `PUT /api/reviews/:id` - Update review (buyer only)
- `DELETE /api/reviews/:id` - Delete review (buyer only)

### Admin
- `GET /api/admin/dashboard` - Dashboard statistics
- `GET /api/admin/users` - Get all users
- `PUT /api/admin/users/:id/status` - Update user status
- `GET /api/admin/products` - Get all products
- `PUT /api/admin/products/:id/status` - Update product status
- `GET /api/admin/orders` - Get all orders
- `GET /api/admin/analytics` - Get analytics data
- `GET /api/admin/categories` - Get categories
- `POST /api/admin/categories` - Create category
- `PUT /api/admin/categories/:id` - Update category

## User Types

1. **Buyer**: Can browse products, place orders, and leave reviews
2. **Seller**: Can list products, manage inventory, and fulfill orders
3. **Admin**: Can manage all users, products, orders, and system settings

## File Upload

- Product images: `/uploads/products/`
- Profile images: `/uploads/profiles/`
- Supported formats: JPEG, JPG, PNG, GIF, WebP
- Max file size: 5MB
- Max files per product: 10

## Error Handling

The API returns consistent error responses:

```json
{
  "message": "Error description",
  "errors": ["Detailed validation errors"]
}
```

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Role-based access control
- Input validation and sanitization
- File upload restrictions
- CORS enabled

## Development

- Use `bun run dev` for development with auto-reload
- Database changes require running the seeder again
- Check logs for debugging information

## Production Deployment

1. Set `NODE_ENV=production`
2. Update database credentials
3. Change JWT_SECRET to a secure random string
4. Set up proper file upload storage (AWS S3, etc.)
5. Configure reverse proxy (Nginx)
6. Set up SSL certificates

## Contributing

1. Follow the existing code structure
2. Add proper validation for new endpoints
3. Include error handling
4. Update documentation for new features