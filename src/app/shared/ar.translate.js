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