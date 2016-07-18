module.exports = function(app){
	var controller = app.controllers.user;
	app.get('/users', controller.listUser);
	app.get('/users/:id', controller.getUser);
}