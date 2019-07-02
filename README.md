# BRUNCH CLUB Group Project
___

For this group project, we were tasked with creating a functioning app that would use Node and an Express Web Server, backed by a SQL and Sequelize created database, using GET and POST routes to retreive and create data, actively deployed on heroku, and utilizing a technology that we haven't gone over in class, which was the Passport addition for the users login information.  We also had to use a MVC paradigm for our folder structure and have a polished front end UI.

Starting with the base code provided, we updated the configuration file to match our local information, and also utilized .gitignore and .env files for the JawsDB heroku add-on user information as well.  The same data from JawsDB was used to connect to a MySQL database so that information added on the site was also updated in the database.

![brunch-club-mysql-users](public/stylesheets/brunch-club-mysql-users.jpg)
___

![brunch-club-mysql-events](public/stylesheets/brunch-club-mysql-events.jpg)
___

Our site used a bootstrap layout for the polished front end user interface, and navigating to the Brunch Club site will first bring the user to a login page, where the user is able to create an account or login with an existing account.  This page, along with the restaurant/reviews page was handled by Matt S. and Rick in our group, and a number of bugs arose here once we combined both of the html and API routes pages from Ryan and I's events page.  A few routes were being called more than once, which led to redirect errors.  Those were finally resolved with Bryan and Aaron's help, but on one of the heroku links submitted, the login page will need to be refreshed so that the user can log in and move to the reviews/blog page.  That issue did not show up running the app locally, but would show up after posted to heroku, so who knows?  Other than those couple bugs, the users and passwords will be saved to the SQL database, and the passwords are hashed for the users protection.  The user is also able to see that they are correctly logged in on the top of the each page as well.

![brunch-club-login](public/stylesheets/brunch-club-login.jpg)
___

Moving to the reviews page, and throughout the site, the user is able to add restaurants to the database, create reviews for brunches at those restaurants, and then also are able to edit and delete only their reviews.  Those reviews and restaurants added to the site by the users are saved and stored to the SQL database.

![brunch-club-reviews](public/stylesheets/brunch-club-reviews.jpg)
___

![brunch-club-restaurants](public/stylesheets/brunch-club-restaurants.jpg)
___

![brunch-club-one-review](public/stylesheets/brunch-club-one-review.jpg)
___

Then navigating to the events page, the user is first able to see all upcoming events, as well as the next three events the are coming up.  The user can post new events to the page through the 'Add Event' link, which are also saved to the database.  Ryan in our group was able to include a RSVP button that would open a modal box to add the name and email of the user, and then add that person to the Attending: list.  That functionality was working properly on our events branch, but was not able to be added to the hosted link, however, a screenshot of the working RSVP button fuctionality is provided below, and can be added in the future.  Some of the bugs encountered by Ryan and I coding the events page was that each time an event was added, the values were saved and added to the database, but also a blank array was created as well.  This was solved with Bryan's help where there were two POST actions, one on our form and one in our API route that were creating both arrays.  Then also, there was a few bugs with combining the routes and views pages, as Ryan and I had used handlebars to link to our html pages, and Rick and Matt S. did not.

___

![brunch-club-events](public/stylesheets/brunch-club-events.jpg)

___
![brunch-club-add-event](public/stylesheets/brunch-club-add-event.jpg)

___
![brunch-club-event-rsvp](public/stylesheets/brunch-club-event-rsvp.jpg)

___

In the end, this app was very enjoyable to create, and in the future, is a site that I would like to continue moving forward with and adding functionality to.  This is mainly because a focused app strictly on brunch is something I think people would actually be use, and also a site basically created by user reviews and events can be trusted for its honesty.  Also, further expansion of teh site could include restaurants being able to sponsor events, and allowing users to save and/or share restaurants or events.

## Built With

* [HTML5]
* [CSS3]
* [JavaScript]
* [jQuery]
* [Node JS]
* [Express]
* [Express Handlebars](https://www.npmjs.com/package/express-handlebars) - Handlebars View Engine
* [Express Session](https://www.npmjs.com/package/express-session) - Log In/Sign Up
* [MySQL]
* [Sequelize](https://www.npmjs.com/package/sequelize) - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server
* [Heroku](https://salty-tor-68629.herokuapp.com/events) - Hosted Project Site
* [Passport](http://www.passportjs.org/) - Passport is authentication middleware for Node.js
* [MVC](https://www.tutorialsteacher.com/mvc/mvc-folder-structure) - Folder framework used


## Authors

* **Matt Williams** - *Initial work* - [M Williams Portfolio](https://mattwills09.github.io/portfolio.html)

See also the list of Contributors who participated in this project:

## Contributors

[Matthew Senso]
[Rick Nicolai]
[Ryan Jamison]
