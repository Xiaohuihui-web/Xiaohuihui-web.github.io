var posts=["2024/08/30/产品经理/产品经理全面基础教程/","2024/08/30/产品经理/产品经理基础入门教程/","2024/08/30/团队管理/git简单配置教程/","2024/08/30/产品经理/黑马需求文档教程/","2024/08/30/后端/Django后端/Django/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };