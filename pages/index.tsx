function HomePage() {
  return (
    <>
      <body oncontextmenu=self.event.returnValue=false onselectstart="return false">

    <!--<span class="mobile btn-mobile-menu">
        <i class="social iconfont icon-list btn-mobile-menu__icon"></i>
        <i class="social iconfont icon-ngleup btn-mobile-close__icon hidden"></i>
    </span>-->
    <header id="panel" class="panel-cover" style="background: url(eb5fdfd9-73fe-4d3f-9ba0-66baeafb62c6.jpg) center center / cover no-repeat rgb(102, 102, 102);">
    <!--星空背景-->
    <div id="stars"></div>
	<div id="stars2"></div>
	<div id="stars3"></div>
    <!--天气api自己替换key-->
    <div id="he-plugin-simple"></div>
    
<script>
WIDGET = {
  "CONFIG": {
    "modules": "01234",
    "background": "5",
    "tmpColor": "727272",
    "tmpSize": "16",
    "cityColor": "727272",
    "citySize": "16",
    "aqiColor": "727272",
    "aqiSize": "16",
    "weatherIconSize": "24",
    "alertIconSize": "18",
    "padding": "10px 10px 10px 10px",
    "shadow": "1",
    "language": "auto",
    "borderRadius": "10",
    "fixed": "false",
    "vertical": "top",
    "horizontal": "left",
    "key": "f2607059cff84a809225dcce3ea360c0"
  }
}
</script>

	    
        <div class="panel-main">
            <div class="panel-main__inner panel-inverted">
                <div class="panel-main__content">
                    <div class="ih-item circle effect right_to_left">
                        <a class="blog-button">
                            <div class="img"><img src="nn (1).jpg" alt="img" class="js-avatar iUp profilepic">
                            </div>
                            <div class="info iUp">
                                <div class="info-back">
                                <img alt="img" src="kl.gif" class="js-avatar profilepic">                                    
                                </div>
                            </div>
                        </a>
                    </div>
                    <h1 class="panel-cover__title panel-title iUp">
                        <br />0721
                    </h1>

                    <p class="panel-cover__subtitle panel-subtitle iUp">公共解析服务器</p>
                    
                    <canvas class="navigation-wrapper iUp" id="canvas" style="width:50%;padding-top:25px;" width="920" height="350"></canvas>				
				    <script src="clock.js"></script>
                    <hr class="iUp" />
                    <!--一言无法显示时的文字-->
                    <p id="description" class="panel-cover__description iUp">如果不能忠于自己的心，胜负又有什么价值呢？
                        <br />
                        <strong>-「塔希里亚故事集」</strong>
                    </p>
                    <div class="navigation-wrapper iUp">
                        <div>
                            <nav class="cover-navigation cover-navigation--primary">
                                <ul class="navigation">                                                               
                                    <li class="navigation__item">
                                    <a href="/api/server_info" title="服务器网络信息" style="--clr:#1e9bff"><span>服务器网络信息</span><i></i></a>      
                                    </li>
                                    <li class="navigation__item">
                                    <a href="/users/{uid}" title="黑/白名单查询 style="--clr:#66ffcc"><span>黑/白名单查询</span><i></i></a>      
                                    </li>
                                    <li class="navigation__item">
                                        <a onClick="jiaocheng()" title="教程" target="_blank" style="--clr:#ff1867"><span>教程</span>
                                            <script>
                                                function jiaocheng() {
                                                    Swal.fire({
                                                        title: "使用教程",
                                                        text: "请勿在任何大型公共平台宣传服务器相关内容，可能会导致你的账号进入解析黑名单!",
                                                        showCancelButton: true,
                                                        confirmButtonColor: '#3085d6',
                                                        cancelButtonColor: '#3085d6',
                                                        confirmButtonText: "APP",
                                                        cancelButtonText: "WEB"
                                                    }).then((isConfirm) => {
                                                    try {
                                                    //判断 是否 点击的 确定按钮
                                                    if (isConfirm.value) {
                                                    Swal.fire("APP", "打开APP教程", "success");
                                                    window.location.href="https://github.com/yujincheng08/BiliRoaming/wiki/"; 
                                                    }
                                                    else if (isConfirm.isDismissed && isConfirm.dismiss == "cancel") {
                                                    Swal.fire("WEB", "打开WEB教程", "success");
                                                    window.location.href="https://github.com/yujincheng08/BiliRoaming/wiki/"; 
                                                    }
                                                    } catch (e) {
                                                    alert(e);
                                                    }
                                                });
                                                }
                                            </script><i></i>
                                        </a> 
                                    </li>
                                </ul>
                            </nav>
                                    
                        </div>
                       <div class="iUp">                      
                            <nav class="cover-navigation navigation--social">
                                <ul class="navigation">
                                    <li class="navigation__item">
                                        <a href="https://github.com/hllqk/" title="Github" target="_blank">
                                            <j class="iconfont icon-github"></j>
                                            <span class="label">Github</span>
                                        </a>
                                    </li>
                                    <li class="navigation__item">
                                        <a href="https://t.me/hllqk" title="Telegram" target="_blank">
                                            <j class="fab fa-telegram-plane"></j>
                                            <span class="label">Telegram</span>
                                        </a>
                                    </li>
                                    <li class="navigation__item">
                                        <a href="mailto:hllqk@outlook.com" title="Email">
                                            <j class="fas fa-envelope"></j>
                                            <span class="label">Email</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel-cover--overlay cover-slate"></div>
        </div>
        <div class="remark iUp">
            <p class="power">Powered By <a href="https://github.com/hllqk/biliroaming-ts-server-vercel/" target="view_window">biliroaming-ts-server-vercel</p>           
        </div>
    </header>
    <!--izitoast弹窗设置-->
    <script>
        iziToast.settings({
            timeout: 4000,//调试
            icon: 'Fontawesome',
            closeOnEscape: 'true',
            position: 'topRight',
            transitionOut: 'fadeOutRight',
            displayMode: '2',
            layout: '2',
            transitionIn: 'bounceInLeft',
        });
    </script>
    <!--izitoast内容-->
    <script>
        function update() {
            iziToast.info({
                icon: 'fad fa-times-octagon',
                backgroundColor: '#efefef',
                title: '站点暂时关闭',
                message: '只是出现了一点小问题 ~'
            });
        }
    </script>

    </style>
    <script type="text/javascript" src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script type="text/javascript" src="./js/fetch.min.js"></script>
    <script type="text/javascript" src="./js/main.js"></script>
    </>
  );
}
export {}
export default HomePage;
