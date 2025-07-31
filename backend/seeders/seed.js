const { sequelize, User, Category } = require('../models');

const categories = [
  { name: 'Vases & Pottery', description: 'Beautiful vases and pottery items for home decoration' },
  { name: 'Lighting', description: 'Lamps, chandeliers, and other lighting fixtures' },
  { name: 'Wall Art', description: 'Paintings, prints, and wall decorations' },
  { name: 'Furniture', description: 'Tables, chairs, sofas, and other furniture pieces' },
  { name: 'Textiles', description: 'Curtains, rugs, pillows, and fabric items' },
  { name: 'Mirrors', description: 'Decorative and functional mirrors' },
  { name: 'Sculptures', description: 'Art sculptures and decorative figurines' },
  { name: 'Candles & Holders', description: 'Candles, candle holders, and aromatherapy items' },
  { name: 'Plants & Planters', description: 'Indoor plants and decorative planters' },
  { name: 'Storage & Organization', description: 'Baskets, boxes, and storage solutions' },
  { name: 'Kitchen Decor', description: 'Decorative items for kitchen and dining' },
  { name: 'Vintage Collectibles', description: 'Antique and vintage collectible items' }
];

const seedDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully');

    await sequelize.sync({ force: true });
    console.log('Database synchronized');

    console.log('Seeding categories...');
    for (const category of categories) {
      await Category.create(category);
    }
    console.log('Categories seeded successfully');

    console.log('Creating admin user...');
    await User.create({
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@ecoswap.com',
      password: 'admin123',
      userType: 'admin',
      isActive: true,
      isVerified: true
    });
    console.log('Admin user created successfully');

    console.log('Creating sample seller...');
    await User.create({
      firstName: 'John',
      lastName: 'Seller',
      email: 'seller@ecoswap.com',
      password: 'seller123',
      userType: 'seller',
      isActive: true,
      isVerified: true,
      phone: '+1234567890',
      address: '123 Seller Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001'
    });
    console.log('Sample seller created successfully');

    console.log('Creating sample buyer...');
    await User.create({
      firstName: 'Jane',
      lastName: 'Buyer',
      email: 'buyer@ecoswap.com',
      password: 'buyer123',
      userType: 'buyer',
      isActive: true,
      isVerified: true,
      phone: '+1234567891',
      address: '456 Buyer Avenue',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001'
    });
    console.log('Sample buyer created successfully');

    console.log('Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();