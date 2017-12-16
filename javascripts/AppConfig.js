'use strict';

app.run(function($location, $rootScope, FIREBASE_CONFIG, FireBaseService){
    firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider){
	$routeProvider
	.when("/about", {
		templateUrl: 'partials/about.html',
		controller: 'AboutCtrl'
    })
    .when("/blog", {
		templateUrl: 'partials/blog.html',
		controller: 'BlogCtrl'
    })
    .when("/projects", {
		templateUrl: 'partials/projects.html',
		controller: 'ProjectsCtrl'
    })
    .when("/contact", {
		templateUrl: 'partials/contact.html',
		controller: 'ContactCtrl'
		})
		.otherwise('/about');
});