# Sequelized-Burger

# :hamburger: :fries: Sequelized-Burger

## Summary

• Welcome to Bob's Burger, order your burger from our menu of the day or create your own. Once you finish ordering your burger, you can enjoy your meal by clicking devour it. Enjoys your meal!!!

## Live Links


## Technologies Used

• JavaScript

• jQuery

• MySQL

• node.js

• Express.js

• Handlebars

• Sequelize

• HTML

• Bootstrap

• MVC design pattern

## Execute

Follow the steps below to interact with this site locally using the example data or your own:

1. You can use the sample database inside the db folder or create your own database

2. Create a table to store all the information (see below) inside the database

	• id: an auto incrementing int that serves as the primary key

	• burger_name: a string

	• devoured: a boolean

	• date: a TIMESTAMP

3. Clone this repository with git clone https://github.com/yenla/Sequelized-Burger.git 

4. Install modules with npm install in your terminal.

5. Inside the config.json change the password of the database to your own password

6. Run node server.js.

4. Go to localhost:3000 in your web browser to interact with the site

## Example code

• Below is example code on how to create your route with sequlize

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

