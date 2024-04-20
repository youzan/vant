import{o as a,a as t,y as n}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},e=n(`<h1>CountDown</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to display the countdown value in real time, and precision supports milliseconds.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">CountDown</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CountDown</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-count-down</span> <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;time&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> time = <span class="hljs-title function_">ref</span>(<span class="hljs-number">30</span> * <span class="hljs-number">60</span> * <span class="hljs-number">60</span> * <span class="hljs-number">1000</span>);
    <span class="hljs-keyword">return</span> { time };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="custom-format" tabindex="-1">Custom Format</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-count-down</span> <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;time&quot;</span> <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;DD Day, HH:mm:ss&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="millisecond" tabindex="-1">Millisecond</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-count-down</span> <span class="hljs-attr">millisecond</span> <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;time&quot;</span> <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;HH:mm:ss:SS&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-style" tabindex="-1">Custom Style</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-count-down</span> <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;time&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">default</span>=<span class="hljs-string">&quot;timeData&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>{{ timeData.hours }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;colon&quot;</span>&gt;</span>:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>{{ timeData.minutes }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;colon&quot;</span>&gt;</span>:<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>{{ timeData.seconds }}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-count-down</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.colon</span> {
    <span class="hljs-attribute">display</span>: inline-block;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> <span class="hljs-number">4px</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#ee0a24</span>;
  }
  <span class="hljs-selector-class">.block</span> {
    <span class="hljs-attribute">display</span>: inline-block;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">22px</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#ee0a24</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="manual-control" tabindex="-1">Manual Control</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-count-down</span>
  <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;countDown&quot;</span>
  <span class="hljs-attr">millisecond</span>
  <span class="hljs-attr">:time</span>=<span class="hljs-string">&quot;3000&quot;</span>
  <span class="hljs-attr">:auto-start</span>=<span class="hljs-string">&quot;false&quot;</span>
  <span class="hljs-attr">format</span>=<span class="hljs-string">&quot;ss:SSS&quot;</span>
  @<span class="hljs-attr">finish</span>=<span class="hljs-string">&quot;onFinish&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-grid</span> <span class="hljs-attr">clickable</span> <span class="hljs-attr">:column-num</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Start&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;play-circle-o&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;start&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Pause&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;pause-circle-o&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;pause&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-grid-item</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Reset&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;replay&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;reset&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-grid</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> countDown = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">start</span> = (<span class="hljs-params"></span>) =&gt; {
      countDown.<span class="hljs-property">value</span>.<span class="hljs-title function_">start</span>();
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">pause</span> = (<span class="hljs-params"></span>) =&gt; {
      countDown.<span class="hljs-property">value</span>.<span class="hljs-title function_">pause</span>();
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">reset</span> = (<span class="hljs-params"></span>) =&gt; {
      countDown.<span class="hljs-property">value</span>.<span class="hljs-title function_">reset</span>();
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onFinish</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;Finished&#39;</span>);

    <span class="hljs-keyword">return</span> {
      start,
      pause,
      reset,
      onFinish,
      countDown,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>time</td><td>Total time, unit milliseconds</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>format</td><td>Time format</td><td><em>string</em></td><td><code>HH:mm:ss</code></td></tr><tr><td>auto-start</td><td>Whether to auto start count down</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>millisecond</td><td>Whether to enable millisecond render</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="available-formats" tabindex="-1">Available formats</h3><table><thead><tr><th>Format</th><th>Description</th></tr></thead><tbody><tr><td>DD</td><td>Day</td></tr><tr><td>HH</td><td>Hour</td></tr><tr><td>mm</td><td>Minute</td></tr><tr><td>ss</td><td>Second</td></tr><tr><td>S</td><td>Millisecond, 1-digit</td></tr><tr><td>SS</td><td>Millisecond, 2-digits</td></tr><tr><td>SSS</td><td>Millisecond, 3-digits</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>finish</td><td>Emitted when count down finished</td><td>-</td></tr><tr><td>change</td><td>Emitted when count down changed</td><td><em>currentTime: CurrentTime</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td>default</td><td>Custom Content</td><td><em>currentTime: CurrentTime</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="currenttime-structure" tabindex="-1">CurrentTime Structure</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>total</td><td>Total time, unit milliseconds</td><td><em>number</em></td></tr><tr><td>days</td><td>Remain days</td><td><em>number</em></td></tr><tr><td>hours</td><td>Remain hours</td><td><em>number</em></td></tr><tr><td>minutes</td><td>Remain minutes</td><td><em>number</em></td></tr><tr><td>seconds</td><td>Remain seconds</td><td><em>number</em></td></tr><tr><td>milliseconds</td><td>Remain milliseconds</td><td><em>number</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3><p>Use <a href="https://v3.vuejs.org/guide/component-template-refs.html" target="_blank">ref</a> to get CountDown instance and call instance methods.</p><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>start</td><td>Start count down</td><td>-</td><td>-</td></tr><tr><td>pause</td><td>Pause count down</td><td>-</td><td>-</td></tr><tr><td>reset</td><td>Reset count down</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">CountDownProps</span>,
  <span class="hljs-title class_">CountDownInstance</span>,
  <span class="hljs-title class_">CountDownCurrentTime</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>CountDownInstance</code> is the type of component instance:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CountDownInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> countDownRef = ref&lt;<span class="hljs-title class_">CountDownInstance</span>&gt;();

countDownRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">start</span>();
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-count-down-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-count-down-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-count-down-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr></tbody></table></div>`,19),p=[e],i={__name:"README",setup(c,{expose:s}){return s({frontmatter:{}}),(d,r)=>(a(),t("div",l,p))}};export{i as default};
