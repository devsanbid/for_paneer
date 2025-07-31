const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

const sellerId = 2;
const token = generateToken(sellerId);

console.log('Generated token for seller ID 2:');
console.log(token);
console.log('\nTo use this token:');
console.log('1. Open browser console on the seller page');
console.log('2. Run: localStorage.setItem("token", "' + token + '")');
console.log('3. Refresh the page');