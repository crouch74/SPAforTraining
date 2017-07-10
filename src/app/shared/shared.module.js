(function() {
    'use strict';

    angular
        .module('app.shared', [
            'ui.router',
            'pascalprecht.translate'
        ])
        .config(sharedConfig)
        .constant('API_URL','https://jsonplaceholder.typicode.com');

        sharedConfig.$inject = ['$translateProvider', '$httpProvider'];
        function sharedConfig($translateProvider, $httpProvider) {
            $translateProvider.preferredLanguage('en');
            $httpProvider.interceptors.push('APIInterceptor');
        }
})();