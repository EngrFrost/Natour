const express = require('express');

const tourRouter = express.Router();
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  aliasTopTours,
} = require('../controllers/tourController');

// tourRouter.param('id', checkID);

tourRouter.route('/top-5-cheap').get(aliasTopTours, getAllTours);
tourRouter.route('/').get(getAllTours).post(createTour);
tourRouter.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = tourRouter;
