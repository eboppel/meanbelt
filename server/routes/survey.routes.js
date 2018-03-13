const router = require('express').Router();
const surveyController = require('./../controllers/surveys');


module.exports = router
	.get('/', surveyController.findAll)
	.post('/', surveyController.create)
	.get('/:id', surveyController.findOne)
	.post('/:id', surveyController.vote)
	.delete('/:id', surveyController.destroy);