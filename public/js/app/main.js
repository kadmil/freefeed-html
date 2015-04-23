define([
  "app/app",
  "app/router",

  "adapters/ApplicationAdapter",
  "adapters/FormDataAdapter",
  "adapters/AttachmentAdapter",
  "adapters/SubscriberAdapter",
  "adapters/SubscriptionAdapter",
  "adapters/TimelineAdapter",

  "components/Pagination",

  "initializers/AjaxPrefilter",
  "initializers/PubSub",
  "initializers/Session",
  "initializers/DS",

  "models/Attachment",
  "models/Comment",
  "models/Group",
  "models/Post",
  "models/User",
  "models/Subscription",
  "models/Subscriber",
  "models/Timeline",

  "controllers/ForgotPasswordController",
  "controllers/GroupsHomeController",
  "controllers/GroupsNewController",
  "controllers/PostAttachmentController",
  "controllers/PostGenericController",
  "controllers/PostController",
  "controllers/PostCommentController",
  "controllers/ResetPasswordController",
  "controllers/SessionNewController",
  "controllers/SessionDestroyController",
  "controllers/SettingsIndexController",
  "controllers/SettingsFeedController",
  "controllers/TimelineGenericController",
  "controllers/TimelineCommentsController",
  "controllers/TimelineIndexController",
  "controllers/TimelineDiscussionsController",
  "controllers/TimelineHomeController",
  "controllers/TimelineLikesController",
  "controllers/TimelinePostController",
  "controllers/TimelineSubscribersController",
  "controllers/TimelineSubscriptionsController",
  "controllers/UsersNewController",

  "fields/CreatePostView",
  "fields/CreateAttachmentView",
  "fields/EditPostView",
  "fields/CreateCommentView",
  "fields/EditCommentView",

  "routes/ForgotPasswordRoute",
  "routes/GroupsHomeRoute",
  "routes/GroupsNewRoute",
  "routes/HomeRoute",
  "routes/PostRoute",
  "routes/ResetPasswordRoute",
  "routes/SessionNewRoute",
  "routes/SessionDestroyRoute",
  "routes/SettingsIndexRoute",
  "routes/SettingsFeedRoute",
  "routes/TimelineCommentsRoute",
  "routes/TimelineIndexRoute",
  "routes/TimelineDiscussionsRoute",
  "routes/TimelineHomeRoute",
  "routes/TimelineLikesRoute",
  "routes/TimelineSubscribersRoute",
  "routes/TimelineSubscriptionsRoute",
  "routes/UsersNewRoute",

  "serializers/PostSerializer",

  "transforms/FileTransform",

  "views/AuthorizedView",
  "views/UnauthorizedView",

  // page views
  "views/ForgotPasswordView",
  "views/GroupsHomeView",
  "views/GroupsNewView",
  "views/HomeView",
  "views/PostView",
  "views/ResetPasswordView",
  "views/SessionNewView",
  "views/SettingsIndexView",
  "views/SettingsFeedView",
  "views/TimelineCommentsView",
  "views/TimelineIndexView",
  "views/TimelineDiscussionsView",
  "views/TimelineHomeView",
  "views/TimelineLikesView",
  "views/TimelineSubscribersView",
  "views/TimelineSubscriptionsView",
  "views/UsersNewView",

  // partial views
  "views/BreadcrumbsView",
  "views/HiddenPostsView",
  "views/MyGroupsView",
  "views/PaginationView",
  "views/PostsView",
  "views/PostAttachmentView",
  "views/PostCommentView",
  "views/PostLikesView",
  "views/ProfileLinksView",
  "views/SendToView",
  "views/SubmitPostView",
  "views/TimelinePostView"
], function(App) {
  "use strict";

  return App
})
