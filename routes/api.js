// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({ site_id: process.env.TURBO_APP_ID })
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const router = vertex.router()

const controllers = require('../controllers')

// const Player = require('../models/Player')
// const Team = require('../models/Team')

router.get('/:resource', (req, res) => {
	const resource = req.params.resource
	const controller = controllers[resource]
	const filters = req.query

	if (controller == null) {
		res.json({
			confirmation: 'fail',
			massage: 'Invalid Resource'
		})
		return
	}
	controller.get(filters)
		.then(data => {
			res.json({
				confirmation: 'success',
				data: data
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: err.message
			})
		})
})

router.get('/:resource/:id', (req, res) => {
	const resource = req.params.resource
	const id = req.params.id

	const controller = controllers[resource]
	if (controller == null) {
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource'
		})
		return
	}
	controller.getById(id)
		.then(data => {
			res.json({
				confirmation: 'success',
				data: data
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: err.message
			})
		})
})

router.post('/:resource', (req, res) => {
	const resource = req.params.resource
	const controller = controllers[resource]
	if (controller == null) {
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource'
		})
		return
	}
	controller.post(req.body)
	.then(data => {
		res.json({
			confirmation: 'success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			massage: err.message
		})
	})
})

router.put('/:resource/:id', (req, res) => {
	const resource = req.params.resource
	const controller = controllers[resource]
	if (controller == null) {
		res.json({
			confirmation: 'fail',
			massage: 'Invalid Resource'
		})
		return
	}

	controller.put(req.params.id, req.body)
	.then(data => {
		res.json({
			confirmation: 'success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})

})

router.delete('/:resource/:id', (req, res) => {
	const resource = req.params.resource
	const controller = controllers[resource]
	if (controller == null) {
		res.json({
			confirmation: 'fail',
			massage: 'Invalid Resource'
		})
		return
	}

	controller.delete(req.params.id)
	.then(data => {
		res.json({
			confirmation: 'success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

/*  This is a sample API route. */

// router.get('/:resource', (req, res) => {
// 	res.json({
// 		confirmation: 'success',
// 		resource: req.params.resource,
// 		query: req.query // from the url query string
// 	})
// })

// router.get('/:resource/:id', (req, res) => {
// 	res.json({
// 		confirmation: 'success',
// 		resource: req.params.resource,
// 		id: req.params.id,
// 		query: req.query // from the url query string
// 	})
// })
// const players = [
// 	{firstName: "eli", lastName:"manning", position:"qb", age:31, team: "nyg"},
// 	{firstName: "sid", lastName:"souza", position:"qb", age:24, team: "nyg"},
// 	{firstName: "day", lastName:"souza", position:"bv", age:17, team: "sas"}
// ]
// const teams = [
// 	{name: "giants", city: "new york", coference:"ngc"},
// 	{name: "patriots", city: "new york", coference:"ndagc"},
// 	{name: "giants", city: "new york", coference:"ngdasdc"}
// ]

// router.get('/team', (req, res) => {
// 	Team.find(null)
// 	.then(data => {
// 		res.json({
// 			confirmation: 'success',
// 			data: data
// 		})
// 	})
// 	.catch(err => {
// 		res.json({
// 			confirmation: 'fail',
// 			message: err.message
// 		})
// 	})
// })

// router.get('/player', (req, res) => {
// 	Player.find(null)
// 	.then(data => {
// 		res.json({
// 			confirmation: 'success',
// 			data: data
// 		})
// 	})
// 	.catch(err => {
// 		res.json({
// 			confirmation: 'fail',
// 			message: err.message
// 		})
// 	})
// })

// router.get('/:resource', (req, res) => {
// 	const resource = req.params.resource
// 	if(resource == 'team') {
// 		res.json({
// 			confirmation: 'success',
// 			data: teams
// 		})
// 	} else {
// 		res.json({
// 			confirmation: 'success',
// 			data: players
// 		})
// 	}
// })

// router.get('/test', (req, res) => {
// 	res.json({
// 		confirmation: 'success',
// 		data: players
// 	})
// })

// router.get('/team', (req, res) => {
// 	res.json({
// 		confirmation: 'success',
// 		data: teams
// 	})
// })

module.exports = router
