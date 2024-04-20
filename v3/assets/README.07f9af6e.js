import{o as a,a as t,y as n}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},l=n(`<h1>Swipe</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to loop a group of pictures or content.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Swipe</span>, <span class="hljs-title class_">SwipeItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Swipe</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">SwipeItem</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><p>Use <code>autoplay</code> prop to set autoplay interval.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;my-swipe&quot;</span> <span class="hljs-attr">:autoplay</span>=<span class="hljs-string">&quot;3000&quot;</span> <span class="hljs-attr">indicator-color</span>=<span class="hljs-string">&quot;white&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.my-swipe</span> <span class="hljs-selector-class">.van-swipe-item</span> {
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">20px</span>;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">150px</span>;
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#39a9ed</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="lazy-render" tabindex="-1">Lazy Render</h3><p>Use <code>lazy-render</code> prop to enable lazy rendering.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span> <span class="hljs-attr">:autoplay</span>=<span class="hljs-string">&quot;3000&quot;</span> <span class="hljs-attr">lazy-render</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;image in images&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;image&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;image&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> images = [
      <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&#39;</span>,
      <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&#39;</span>,
    ];
    <span class="hljs-keyword">return</span> { images };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="change-event" tabindex="-1">Change Event</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">index</span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;Current Swipe index:&#39;</span> + index);
    <span class="hljs-keyword">return</span> { onChange };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="vertical-scrolling" tabindex="-1">Vertical Scrolling</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span> <span class="hljs-attr">:autoplay</span>=<span class="hljs-string">&quot;3000&quot;</span> <span class="hljs-attr">vertical</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="set-swipeitem-size" tabindex="-1">Set SwipeItem Size</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span> <span class="hljs-attr">:loop</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">:width</span>=<span class="hljs-string">&quot;300&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>
</code></pre><blockquote><p>It&#39;s not supported to set SwipeItem size in the loop mode.</p></blockquote></div><div class="van-doc-card"><h3 id="custom-indicator" tabindex="-1">Custom Indicator</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-item</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">indicator</span>=<span class="hljs-string">&quot;{ active, total }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom-indicator&quot;</span>&gt;</span>{{ active + 1 }}/{{ total }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.custom-indicator</span> {
    <span class="hljs-attribute">position</span>: absolute;
    <span class="hljs-attribute">right</span>: <span class="hljs-number">5px</span>;
    <span class="hljs-attribute">bottom</span>: <span class="hljs-number">5px</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">2px</span> <span class="hljs-number">5px</span>;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
    <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.1</span>);
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="swipe-props" tabindex="-1">Swipe Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>autoplay</td><td>Autoplay interval (ms)</td><td><em>number | string</em></td><td>-</td></tr><tr><td>duration</td><td>Animation duration (ms)</td><td><em>number | string</em></td><td><code>500</code></td></tr><tr><td>initial-swipe</td><td>Index of initial swipe, start from 0</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>width</td><td>Width of swipe item</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>height</td><td>Height of swipe item</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>loop</td><td>Whether to enable loop</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-indicators</td><td>Whether to show indicators</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>vertical</td><td>Whether to be vertical Scrolling</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>touchable</td><td>Whether to allow swipe by touch gesture</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>stop-propagation</td><td>Whether to stop touchmove event propagation</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>lazy-render</td><td>Whether to enable lazy render</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>indicator-color</td><td>Indicator color</td><td><em>string</em></td><td><code>#1989fa</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="swipe-events" tabindex="-1">Swipe Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>change</td><td>Emitted when current swipe changed</td><td>index: index of current swipe</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="swipeitem-events" tabindex="-1">SwipeItem Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click</td><td>Emitted when component is clicked</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="swipe-methods" tabindex="-1">Swipe Methods</h3><p>Use <a href="https://v3.vuejs.org/guide/component-template-refs.html" target="_blank">ref</a> to get Swipe instance and call instance methods..</p><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>prev</td><td>Swipe to prev item</td><td>-</td><td>-</td></tr><tr><td>next</td><td>Swipe to next item</td><td>-</td><td>-</td></tr><tr><td>swipeTo</td><td>Swipe to target index</td><td><em>index: number, options: SwipeToOptions</em></td><td>-</td></tr><tr><td>resize</td><td>Resize Swipe when container element resized or visibility changed</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SwipeProps</span>, <span class="hljs-title class_">SwipeInstance</span>, <span class="hljs-title class_">SwipeToOptions</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>SwipeInstance</code> is the type of component instance:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SwipeInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> swipeRef = ref&lt;<span class="hljs-title class_">SwipeInstance</span>&gt;();

swipeRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">next</span>();
</code></pre></div><div class="van-doc-card"><h3 id="swipetooptions" tabindex="-1">SwipeToOptions</h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>immediate</td><td>Whether to skip animation</td><td><em>boolean</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="swipe-slots" tabindex="-1">Swipe Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td>default</td><td>Content</td><td>-</td></tr><tr><td>indicator <code>v3.4.0</code></td><td>Custom indicator</td><td><em>{ active: number, total: number }</em></td></tr></tbody></table></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-swipe-indicator-size</td><td><em>6px</em></td><td>-</td></tr><tr><td>--van-swipe-indicator-margin</td><td><em>var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-swipe-indicator-active-opacity</td><td><em>1</em></td><td>-</td></tr><tr><td>--van-swipe-indicator-inactive-opacity</td><td><em>0.3</em></td><td>-</td></tr><tr><td>--van-swipe-indicator-active-background-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-swipe-indicator-inactive-background-color</td><td><em>var(--van-border-color)</em></td><td>-</td></tr></tbody></table></div>`,20),p=[l],r={__name:"README",setup(c,{expose:s}){return s({frontmatter:{}}),(i,h)=>(a(),t("div",e,p))}};export{r as default};
