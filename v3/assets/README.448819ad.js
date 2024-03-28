import{o as t,a,y as n}from"./vue-libs.b44bc779.js";const e={class:"van-doc-markdown-body"},l=n(`<h1>Field</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Field component let users enter and edit text.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Field</span>, <span class="hljs-title class_">CellGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Field</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CellGroup</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><p>The value of field is bound with v-model.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Label&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Text&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">return</span> { value };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="custom-type" tabindex="-1">Custom Type</h3><p>Use <code>type</code> prop to custom different type fields.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;text&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Text&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;tel&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;tel&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Phone&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;digit&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;digit&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Digit&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;number&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;number&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Number&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Password&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> tel = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> text = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> digit = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> number = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> password = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);

    <span class="hljs-keyword">return</span> { tel, text, digit, number, password };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="disabled" tabindex="-1">Disabled</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Text&quot;</span> <span class="hljs-attr">model-value</span>=<span class="hljs-string">&quot;Input Readonly&quot;</span> <span class="hljs-attr">readonly</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Text&quot;</span> <span class="hljs-attr">model-value</span>=<span class="hljs-string">&quot;Input Disabled&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="show-icon" tabindex="-1">Show Icon</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Text&quot;</span>
    <span class="hljs-attr">left-icon</span>=<span class="hljs-string">&quot;smile-o&quot;</span>
    <span class="hljs-attr">right-icon</span>=<span class="hljs-string">&quot;warning-o&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Show Icon&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span>
    <span class="hljs-attr">clearable</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Text&quot;</span>
    <span class="hljs-attr">left-icon</span>=<span class="hljs-string">&quot;music-o&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Show Clear Icon&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value1 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> value2 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;123&#39;</span>);
    <span class="hljs-keyword">return</span> {
      value1,
      value2,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="error-info" tabindex="-1">Error Info</h3><p>Use <code>error</code> or <code>error-message</code> to show error info.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;username&quot;</span>
    <span class="hljs-attr">error</span>
    <span class="hljs-attr">required</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Username&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Username&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;phone&quot;</span>
    <span class="hljs-attr">required</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Phone&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Phone&quot;</span>
    <span class="hljs-attr">error-message</span>=<span class="hljs-string">&quot;Invalid phone&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="insert-button" tabindex="-1">Insert Button</h3><p>Use button slot to insert button.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;sms&quot;</span> <span class="hljs-attr">center</span> <span class="hljs-attr">clearable</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;SMS&quot;</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;SMS&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Send SMS<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="format-value" tabindex="-1">Format Value</h3><p>Use <code>formatter</code> prop to format the input value.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Text&quot;</span>
    <span class="hljs-attr">:formatter</span>=<span class="hljs-string">&quot;formatter&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Format On Change&quot;</span>
  /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Text&quot;</span>
    <span class="hljs-attr">:formatter</span>=<span class="hljs-string">&quot;formatter&quot;</span>
    <span class="hljs-attr">format-trigger</span>=<span class="hljs-string">&quot;onBlur&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Format On Blur&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value1 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> value2 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">formatter</span> = (<span class="hljs-params">value</span>) =&gt; value.<span class="hljs-title function_">replace</span>(<span class="hljs-regexp">/\\d/g</span>, <span class="hljs-string">&#39;&#39;</span>);

    <span class="hljs-keyword">return</span> {
      value1,
      value2,
      formatter,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="auto-resize" tabindex="-1">Auto Resize</h3><p>Textarea Field can be auto resize when has <code>autosize</code> prop.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;message&quot;</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Message&quot;</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;textarea&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Message&quot;</span>
    <span class="hljs-attr">rows</span>=<span class="hljs-string">&quot;1&quot;</span>
    <span class="hljs-attr">autosize</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="show-word-limit" tabindex="-1">Show Word Limit</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;message&quot;</span>
    <span class="hljs-attr">rows</span>=<span class="hljs-string">&quot;2&quot;</span>
    <span class="hljs-attr">autosize</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Message&quot;</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;textarea&quot;</span>
    <span class="hljs-attr">maxlength</span>=<span class="hljs-string">&quot;50&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Message&quot;</span>
    <span class="hljs-attr">show-word-limit</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="input-align" tabindex="-1">Input Align</h3><p>Use <code>input-align</code> prop to align the input value.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Text&quot;</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Input Align Right&quot;</span>
    <span class="hljs-attr">input-align</span>=<span class="hljs-string">&quot;right&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>Input value</td><td><em>number | string</em></td><td>-</td></tr><tr><td>label</td><td>Left side label</td><td><em>string</em></td><td>-</td></tr><tr><td>name</td><td>As the identifier when submitting the form</td><td><em>string</em></td><td>-</td></tr><tr><td>id <code>v3.2.2</code></td><td>Input id, the for attribute of the label also will be set</td><td><em>string</em></td><td><code>van-field-n-input</code></td></tr><tr><td>type</td><td>Input type, support all <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types" target="_blank">native types</a> and <code>digit</code> type</td><td><em>FieldType</em></td><td><code>text</code></td></tr><tr><td>size</td><td>Size, can be set to <code>large</code></td><td><em>string</em></td><td>-</td></tr><tr><td>maxlength</td><td>Max length of value</td><td><em>number | string</em></td><td>-</td></tr><tr><td>placeholder</td><td>Input placeholder</td><td><em>string</em></td><td>-</td></tr><tr><td>border</td><td>Whether to show inner border</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>disabled</td><td>Whether to disable field</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly</td><td>Whether to be readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>colon</td><td>Whether to display colon after label</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>required</td><td>Whether to show required mark</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>center</td><td>Whether to center content vertically</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>clearable</td><td>Whether to be clearable</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>clear-icon <code>v3.0.12</code></td><td>Clear icon name</td><td><em>string</em></td><td><code>clear</code></td></tr><tr><td>clear-trigger</td><td>When to display the clear icon, <code>always</code> means to display the icon when value is not empty, <code>focus</code> means to display the icon when input is focused</td><td><em>FieldClearTrigger</em></td><td><code>focus</code></td></tr><tr><td>clickable</td><td>Whether to show click feedback when clicked</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>is-link</td><td>Whether to show link icon</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>autofocus</td><td>Whether to auto focus, unsupported in iOS</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-word-limit</td><td>Whether to show word limit, need to set the <code>maxlength</code> prop</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>error</td><td>Whether to mark the input content in red</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>error-message</td><td>Error message</td><td><em>string</em></td><td>-</td></tr><tr><td>error-message-align</td><td>Error message align, can be set to <code>center</code> <code>right</code></td><td><em>FieldTextAlign</em></td><td><code>left</code></td></tr><tr><td>formatter</td><td>Input value formatter</td><td><em>(val: string) =&gt; string</em></td><td>-</td></tr><tr><td>format-trigger</td><td>When to format value, can be set to <code>onBlur</code></td><td><em>FieldFormatTrigger</em></td><td><code>onChange</code></td></tr><tr><td>arrow-direction</td><td>Can be set to <code>left</code> <code>up</code> <code>down</code></td><td><em>string</em></td><td><code>right</code></td></tr><tr><td>label-class</td><td>Label className</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>label-width</td><td>Label width</td><td><em>number | string</em></td><td><code>6.2em</code></td></tr><tr><td>label-align</td><td>Label align, can be set to <code>center</code> <code>right</code></td><td><em>FieldTextAlign</em></td><td><code>left</code></td></tr><tr><td>input-align</td><td>Input align, can be set to <code>center</code> <code>right</code></td><td><em>FieldTextAlign</em></td><td><code>left</code></td></tr><tr><td>autosize</td><td>Textarea auto resize, can accept an object,<br>e.g. { maxHeight: 100, minHeight: 50 }</td><td><em>boolean | FieldAutosizeConfig</em></td><td><code>false</code></td></tr><tr><td>left-icon</td><td>Left side icon name</td><td><em>string</em></td><td>-</td></tr><tr><td>right-icon</td><td>Right side icon name</td><td><em>string</em></td><td>-</td></tr><tr><td>icon-prefix</td><td>Icon className prefix</td><td><em>string</em></td><td><code>van-icon</code></td></tr><tr><td>rules</td><td>Form validation rules</td><td><em>FieldRule[]</em></td><td>-</td></tr><tr><td>autocomplete <code>v3.0.3</code></td><td>HTML native attribute, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete" target="_blank">MDN - autocomplete</a></td><td><em>string</em></td><td>-</td></tr><tr><td>enterkeyhint <code>v3.4.8</code></td><td>HTML native attribute, see <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint" target="_blank">MDN - enterkeyhint</a><br></td><td><em>string</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>update:model-value</td><td>Emitted when input value changed</td><td><em>value: string</em></td></tr><tr><td>focus</td><td>Emitted when input is focused</td><td><em>event: Event</em></td></tr><tr><td>blur</td><td>Emitted when input is blurred</td><td><em>event: Event</em></td></tr><tr><td>clear</td><td>Emitted when the clear icon is clicked</td><td><em>event: MouseEvent</em></td></tr><tr><td>click</td><td>Emitted when component is clicked</td><td><em>event: MouseEvent</em></td></tr><tr><td>click-input</td><td>Emitted when the input is clicked</td><td><em>event: MouseEvent</em></td></tr><tr><td>click-left-icon</td><td>Emitted when the left icon is clicked</td><td><em>event: MouseEvent</em></td></tr><tr><td>click-right-icon</td><td>Emitted when the right icon is clicked</td><td><em>event: MouseEvent</em></td></tr><tr><td>start-validate <code>v3.5.1</code></td><td>Emitted when start validation</td><td>-</td></tr><tr><td>end-validate <code>v3.5.1</code></td><td>Emitted when end validation</td><td><em>{ status: string }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3><p>Use <a href="https://v3.vuejs.org/guide/component-template-refs.html" target="_blank">ref</a> to get Field instance and call instance methods.</p><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>focus</td><td>Trigger input focus</td><td>-</td><td>-</td></tr><tr><td>blur</td><td>Trigger input blur</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">FieldType</span>,
  <span class="hljs-title class_">FieldRule</span>,
  <span class="hljs-title class_">FieldProps</span>,
  <span class="hljs-title class_">FieldInstance</span>,
  <span class="hljs-title class_">FieldTextAlign</span>,
  <span class="hljs-title class_">FieldRuleMessage</span>,
  <span class="hljs-title class_">FieldClearTrigger</span>,
  <span class="hljs-title class_">FieldFormatTrigger</span>,
  <span class="hljs-title class_">FieldRuleValidator</span>,
  <span class="hljs-title class_">FiledRuleFormatter</span>,
  <span class="hljs-title class_">FieldValidateError</span>,
  <span class="hljs-title class_">FieldAutosizeConfig</span>,
  <span class="hljs-title class_">FieldValidateTrigger</span>,
  <span class="hljs-title class_">FieldValidationStatus</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>FieldInstance</code> is the type of component instance:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">FieldInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> fieldRef = ref&lt;<span class="hljs-title class_">FieldInstance</span>&gt;();

fieldRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">focus</span>();
</code></pre></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td>label</td><td>Custom label</td><td>-</td></tr><tr><td>input</td><td>Custom input</td><td>-</td></tr><tr><td>left-icon</td><td>Custom left icon</td><td>-</td></tr><tr><td>right-icon</td><td>Custom right icon</td><td>-</td></tr><tr><td>button</td><td>Insert button</td><td>-</td></tr><tr><td>error-message <code>v3.2.5</code></td><td>Custom error message</td><td><em>{ message: string }</em></td></tr><tr><td>extra</td><td>Custom content on the right</td><td>-</td></tr></tbody></table></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-field-label-width</td><td><em>6.2em</em></td><td>-</td></tr><tr><td>--van-field-label-color</td><td><em>var(--van-gray-7)</em></td><td>-</td></tr><tr><td>--van-field-label-margin-right</td><td><em>var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-field-input-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-field-input-error-text-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-field-input-disabled-text-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-field-placeholder-text-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-field-icon-size</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-field-clear-icon-size</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-field-clear-icon-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-field-right-icon-color</td><td><em>var(--van-gray-6)</em></td><td>-</td></tr><tr><td>--van-field-error-message-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-field-error-message-font-size</td><td><em>12px</em></td><td>-</td></tr><tr><td>--van-field-text-area-min-height</td><td><em>60px</em></td><td>-</td></tr><tr><td>--van-field-word-limit-color</td><td><em>var(--van-gray-7)</em></td><td>-</td></tr><tr><td>--van-field-word-limit-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-field-word-limit-line-height</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-field-disabled-text-color</td><td><em>var(--van-text-color-3)</em></td><td>-</td></tr><tr><td>--van-field-required-mark-color</td><td><em>var(--van-red)</em></td><td>-</td></tr></tbody></table></div>`,22),d=[l],h={__name:"README",setup(p,{expose:s}){return s({frontmatter:{}}),(o,c)=>(t(),a("div",e,d))}};export{h as default};
