const bcrypt = require('bcryptjs');
const { User } = require('../models');
const sequelize = require('../config/database');

const createTestSeller = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');

    const existingSeller = await User.findOne({
      where: { id: 2 }
    });

    if (existingSeller) {
      console.log('Seller with ID 2 already exists:');
      console.log('Email:', existingSeller.email);
      console.log('UserType:', existingSeller.userType);
      return;
    }

    const seller = await User.create({
      firstName: 'Test',
      lastName: 'Seller',
      email: 'seller@test.com',
      password: 'password123',
      userType: 'seller',
      isActive: true,
      isVerified: true
    });

    console.log('Test seller created successfully!');
    console.log('ID:', seller.id);
    console.log('Email: seller@test.com');
    console.log('Password: password123');
    console.log('UserType: seller');
    
  } catch (error) {
    console.error('Error creating test seller:', error);
  } finally {
    await sequelize.close();
    process.exit(0);
  }
};

createTestSeller();