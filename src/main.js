import './style.css';

const countries = [
  ['RU','俄罗斯','Russian Federation'],['KZ','哈萨克斯坦','Kazakhstan'],['CN','中国','China'],['UA','乌克兰','Ukraine'],
  ['US','美国','United States'],['MY','马来西亚','Malaysia'],['ID','印度尼西亚','Indonesia'],['PH','菲律宾','Philippines'],
  ['MM','缅甸','Myanmar'],['VN','越南','Vietnam'],['RO','罗马尼亚','Romania'],['PL','波兰','Poland'],
  ['CA','加拿大','Canada'],['IN','印度','India'],['ZM','赞比亚','Zambia'],['PK','巴基斯坦','Pakistan'],
  ['BD','孟加拉国','Bangladesh'],['MX','墨西哥','Mexico'],['KH','柬埔寨','Cambodia'],['NI','尼加拉瓜','Nicaragua'],
  ['KE','肯尼亚','Kenya'],['KG','吉尔吉斯斯坦','Kyrgyzstan'],['IL','以色列','Israel'],['HK','中国香港','Hong Kong'],
  ['GB','英国','United Kingdom'],['MG','马达加斯加','Madagascar'],['NG','尼日利亚','Nigeria'],['EG','埃及','Egypt'],
  ['IE','爱尔兰','Ireland'],['LA','老挝','Laos'],['ZA','南非','South Africa'],['CO','哥伦比亚','Colombia'],
  ['DE','德国','Germany'],['NL','荷兰','Netherlands'],['TH','泰国','Thailand'],['TR','土耳其','Türkiye'],
  ['ES','西班牙','Spain'],['BR','巴西','Brazil'],['FR','法国','France'],['AU','澳大利亚','Australia'],
  ['SG','新加坡','Singapore'],['JP','日本','Japan'],['KR','韩国','South Korea'],['AE','阿联酋','UAE'],
];

const state = { page: 'home', query: '', lang: '中文', modal: false, mobileMenu: false };
const app = document.querySelector('#app');

function header() {
  return `
    <header class="topbar">
      <a class="brand" href="#" data-page="home" aria-label="SMS Workspace 首页">
        <span class="brand-mark">N</span><span class="brand-name">SMS<span>WORKSPACE</span></span>
      </a>
      <button class="menu-toggle" aria-label="打开菜单" data-action="menu">☰</button>
      <nav class="${state.mobileMenu ? 'nav open' : 'nav'}">
        <a href="#" data-page="home" class="${state.page==='home'?'active':''}">主页</a>
        <a href="#" data-page="receive" class="${state.page==='receive'?'active':''}">短信接收</a>
        <a href="#" data-page="about" class="${state.page==='about'?'active':''}">关于我们</a>
        <a href="#" data-page="docs" class="${state.page==='docs'?'active':''}">API 文档</a>
      </nav>
      <div class="top-actions"><button class="language" data-action="language">◎ ${state.lang}⌄</button><button class="btn btn-outline" data-action="login">登录</button><button class="btn btn-primary" data-action="register">免费注册 <span>↗</span></button></div>
    </header>`;
}

function countryRows() {
  const q = state.query.trim().toLowerCase();
  const list = countries.filter(c => !q || c.join(' ').toLowerCase().includes(q));
  return list.map((c,i) => `<div class="country-row"><div class="country-name"><span class="flag">${flag(c[0])}</span><span><b>${c[1]}</b><small>${c[2]}</small></span></div><code>${c[0]}</code><span class="availability"><i></i> 可查询</span><span class="row-arrow">›</span></div>`).join('') || '<div class="empty">没有找到匹配的国家或地区</div>';
}
function flag(code) { return ({US:'🇺🇸',RU:'🇷🇺',CN:'🇨🇳',GB:'🇬🇧',CA:'🇨🇦',IN:'🇮🇳',SG:'🇸🇬',JP:'🇯🇵',KR:'🇰🇷',BR:'🇧🇷',DE:'🇩🇪',FR:'🇫🇷',AU:'🇦🇺',TH:'🇹🇭',MY:'🇲🇾',ID:'🇮🇩',PH:'🇵🇭',UA:'🇺🇦',ES:'🇪🇸',NL:'🇳🇱'})[code] || '🌐'; }

function home() {
  return `
    <main>
      <section class="hero">
        <div class="hero-glow glow-a"></div><div class="hero-glow glow-b"></div>
        <div class="hero-inner">
          <div class="eyebrow"><span class="pulse"></span> GLOBAL SMS SERVICE <span class="eyebrow-line"></span> 安全 · 稳定 · 高效</div>
          <h1>全球短信接收服务<br/><em>连接每一个可能</em></h1>
          <p class="hero-copy">覆盖多个国家和地区的短信服务工作台。清晰的服务目录、便捷的账户管理与开发者 API，让业务集成更简单。</p>
          <div class="hero-buttons"><button class="btn btn-primary btn-large" data-page="receive">探索短信服务 <span>→</span></button><button class="btn btn-glass btn-large" data-action="register">创建账户</button></div>
          <div class="hero-proof"><span>✦ 面向全球用户</span><span>⌁ 开发者 API</span><span>◈ 统一工作台</span></div>
        </div>
        <div class="hero-visual"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="phone-card"><div class="phone-top"><span></span><span></span><span></span></div><div class="phone-label">SMS INBOX <b>LIVE</b></div><div class="phone-number">+1 (•••) •••-4821</div><div class="sms-bubble"><small>服务通知 · 刚刚</small><strong>您的验证码已送达</strong><div class="code-dots"><i></i><i></i><i></i><i></i><i></i><i></i></div></div><div class="phone-foot"><span>SECURE CONNECTION</span><span>●</span></div></div><div class="float-chip chip-top">✦ <span>全球覆盖</span><b>184+</b></div><div class="float-chip chip-bottom">↗ <span>开发者接口</span><b>API Ready</b></div></div>
      </section>
      <section class="stats-strip"><div><b>184<span>+</span></b><small>国家与地区覆盖</small></div><div><b>24<span>/</span>7</b><small>全天候服务入口</small></div><div><b>API</b><small>开发者集成支持</small></div><div><b>1<span>+</span></b><small>统一管理工作台</small></div></section>
      <section class="section feature-section"><div class="section-heading"><div><div class="eyebrow dark">BUILT FOR YOUR WORKFLOW</div><h2>短信服务，一站完成</h2></div><p>从国家选择到服务查询，以直观的工作流程帮助你快速找到所需服务。</p></div><div class="feature-grid"><article class="feature-card"><span class="feature-icon blue">⌖</span><h3>全球覆盖范围</h3><p>按国家和地区浏览服务目录，快速定位目标区域。</p><a href="#" data-page="receive">查看覆盖地区 <b>↗</b></a></article><article class="feature-card"><span class="feature-icon violet">◈</span><h3>清晰的服务目录</h3><p>将国家、服务与订单信息集中展示，操作路径一目了然。</p><a href="#" data-page="receive">浏览服务目录 <b>↗</b></a></article><article class="feature-card"><span class="feature-icon cyan">⌘</span><h3>开发者 API</h3><p>通过标准化接口文档了解集成方式与请求规范。</p><a href="#" data-page="docs">阅读 API 文档 <b>↗</b></a></article></div></section>
      <section class="coverage-section"><div class="coverage-copy"><div class="eyebrow dark">WORLDWIDE COVERAGE</div><h2>覆盖 184+<br/><em>国家和地区</em></h2><p>常用国家与地区集中呈现。你可以通过名称或地区代码搜索，快速定位目标区域。</p><button class="btn btn-primary" data-page="receive">查看全部地区 →</button></div><div class="coverage-panel"><div class="panel-head"><div><b>国家 / 地区</b><small>COUNTRY DIRECTORY</small></div><span class="live-tag"><i></i> 目录预览</span></div><div class="mini-countries">${countries.slice(0,12).map(c=>`<div><span>${flag(c[0])}</span><b>${c[1]}</b><code>${c[0]}</code></div>`).join('')}</div><div class="panel-foot">选择国家后，可继续查看对应服务信息 <span>→</span></div></div></section>
      <section class="cta-section"><div><div class="eyebrow">GET STARTED</div><h2>准备好开始了吗？</h2><p>创建你的工作台账户，了解服务目录与开发者接入方式。</p></div><button class="btn btn-light btn-large" data-action="register">立即开始 <span>↗</span></button></section>
    </main>`;
}

function receive() {
  return `<main class="inner-page"><section class="page-hero"><div class="eyebrow dark">SMS SERVICE DIRECTORY</div><h1>短信接收<span> / 国家与地区</span></h1><p>搜索国家或地区代码，浏览可查询的服务范围。</p></section><section class="directory-card"><div class="directory-head"><div><h2>国家与地区</h2><p>选择一个地区，继续查看服务目录</p></div><label class="search-box"><span>⌕</span><input id="country-search" value="${state.query}" placeholder="搜索国家 / 代码" autocomplete="off"/><kbd>⌘ K</kbd></label></div><div class="table-label"><span>国家 / 地区</span><span>地区代码</span><span>目录状态</span><span></span></div><div class="country-list" id="country-list">${countryRows()}</div><div class="directory-foot">当前展示 ${countries.length} 个示例地区 <span>目录数据为演示内容，接入服务端后可显示实时库存</span></div></section></main>`;
}

function about() {
  return `<main class="inner-page"><section class="page-hero"><div class="eyebrow dark">ABOUT SMS WORKSPACE</div><h1>让短信服务<span>更简单</span></h1><p>一个围绕全球服务目录、账户管理与开发者接入构建的工作台界面。</p></section><section class="about-grid"><article><span class="feature-icon blue">⌖</span><h2>清晰的服务入口</h2><p>以国家与地区为入口组织服务信息，让查找过程更直接。</p></article><article><span class="feature-icon violet">◈</span><h2>统一的工作空间</h2><p>将账户、订单与开发者资源集中在一致的产品体验中。</p></article><article><span class="feature-icon cyan">⌘</span><h2>面向开发者</h2><p>提供接口说明与集成指引，便于后续连接经过授权的服务提供商。</p></article></section></main>`;
}

function docs() {
  return `<main class="inner-page docs-page"><section class="page-hero"><div class="eyebrow dark">DEVELOPER CENTER</div><h1>API <span>开发者文档</span></h1><p>接口集成结构示例。上线前请替换为你拥有授权的服务端 API 与鉴权配置。</p></section><div class="docs-layout"><aside class="docs-nav"><b>快速开始</b><a href="#auth">身份验证</a><a href="#countries">地区目录</a><a href="#services">服务目录</a><a href="#orders">订单流程</a></aside><div class="docs-content"><section id="auth"><h2>身份验证</h2><p>服务端请求应使用安全的请求头传递 API 凭证。请勿将密钥写入浏览器端代码或公开仓库。</p><pre><code>Authorization: Bearer YOUR_SERVER_SIDE_KEY</code></pre></section><section id="countries"><h2>获取地区目录</h2><p>建议由服务端提供缓存后的地区列表，并在页面中展示明确的数据更新时间。</p><pre><code>GET /api/countries</code></pre></section><section id="services"><h2>获取服务目录</h2><pre><code>GET /api/services?country=US</code></pre><p>根据地区筛选服务，并由后端校验用户权限、可用性与价格。</p></section><section id="orders"><h2>订单流程</h2><p>订单创建、状态查询、取消与退款均应由可信服务端执行，并记录审计日志。当前仓库仅包含前端演示，不会请求或接收真实验证码。</p><pre><code>POST /api/orders\nGET  /api/orders/:id</code></pre></section></div></div></main>`;
}

function footer() {
  return `<footer class="footer"><div class="footer-main"><a class="brand brand-footer" href="#" data-page="home"><span class="brand-mark">N</span><span class="brand-name">SMS<span>WORKSPACE</span></span></a><p>全球短信服务工作台<br/>清晰、可靠、面向开发者。</p><div class="footer-links"><a href="#" data-page="home">主页</a><a href="#" data-page="receive">短信接收</a><a href="#" data-page="about">关于我们</a><a href="#" data-page="docs">API 文档</a></div></div><div class="footer-bottom"><span>© 2026 SMS Workspace. Independent interface project.</span><span>演示版本 · 尚未连接真实服务</span></div></footer>`;
}

function modal() {
  if (!state.modal) return '';
  return `<div class="modal-backdrop" data-action="backdrop"><section class="auth-modal" role="dialog" aria-modal="true" aria-labelledby="auth-title"><button class="modal-close" data-action="close" aria-label="关闭">×</button><div class="brand modal-brand"><span class="brand-mark">N</span><span class="brand-name">SMS<span>WORKSPACE</span></span></div><div class="eyebrow dark">WELCOME BACK</div><h2 id="auth-title">登录工作台</h2><p>账户认证功能需要连接你自己的后端服务。</p><form id="demo-auth"><label>用户名或邮箱<input name="username" placeholder="请输入用户名或邮箱" required /></label><label>密码<input name="password" type="password" placeholder="请输入密码" required /></label><button class="btn btn-primary btn-full" type="submit">继续</button></form><div class="demo-note">演示界面：不会提交或保存你输入的账户信息。</div></section></div>`;
}

function render() {
  const pages = {home,receive,about,docs};
  app.innerHTML = header() + (pages[state.page] || home)() + footer() + modal();
  const search = document.querySelector('#country-search');
  if (search) search.addEventListener('input', e => {
    state.query = e.target.value;
    const list = document.querySelector('#country-list');
    list.innerHTML = countryRows();
  });
}

app.addEventListener('click', e => {
  const target = e.target.closest('[data-page],[data-action]');
  if (!target) return;
  if (target.dataset.page) {
    e.preventDefault(); state.page = target.dataset.page; state.query=''; state.mobileMenu=false; render(); window.scrollTo({top:0,behavior:'smooth'}); return;
  }
  const action = target.dataset.action;
  if (action === 'login' || action === 'register') { state.modal=true; render(); }
  if (action === 'close' || action === 'backdrop' && e.target === target) { state.modal=false; render(); }
  if (action === 'menu') { state.mobileMenu=!state.mobileMenu; render(); }
  if (action === 'language') { state.lang=state.lang==='中文'?'English':'中文'; render(); }
});
app.addEventListener('submit', e => {
  if (e.target.id === 'demo-auth') { e.preventDefault(); state.modal=false; render(); window.alert('当前为前端演示版本，尚未连接账户认证服务。'); }
});
document.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase()==='k') { e.preventDefault(); state.page='receive'; state.query=''; render(); document.querySelector('#country-search')?.focus(); }
  if (e.key==='Escape' && state.modal) { state.modal=false; render(); }
});
render();
