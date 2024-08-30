var posts=["2024/08/30/hello-world/","2024/08/30/myblog/","2024/08/30/webArticle/myblog/","2024/08/30/webArticle/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };