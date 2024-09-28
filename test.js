const mongoose = require('mongoose');
const Order = require('./model/ordermodel'); // Adjust the path according to your project structure

async function testOrder() {
    try {
        // Connect to MongoDB
        await mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        // Test Order creation
        const order = new Order({
            userId: '66b8839c687e4006877501b3', // Replace with a valid User ID from your database
            items: [
                {
                    productId: '66ba1229b242bc87d3f21b35', // Replace with a valid Product ID from your database
                    quantity: 2,
                    price: 20
                }
            ],
            totalAmount: 90
        });

        await order.save();
        console.log('Order saved successfully:', order);

        // Disconnect from MongoDB after the test
        await mongoose.disconnect();
    } catch (err) {
        console.error('Error saving order:', err.message);
        await mongoose.disconnect();
    }
}

testOrder();
