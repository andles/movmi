'use strict';

angular.module('myApp')



.component('mLogin', {
	templateUrl: 'view1/view1.html',
	controller: function($firebaseObject) {
		var ctrl = this;

		ctrl.$onInit = function() {

		}

		var ref = firebase.database().ref().child("data");
		  // download the data into a local object
		  var syncObject = $firebaseObject(ref);
		  // synchronize the object with a three-way data binding
		  // click on `index.html` above to see it used in the DOM!
		  syncObject.$bindTo($scope, "data");
	}
  
});