import{o as a,a as n,y as t}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},e=t(`<h1>Cascader</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>The cascader component is used for the selection of multi-level data. The typical scene is the selection of provinces and cities.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Cascader</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Cascader</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fieldValue&quot;</span>
  <span class="hljs-attr">is-link</span>
  <span class="hljs-attr">readonly</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Area&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Select Area&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">round</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cascader</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;cascaderValue&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Select Area&quot;</span>
    <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;show = false&quot;</span>
    @<span class="hljs-attr">finish</span>=<span class="hljs-string">&quot;onFinish&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> fieldValue = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> cascaderValue = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> options = [
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Zhejiang&#39;</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;330000&#39;</span>,
        <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Hangzhou&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;330100&#39;</span> }],
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Jiangsu&#39;</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;320000&#39;</span>,
        <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Nanjing&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;320100&#39;</span> }],
      },
    ];
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onFinish</span> = (<span class="hljs-params">{ selectedOptions }</span>) =&gt; {
      show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
      fieldValue.<span class="hljs-property">value</span> = selectedOptions.<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">option</span>) =&gt;</span> option.<span class="hljs-property">text</span>).<span class="hljs-title function_">join</span>(<span class="hljs-string">&#39;/&#39;</span>);
    };

    <span class="hljs-keyword">return</span> {
      show,
      options,
      onFinish,
      fieldValue,
      cascaderValue,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="custom-color" tabindex="-1">Custom Color</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cascader</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;cascaderValue&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Select Area&quot;</span>
  <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
  <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;#1989fa&quot;</span>
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;show = false&quot;</span>
  @<span class="hljs-attr">finish</span>=<span class="hljs-string">&quot;onFinish&quot;</span>
/&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="async-options" tabindex="-1">Async Options</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fieldValue&quot;</span>
  <span class="hljs-attr">is-link</span>
  <span class="hljs-attr">readonly</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Area&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Select Area&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">round</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cascader</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;cascaderValue&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Select Area&quot;</span>
    <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;show = false&quot;</span>
    @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
    @<span class="hljs-attr">finish</span>=<span class="hljs-string">&quot;onFinish&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> fieldValue = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> cascaderValue = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> options = <span class="hljs-title function_">ref</span>([
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Zhejiang&#39;</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;330000&#39;</span>,
        <span class="hljs-attr">children</span>: [],
      },
    ]);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">{ value }</span>) =&gt; {
      <span class="hljs-keyword">if</span> (value === options.<span class="hljs-property">value</span>[<span class="hljs-number">0</span>].<span class="hljs-property">value</span>) {
        <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
          options.<span class="hljs-property">value</span>[<span class="hljs-number">0</span>].<span class="hljs-property">children</span> = [
            { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Hangzhou&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;330100&#39;</span> },
            { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Ningbo&#39;</span>, <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;330200&#39;</span> },
          ];
        }, <span class="hljs-number">500</span>);
      }
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onFinish</span> = (<span class="hljs-params">{ selectedOptions }</span>) =&gt; {
      show.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
      fieldValue.<span class="hljs-property">value</span> = selectedOptions.<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">option</span>) =&gt;</span> option.<span class="hljs-property">text</span>).<span class="hljs-title function_">join</span>(<span class="hljs-string">&#39;/&#39;</span>);
    };

    <span class="hljs-keyword">return</span> {
      show,
      options,
      onFinish,
      fieldValue,
      cascaderValue,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="custom-field-names" tabindex="-1">Custom Field Names</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cascader</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;code&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Select Area&quot;</span>
  <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>
  <span class="hljs-attr">:field-names</span>=<span class="hljs-string">&quot;fieldNames&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> code = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> fieldNames = {
      <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;name&#39;</span>,
      <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;code&#39;</span>,
      <span class="hljs-attr">children</span>: <span class="hljs-string">&#39;items&#39;</span>,
    };
    <span class="hljs-keyword">const</span> options = [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Zhejiang&#39;</span>,
        <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;330000&#39;</span>,
        <span class="hljs-attr">items</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Hangzhou&#39;</span>, <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;330100&#39;</span> }],
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Jiangsu&#39;</span>,
        <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;320000&#39;</span>,
        <span class="hljs-attr">items</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Nanjing&#39;</span>, <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;320100&#39;</span> }],
      },
    ];

    <span class="hljs-keyword">return</span> {
      code,
      options,
      fieldNames,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="custom-content" tabindex="-1">Custom Content</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cascader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;code&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Select Area&quot;</span> <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;options&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">options-top</span>=<span class="hljs-string">&quot;{ tabIndex }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;current-level&quot;</span>&gt;</span>Current level is {{ tabIndex }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cascader</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.current-level</span> {
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">10px</span> <span class="hljs-number">16px</span> <span class="hljs-number">0</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> code = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> options = [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Zhejiang&#39;</span>,
        <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;330000&#39;</span>,
        <span class="hljs-attr">items</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Hangzhou&#39;</span>, <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;330100&#39;</span> }],
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Jiangsu&#39;</span>,
        <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;320000&#39;</span>,
        <span class="hljs-attr">items</span>: [{ <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Nanjing&#39;</span>, <span class="hljs-attr">code</span>: <span class="hljs-string">&#39;320100&#39;</span> }],
      },
    ];

    <span class="hljs-keyword">return</span> {
      code,
      options,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>Title</td><td><em>string</em></td><td>-</td></tr><tr><td>value</td><td>Value of selected option</td><td><em>string | number</em></td><td>-</td></tr><tr><td>options</td><td>Options</td><td><em>CascaderOption[]</em></td><td><code>[]</code></td></tr><tr><td>placeholder</td><td>Placeholder of unselected tab</td><td><em>string</em></td><td><code>Select</code></td></tr><tr><td>active-color</td><td>Active color</td><td><em>string</em></td><td><code>#ee0a24</code></td></tr><tr><td>swipeable <code>v3.0.11</code></td><td>Whether to enable gestures to slide left and right</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>closeable</td><td>Whether to show close icon</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-header <code>v3.4.2</code></td><td>Whether to show header</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-icon <code>v3.0.10</code></td><td>Close icon name</td><td><em>string</em></td><td><code>cross</code></td></tr><tr><td>field-names <code>v3.0.4</code></td><td>Custom the fields of options</td><td><em>object</em></td><td><code>{ text: &#39;text&#39;, value: &#39;value&#39;, children: &#39;children&#39; }</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="data-structure-of-cascaderoption" tabindex="-1">Data Structure of CascaderOption</h3><table><thead><tr><th>Key</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>text</td><td>Option text</td><td><em>string</em></td></tr><tr><td>value</td><td>Option value</td><td><em>string | number</em></td></tr><tr><td>color <code>v3.1.0</code></td><td>Text color</td><td><em>string</em></td></tr><tr><td>children</td><td>Cascade children</td><td><em>CascaderOption[]</em></td></tr><tr><td>disabled <code>v3.1.2</code></td><td>Whether to disable option</td><td><em>boolean</em></td></tr><tr><td>className <code>v3.1.0</code></td><td>className for the option</td><td><em>string | Array | object</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>change</td><td>Emitted when active option changed</td><td><em>{ value: string | number, selectedOptions: CascaderOption[], tabIndex: number }</em></td></tr><tr><td>finish</td><td>Emitted when all options is selected</td><td><em>{ value: string | number, selectedOptions: CascaderOption[], tabIndex: number }</em></td></tr><tr><td>close</td><td>Emitted when the close icon is clicked</td><td>-</td></tr><tr><td>click-tab</td><td>Emitted when a tab is clicked</td><td><em>activeTab: number, title: string</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td>title</td><td>Custom title</td><td>-</td></tr><tr><td>option <code>v3.1.4</code></td><td>Custom option text</td><td><em>{ option: CascaderOption, selected: boolean }</em></td></tr><tr><td>options-top <code>v3.2.7</code></td><td>Custom the content above the options</td><td><em>{ tabIndex: number }</em></td></tr><tr><td>options-bottom <code>v3.2.8</code></td><td>Custom the content below the options</td><td><em>{ tabIndex: number }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CascaderProps</span>, <span class="hljs-title class_">CascaderOption</span>, <span class="hljs-title class_">CascaderFieldNames</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-cascader-header-height</td><td><em>48px</em></td><td>-</td></tr><tr><td>--van-cascader-header-padding</td><td><em>0 var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-cascader-title-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-cascader-title-line-height</td><td><em>20px</em></td><td>-</td></tr><tr><td>--van-cascader-close-icon-size</td><td><em>22px</em></td><td>-</td></tr><tr><td>--van-cascader-close-icon-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-cascader-selected-icon-size</td><td><em>18px</em></td><td>-</td></tr><tr><td>--van-cascader-tabs-height</td><td><em>48px</em></td><td>-</td></tr><tr><td>--van-cascader-active-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-cascader-options-height</td><td><em>384px</em></td><td>-</td></tr><tr><td>--van-cascader-tab-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-cascader-unselected-tab-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr></tbody></table></div>`,17),p=[e],i={__name:"README",setup(c,{expose:s}){return s({frontmatter:{}}),(d,r)=>(a(),n("div",l,p))}};export{i as default};
