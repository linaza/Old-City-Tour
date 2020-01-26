angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('guideHome', {
    url: '/page1',
    templateUrl: 'templates/guideHome.html',
    controller: 'guideHomeCtrl'
  })

  .state('home', {
    url: '/page13',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page3',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('guidesList', {
    url: '/page4',
    templateUrl: 'templates/guidesList.html',
    controller: 'guidesListCtrl'
  })

  .state('carsList', {
    url: '/page15',
    templateUrl: 'templates/carsList.html',
    controller: 'carsListCtrl'
  })

  .state('welcomePage', {
    url: '/page6',
    templateUrl: 'templates/welcomePage.html',
    controller: 'welcomePageCtrl'
  })

  .state('navigation', {
    url: '/page7',
    templateUrl: 'templates/navigation.html',
    controller: 'navigationCtrl'
  })

  .state('signIn', {
    url: '/page8',
    templateUrl: 'templates/signIn.html',
    controller: 'signInCtrl'
  })

  .state('freeTours', {
    url: '/page14',
    templateUrl: 'templates/freeTours.html',
    controller: 'freeToursCtrl'
  })

  .state('createGroup', {
    url: '/page16',
    templateUrl: 'templates/createGroup.html',
    controller: 'createGroupCtrl'
  })

  .state('aboutTheOldCity', {
    url: '/page17',
    templateUrl: 'templates/aboutTheOldCity.html',
    controller: 'aboutTheOldCityCtrl'
  })

  .state('myAcount', {
    url: '/page18',
    templateUrl: 'templates/myAcount.html',
    controller: 'myAcountCtrl'
  })

  .state('chats', {
    url: '/page19',
    templateUrl: 'templates/chats.html',
    controller: 'chatsCtrl'
  })

  .state('page', {
    url: '/page10',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/page13')


});