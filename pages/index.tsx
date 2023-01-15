function HomePage() {
return (
      <div>
        <meta charSet="utf-8" />
        <meta name="renderer" content="webkit" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="force-rendering" content="webkit" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="AzurStarの主页" />
        <meta name="keywords" content="AzurStar个人主页" />
        <meta name="author" content="AzurStar" />
        <title>0721解析服务器</title>
        <link rel="stylesheet" type="text/css" href="./css/style.css" />
        <link rel="stylesheet" type="text/css" href="./css/iconfont.css" />    
        <link rel="icon" href="https://xn--qoqt3y678a.xn--6qq986b3xl/favicon.ico" />
        {/*引入SweetAlert
    */}
        {/*引入izitoast*/}
        <link rel="stylesheet" href="https://fastly.jsdelivr.net/npm/izitoast@1.4.0/dist/css/iziToast.min.css" />
        {/*引入fontawesome*/}
        <link rel="stylesheet" href="https://fastly.jsdelivr.net/gh/volantis-x/cdn-fontawesome-pro@master/css/all.min.css" media="all" />    
        {/*科技炫酷按钮*/}
        <link rel="stylesheet" type="text/css" href="css/sey.css" />
        {/*<span class="mobile btn-mobile-menu">
        <i class="social iconfont icon-list btn-mobile-menu__icon"></i>
        <i class="social iconfont icon-ngleup btn-mobile-close__icon hidden"></i>
    </span>*/}
        <header id="panel" className="panel-cover" style={{background: 'url(eb5fdfd9-73fe-4d3f-9ba0-66baeafb62c6.jpg) center center / cover no-repeat rgb(102, 102, 102)'}}>
          {/*星空背景*/}
          <div id="stars" />
          <div id="stars2" />
          <div id="stars3" />
          {/*天气api自己替换key*/}
          <div id="he-plugin-simple" />
          <div className="panel-main">
            <div className="panel-main__inner panel-inverted">
              <div className="panel-main__content">
                <div className="ih-item circle effect right_to_left">
                  <a className="blog-button">
                    <div className="img"><img src="nn (1).jpg" alt="img" className="js-avatar iUp profilepic" />
                    </div>
                    <div className="info iUp">
                      <div className="info-back">
                        <img alt="img" src="kl.gif" className="js-avatar profilepic" />                                    
                      </div>
                    </div>
                  </a>
                </div>
                <h1 className="panel-cover__title panel-title iUp">
                  <br />0721
                </h1>
                <p className="panel-cover__subtitle panel-subtitle iUp">公共解析服务器</p>
                <canvas className="navigation-wrapper iUp" id="canvas" style={{width: '50%', paddingTop: '25px'}} width={920} height={350} />				
                <hr className="iUp" />
                {/*一言无法显示时的文字*/}
                <p id="description" className="panel-cover__description iUp">如果不能忠于自己的心，胜负又有什么价值呢？
                  <br />
                  <strong>-「塔希里亚故事集」</strong>
                </p>
                <div className="navigation-wrapper iUp">
                  <div>
                    <nav className="cover-navigation cover-navigation--primary">
                      <ul className="navigation">                                                               
                        <li className="navigation__item">
                          <a href="/api/server_info" title="服务器网络信息" style={{-clr: '#1e9bff'}}><span>服务器网络信息</span><i /></a>      
                        </li>
                        <li className="navigation__item">
                          <a href="/users/{uid}" title="黑/白名单查询 style=" --clr:#66ffcc"><span>黑/白名单查询</span><i /></a>      
                        </li>
                        <li className="navigation__item">
                          <a onclick="jiaocheng()" title="教程" target="_blank" style={{-clr: '#ff1867'}}><span>教程</span>
                            <i />
                          </a> 
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="iUp">                      
                    <nav className="cover-navigation navigation--social">
                      <ul className="navigation">
                        <li className="navigation__item">
                          <a href="https://github.com/hllqk/" title="Github" target="_blank">
                            <j className="iconfont icon-github" />
                            <span className="label">Github</span>
                          </a>
                        </li>
                        <li className="navigation__item">
                          <a href="https://t.me/hllqk" title="Telegram" target="_blank">
                            <j className="fab fa-telegram-plane" />
                            <span className="label">Telegram</span>
                          </a>
                        </li>
                        <li className="navigation__item">
                          <a href="mailto:hllqk@outlook.com" title="Email">
                            <j className="fas fa-envelope" />
                            <span className="label">Email</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel-cover--overlay cover-slate" />
          </div>
          <div className="remark iUp">
            <p className="power">Powered By <a href="https://github.com/hllqk/biliroaming-ts-server-vercel/" target="view_window">biliroaming-ts-server-vercel</a></p><a href="https://github.com/hllqk/biliroaming-ts-server-vercel/" target="view_window">           
            </a></div><a href="https://github.com/hllqk/biliroaming-ts-server-vercel/" target="view_window">
          </a></header><a href="https://github.com/hllqk/biliroaming-ts-server-vercel/" target="view_window">
        </a></div>
    );
}

export default HomePage;
