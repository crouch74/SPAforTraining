angular.module('app').run(['$templateCache', function($templateCache) {
  $templateCache.put('./1app/posts/comments.template.html',
    '<table>\n' +
    '  <caption>Comments</caption>\n' +
    '  <thead>\n' +
    '    <tr>\n' +
    '      <th>Name</th>\n' +
    '      <th>Email</th>\n' +
    '      <th>Body</th>\n' +
    '    </tr>\n' +
    '  </thead>\n' +
    '  <tbody>\n' +
    '    <tr ng-repeat="comment in vm.comments">\n' +
    '      <td data-label="Name">{{comment.name}}</td>\n' +
    '      <td data-label="Email">{{comment.email}}</td>\n' +
    '      <td data-label="Body">{{comment.body}}</td>\n' +
    '    </tr>\n' +
    '  </tbody>\n' +
    '</table>');
}]);

angular.module('app').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/posts/posts.template.html',
    '<table>\n' +
    '  <caption>Posts</caption>\n' +
    '  <thead>\n' +
    '    <tr>\n' +
    '      <th>User Id</th>\n' +
    '      <th>Title</th>\n' +
    '      <th>Body</th>\n' +
    '    </tr>\n' +
    '  </thead>\n' +
    '  <tbody>\n' +
    '    <tr ng-repeat="post in vm.posts">\n' +
    '      <td data-label="User Id">{{post.userId}}</td>\n' +
    '      <td data-label="Title"><a ui-sref="comments({id:post.id})">{{post.title}}</a></td>\n' +
    '      <td data-label="Body">{{post.body}}</td>\n' +
    '    </tr>\n' +
    '  </tbody>\n' +
    '</table>');
}]);
