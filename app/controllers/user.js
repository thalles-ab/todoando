 var users = [
	{_id:1, name:'Thalles', email:'thalles.batista@geen.com.br'},
	{_id:2, name:'Nathalia', email:'Nathalia@geen.com.br'},
	{_id:3, name:'Julio', email:'Julio@geen.com.br'},
	{_id:4, name:'Hugo', email:'Hugo@geen.com.br'}
 ];

 module.exports = function(){
	var controller = {};

	controller.createUser = function(req, res, next){
		console.log('A');
		next();
	};

	controller.listUser = function(req, res, next){
		res.json(users);
	};

	controller.getUser = function(req, res, next){
		var idUser = req.params.id;
		var user = users.filter(function(user){
			return user._id == idUser;
		})[0];
		user ? res.json(user) : res.status(404).send('Usuário não encontrado');
	};

 	return controller;
 }
