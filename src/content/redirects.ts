/** Old Hexo permalinks → new Astro paths. */
export const redirects: Record<string, string> = {
  "/about/": "/",
  "/works/": "/#works",
  "/friends/": "/",
  "/archives/": "/blog/",
  "/categories/": "/blog/",
  "/tags/": "/blog/",
  "/2018/05/14/hello-world/": "/blog/hello-world/",
  "/2018/06/26/Docker-Learning-Notes/": "/blog/docker-learning-notes/",
  "/2018/07/15/Setting-up-Spring-REST-API-with-Swagger2/":
    "/blog/setting-up-spring-rest-api-with-swagger2/",
  "/2018/09/07/Socket-Dictionary/": "/blog/socket-dictionary/",
  "/2019/06/17/TrackHub/": "/blog/trackhub/",
  "/2019/07/23/AI-Search-Methods/": "/blog/ai-search-methods/",
  "/2019/09/15/Advanced-JavaScript/": "/blog/advanced-javascript/",
  "/2021/01/01/❄️北国风光❄️/": "/blog/beiguo-fengguang/",
  "/2021/02/13/Whistle-Proxy/": "/blog/whistle-proxy/",
  "/2021/07/03/v2ray-tls-nginx/": "/blog/v2ray-tls-nginx/",
};
