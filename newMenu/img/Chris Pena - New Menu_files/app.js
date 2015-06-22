var app = angular.module("chrisApp", ["ngRoute", "firebase"]);

app.controller("chrisCtrl", ["$scope", "$firebaseArray", "$firebaseObject", 
	function($scope, $firebaseArray, $firebaseObject) {
		//Please don't steal my FireBase :(
		var ref = new Firebase("https://yoboredprofile.firebaseio.com");
		$scope.messages = $firebaseArray(ref);
		$scope.myName = "";
		$scope.myMessage = "";

		//Add Message Enter
		$scope.addMessage = function(e) {

		  if (e.keyCode === 13 && $scope.myMessage) {
		  	e.preventDefault();

		    var myName = $scope.myName;
		    var myMessage = $scope.myMessage;

		    $scope.messages.$add({ from: myName, body: myMessage});

		    $scope.myMessage = "";
		  }
		}

		//Click Add Message
		$scope.clickAddmessage = function(e) {

		    var myName = $scope.myName;
		    var myMessage = $scope.myMessage;
		    // var myMessage = document.getElementById("recognition-input").value;



		    if(document.getElementById("inlineRadio1").checked === false) {
		    	var myMessage = document.getElementById("recognition-input").value;
		    } else {
		    	var myMessage = $scope.myMessage;
		    }



		    // Username must be longer than 5 characters
		    if(myName.length <= 5) {
		    	alert("Username must be longer than 5 characters")
		    	return;
		    } else {
		    $scope.messages.$add({ from: myName, body: myMessage});

		    $scope.myMessage = "";
		    document.getElementById("recognition-input").value = "";
		    }
		}

		//Delete Message
		var list = $firebaseArray(ref);
		var listIndexnumber = list.$index;
		console.log(list);

		$scope.deleteMessage = function(e) {
			var item = list[this.$index];
			list.$remove(item).then(function(ref) {
			  ref.key() === item.$id;
			});
		}
	}
]);



$("#inlineRadio1").click(function(){
	document.getElementById("typed-message").removeAttribute("disabled");
	document.getElementById("recognition-input").setAttribute("disabled", "");
	document.getElementById("recognition-input").value = "";
});

$("#inlineRadio2").click(function(){
	document.getElementById("typed-message").setAttribute("disabled", "");
	document.getElementById("recognition-input").removeAttribute("disabled");
	document.getElementById("typed-message").value = "";
});

$("#recognition-submit").click(function(){
	document.getElementById("typed-message").setAttribute("disabled", "");
	document.getElementById("recognition-input").removeAttribute("disabled");
	document.getElementById("typed-message").value = "";
});



var themes = {
    "default": "http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css",
    "cerulean" : "http://bootswatch.com/cerulean/bootstrap.min.css",
    "cosmo" : "http://bootswatch.com/cosmo/bootstrap.min.css",
    "cyborg" : "http://bootswatch.com/cyborg/bootstrap.min.css",
    "flatly" : "http://bootswatch.com/flatly/bootstrap.min.css",
    "journal" : "http://bootswatch.com/journal/bootstrap.min.css",
    "readable" : "http://bootswatch.com/readable/bootstrap.min.css",
    "simplex" : "http://bootswatch.com/simplex/bootstrap.min.css",
    "slate" : "http://bootswatch.com/slate/bootstrap.min.css",
    "spacelab" : "http://bootswatch.com/spacelab/bootstrap.min.css",
    "united" : "http://bootswatch.com/united/bootstrap.min.css",
    "paper" : "http://bootswatch.com/paper/bootstrap.min.css"
}
$(function(){
   var themesheet = $('<link href="'+themes['flatly']+'" rel="stylesheet" />');
    themesheet.appendTo('head');
    $('.theme-link').click(function(){
       var themeurl = themes[$(this).attr('data-theme')]; 
        themesheet.attr('href',themeurl);
    });
});


