angular.module('socially').controller('PartiesListCtrl', function ($rootScope, $meteor) {
    this.parties = $meteor.collection(Parties);

    this.newParty = {};

    this.save = function() {
        this.newParty.owner = $rootScope.currentUser._id;
        this.parties.push(this.newParty);
        this.newParty = {};
    };

    this.remove = (party) => {
        this.parties.remove(party);
    };

    this.removeAll = function(){
        this.parties.remove();
    };
});
