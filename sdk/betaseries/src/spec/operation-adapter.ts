import {PathObject} from '@ama-sdk/core';

/* eslint-disable max-len */
export const OPERATION_ADAPTER: PathObject[] = [{
      path: "/badges/badge",regexp: new RegExp('^/badges/badge(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-badges-badge"}]
    },{
      path: "/comments/comments",regexp: new RegExp('^/comments/comments(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-comments-comments"}]
    },{
      path: "/comments/comment",regexp: new RegExp('^/comments/comment(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-comments-comment"},{"method":"post","operationId":"post-comments-comment"},{"method":"delete","operationId":"delete-comments-comment"}]
    },{
      path: "/comments/replies",regexp: new RegExp('^/comments/replies(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-comments-replies"}]
    },{
      path: "/comments/comment_event",regexp: new RegExp('^/comments/comment_event(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-comments-comment-event"}]
    },{
      path: "/comments/subscription",regexp: new RegExp('^/comments/subscription(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-comments-subscription"},{"method":"delete","operationId":"delete-comments-subscription"}]
    },{
      path: "/comments/thumb",regexp: new RegExp('^/comments/thumb(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-comments-thumb"},{"method":"delete","operationId":"delete-comments-thumb"}]
    },{
      path: "/comments/status",regexp: new RegExp('^/comments/status(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-comments-status"}]
    },{
      path: "/episodes/note",regexp: new RegExp('^/episodes/note(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-episodes-note"},{"method":"delete","operationId":"delete-episodes-note"}]
    },{
      path: "/episodes/list",regexp: new RegExp('^/episodes/list(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-episodes-list"}]
    },{
      path: "/episodes/downloaded",regexp: new RegExp('^/episodes/downloaded(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-episodes-downloaded"},{"method":"delete","operationId":"delete-episodes-downloaded"}]
    },{
      path: "/episodes/watched",regexp: new RegExp('^/episodes/watched(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-episodes-watched"},{"method":"delete","operationId":"delete-episodes-watched"}]
    },{
      path: "/episodes/display",regexp: new RegExp('^/episodes/display(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-episodes-display"}]
    },{
      path: "/episodes/scraper",regexp: new RegExp('^/episodes/scraper(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-episodes-scraper"}]
    },{
      path: "/episodes/search",regexp: new RegExp('^/episodes/search(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-episodes-search"}]
    },{
      path: "/episodes/latest",regexp: new RegExp('^/episodes/latest(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-episodes-latest"}]
    },{
      path: "/episodes/next",regexp: new RegExp('^/episodes/next(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-episodes-next"}]
    },{
      path: "/episodes/hidden",regexp: new RegExp('^/episodes/hidden(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-episodes-hidden"},{"method":"delete","operationId":"delete-episodes-hidden"}]
    },{
      path: "/episodes/unrated",regexp: new RegExp('^/episodes/unrated(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-episodes-unrated"}]
    },{
      path: "/friends/list",regexp: new RegExp('^/friends/list(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-friends-list"}]
    },{
      path: "/friends/requests",regexp: new RegExp('^/friends/requests(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-friends-requests"}]
    },{
      path: "/friends/friend",regexp: new RegExp('^/friends/friend(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-friends-friend"},{"method":"delete","operationId":"delete-friends-friend"}]
    },{
      path: "/friends/block",regexp: new RegExp('^/friends/block(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-friends-block"},{"method":"delete","operationId":"delete-friends-block"}]
    },{
      path: "/profile-filters/filter",regexp: new RegExp('^/profile-filters/filter(?:/(?=$))?$'),operations: [{"method":"delete","operationId":"delete-profile-filters-filter"}]
    },{
      path: "/members/options",regexp: new RegExp('^/members/options(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-members-options"}]
    },{
      path: "/members/auth",regexp: new RegExp('^/members/auth(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-members-auth"}]
    },{
      path: "/members/oauth",regexp: new RegExp('^/members/oauth(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-members-oauth"}]
    },{
      path: "/members/access_token",regexp: new RegExp('^/members/access_token(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-members-access-token"}]
    },{
      path: "/members/infos",regexp: new RegExp('^/members/infos(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-members-infos"}]
    },{
      path: "/members/username",regexp: new RegExp('^/members/username(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-members-username"}]
    },{
      path: "/members/option",regexp: new RegExp('^/members/option(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-members-option"}]
    },{
      path: "/members/is_active",regexp: new RegExp('^/members/is_active(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-members-is-active"}]
    },{
      path: "/members/destroy",regexp: new RegExp('^/members/destroy(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-members-destroy"}]
    },{
      path: "/members/badges",regexp: new RegExp('^/members/badges(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-members-badges"}]
    },{
      path: "/members/notifications",regexp: new RegExp('^/members/notifications(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-members-notifications"}]
    },{
      path: "/members/notification",regexp: new RegExp('^/members/notification(?:/(?=$))?$'),operations: [{"method":"delete","operationId":"delete-members-notification"}]
    },{
      path: "/members/signup",regexp: new RegExp('^/members/signup(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-members-signup"}]
    },{
      path: "/members/search",regexp: new RegExp('^/members/search(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-members-search"}]
    },{
      path: "/members/sync",regexp: new RegExp('^/members/sync(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-members-sync"}]
    },{
      path: "/members/lost",regexp: new RegExp('^/members/lost(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-members-lost"}]
    },{
      path: "/members/avatar",regexp: new RegExp('^/members/avatar(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-members-avatar"},{"method":"delete","operationId":"delete-members-avatar"}]
    },{
      path: "/members/banner",regexp: new RegExp('^/members/banner(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-members-banner"},{"method":"delete","operationId":"delete-members-banner"}]
    },{
      path: "/members/locale",regexp: new RegExp('^/members/locale(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-members-locale"}]
    },{
      path: "/members/email",regexp: new RegExp('^/members/email(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-members-email"},{"method":"post","operationId":"post-members-email"}]
    },{
      path: "/members/password",regexp: new RegExp('^/members/password(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-members-password"}]
    },{
      path: "/members/year",regexp: new RegExp('^/members/year(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-members-year"}]
    },{
      path: "/members/delete",regexp: new RegExp('^/members/delete(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-members-delete"}]
    },{
      path: "/messages/inbox",regexp: new RegExp('^/messages/inbox(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-messages-inbox"}]
    },{
      path: "/messages/discussion",regexp: new RegExp('^/messages/discussion(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-messages-discussion"}]
    },{
      path: "/messages/read",regexp: new RegExp('^/messages/read(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-messages-read"}]
    },{
      path: "/messages/message",regexp: new RegExp('^/messages/message(?:/(?=$))?$'),operations: [{"method":"delete","operationId":"delete-messages-message"},{"method":"post","operationId":"post-messages-message"}]
    },{
      path: "/movies/movie",regexp: new RegExp('^/movies/movie(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-movies-movie"},{"method":"post","operationId":"post-movies-movie"},{"method":"delete","operationId":"delete-movies-movie"}]
    },{
      path: "/movies/list",regexp: new RegExp('^/movies/list(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-movies-list"}]
    },{
      path: "/movies/member",regexp: new RegExp('^/movies/member(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-movies-member"}]
    },{
      path: "/movies/random",regexp: new RegExp('^/movies/random(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-movies-random"}]
    },{
      path: "/movies/search",regexp: new RegExp('^/movies/search(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-movies-search"}]
    },{
      path: "/movies/scraper",regexp: new RegExp('^/movies/scraper(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-movies-scraper"}]
    },{
      path: "/movies/genres",regexp: new RegExp('^/movies/genres(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-movies-genres"}]
    },{
      path: "/movies/note",regexp: new RegExp('^/movies/note(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-movies-note"},{"method":"delete","operationId":"delete-movies-note"}]
    },{
      path: "/movies/similars",regexp: new RegExp('^/movies/similars(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-movies-similars"}]
    },{
      path: "/movies/characters",regexp: new RegExp('^/movies/characters(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-movies-characters"}]
    },{
      path: "/movies/favorites",regexp: new RegExp('^/movies/favorites(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-movies-favorites"}]
    },{
      path: "/movies/favorite",regexp: new RegExp('^/movies/favorite(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-movies-favorite"},{"method":"delete","operationId":"delete-movies-favorite"}]
    },{
      path: "/movies/upcoming",regexp: new RegExp('^/movies/upcoming(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-movies-upcoming"}]
    },{
      path: "/movies/discover",regexp: new RegExp('^/movies/discover(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-movies-discover"}]
    },{
      path: "/movies/articles",regexp: new RegExp('^/movies/articles(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-movies-articles"}]
    },{
      path: "/news/last",regexp: new RegExp('^/news/last(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-news-last"}]
    },{
      path: "/oauth/access_token",regexp: new RegExp('^/oauth/access_token(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-oauth-access-token"}]
    },{
      path: "/oauth/device",regexp: new RegExp('^/oauth/device(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-oauth-device"}]
    },{
      path: "/persons/person",regexp: new RegExp('^/persons/person(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-persons-person"}]
    },{
      path: "/persons/articles",regexp: new RegExp('^/persons/articles(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-persons-articles"}]
    },{
      path: "/pictures/members",regexp: new RegExp('^/pictures/members(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-pictures-members"}]
    },{
      path: "/pictures/episodes",regexp: new RegExp('^/pictures/episodes(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-pictures-episodes"}]
    },{
      path: "/pictures/shows",regexp: new RegExp('^/pictures/shows(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-pictures-shows"}]
    },{
      path: "/pictures/badges",regexp: new RegExp('^/pictures/badges(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-pictures-badges"}]
    },{
      path: "/pictures/characters",regexp: new RegExp('^/pictures/characters(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-pictures-characters"}]
    },{
      path: "/pictures/persons",regexp: new RegExp('^/pictures/persons(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-pictures-persons"}]
    },{
      path: "/pictures/movies",regexp: new RegExp('^/pictures/movies(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-pictures-movies"}]
    },{
      path: "/pictures/seasons",regexp: new RegExp('^/pictures/seasons(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-pictures-seasons"}]
    },{
      path: "/pictures/platforms",regexp: new RegExp('^/pictures/platforms(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-pictures-platforms"}]
    },{
      path: "/planning/general",regexp: new RegExp('^/planning/general(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-planning-general"}]
    },{
      path: "/planning/member",regexp: new RegExp('^/planning/member(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-planning-member"}]
    },{
      path: "/planning/incoming",regexp: new RegExp('^/planning/incoming(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-planning-incoming"}]
    },{
      path: "/platforms/list",regexp: new RegExp('^/platforms/list(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-platforms-list"}]
    },{
      path: "/platforms/services",regexp: new RegExp('^/platforms/services(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-platforms-services"}]
    },{
      path: "/platforms/service",regexp: new RegExp('^/platforms/service(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-platforms-service"},{"method":"delete","operationId":"delete-platforms-service"}]
    },{
      path: "/polls/last",regexp: new RegExp('^/polls/last(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-polls-last"}]
    },{
      path: "/polls/poll",regexp: new RegExp('^/polls/poll(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-polls-poll"}]
    },{
      path: "/polls/target",regexp: new RegExp('^/polls/target(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-polls-target"}]
    },{
      path: "/polls/list",regexp: new RegExp('^/polls/list(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-polls-list"}]
    },{
      path: "/polls/answer",regexp: new RegExp('^/polls/answer(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-polls-answer"}]
    },{
      path: "/reports/report",regexp: new RegExp('^/reports/report(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-reports-report"}]
    },{
      path: "/reports/update",regexp: new RegExp('^/reports/update(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-reports-update"}]
    },{
      path: "/search/all",regexp: new RegExp('^/search/all(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-search-all"}]
    },{
      path: "/search/shows",regexp: new RegExp('^/search/shows(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-search-shows"}]
    },{
      path: "/search/movies",regexp: new RegExp('^/search/movies(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-search-movies"}]
    },{
      path: "/seasons/watched",regexp: new RegExp('^/seasons/watched(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-seasons-watched"},{"method":"delete","operationId":"delete-seasons-watched"}]
    },{
      path: "/seasons/hide",regexp: new RegExp('^/seasons/hide(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-seasons-hide"},{"method":"delete","operationId":"delete-seasons-hide"}]
    },{
      path: "/seasons/note",regexp: new RegExp('^/seasons/note(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-seasons-note"},{"method":"delete","operationId":"delete-seasons-note"}]
    },{
      path: "/shows/note",regexp: new RegExp('^/shows/note(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-shows-note"},{"method":"delete","operationId":"delete-shows-note"}]
    },{
      path: "/shows/search",regexp: new RegExp('^/shows/search(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-shows-search"}]
    },{
      path: "/shows/display",regexp: new RegExp('^/shows/display(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-shows-display"}]
    },{
      path: "/shows/list",regexp: new RegExp('^/shows/list(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-shows-list"}]
    },{
      path: "/shows/random",regexp: new RegExp('^/shows/random(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-shows-random"}]
    },{
      path: "/shows/episodes",regexp: new RegExp('^/shows/episodes(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-shows-episodes"}]
    },{
      path: "/shows/show",regexp: new RegExp('^/shows/show(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-shows-show"},{"method":"delete","operationId":"delete-shows-show"}]
    },{
      path: "/shows/archive",regexp: new RegExp('^/shows/archive(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-shows-archive"},{"method":"delete","operationId":"delete-shows-archive"}]
    },{
      path: "/shows/recommendation",regexp: new RegExp('^/shows/recommendation(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-shows-recommendation"},{"method":"delete","operationId":"delete-shows-recommendation"},{"method":"put","operationId":"put-shows-recommendation"}]
    },{
      path: "/shows/recommendations",regexp: new RegExp('^/shows/recommendations(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-shows-recommendations"}]
    },{
      path: "/shows/similars",regexp: new RegExp('^/shows/similars(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-shows-similars"}]
    },{
      path: "/shows/videos",regexp: new RegExp('^/shows/videos(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-shows-videos"}]
    },{
      path: "/shows/characters",regexp: new RegExp('^/shows/characters(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-shows-characters"}]
    },{
      path: "/shows/pictures",regexp: new RegExp('^/shows/pictures(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-shows-pictures"}]
    },{
      path: "/shows/favorites",regexp: new RegExp('^/shows/favorites(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-shows-favorites"}]
    },{
      path: "/shows/favorite",regexp: new RegExp('^/shows/favorite(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-shows-favorite"},{"method":"delete","operationId":"delete-shows-favorite"}]
    },{
      path: "/shows/tags",regexp: new RegExp('^/shows/tags(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-shows-tags"}]
    },{
      path: "/shows/member",regexp: new RegExp('^/shows/member(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-shows-member"}]
    },{
      path: "/shows/discover",regexp: new RegExp('^/shows/discover(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-shows-discover"}]
    },{
      path: "/shows/discover_platforms",regexp: new RegExp('^/shows/discover_platforms(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-shows-discover-platforms"}]
    },{
      path: "/shows/genres",regexp: new RegExp('^/shows/genres(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-shows-genres"}]
    },{
      path: "/shows/seasons",regexp: new RegExp('^/shows/seasons(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-shows-seasons"}]
    },{
      path: "/shows/articles",regexp: new RegExp('^/shows/articles(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-shows-articles"}]
    },{
      path: "/shows/unrated",regexp: new RegExp('^/shows/unrated(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-shows-unrated"}]
    },{
      path: "/subtitles/last",regexp: new RegExp('^/subtitles/last(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-subtitles-last"}]
    },{
      path: "/subtitles/show",regexp: new RegExp('^/subtitles/show(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-subtitles-show"}]
    },{
      path: "/subtitles/episode",regexp: new RegExp('^/subtitles/episode(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-subtitles-episode"}]
    },{
      path: "/subtitles/season",regexp: new RegExp('^/subtitles/season(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-subtitles-season"}]
    },{
      path: "/subtitles/report",regexp: new RegExp('^/subtitles/report(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-subtitles-report"}]
    },{
      path: "/tags/list",regexp: new RegExp('^/tags/list(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-tags-list"}]
    },{
      path: "/tags/tag",regexp: new RegExp('^/tags/tag(?:/(?=$))?$'),operations: [{"method":"post","operationId":"post-tags-tag"},{"method":"delete","operationId":"delete-tags-tag"}]
    },{
      path: "/timeline/home",regexp: new RegExp('^/timeline/home(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-timeline-home"}]
    },{
      path: "/timeline/feed",regexp: new RegExp('^/timeline/feed(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-timeline-feed"}]
    },{
      path: "/timeline/friends",regexp: new RegExp('^/timeline/friends(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-timeline-friends"}]
    },{
      path: "/timeline/member",regexp: new RegExp('^/timeline/member(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-timeline-member"}]
    },{
      path: "/timeline/event",regexp: new RegExp('^/timeline/event(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-timeline-event"}]
    },{
      path: "/timeline/show",regexp: new RegExp('^/timeline/show(?:/(?=$))?$'),operations: [{"method":"get","operationId":"get-timeline-show"}]
    }];
/* eslint-enable max-len */
