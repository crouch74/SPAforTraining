(function() {
    'use strict';

    angular.module('app.posts', [
        'app.shared'
    ]);
})();
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
(function() {
    'use strict';

    angular.module('app', [
        'app.posts'
    ]);
})();
(function () {
    'use strict';

    angular
        .module('app.posts')
        .controller('CommentsController', CommentsController);

    CommentsController.$inject = ['PostsService', '$stateParams'];

    function CommentsController(PostsService, $stateParams) {
        var vm = this;


        activate();

        function activate() {
            PostsService
                .getPostComments($stateParams.id)
                .then(function(comments) {
                    vm.comments = comments;
                });
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.posts')
        .controller('PostsController', PostsController);

    PostsController.$inject = ['PostsService'];
    function PostsController(PostsService) {
        var vm = this;
        
        activate();

        function activate() { 
            PostsService
                .getAll()
                .then(function(posts) {
                    vm.posts = posts;
                });
        }
        
    }
})();
(function(){

    'use strict';

    angular
        .module('app.posts')
        .config(routeConfig);


    routeConfig.$inject = ['$stateProvider']
    function routeConfig($stateProvider) {
        $stateProvider
            .state('posts', {
                url: '/posts',
                templateUrl: './app/posts/posts.template.html',
                controller: 'PostsController',
                controllerAs: 'vm'
            })
            .state('comments', {
                url: '/posts/{id:int}/comments',
                templateUrl: './app/posts/comments.template.html',
                controller: 'CommentsController',
                controllerAs: 'vm'
            });
    }

})();
(function () {
    'use strict';

    angular
        .module('app.posts')
        .service('PostsService', PostsService);

    PostsService.$inject = ['$http', 'API_URL'];

    function PostsService($http, API_URL) {

        return {
            getAll: getAll,
            getPost: getPost,
            getPostComments: getPostComments
        };

        function getAll() {
            return $http
                .get(API_URL + '/posts')
                .then(function(res){
                    return res.data;
                });
        }

        function getPost(id) {
            return $http
                .get(API_URL + '/posts/' + id)
                .then(function(res){
                    return res.data;
                });
        }

        function getPostComments(id) {
            return $http
                .get(API_URL + `/posts/${id}/comments`)
                .then(function(res){
                    return res.data;
                });
        }

    }
})();
(function(){
    angular
        .module('app.shared')
        .config(languageConfig);

    languageConfig.$inject = ['$translateProvider'];
    function languageConfig($translateProvider) {
        $translateProvider
            .translations('ar',{
                'Hello' : 'أهلا {{username}}'
            });
    }
})();
(function(){
    angular
        .module('app.shared')
        .config(languageConfig);

    languageConfig.$inject = ['$translateProvider'];
    function languageConfig($translateProvider) {
        $translateProvider
            .translations('en',{
                'Hello' : 'Hello {{username}}'
            });
    }
})();
(function() {
    angular
        .module('app.shared')
        .service('APIInterceptor', function() {
            return {
                request: request,
                responseError: responseError
            };

            function request(config) {
                config.headers.language = "en";
                return config;
            }

            function responseError(response) {
                console.log(response.status);
                return response;
            }
        });
})();