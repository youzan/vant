import{o as a,a as t,y as n}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},e=n(`<h1>SwipeCell</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used for cell components that can slide left and right to display operation buttons.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">SwipeCell</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">SwipeCell</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">left</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">square</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Select&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Cell Content&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">square</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Delete&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">square</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Collect&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-cell</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-content" tabindex="-1">Custom Content</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-card</span>
    <span class="hljs-attr">num</span>=<span class="hljs-string">&quot;2&quot;</span>
    <span class="hljs-attr">price</span>=<span class="hljs-string">&quot;2.00&quot;</span>
    <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;Description&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>
    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;goods-card&quot;</span>
    <span class="hljs-attr">thumb</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">square</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Delete&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;delete-button&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-cell</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.goods-card</span> {
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">background-color</span>: @white;
  }

  <span class="hljs-selector-class">.delete-button</span> {
    <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="before-close" tabindex="-1">Before Close</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-swipe-cell</span> <span class="hljs-attr">:before-close</span>=<span class="hljs-string">&quot;beforeClose&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">left</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">square</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Select&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Cell&quot;</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;Cell Content&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">square</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;Delete&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-swipe-cell</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Dialog</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">beforeClose</span> = (<span class="hljs-params">{ position }</span>) =&gt; {
      <span class="hljs-keyword">switch</span> (position) {
        <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;left&#39;</span>:
        <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;cell&#39;</span>:
        <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;outside&#39;</span>:
          <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
        <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;right&#39;</span>:
          <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {
            <span class="hljs-title class_">Dialog</span>.<span class="hljs-title function_">confirm</span>({
              <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;Are you sure to delete?&#39;</span>,
            }).<span class="hljs-title function_">then</span>(resolve);
          });
      }
    };

    <span class="hljs-keyword">return</span> { beforeClose };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>name</td><td>Identifier of SwipeCell, usually a unique string or number</td><td><em>number | string</em></td><td>-</td></tr><tr><td>left-width</td><td>Width of the left swipe area</td><td><em>number | string</em></td><td><code>auto</code></td></tr><tr><td>right-width</td><td>Width of the right swipe area</td><td><em>number | string</em></td><td><code>auto</code></td></tr><tr><td>before-close</td><td>Callback function before close</td><td><em>(args) =&gt; boolean | Promise&lt;boolean&gt;</em></td><td>-</td></tr><tr><td>disabled</td><td>Whether to disabled swipe</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>stop-propagation</td><td>Whether to stop touchmove event propagation</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>custom content</td></tr><tr><td>left</td><td>content of left scrollable area</td></tr><tr><td>right</td><td>content of right scrollable area</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>click</td><td>Emitted when SwipeCell is clicked</td><td><em>position: &#39;left&#39; | &#39;right&#39; | &#39;cell&#39; | &#39;outside&#39;</em></td></tr><tr><td>open</td><td>Emitted when SwipeCell is opened</td><td><em>value: { name: string | number, position: &#39;left&#39; | &#39;right&#39; }</em></td></tr><tr><td>close</td><td>Emitted when SwipeCell is closed</td><td><em>value: { name: string | number, position: &#39;left&#39; | &#39;right&#39; | &#39;cell&#39; | &#39;outside&#39; }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="beforeclose-params" tabindex="-1">beforeClose Params</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>name</td><td>Name</td><td><em>string | number</em></td></tr><tr><td>position</td><td>Click position</td><td><em>&#39;left&#39; | &#39;right&#39; | &#39;cell&#39; | &#39;outside&#39;</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3><p>Use <a href="https://v3.vuejs.org/guide/component-template-refs.html" target="_blank">ref</a> to get SwipeCell instance and call instance methods.</p><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>open</td><td>open SwipeCell</td><td>position: <code>left | right</code></td><td>-</td></tr><tr><td>close</td><td>close SwipeCell</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">SwipeCellSide</span>,
  <span class="hljs-title class_">SwipeCellProps</span>,
  <span class="hljs-title class_">SwipeCellPosition</span>,
  <span class="hljs-title class_">SwipeCellInstance</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>SwipeCellInstance</code> is the type of component instance:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SwipeCellInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> swipeCellRef = ref&lt;<span class="hljs-title class_">SwipeCellInstance</span>&gt;();

swipeCellRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">close</span>();
</code></pre></div>`,14),p=[e],i={__name:"README",setup(c,{expose:s}){return s({frontmatter:{}}),(o,h)=>(a(),t("div",l,p))}};export{i as default};
