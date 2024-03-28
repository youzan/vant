import{o as a,a as t,y as n}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},l=n(`<h1>List</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>A list component to show items and control loading status.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">List</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">List</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-list</span>
  <span class="hljs-attr">v-model:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
  <span class="hljs-attr">:finished</span>=<span class="hljs-string">&quot;finished&quot;</span>
  <span class="hljs-attr">finished-text</span>=<span class="hljs-string">&quot;Finished&quot;</span>
  @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;onLoad&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-list</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> list = <span class="hljs-title function_">ref</span>([]);
    <span class="hljs-keyword">const</span> loading = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> finished = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onLoad</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) {
          list.<span class="hljs-property">value</span>.<span class="hljs-title function_">push</span>(list.<span class="hljs-property">value</span>.<span class="hljs-property">length</span> + <span class="hljs-number">1</span>);
        }
        loading.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;

        <span class="hljs-keyword">if</span> (list.<span class="hljs-property">value</span>.<span class="hljs-property">length</span> &gt;= <span class="hljs-number">40</span>) {
          finished.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span>;
        }
      }, <span class="hljs-number">1000</span>);
    };

    <span class="hljs-keyword">return</span> {
      list,
      onLoad,
      loading,
      finished,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="error-info" tabindex="-1">Error Info</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-list</span>
  <span class="hljs-attr">v-model:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
  <span class="hljs-attr">v-model:error</span>=<span class="hljs-string">&quot;error&quot;</span>
  <span class="hljs-attr">error-text</span>=<span class="hljs-string">&quot;Request failed. Click to reload&quot;</span>
  @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;onLoad&quot;</span>
&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-list</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> list = <span class="hljs-title function_">ref</span>([]);
    <span class="hljs-keyword">const</span> error = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> loading = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onLoad</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-title function_">fetchSomeThing</span>().<span class="hljs-title function_">catch</span>(<span class="hljs-function">() =&gt;</span> {
        error.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span>;
      });
    };

    <span class="hljs-keyword">return</span> {
      list,
      error,
      onLoad,
      loading,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="pullrefresh" tabindex="-1">PullRefresh</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-pull-refresh</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;refreshing&quot;</span> @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;onRefresh&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-list</span>
    <span class="hljs-attr">v-model:loading</span>=<span class="hljs-string">&quot;loading&quot;</span>
    <span class="hljs-attr">:finished</span>=<span class="hljs-string">&quot;finished&quot;</span>
    <span class="hljs-attr">finished-text</span>=<span class="hljs-string">&quot;Finished&quot;</span>
    @<span class="hljs-attr">load</span>=<span class="hljs-string">&quot;onLoad&quot;</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-list</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-pull-refresh</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> list = <span class="hljs-title function_">ref</span>([]);
    <span class="hljs-keyword">const</span> loading = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> finished = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> refreshing = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onLoad</span> = (<span class="hljs-params"></span>) =&gt; {
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-keyword">if</span> (refreshing.<span class="hljs-property">value</span>) {
          list.<span class="hljs-property">value</span> = [];
          refreshing.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
        }

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) {
          list.<span class="hljs-property">value</span>.<span class="hljs-title function_">push</span>(list.<span class="hljs-property">value</span>.<span class="hljs-property">length</span> + <span class="hljs-number">1</span>);
        }
        loading.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;

        <span class="hljs-keyword">if</span> (list.<span class="hljs-property">value</span>.<span class="hljs-property">length</span> &gt;= <span class="hljs-number">40</span>) {
          finished.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span>;
        }
      }, <span class="hljs-number">1000</span>);
    };

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onRefresh</span> = (<span class="hljs-params"></span>) =&gt; {
      finished.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
      loading.<span class="hljs-property">value</span> = <span class="hljs-literal">true</span>;
      <span class="hljs-title function_">onLoad</span>();
    };

    <span class="hljs-keyword">return</span> {
      list,
      onLoad,
      loading,
      finished,
      onRefresh,
      refreshing,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model:loading</td><td>Whether to show loading info, the <code>load</code> event will not be Emitted when loading</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>v-model:error</td><td>Whether loading is error, the <code>load</code> event will be Emitted only when error text clicked</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>finished</td><td>Whether loading is finished, the <code>load</code> event will not be Emitted when finished</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>offset</td><td>The load event will be Emitted when the distance between the scrollbar and the bottom is less than offset</td><td><em>number | string</em></td><td><code>300</code></td></tr><tr><td>loading-text</td><td>Loading text</td><td><em>string</em></td><td><code>Loading...</code></td></tr><tr><td>finished-text</td><td>Finished text</td><td><em>string</em></td><td>-</td></tr><tr><td>error-text</td><td>Error loaded text</td><td><em>string</em></td><td>-</td></tr><tr><td>immediate-check</td><td>Whether to check loading position immediately after mounted</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>direction</td><td>Scroll direction, can be set to <code>up</code></td><td><em>string</em></td><td><code>down</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>load</td><td>Emitted when the distance between the scrollbar and the bottom is less than offset</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3><p>Use <a href="https://v3.vuejs.org/guide/component-template-refs.html" target="_blank">ref</a> to get List instance and call instance methods.</p><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>check</td><td>Check scroll position</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ListProps</span>, <span class="hljs-title class_">ListInstance</span>, <span class="hljs-title class_">ListDirection</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>ListInstance</code> is the type of component instance:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ListInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> listRef = ref&lt;<span class="hljs-title class_">ListInstance</span>&gt;();

listRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">check</span>();
</code></pre></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>List content</td></tr><tr><td>loading</td><td>Custom loading tips</td></tr><tr><td>finished</td><td>Custom finished tips</td></tr><tr><td>error</td><td>Custom error tips</td></tr></tbody></table></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-list-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-list-text-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-list-text-line-height</td><td><em>50px</em></td><td>-</td></tr><tr><td>--van-list-loading-icon-size</td><td><em>16px</em></td><td>-</td></tr></tbody></table></div><h2 id="faq" tabindex="-1">FAQ</h2><div class="van-doc-card"><h3 id="how-does-list-component-work" tabindex="-1">How does List component work?</h3><p>List will listen to the scroll event of the browser and calculate the position. When the distance between the bottom of the list and the visible area is less than <code>offset</code>, the List component will trigger a <code>load</code> event.</p></div><div class="van-doc-card"><h3 id="why-does-the-load-event-triggered-immediately-after-mounted" tabindex="-1">Why does the load event triggered immediately after mounted?</h3><p>A load event will be triggered immediately to load the first screen data. This feature can be disabled by the <code>immediate-check</code> prop.</p></div><div class="van-doc-card"><h3 id="why-does-the-load-event-triggered-continuously" tabindex="-1">Why does the load event triggered continuously?</h3><p>If the amount of data loaded in one request is too small, the List will continue to trigger the <code>load</code> event until the content fills the screen or the data is fully loaded.</p><p>Therefore, you need to adjust the amount of data per request. Ideally, the amount of data per request should be able to fill the height of one screen.</p></div><div class="van-doc-card"><h3 id="what-is-the-meaning-of-loading-and-finished" tabindex="-1">What is the meaning of loading and finished?</h3><p><code>List</code> has three states, understanding these states will help you use the component:</p><ul><li><code>loading = false</code>: Not in loading. The component will detect whether to trigger the <code>load</code> event according to the scroll position (if the content of the list is less than one screen, it will be triggered directly).</li><li><code>loading = true</code>: During loading. Indicating that an request is being sent, and the <code>load</code> event will not be triggered.</li><li><code>finished = true</code>: Loading is complete. No <code>load</code> will not be triggered.</li></ul><p>After each request, you need to manually set <code>loading</code> to <code>false</code>, indicating the end of loading.</p></div><div class="van-doc-card"><h3 id="always-trigger-loading-after-using-float-layout" tabindex="-1">Always trigger loading after using float layout?</h3><p>If you use the float layout on the content, you can add the <code>van-clearfix</code> class to the container to clear the float, so that the List can get the element position correctly.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-list</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;van-clearfix&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;float-item&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;float-item&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;float-item&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-list</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="always-trigger-loading-after-setting-overflow-on-html-and-body" tabindex="-1">Always trigger loading after setting overflow on html and body?</h3><p>If the <code>overflow-x: hidden</code> style is set on the html and body tags, it will cause the List to always trigger loading.</p><pre><code class="language-css"><span class="hljs-selector-tag">html</span>,
<span class="hljs-selector-tag">body</span> {
  <span class="hljs-attribute">overflow-x</span>: hidden;
}
</code></pre><p>The reason is that when an element is styled with <code>overflow-x: hidden</code>, the element&#39;s <code>overflow-y</code> will be set to <code>auto</code> by the browser, instead of the default value of <code>visible</code>, causing the List can not determine the scroll container correctly. The workaround is to remove this style, or add the <code>height: 100%</code> style to the html and body tags.</p></div><div class="van-doc-card"><h3 id="always-trigger-loading-when-the-direction-prop-is-set-to-up" tabindex="-1">Always trigger loading when the direction prop is set to up?</h3><p>Setting the <code>direction</code> prop to up will trigger the loading of the List component when the scrollbar is at the page top.</p><p>When using this prop, it is recommended to scroll the scroll bar to the page bottom after each data request is completed.</p></div>`,23),o=[l],h={__name:"README",setup(p,{expose:s}){return s({frontmatter:{}}),(i,r)=>(a(),t("div",e,o))}};export{h as default};
