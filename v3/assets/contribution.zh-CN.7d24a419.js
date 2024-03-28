import{o as a,a as e,y as s}from"./vue-libs.b44bc779.js";const t={class:"van-doc-markdown-body"},i=s(`<h1>\u8D21\u732E\u6307\u5357</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u611F\u8C22\u4F60\u4F7F\u7528 Vant\u3002</p><p>\u4EE5\u4E0B\u662F\u5173\u4E8E\u5411 Vant \u63D0\u4EA4\u53CD\u9988\u6216\u4EE3\u7801\u7684\u6307\u5357\u3002\u5728\u5411 Vant \u63D0\u4EA4 issue \u6216\u8005 PR \u4E4B\u524D\uFF0C\u8BF7\u5148\u82B1\u51E0\u5206\u949F\u65F6\u95F4\u9605\u8BFB\u4EE5\u4E0B\u5185\u5BB9\u3002</p></div><div class="van-doc-card"><h3 id="issue-gui-fan" tabindex="-1">Issue \u89C4\u8303</h3><ul><li>\u9047\u5230\u95EE\u9898\u65F6\uFF0C\u8BF7\u5148\u786E\u8BA4\u8FD9\u4E2A\u95EE\u9898\u662F\u5426\u5DF2\u7ECF\u5728 issue \u4E2D\u6709\u8BB0\u5F55\u6216\u8005\u5DF2\u88AB\u4FEE\u590D\u3002</li><li>\u63D0 issue \u65F6\uFF0C\u8BF7\u7528\u7B80\u77ED\u7684\u8BED\u8A00\u63CF\u8FF0\u9047\u5230\u7684\u95EE\u9898\uFF0C\u5E76\u6DFB\u52A0\u51FA\u73B0\u95EE\u9898\u65F6\u7684\u73AF\u5883\u548C\u590D\u73B0\u6B65\u9AA4\u3002</li></ul></div><h2 id="can-yu-kai-fa" tabindex="-1">\u53C2\u4E0E\u5F00\u53D1</h2><div class="van-doc-card"><h3 id="ben-di-kai-fa" tabindex="-1">\u672C\u5730\u5F00\u53D1</h3><p>\u5728\u8FDB\u884C\u672C\u5730\u5F00\u53D1\u524D\uFF0C\u8BF7\u5148\u786E\u4FDD\u4F60\u7684\u5F00\u53D1\u73AF\u5883\u4E2D\u5B89\u88C5\u4E86 <a href="https://nodejs.org" target="_blank">Node.js &gt;= 14.19.0</a>\u3002</p><p>\u6309\u7167\u4E0B\u9762\u7684\u6B65\u9AA4\u64CD\u4F5C\uFF0C\u5373\u53EF\u5728\u672C\u5730\u5F00\u53D1 Vant \u7EC4\u4EF6\u3002</p><pre><code class="language-bash"><span class="hljs-comment"># \u514B\u9686\u4ED3\u5E93</span>
git <span class="hljs-built_in">clone</span> git@github.com:vant-ui/vant.git

<span class="hljs-comment"># \u542F\u7528 pnpm \u5305\u7BA1\u7406\u5668</span>
corepack <span class="hljs-built_in">enable</span>

<span class="hljs-comment"># \u5982\u679C\u65E0\u6CD5\u4F7F\u7528 corepack\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u624B\u52A8\u5B89\u88C5 pnpm</span>
npm install -g pnpm@7

<span class="hljs-comment"># \u5B89\u88C5\u4F9D\u8D56</span>
pnpm i

<span class="hljs-comment"># \u8FDB\u5165\u5F00\u53D1\u6A21\u5F0F\uFF0C\u6D4F\u89C8\u5668\u8BBF\u95EE localhost</span>
pnpm dev
</code></pre><p>\u4ED3\u5E93\u7684\u4E0D\u540C\u5206\u652F\u5BF9\u5E94\u4E0D\u540C\u7684 Vant \u7248\u672C\uFF0C\u8BF7\u5207\u6362\u5230\u5BF9\u5E94\u5206\u652F\u8FDB\u884C\u5F00\u53D1\uFF1A</p><ul><li>dev \u5206\u652F\u5BF9\u5E94 Vant 4 \u7248\u672C\uFF0C\u9002\u7528\u4E8E Vue 3</li><li>3.x \u5206\u652F\u5BF9\u5E94 Vant 3 \u7248\u672C \uFF0C\u9002\u7528\u4E8E Vue 3</li><li>2.x \u5206\u652F\u5BF9\u5E94 Vant 2 \u7248\u672C\uFF0C\u9002\u7528\u4E8E Vue 2</li></ul></div><div class="van-doc-card"><h3 id="jing-xiang-cang-ku" tabindex="-1">\u955C\u50CF\u4ED3\u5E93</h3><p>\u5982\u679C GitHub \u514B\u9686\u901F\u5EA6\u8F83\u6162\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u514B\u9686 Vant \u5728 gitee \u4E0A\u7684<a href="https://gitee.com/vant-contrib/vant" target="_blank">\u955C\u50CF\u4ED3\u5E93</a>\uFF1A</p><pre><code class="language-bash">git <span class="hljs-built_in">clone</span> git@gitee.com:vant-contrib/vant.git
</code></pre><p>\u955C\u50CF\u4ED3\u5E93\u4EC5\u7528\u4E8E\u52A0\u5FEB\u56FD\u5185\u7684\u8BBF\u95EE\u901F\u5EA6\uFF0C\u8BF7\u52FF\u5728\u955C\u50CF\u4ED3\u5E93\u4E2D\u63D0 issue \u548C Pull Request\u3002</p></div><div class="van-doc-card"><h3 id="mu-lu-jie-gou" tabindex="-1">\u76EE\u5F55\u7ED3\u6784</h3><p>Vant \u91C7\u7528 monorepo \u8FDB\u884C\u4EE3\u7801\u7BA1\u7406\uFF0C\u6240\u6709\u5B50\u5305\u5728 <code>packages</code> \u76EE\u5F55\u4E0B:</p><pre><code>root
\u2514\u2500 packages
   \u251C\u2500 vant        # \u7EC4\u4EF6\u5E93
   \u251C\u2500 vant-cli    # \u811A\u624B\u67B6
   \u251C\u2500 vant-icons  # \u56FE\u6807\u5E93
   \u251C\u2500 vant-use    # Composition API
   \u2514\u2500 ....        # \u5176\u4ED6\u5468\u8FB9 npm \u5305
</code></pre><p>\u5176\u4E2D\uFF0C<code>vant</code> \u76EE\u5F55\u4E3A\u7EC4\u4EF6\u5E93\u7684\u6838\u5FC3\u4EE3\u7801\uFF1A</p><pre><code>vant
\u251C\u2500 docs             # \u6587\u6863
\u251C\u2500 src              # \u7EC4\u4EF6\u6E90\u4EE3\u7801
\u251C\u2500 test             # \u5355\u6D4B\u5DE5\u5177\u7C7B
\u2514\u2500 vant.config.mjs  # \u6587\u6863\u7F51\u7AD9\u914D\u7F6E
</code></pre><p><code>src</code> \u76EE\u5F55\u5305\u542B\u5404\u4E2A\u7EC4\u4EF6\u7684\u6E90\u7801\uFF0C\u6BCF\u4E2A\u6587\u4EF6\u5939\u5BF9\u5E94\u4E00\u4E2A\u7EC4\u4EF6\uFF1A</p><pre><code>src
\u2514\u2500 button
   \u251C\u2500 demo             # \u793A\u4F8B\u4EE3\u7801
   \u251C\u2500 test             # \u5355\u5143\u6D4B\u8BD5
   \u251C\u2500 Component.tsx    # \u7EC4\u4EF6
   \u251C\u2500 index.ts         # \u7EC4\u4EF6\u5165\u53E3
   \u251C\u2500 index.less       # \u6837\u5F0F
   \u251C\u2500 var.less         # \u6837\u5F0F\u53D8\u91CF
   \u251C\u2500 README.md        # \u82F1\u6587\u6587\u6863
   \u2514\u2500 README.zh-CN.md  # \u4E2D\u6587\u6587\u6863
</code></pre></div><div class="van-doc-card"><h3 id="dai-ma-gui-fan" tabindex="-1">\u4EE3\u7801\u89C4\u8303</h3><p>\u5728\u7F16\u5199\u4EE3\u7801\u65F6\uFF0C\u8BF7\u6CE8\u610F\uFF1A</p><ul><li>\u786E\u4FDD\u4EE3\u7801\u53EF\u4EE5\u901A\u8FC7\u4ED3\u5E93\u7684 ESLint \u6821\u9A8C\u3002</li><li>\u786E\u4FDD\u4EE3\u7801\u683C\u5F0F\u662F\u89C4\u8303\u7684\uFF0C\u4F7F\u7528 prettier \u8FDB\u884C\u4EE3\u7801\u683C\u5F0F\u5316\u3002</li><li>\u786E\u4FDD\u6CA1\u6709\u4F7F\u7528\u8D85\u51FA\u517C\u5BB9\u6027\u8303\u56F4\u7684 API\uFF0C\u6BD4\u5982 <code>async/await</code>\u3002</li></ul></div><h2 id="ti-jiao-pr" tabindex="-1">\u63D0\u4EA4 PR</h2><div class="van-doc-card"><h3 id="can-kao-zhi-nan" tabindex="-1">\u53C2\u8003\u6307\u5357</h3><p>\u5982\u679C\u4F60\u662F\u7B2C\u4E00\u6B21\u5728 GitHub \u4E0A\u63D0 Pull Request \uFF0C\u53EF\u4EE5\u9605\u8BFB\u4E0B\u9762\u8FD9\u4E24\u7BC7\u6587\u7AE0\u6765\u5B66\u4E60\uFF1A</p><ul><li><a href="https://segmentfault.com/a/1190000000736629" target="_blank">\u5982\u4F55\u4F18\u96C5\u5730\u5728 GitHub \u4E0A\u8D21\u732E\u4EE3\u7801</a></li><li><a href="https://github.com/firstcontributions/first-contributions/blob/master/translations/README.chs.md" target="_blank">\u7B2C\u4E00\u6B21\u53C2\u4E0E\u5F00\u6E90</a></li></ul></div><div class="van-doc-card"><h3 id="pull-request-gui-fan" tabindex="-1">Pull Request \u89C4\u8303</h3><p>\u5728\u63D0\u4EA4 Pull Request \u65F6\uFF0C\u8BF7\u6CE8\u610F\uFF1A</p><ul><li>\u5982\u679C\u9047\u5230\u95EE\u9898\uFF0C\u5EFA\u8BAE\u4FDD\u6301\u4F60\u7684 PR \u8DB3\u591F\u5C0F\u3002\u4FDD\u8BC1\u4E00\u4E2A PR \u53EA\u89E3\u51B3\u5355\u4E2A\u95EE\u9898\u3001\u6DFB\u52A0\u5355\u4E2A\u529F\u80FD\u3002</li><li>\u5F53\u65B0\u589E\u7EC4\u4EF6\u6216\u8005\u4FEE\u6539\u539F\u6709\u7EC4\u4EF6\u65F6\uFF0C\u8BB0\u5F97\u589E\u52A0\u6216\u8005\u4FEE\u6539\u5BF9\u5E94\u7684\u5355\u5143\u6D4B\u8BD5\uFF0C\u4FDD\u8BC1\u4EE3\u7801\u7684\u7A33\u5B9A\u3002</li><li>\u5728 PR \u4E2D\u8BF7\u6DFB\u52A0\u5408\u9002\u7684\u63CF\u8FF0\uFF0C\u5E76\u5173\u8054\u76F8\u5173\u7684 Issue\u3002</li></ul></div><div class="van-doc-card"><h3 id="pull-request-liu-cheng" tabindex="-1">Pull Request \u6D41\u7A0B</h3><ol><li>fork \u4E3B\u4ED3\u5E93\uFF0C\u5982\u679C\u5DF2\u7ECF fork \u8FC7\uFF0C\u8BF7\u540C\u6B65\u4E3B\u4ED3\u5E93\u7684\u6700\u65B0\u4EE3\u7801\u3002</li><li>\u57FA\u4E8E fork \u540E\u4ED3\u5E93\u7684 dev \u5206\u652F\u65B0\u5EFA\u4E00\u4E2A\u5206\u652F\uFF0C\u6BD4\u5982 <code>feature/button_color</code>\u3002</li><li>\u5728\u65B0\u5206\u652F\u4E0A\u8FDB\u884C\u5F00\u53D1\uFF0C\u5F00\u53D1\u5B8C\u6210\u540E\uFF0C\u63D0 Pull Request \u5230\u4E3B\u4ED3\u5E93\u7684 dev \u5206\u652F\u3002</li><li>Pull Request \u4F1A\u5728 Review \u901A\u8FC7\u540E\u88AB\u5408\u5E76\u5230\u4E3B\u4ED3\u5E93\u3002</li><li>\u7B49\u5F85 Vant \u53D1\u5E03\u65B0\u7248\u672C\uFF0C\u4E00\u822C\u662F\u6BCF\u5468\u4E00\u6B21\u3002</li></ol></div><div class="van-doc-card"><h3 id="tong-bu-zui-xin-dai-ma" tabindex="-1">\u540C\u6B65\u6700\u65B0\u4EE3\u7801</h3><p>\u63D0 Pull Request \u524D\uFF0C\u8BF7\u4F9D\u7167\u4E0B\u9762\u7684\u6D41\u7A0B\u540C\u6B65\u4E3B\u4ED3\u5E93\u7684\u6700\u65B0\u4EE3\u7801\uFF1A</p><pre><code class="language-bash"><span class="hljs-comment"># \u6DFB\u52A0\u4E3B\u4ED3\u5E93\u5230 remote\uFF0C\u4F5C\u4E3A fork \u540E\u4ED3\u5E93\u7684\u4E0A\u6E38\u4ED3\u5E93</span>
git remote add upstream git@github.com:vant-ui/vant.git

<span class="hljs-comment"># \u62C9\u53D6\u4E3B\u4ED3\u5E93\u6700\u65B0\u4EE3\u7801</span>
git fetch upstream

<span class="hljs-comment"># \u5207\u6362\u81F3 dev \u5206\u652F</span>
git checkout dev

<span class="hljs-comment"># \u5408\u5E76\u4E3B\u4ED3\u5E93\u4EE3\u7801</span>
git merge upstream/dev
</code></pre></div>`,13),l=[i],r={__name:"contribution.zh-CN",setup(c,{expose:n}){return n({frontmatter:{}}),(d,p)=>(a(),e("div",t,l))}};export{r as default};
