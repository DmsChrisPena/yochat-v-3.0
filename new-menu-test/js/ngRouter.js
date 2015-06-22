app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

	$routeProvider.when("/profile", {
						templateUrl:"http://localhost:8888/codingfs/weekend1/yoChatv3/views/partials/profile.html",
						controller: 'chrisCtrl'
						});
	$routeProvider.when('/chat', {
						templateUrl:"http://localhost:8888/codingfs/weekend1/yoChatv3/views/partials/chat.html",
						controller: 'chrisCtrl'
						});

	$routeProvider.otherwise({redirectTo: "/"});

	$locationProvider.html5Mode({enabled: true, requireBase: false});

}]);