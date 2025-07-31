const { sequelize, User, Review, Request } = require('../models');

const createTestReviews = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully');

    // Find existing users
    const seller = await User.findOne({ where: { email: 'seller@ecoswap.com' } });
    const buyer = await User.findOne({ where: { email: 'buyer@ecoswap.com' } });

    if (!seller || !buyer) {
      console.log('Please run the seed script first to create test users');
      process.exit(1);
    }

    console.log('Creating test reviews...');

    // Create some test reviews for the seller
    const testReviews = [
      {
        rating: 5,
        comment: 'Excellent seller! Fast delivery and great quality items.',
        reviewType: 'seller',
        buyerId: buyer.id,
        sellerId: seller.id,
        productId: null,
        orderId: null,
        isApproved: true
      },
      {
        rating: 4,
        comment: 'Good experience overall. Item was as described.',
        reviewType: 'seller',
        buyerId: buyer.id,
        sellerId: seller.id,
        productId: null,
        orderId: null,
        isApproved: true
      },
      {
        rating: 5,
        comment: 'Amazing seller! Highly recommend. Very professional.',
        reviewType: 'seller',
        buyerId: buyer.id,
        sellerId: seller.id,
        productId: null,
        orderId: null,
        isApproved: true
      },
      {
        rating: 3,
        comment: 'Item was okay but packaging could be better.',
        reviewType: 'seller',
        buyerId: buyer.id,
        sellerId: seller.id,
        productId: null,
        orderId: null,
        isApproved: true
      },
      {
        rating: 5,
        comment: 'Perfect transaction! Will definitely buy again.',
        reviewType: 'seller',
        buyerId: buyer.id,
        sellerId: seller.id,
        productId: null,
        orderId: null,
        isApproved: true
      }
    ];

    for (const reviewData of testReviews) {
      await Review.create(reviewData);
    }

    console.log(`Created ${testReviews.length} test reviews successfully!`);
    
    // Update seller's average rating
    const reviews = await Review.findAll({
      where: { sellerId: seller.id, isApproved: true }
    });
    
    const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
    await seller.update({ averageRating: averageRating.toFixed(2) });
    
    console.log(`Updated seller average rating to: ${averageRating.toFixed(2)}`);
    console.log('Test reviews creation completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error creating test reviews:', error);
    process.exit(1);
  }
};

createTestReviews();