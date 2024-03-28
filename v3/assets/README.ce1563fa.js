import{o as a,a as t,y as n}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},e=n(`<h1>Collapse</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Place a group of content in multiple collapsible panels, click the title of the panel to expand or contract its content.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Collapse</span>, <span class="hljs-title class_">CollapseItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Collapse</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CollapseItem</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><p>Use <code>v-model</code> to control the name of active panels.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;activeNames&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title1&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>Content 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title2&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>Content 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title3&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>Content 3<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> activeNames = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;1&#39;</span>]);
    <span class="hljs-keyword">return</span> { activeNames };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="accordion" tabindex="-1">Accordion</h3><p>In accordion mode, only one panel can be expanded at the same time.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;activeName&quot;</span> <span class="hljs-attr">accordion</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title1&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>Content 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title2&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>Content 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title3&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>Content 3<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> activeName = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;1&#39;</span>);
    <span class="hljs-keyword">return</span> { activeName };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="disabled" tabindex="-1">Disabled</h3><p>Use the <code>disabled</code> prop to disable CollapseItem.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;activeNames&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title1&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>Content 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title2&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>
    Content 2
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title3&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>
    Content 3
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-title" tabindex="-1">Custom title</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;activeNames&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">title</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Title1 <span class="hljs-tag">&lt;<span class="hljs-name">van-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;question-o&quot;</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    Content 1
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title2&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;shop-o&quot;</span>&gt;</span>
    Content 2
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> activeNames = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;1&#39;</span>]);
    <span class="hljs-keyword">return</span> { activeNames };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="toggle-all" tabindex="-1">Toggle All</h3><p>Using <code>toggleAll</code> method to toggle all items.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-collapse</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;activeNames&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title1&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>Content 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title2&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>Content 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-collapse-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title3&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>Content 3<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-collapse</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;openAll&quot;</span>&gt;</span>Open All<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleAll&quot;</span>&gt;</span>Toggle All<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> activeNames = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;1&#39;</span>]);
    <span class="hljs-keyword">const</span> collapse = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">openAll</span> = (<span class="hljs-params"></span>) =&gt; {
      collapse.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>(<span class="hljs-literal">true</span>);
    }
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">toggleAll</span> = (<span class="hljs-params"></span>) =&gt; {
      collapse.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>();
    },

    <span class="hljs-keyword">return</span> {
      activeNames,
      openAll,
      toggleAll,
      collapse,
    };
  },
};
</code></pre><blockquote><p>Tips: The toggleAll method cannot be used in accordion mode.</p></blockquote></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="collapse-props" tabindex="-1">Collapse Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>Names of current active panels</td><td>accordion mode: <em>number | string</em><br>non-accordion mode: <em>(number | string)[]</em></td><td>-</td></tr><tr><td>accordion</td><td>Whether to be accordion mode</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>border</td><td>Whether to show outer border</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="collapse-events" tabindex="-1">Collapse Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>change</td><td>Emitted when switching panel</td><td><em>activeNames: string | number | Array&lt;string | number&gt;</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="collapseitem-props" tabindex="-1">CollapseItem Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>name</td><td>Name</td><td><em>number | string</em></td><td><code>index</code></td></tr><tr><td>icon</td><td>Left Icon</td><td><em>string</em></td><td>-</td></tr><tr><td>size</td><td>Title size, can be set to <code>large</code></td><td><em>string</em></td><td>-</td></tr><tr><td>title</td><td>Title</td><td><em>number | string</em></td><td>-</td></tr><tr><td>value</td><td>Right text</td><td><em>number | string</em></td><td>-</td></tr><tr><td>label</td><td>Description below the title</td><td><em>string</em></td><td>-</td></tr><tr><td>border</td><td>Whether to show inner border</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>disabled</td><td>Whether to disabled collapse</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly <code>v3.0.12</code></td><td>Whether to be readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>is-link</td><td>Whether to show link icon</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>lazy-render <code>v3.4.5</code></td><td>Whether to lazy render util opened</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>title-class</td><td>Title className</td><td><em>string</em></td><td>-</td></tr><tr><td>value-class</td><td>Value className</td><td><em>string</em></td><td>-</td></tr><tr><td>label-class</td><td>Label className</td><td><em>string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="collapse-methods" tabindex="-1">Collapse Methods</h3><p>Use <a href="https://v3.vuejs.org/guide/component-template-refs.html" target="_blank">ref</a> to get Collapse instance and call instance methods.</p><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>toggleAll <code>v3.5.3</code></td><td>Toggle the expanded status of all collapses</td><td><em>options?: boolean | object</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="toggleall-usage" tabindex="-1">toggleAll Usage</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> type { <span class="hljs-title class_">CollapseInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> collapseRef = ref&lt;<span class="hljs-title class_">CollapseInstance</span>&gt;();

<span class="hljs-comment">// Toggle all</span>
collapseRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>();
<span class="hljs-comment">// Expand all</span>
collapseRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>(<span class="hljs-literal">true</span>);
<span class="hljs-comment">// UnExpand all</span>
collapseRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>(<span class="hljs-literal">false</span>);

<span class="hljs-comment">// Toggle all, skip disabled</span>
collapseRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>({
  <span class="hljs-attr">skipDisabled</span>: <span class="hljs-literal">true</span>,
});
<span class="hljs-comment">// Expand all, skip disabled</span>
collapseRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>({
  <span class="hljs-attr">expanded</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">skipDisabled</span>: <span class="hljs-literal">true</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="collapseitem-methods" tabindex="-1">CollapseItem Methods</h3><p>Use <a href="https://v3.vuejs.org/guide/component-template-refs.html" target="_blank">ref</a> to get CollapseItem instance and call instance methods.</p><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>toggle</td><td>Toggle expanded status</td><td><em>expanded: boolean</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">CollapseProps</span>,
  <span class="hljs-title class_">CollapseItemProps</span>,
  <span class="hljs-title class_">CollapseItemInstance</span>,
  <span class="hljs-title class_">CollapseToggleAllOptions</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>CollapseItemInstance</code> is the type of component instance:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CollapseItemInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> collapseItemRef = ref&lt;<span class="hljs-title class_">CollapseItemInstance</span>&gt;();

collapseItemRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggle</span>();
</code></pre></div><div class="van-doc-card"><h3 id="collapseitem-slots" tabindex="-1">CollapseItem Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Content</td></tr><tr><td>title</td><td>Custom header title</td></tr><tr><td>value</td><td>Custom header value</td></tr><tr><td>label <code>v3.1.1</code></td><td>Custom header label</td></tr><tr><td>icon</td><td>Custom header left icon</td></tr><tr><td>right-icon</td><td>Custom header right icon</td></tr></tbody></table></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-collapse-item-transition-duration</td><td><em>var(--van-animation-duration-base)</em></td><td>-</td></tr><tr><td>--van-collapse-item-content-padding</td><td><em>var(--van-padding-sm) var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-collapse-item-content-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-collapse-item-content-line-height</td><td><em>1.5</em></td><td>-</td></tr><tr><td>--van-collapse-item-content-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-collapse-item-content-background-color</td><td><em>var(--van-background-color-light)</em></td><td>-</td></tr><tr><td>--van-collapse-item-title-disabled-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr></tbody></table></div>`,20),p=[e],i={__name:"README",setup(c,{expose:s}){return s({frontmatter:{}}),(d,r)=>(a(),t("div",l,p))}};export{i as default};
