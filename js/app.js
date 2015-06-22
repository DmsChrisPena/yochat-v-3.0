var app = angular.module("chrisApp", ["ngRoute", "firebase"]);

app.controller("chrisCtrl", ["$scope", "$firebaseArray", "$firebaseObject", 
	function($scope, $firebaseArray, $firebaseObject) {
		//Please don't steal my FireBase :(
		var ref = new Firebase("https://yoboredprofile.firebaseio.com");
		$scope.messages = $firebaseArray(ref);
		$scope.myName = "";
		$scope.myMessage = "";
		$scope.yourName = "";
		$scope.myImage = "";
		$scope.howMany = 5;

		//Add Message Enter
		$scope.addMessage = function(e) {

		  if (e.keyCode === 13 && $scope.myMessage) {

		  	e.preventDefault();

		    var myName = $scope.myName;
		    var myMessage = $scope.myMessage;
		    var myImage = $scope.myImage;

		    myImage = "img/no-image.png";

		    $scope.messages.$add({ from: myName, body: myMessage, image: myImage});

		    $scope.myMessage = "";


		    var autoScroll = document.getElementById('autoScrollToggle').checked;
		    if(autoScroll === true) {
		    	function updateScroll(){
		    	    var element = document.getElementById("scrollBottomDiv");
		    	    element.scrollTop = element.scrollHeight;
		    	    console.log("Something");
		    	}
		    	setTimeout("updateScroll()",250);
		    }
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
		    myImage = "img/no-image.png";
		    $scope.messages.$add({ from: myName, body: myMessage, image: myImage});

		    $scope.myMessage = "";
		    document.getElementById("recognition-input").value = "";
		    }
		}

		//Shuffles Arrays
		function shuffle(o){
		    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		    return o;
		}

		$scope.randomMessage = function(e) {

			document.getElementById("typed-message").focus();

		    var myName = $scope.myName;
		    var myMessage = $scope.myMessage;
		    var myImage = $scope.myImage;
		    var	randomName = ["YoloSwag420", "Chris Pena", "Hawk Hill", "Lady Gaga", "Justin Bieber", "Timtastic", "Matt", "DragonSlayer69"];
		    var	randomMessage = ["Meh Odd Future selvage, Austin polaroid butcher gluten-free. Pickled farm-to-table polaroid flannel put a bird on it DIY.",
		    					 "Pour-over readymade Marfa, banjo banh mi quinoa Intelligentsia retro yr kitsch before",
		    					 "fixie blog tote bag keytar, deep v occupy tofu viral American Apparel master cleanse",
		    					 "Tofu pug mumblecore chia umami Helvetica. Flexitarian iPhone food truck Portland DIY, pop-up ",
		    					 " Dreamcatcher beard chillwave, Kickstarter art party ennui iPhone Echo Park lomo four loko PBR&B street art ",
		    					 "Pinterest banh mi small batch. Cardigan Thundercats mustache, salvia crucifix ugh migas Bushwick photo",
		    					 "Pour-over readymade Marfa, banjo banh mi quinoa Intelligentsia retro yr kitsch before",
		    					 " Godard meggings iPhone banjo small batch. Trust fund mlkshk PBR brunch."];
		    var	randomImage = ["img/chrisPena.jpg", "img/jasmine.jpg", "img/matthew.jpg", "img/frankPena.jpg", "img/tristan.jpg", "img/tricia.jpg", "img/danielKinard.jpg", "img/no-image.png"];
		    randomName = shuffle(randomName);
		    randomMessage = shuffle(randomMessage);
		    randomImage = shuffle(randomImage);

		   	for(var i = 0; i < $scope.howMany; i++) {
		   		// var randomIndexName = Math.floor(Math.random()*8+0);
		   		// var randomIndexMessage = Math.floor(Math.random()*8+0);
		   		// var randomIndexImage = Math.floor(Math.random()*8+0);
		   		var myName = randomName[i];
		   		var myMessage = randomMessage[i];
		   		var myImage = randomImage[i];
		    	$scope.messages.$add({ from: myName, body: myMessage, image: myImage});
		   	}
		}

		//Delete Message
		var list = $firebaseArray(ref);
		var listIndexnumber = list.$index;

		$scope.deleteMessage = function(e) {
			var item = list[this.$index];
			list.$remove(item).then(function(ref) {
			  ref.key() === item.$id;
			});
		}
		$scope.checkName = function() {
			var nameValue = $scope.yourName;
			if(nameValue.length === 0) {
				return true;
			} else {
				return false;
			}
		}

		$scope.checkImage = function() {
			var nameValue = $scope.yourImage;
			if(nameValue.length === 0) {
				return true;
			} else {
				return false;
			}
		}
	}
]);



$("#inlineRadio1").click(function(){
	document.getElementById("typed-message").removeAttribute("disabled");
	document.getElementById("recognition-input").setAttribute("disabled", "");
	document.getElementById("recognition-input").value = "";
});

// $("#inlineRadio2").click(function(){
// 	document.getElementById("typed-message").setAttribute("disabled", "");
// 	document.getElementById("recognition-input").removeAttribute("disabled");
// 	document.getElementById("typed-message").value = "";
// });

// $("#recognition-submit").click(function(){
// 	document.getElementById("typed-message").setAttribute("disabled", "");
// 	document.getElementById("recognition-input").removeAttribute("disabled");
// 	document.getElementById("typed-message").value = "";
// });



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

function comingSoon(){
	alert("Disabled till version 4");
}



