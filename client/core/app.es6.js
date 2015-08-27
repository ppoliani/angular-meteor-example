angular.module('socially', ['angular-meteor', 'ui.router']);

angular.module('socially').config(
    ($urlRouterProvider, $stateProvider, $locationProvider) => {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('parties', {
                url: '/parties',
                templateUrl: 'client/parties/parties-list.ng.html',
                controller: 'PartiesListCtrl as vm'
            })
            .state('partyDetails', {
                url: '/parties/:partyId',
                templateUrl: 'client/parties/party-details.ng.html',
                controller: 'PartyDetailsCtrl as vm'
            });

        $urlRouterProvider.otherwise("/parties");
    }
);
