
var express = require('express');
var router = express.Router();

// Import burgers.js 
// var burger = require('../models/burger.js');
var models = require('../models');
var sequelizeConnection = models.sequelize;


router.get("/", function(req, res) {
	models.burgers.findAll({}).then(function(data) {
		var hbsObject = {
			burgers: data
		};
		// console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

//Create New Burger
router.post("/new", function(req, res) {
	models.burgers.create({
        burger_name: req.body.burger_name,
        devoured: false
    }).then(function() {
        res.redirect("/");
    })
});	

// // Eat The Burger
router.post("/eat/:id", function(req,res) {
	models.burgers.findById(req.params.id).then(function(data) {
        data.update({
            devoured: true
        }).then(function() {
            res.redirect("/");
        })
    })
});

// Export router
module.exports = router;