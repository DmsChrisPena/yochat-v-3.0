app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

	$routeProvider.when("/profile", {
						templateUrl:"/views/partials/profile.html",
						controller: 'chrisCtrl'
						})
				  .when('/chat', {
						templateUrl:"/views/partials/chat.html",
						controller: 'chrisCtrl'
						})

				  .otherwise({redirectTo: "/chat"});

	$locationProvider.html5Mode({enabled: true, requireBase: false});

}]);