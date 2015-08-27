angular.module('socially').controller('PartyDetailsCtrl', function($scope, $stateParams, $meteor) {
    // We are sending $meteor.object a Mongo collection and the Id of the object we want to bind to.
    // $meteor.object returns an AngularMeteorObject that contains the data.
    // $meteor.object accepts a selector as the second argument.
    // That selector can be a Mongo Selector, Object ID, or String.
    // In our example we used the Object's ID but it can also come in the form of {field: query}.
    // $meteor.object will find the first document that matches the selector, as directed by the sort and skip options,
    // exactly like Meteor's collection.findOne
    //
    //  set the 3rd parameter to false so it won't auto-save the object on every change
    this.party = $meteor.object(Parties, $stateParams.partyId, false);

    this.save = function() {
        this.party.save().then(
            (numberOfDocs) => console.log('save success doc affected ', numberOfDocs),
            (error) => console.log('save error', error)
        );
    };

    this.reset = function() {
        this.party.reset();
    };
});
