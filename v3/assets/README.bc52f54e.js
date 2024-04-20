import{o as a,a as n,y as t}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},e=t(`<h1>Picker</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>The picker component is usually used with <a href="#/en-US/popup" target="_blank">Popup</a> Component.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Picker</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Picker</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>
  <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>
  @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>
  @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;onCancel&quot;</span>
  @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> columns = [<span class="hljs-string">&#39;Delaware&#39;</span>, <span class="hljs-string">&#39;Florida&#39;</span>, <span class="hljs-string">&#39;Georqia&#39;</span>, <span class="hljs-string">&#39;Indiana&#39;</span>, <span class="hljs-string">&#39;Maine&#39;</span>];

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params">value, index</span>) =&gt; {
      <span class="hljs-title class_">Toast</span>(<span class="hljs-string">\`Value: <span class="hljs-subst">\${value}</span>, Index: <span class="hljs-subst">\${index}</span>\`</span>);
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">value, index</span>) =&gt; {
      <span class="hljs-title class_">Toast</span>(<span class="hljs-string">\`Value: <span class="hljs-subst">\${value}</span>, Index: <span class="hljs-subst">\${index}</span>\`</span>);
    };
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onCancel</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;Cancel&#39;</span>);

    <span class="hljs-keyword">return</span> {
      columns,
      onChange,
      onCancel,
      onConfirm,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="default-index" tabindex="-1">Default Index</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> <span class="hljs-attr">:default-index</span>=<span class="hljs-string">&quot;2&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="multiple-columns" tabindex="-1">Multiple Columns</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> columns = [
      {
        <span class="hljs-attr">values</span>: [<span class="hljs-string">&#39;Monday&#39;</span>, <span class="hljs-string">&#39;Tuesday&#39;</span>, <span class="hljs-string">&#39;Wednesday&#39;</span>, <span class="hljs-string">&#39;Thursday&#39;</span>, <span class="hljs-string">&#39;Friday&#39;</span>],
        <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">2</span>,
      },
      {
        <span class="hljs-attr">values</span>: [<span class="hljs-string">&#39;Morning&#39;</span>, <span class="hljs-string">&#39;Afternoon&#39;</span>, <span class="hljs-string">&#39;Evening&#39;</span>],
        <span class="hljs-attr">defaultIndex</span>: <span class="hljs-number">1</span>,
      },
    ];

    <span class="hljs-keyword">return</span> { columns };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="cascade" tabindex="-1">Cascade</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> columns = [
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Zhejiang&#39;</span>,
        <span class="hljs-attr">children</span>: [
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Hangzhou&#39;</span>,
            <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Xihu&#39;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Yuhang&#39;</span> }],
          },
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Wenzhou&#39;</span>,
            <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Lucheng&#39;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Ouhai&#39;</span> }],
          },
        ],
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Fujian&#39;</span>,
        <span class="hljs-attr">children</span>: [
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Fuzhou&#39;</span>,
            <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Gulou&#39;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Taijiang&#39;</span> }],
          },
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Xiamen&#39;</span>,
            <span class="hljs-attr">children</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Siming&#39;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Haicang&#39;</span> }],
          },
        ],
      },
    ];

    <span class="hljs-keyword">return</span> { columns };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="disable-option" tabindex="-1">Disable option</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> columns = [
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Delaware&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Florida&#39;</span> },
      { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;Georqia&#39;</span> },
    ];

    <span class="hljs-keyword">return</span> { columns };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="set-column-values" tabindex="-1">Set Column Values</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;picker&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> picker = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);

    <span class="hljs-keyword">const</span> states = {
      <span class="hljs-title class_">Group1</span>: [<span class="hljs-string">&#39;Delaware&#39;</span>, <span class="hljs-string">&#39;Florida&#39;</span>, <span class="hljs-string">&#39;Georqia&#39;</span>, <span class="hljs-string">&#39;Indiana&#39;</span>, <span class="hljs-string">&#39;Maine&#39;</span>],
      <span class="hljs-title class_">Group2</span>: [<span class="hljs-string">&#39;Alabama&#39;</span>, <span class="hljs-string">&#39;Kansas&#39;</span>, <span class="hljs-string">&#39;Louisiana&#39;</span>, <span class="hljs-string">&#39;Texas&#39;</span>],
    };
    <span class="hljs-keyword">const</span> columns = [
      { <span class="hljs-attr">values</span>: <span class="hljs-title class_">Object</span>.<span class="hljs-title function_">keys</span>(states) },
      { <span class="hljs-attr">values</span>: states.<span class="hljs-property">Group1</span> },
    ];

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">values</span>) =&gt; {
      picker.<span class="hljs-property">value</span>.<span class="hljs-title function_">setColumnValues</span>(<span class="hljs-number">1</span>, states[values[<span class="hljs-number">0</span>]]);
    };

    <span class="hljs-keyword">return</span> {
      picker,
      columns,
      onChange,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="loading" tabindex="-1">Loading</h3><p>When Picker columns data is acquired asynchronously, use <code>loading</code> prop to show loading prompt.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">&quot;loading&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> columns = <span class="hljs-title function_">ref</span>([]);
    <span class="hljs-keyword">const</span> loading = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);

    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      columns.<span class="hljs-property">value</span> = [<span class="hljs-string">&#39;Option&#39;</span>];
      loading.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
    }, <span class="hljs-number">1000</span>);

    <span class="hljs-keyword">return</span> { columns, loading };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="with-popup" tabindex="-1">With Popup</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;result&quot;</span>
  <span class="hljs-attr">is-link</span>
  <span class="hljs-attr">readonly</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;City&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Choose City&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showPicker = true&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPicker&quot;</span> <span class="hljs-attr">round</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Title&quot;</span>
    <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>
    @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;showPicker = false&quot;</span>
    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> columns = [<span class="hljs-string">&#39;Delaware&#39;</span>, <span class="hljs-string">&#39;Florida&#39;</span>, <span class="hljs-string">&#39;Georqia&#39;</span>, <span class="hljs-string">&#39;Indiana&#39;</span>, <span class="hljs-string">&#39;Maine&#39;</span>];
    <span class="hljs-keyword">const</span> result = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> showPicker = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params">value</span>) =&gt; {
      result.<span class="hljs-property">value</span> = value;
      showPicker.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
    };

    <span class="hljs-keyword">return</span> {
      result,
      columns,
      onConfirm,
      showPicker,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="custom-columns-field" tabindex="-1">Custom Columns Field</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span>
  <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;Title&quot;</span>
  <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>
  <span class="hljs-attr">:columns-field-names</span>=<span class="hljs-string">&quot;customFieldName&quot;</span>
/&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> columns = [
      {
        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;Zhejiang&#39;</span>,
        <span class="hljs-attr">cities</span>: [
          {
            <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;Hangzhou&#39;</span>,
            <span class="hljs-attr">cities</span>: [{ <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;Xihu&#39;</span> }, { <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;Yuhang&#39;</span> }],
          },
          {
            <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;Wenzhou&#39;</span>,
            <span class="hljs-attr">cities</span>: [{ <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;Lucheng&#39;</span> }, { <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;Ouhai&#39;</span> }],
          },
        ],
      },
      {
        <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;Fujian&#39;</span>,
        <span class="hljs-attr">cities</span>: [
          {
            <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;Fuzhou&#39;</span>,
            <span class="hljs-attr">cities</span>: [{ <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;Gulou&#39;</span> }, { <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;Taijiang&#39;</span> }],
          },
          {
            <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;Xiamen&#39;</span>,
            <span class="hljs-attr">cities</span>: [{ <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;Siming&#39;</span> }, { <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;Haicang&#39;</span> }],
          },
        ],
      },
    ];

    <span class="hljs-keyword">const</span> customFieldName = {
      <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;cityName&#39;</span>,
      <span class="hljs-attr">children</span>: <span class="hljs-string">&#39;cities&#39;</span>,
    };

    <span class="hljs-keyword">return</span> {
      columns,
      customFieldName,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>columns</td><td>Columns data</td><td><em>Column[]</em></td><td><code>[]</code></td></tr><tr><td>columns-field-names</td><td>custom columns field</td><td><em>object</em></td><td><code>{ text: &#39;text&#39;, values: &#39;values&#39;, children: &#39;children&#39; }</code></td></tr><tr><td>title</td><td>Toolbar title</td><td><em>string</em></td><td>-</td></tr><tr><td>confirm-button-text</td><td>Text of confirm button</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td>cancel-button-text</td><td>Text of cancel button</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td>toolbar-position</td><td>Toolbar position, cat be set to <code>bottom</code></td><td><em>string</em></td><td><code>top</code></td></tr><tr><td>loading</td><td>Whether to show loading prompt</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-toolbar</td><td>Whether to show toolbar</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>allow-html</td><td>Whether to allow HTML in option text</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>default-index</td><td>Default value index of single column picker</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>item-height</td><td>Option height, supports <code>px</code> <code>vw</code> <code>vh</code> <code>rem</code> unit, default <code>px</code></td><td><em>number | string</em></td><td><code>44</code></td></tr><tr><td>visible-item-count</td><td>Count of visible columns</td><td><em>number | string</em></td><td><code>6</code></td></tr><tr><td>swipe-duration</td><td>Duration of the momentum animation, unit <code>ms</code></td><td><em>number | string</em></td><td><code>1000</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><p>Picker events will pass different parameters according to the columns are single or multiple</p><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>confirm</td><td>Emitted when click confirm button.<br><strong>Notice: the arguments return an array when the multiple columns mode.</strong></td><td><em>currentValue: PickerOption | PickerOption[], currentIndex: number | number[]</em></td></tr><tr><td>cancel</td><td>Emitted when click cancel button.<br><strong>Notice: the arguments return an array when the multiple columns mode.</strong></td><td><em>currentValue: PickerOption | PickerOption[], currentIndex: number | number[]</em></td></tr><tr><td>change</td><td>Emitted when current option changed.<br><strong>Notice: the arguments return an array when the multiple columns mode.</strong></td><td><em>currentValue: PickerOption | PickerOption[], currentIndex: number | number[]</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td>toolbar <code>3.1.2</code></td><td>Custom toolbar content</td><td>-</td></tr><tr><td>title</td><td>Custom title</td><td>-</td></tr><tr><td>confirm</td><td>Custom confirm button text</td><td>-</td></tr><tr><td>cancel</td><td>Custom cancel button text</td><td>-</td></tr><tr><td>option</td><td>Custom option content</td><td><em>option: string | object</em></td></tr><tr><td>columns-top</td><td>Custom content above columns</td><td>-</td></tr><tr><td>columns-bottom</td><td>Custom content below columns</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="data-structure-of-column" tabindex="-1">Data Structure of Column</h3><table><thead><tr><th>Key</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>values</td><td>Value of column</td><td><em>Array&lt;string | number&gt;</em></td></tr><tr><td>defaultIndex</td><td>Default value index</td><td><em>number</em></td></tr><tr><td>className</td><td>ClassName for this column</td><td><em>string | Array | object</em></td></tr><tr><td>children</td><td>Cascade children</td><td><em>Column</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3><p>Use <a href="https://v3.vuejs.org/guide/component-template-refs.html" target="_blank">ref</a> to get Picker instance and call instance methods.</p><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>getValues</td><td>Get current values of all columns</td><td>-</td><td>values</td></tr><tr><td>setValues</td><td>Set current values of all columns</td><td>values</td><td>-</td></tr><tr><td>getIndexes</td><td>Get current indexes of all columns</td><td>-</td><td>indexes</td></tr><tr><td>setIndexes</td><td>Set current indexes of all columns</td><td>indexes</td><td>-</td></tr><tr><td>getColumnValue</td><td>Get current value of the column</td><td>columnIndex</td><td>value</td></tr><tr><td>setColumnValue</td><td>Set current value of the column</td><td>columnIndex, value</td><td>-</td></tr><tr><td>getColumnIndex</td><td>Get current index of the column</td><td>columnIndex</td><td>optionIndex</td></tr><tr><td>setColumnIndex</td><td>Set current index of the column</td><td>columnIndex, optionIndex</td><td>-</td></tr><tr><td>getColumnValues</td><td>Get columns data of the column</td><td>columnIndex</td><td>values</td></tr><tr><td>setColumnValues</td><td>Set columns data of the column</td><td>columnIndex, values</td><td>-</td></tr><tr><td>confirm</td><td>Stop scrolling and emit confirm event</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">PickerProps</span>,
  <span class="hljs-title class_">PickerColumn</span>,
  <span class="hljs-title class_">PickerOption</span>,
  <span class="hljs-title class_">PickerInstance</span>,
  <span class="hljs-title class_">PickerFieldNames</span>,
  <span class="hljs-title class_">PickerObjectColumn</span>,
  <span class="hljs-title class_">PickerObjectOption</span>,
  <span class="hljs-title class_">PickerToolbarPosition</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>PickerInstance</code> is the type of component instance:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">PickerInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> pickerRef = ref&lt;<span class="hljs-title class_">PickerInstance</span>&gt;();

pickerRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">confirm</span>();
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-picker-background-color</td><td><em>var(--van-background-color-light)</em></td><td>-</td></tr><tr><td>--van-picker-toolbar-height</td><td><em>44px</em></td><td>-</td></tr><tr><td>--van-picker-title-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-picker-title-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-picker-action-padding</td><td><em>0 var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-picker-action-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-picker-confirm-action-color</td><td><em>var(--van-text-link-color)</em></td><td>-</td></tr><tr><td>--van-picker-cancel-action-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-picker-option-padding</td><td><em>0 var(--van-padding-base)</em></td><td>-</td></tr><tr><td>--van-picker-option-font-size</td><td><em>var(--van-font-size-lg)</em></td><td>-</td></tr><tr><td>--van-picker-option-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-picker-option-disabled-opacity</td><td><em>0.3</em></td><td>-</td></tr><tr><td>--van-picker-mask-color</td><td><em>linear-gradient</em></td><td>-</td></tr><tr><td>--van-picker-loading-icon-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-picker-loading-mask-color</td><td><em>rgba(255, 255, 255, 0.9)</em></td><td>-</td></tr></tbody></table></div>`,22),p=[e],h={__name:"README",setup(c,{expose:s}){return s({frontmatter:{}}),(d,o)=>(a(),n("div",l,p))}};export{h as default};
