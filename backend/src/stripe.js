/* const stripe = require('stripe')
const config = stripe(process.env.STRIPE_SECRET)
module.exports = config
 */

// we can write it in one line
module.exports = require('stripe')(process.env.STRIPE_SECRET);
