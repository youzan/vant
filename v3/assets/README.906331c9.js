import{o as a,a as n,y as t}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},e=t(`<h1>Checkbox</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>A group of options for multiple choices.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Checkbox</span>, <span class="hljs-title class_">CheckboxGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Checkbox</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CheckboxGroup</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>Checkbox<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-keyword">return</span> {
      checked,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="disabled" tabindex="-1">Disabled</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>Checkbox<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-shape" tabindex="-1">Custom Shape</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>Checkbox<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-color" tabindex="-1">Custom Color</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">checked-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>&gt;</span>Checkbox<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-icon-size" tabindex="-1">Custom Icon Size</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">icon-size</span>=<span class="hljs-string">&quot;24px&quot;</span>&gt;</span>Checkbox<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-icon" tabindex="-1">Custom Icon</h3><p>Use icon slot to custom icon.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>
  customize icon
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;props&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;img-icon&quot;</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;props.checked ? activeIcon : inactiveIcon&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.img-icon</span> {
    <span class="hljs-attribute">height</span>: <span class="hljs-number">20px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);
    <span class="hljs-keyword">return</span> {
      checked,
      <span class="hljs-attr">activeIcon</span>:
        <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/user-active.png&#39;</span>,
      <span class="hljs-attr">inactiveIcon</span>:
        <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/user-inactive.png&#39;</span>,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="disable-label-click" tabindex="-1">Disable Label Click</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">label-disabled</span>&gt;</span>Checkbox<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="checkbox-group" tabindex="-1">Checkbox Group</h3><p>When Checkboxes are inside a CheckboxGroup, the checked checkboxes&#39;s name is an array and bound with CheckboxGroup by v-model.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>Checkbox a<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>Checkbox b<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#39;a&#39;</span>, <span class="hljs-string">&#39;b&#39;</span>]);
    <span class="hljs-keyword">return</span> { checked };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="horizontal" tabindex="-1">Horizontal</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>Checkbox a<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>Checkbox b<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>([]);
    <span class="hljs-keyword">return</span> { checked };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="maximum-amount-of-checked-options" tabindex="-1">Maximum amount of checked options</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>Checkbox a<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>Checkbox b<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;c&quot;</span>&gt;</span>Checkbox c<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="toggle-all" tabindex="-1">Toggle All</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;checkboxGroup&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>Checkbox a<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>Checkbox b<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;c&quot;</span>&gt;</span>Checkbox c<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;checkAll&quot;</span>&gt;</span>Check All<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleAll&quot;</span>&gt;</span>Toggle All<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>([]);
    <span class="hljs-keyword">const</span> checkboxGroup = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">checkAll</span> = (<span class="hljs-params"></span>) =&gt; {
      checkboxGroup.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>(<span class="hljs-literal">true</span>);
    }
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">toggleAll</span> = (<span class="hljs-params"></span>) =&gt; {
      checkboxGroup.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>();
    },

    <span class="hljs-keyword">return</span> {
      checked,
      checkAll,
      toggleAll,
      checkboxGroup,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="inside-a-cell" tabindex="-1">Inside a Cell</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span>
      <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, index) in list&quot;</span>
      <span class="hljs-attr">clickable</span>
      <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span>
      <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;\`Checkbox \${item}\`&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggle(index)&quot;</span>
    &gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span>
          <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;item&quot;</span>
          <span class="hljs-attr">:ref</span>=<span class="hljs-string">&quot;el =&gt; checkboxRefs[index] = el&quot;</span>
          @<span class="hljs-attr">click.stop</span>
        /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref, onBeforeUpdate } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>([]);
    <span class="hljs-keyword">const</span> checkboxRefs = <span class="hljs-title function_">ref</span>([]);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">toggle</span> = (<span class="hljs-params">index</span>) =&gt; {
      checkboxRefs.<span class="hljs-property">value</span>[index].<span class="hljs-title function_">toggle</span>();
    };

    <span class="hljs-title function_">onBeforeUpdate</span>(<span class="hljs-function">() =&gt;</span> {
      checkboxRefs.<span class="hljs-property">value</span> = [];
    });

    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">list</span>: [<span class="hljs-string">&#39;a&#39;</span>, <span class="hljs-string">&#39;b&#39;</span>],
      toggle,
      checked,
      checkboxRefs,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="checkbox-props" tabindex="-1">Checkbox Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>Check status</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>name</td><td>Checkbox name, usually a unique string or number</td><td><em>any</em></td><td>-</td></tr><tr><td>shape</td><td>Can be set to <code>square</code></td><td><em>string</em></td><td><code>round</code></td></tr><tr><td>disabled</td><td>Disable checkbox</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>label-disabled</td><td>Whether to disable label click</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>label-position</td><td>Can be set to <code>left</code></td><td><em>string</em></td><td><code>right</code></td></tr><tr><td>icon-size</td><td>Icon size</td><td><em>number | string</em></td><td><code>20px</code></td></tr><tr><td>checked-color</td><td>Checked color</td><td><em>string</em></td><td><code>#1989fa</code></td></tr><tr><td>bind-group</td><td>Whether to bind with CheckboxGroup</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="checkboxgroup-props" tabindex="-1">CheckboxGroup Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>Names of all checked checkboxes</td><td><em>any[]</em></td><td>-</td></tr><tr><td>disabled</td><td>Whether to disable all checkboxes</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>max</td><td>Maximum amount of checked options</td><td><em>number | string</em></td><td><code>0</code>(Unlimited)</td></tr><tr><td>direction</td><td>Direction, can be set to <code>horizontal</code></td><td><em>string</em></td><td><code>vertical</code></td></tr><tr><td>icon-size</td><td>Icon size of all checkboxes</td><td><em>number | string</em></td><td><code>20px</code></td></tr><tr><td>checked-color</td><td>Checked color of all checkboxes</td><td><em>string</em></td><td><code>#1989fa</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="checkbox-events" tabindex="-1">Checkbox Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>Emitted when value changed</td><td><em>checked: boolean</em></td></tr><tr><td>click</td><td>Emitted when the checkbox is clicked</td><td><em>event: MouseEvent</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="checkboxgroup-events" tabindex="-1">CheckboxGroup Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>Emitted when value changed</td><td><em>names: any[]</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="checkbox-slots" tabindex="-1">Checkbox Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td>default</td><td>Custom label</td><td>-</td></tr><tr><td>icon</td><td>Custom icon</td><td><em>{ checked: boolean, disabled: boolean }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="checkboxgroup-methods" tabindex="-1">CheckboxGroup Methods</h3><p>Use <a href="https://v3.vuejs.org/guide/component-template-refs.html" target="_blank">ref</a> to get CheckboxGroup instance and call instance methods.</p><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>toggleAll</td><td>Toggle check status of all checkboxes</td><td><em>options?: boolean | object</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="toggleall-usage" tabindex="-1">toggleAll Usage</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> type { <span class="hljs-title class_">CheckboxGroupInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> checkboxGroupRef = ref&lt;<span class="hljs-title class_">CheckboxGroupInstance</span>&gt;();

<span class="hljs-comment">// Toggle all</span>
checkboxGroup.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>();
<span class="hljs-comment">// Select all</span>
checkboxGroup.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>(<span class="hljs-literal">true</span>);
<span class="hljs-comment">// Unselect all</span>
checkboxGroup.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>(<span class="hljs-literal">false</span>);

<span class="hljs-comment">// Toggle all, skip disabled</span>
checkboxGroup.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>({
  <span class="hljs-attr">skipDisabled</span>: <span class="hljs-literal">true</span>,
});
<span class="hljs-comment">// Select all, skip disabled</span>
checkboxGroup.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>({
  <span class="hljs-attr">checked</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">skipDisabled</span>: <span class="hljs-literal">true</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="checkbox-methods" tabindex="-1">Checkbox Methods</h3><p>Use <a href="https://v3.vuejs.org/guide/component-template-refs.html" target="_blank">ref</a> to get Checkbox instance and call instance methods.</p><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>toggle</td><td>Toggle check status</td><td><em>checked?: boolean</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">CheckboxProps</span>,
  <span class="hljs-title class_">CheckboxShape</span>,
  <span class="hljs-title class_">CheckboxInstance</span>,
  <span class="hljs-title class_">CheckboxLabelPosition</span>,
  <span class="hljs-title class_">CheckboxGroupProps</span>,
  <span class="hljs-title class_">CheckboxGroupInstance</span>,
  <span class="hljs-title class_">CheckboxGroupDirection</span>,
  <span class="hljs-title class_">CheckboxGroupToggleAllOptions</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>CheckboxInstance</code> and <code>CheckboxGroupInstance</code> is the type of component instance:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CheckboxInstance</span>, <span class="hljs-title class_">CheckboxGroupInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> checkboxRef = ref&lt;<span class="hljs-title class_">CheckboxInstance</span>&gt;();
<span class="hljs-keyword">const</span> checkboxGroupRef = ref&lt;<span class="hljs-title class_">CheckboxGroupInstance</span>&gt;();

checkboxRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggle</span>();
checkboxGroupRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>();
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-checkbox-size</td><td><em>20px</em></td><td>-</td></tr><tr><td>--van-checkbox-border-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-checkbox-transition-duration</td><td><em>var(--van-animation-duration-fast)</em></td><td>-</td></tr><tr><td>--van-checkbox-label-margin</td><td><em>var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-checkbox-label-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-checkbox-checked-icon-color</td><td><em>var(--van-primary-color)</em></td><td>-</td></tr><tr><td>--van-checkbox-disabled-icon-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-checkbox-disabled-label-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-checkbox-disabled-background-color</td><td><em>var(--van-border-color)</em></td><td>-</td></tr></tbody></table></div>`,28),c=[e],i={__name:"README",setup(p,{expose:s}){return s({frontmatter:{}}),(h,d)=>(a(),n("div",l,c))}};export{i as default};
