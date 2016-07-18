 module.exports = function(){
	var controller = {};
	controller.index = function(req, res, next){
		res.render('index', {nome: 'Express'});
	};
 	return controller;
 }
