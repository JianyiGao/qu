'use strict';

/**
 * Module dependencies
 */
var bookingsPolicy = require('../policies/bookings.server.policy'),
  bookings = require('../controllers/bookings.server.controller');

/**
 * route to list down all the bookings done my user.
 * Only if user is logged in.
 *
 * @param  {[type]} req
 * @param  {[type]} res
 * @return {[type]}
 */

module.exports = function (app) {
    // Booking collection routes
  app.route('/api/bookings-user').all(bookingsPolicy.isAllowed)
    .get(bookings.listUser)
    .post(bookings.create);

  app.route('/api/bookings-host').all(bookingsPolicy.isAllowed)
    .get(bookings.listHost);

    // Single booking routes
  app.route('/api/bookings-user/:bookingId').all(bookingsPolicy.isAllowed)
    .get(bookings.read)
    .put(bookings.update)
    .delete(bookings.delete);

  app.route('/api/bookings-host/:bookingId').all(bookingsPolicy.isAllowed)
    .get(bookings.read)
    .put(bookings.update)
    .delete(bookings.delete);

    // Finish by binding the booking middleware
  app.param('bookingId', bookings.bookingByID);
};
