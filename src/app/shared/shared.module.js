(function() {
    'use strict';

    angular
        .module('app.shared', [
            'ui.router'
        ])
        .constant('API_URL','https://jsonplaceholder.typicode.com');
})();