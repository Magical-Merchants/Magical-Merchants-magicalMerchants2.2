//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Product = require('./models/Product')
const Category = require('./models/Category')
const Order = require('./models/Order')

//associations could go here!
Product.belongsToMany(Category, {through: 'Product_Category'})
Category.belongsToMany(Product, {through: 'Product_Category'})

User.hasMany(Order)
Order.belongsTo(User)
Order.belongsToMany(Product, {through: 'Order_Product'})
Product.belongsToMany(Order, {through: 'Order_Product'})

module.exports = {
  db,
  models: {
    User,
    Product,
    Category,
    Order,
  },
}
