// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state('intro', {
		url: '/',
		templateUrl: 'templates/intro.html',
		controller: 'IntroCtrl'
	})
	.state('main', {
		url: '/main',
		templateUrl: 'templates/main.html',
		controller: 'MainCtrl'
	});

	$urlRouterProvider.otherwise("/");

})

.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate, introSlideService) {
 
	// Called to navigate to the main app
	$scope.startApp = function() {
		$state.go('main');
	};
	$scope.next = function() {
		$ionicSlideBoxDelegate.next();
	};
	$scope.previous = function() {
		$ionicSlideBoxDelegate.previous();
	};

	// Called each time the slide changes
	$scope.slideChanged = function(index) {
		$scope.slideIndex = index;
	};
	
	$scope.currentSlide = introSlideService.index; 
})

.controller('MainCtrl', function($scope, $state, introSlideService) {
	console.log('MainCtrl');
	
	$scope.toIntro = function(){
		introSlideService.index = 1;
		$state.go('intro');
	}
})

.factory('introSlideService', function() {
	var service = {};
	service.index = 0;
	return service;
});

// 
// 
// angular.module('starter', ['ionic'])
// 
// .run(function($ionicPlatform) {
	// $ionicPlatform.ready(function() {
		// // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// // for form inputs)
		// if(window.cordova && window.cordova.plugins.Keyboard) {
			// cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		// }
		// if(window.StatusBar) {
			// StatusBar.styleDefault();
		// }
	// });
// })
