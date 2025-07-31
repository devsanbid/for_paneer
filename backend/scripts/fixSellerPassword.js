const bcrypt = require('bcryptjs');
const { User } = require('../models');
const sequelize = require('../config/database');

const fixSellerPassword = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');

    const seller = await User.findOne({
      where: { email: 'seller@gmail.com' }
    });

    if (!seller) {
      console.log('Seller not found.');
      return;
    }

    console.log('Current password:', seller.password);
    
    if (seller.password === '@Sandesh55') {
      console.log('Fixing unhashed password...');
      seller.password = '@Sandesh55';
      await seller.save();
      console.log('Password has been properly hashed!');
    } else {
      console.log('Password appears to already be hashed.');
    }
    
  } catch (error) {
    console.error('Error fixing seller password:', error);
  } finally {
    await sequelize.close();
    process.exit(0);
  }
};

fixSellerPassword();