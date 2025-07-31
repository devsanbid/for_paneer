const { sequelize } = require('../models');

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully');
    
    await sequelize.sync({ force: false, alter: true });
    console.log('Database synchronized with alter: true');
    
    await sequelize.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error syncing database:', error);
    process.exit(1);
  }
};

syncDatabase();