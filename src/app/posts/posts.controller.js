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
                })
        }
        
    }
})();