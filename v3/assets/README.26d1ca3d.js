import{o as a,a as n,y as l}from"./vue-libs.b44bc779.js";const t={class:"van-doc-markdown-body"},p=l(`<h1>Form</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used for data entry and verification, and supports input boxes, radio buttons, check boxes, file uploads and other types. Should be used with <a href="#/en-US/field" target="_blank">Field</a> component.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Form</span>, <span class="hljs-title class_">Field</span>, <span class="hljs-title class_">CellGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Form</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Field</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CellGroup</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-form</span> @<span class="hljs-attr">submit</span>=<span class="hljs-string">&quot;onSubmit&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;username&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Username&quot;</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Username&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Username&quot;</span>
      <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[{ required: true, message: &#39;Username is required&#39; }]&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;password&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;password&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;Password&quot;</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Password&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Password&quot;</span>
      <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[{ required: true, message: &#39;Password is required&#39; }]&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 16px;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">round</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">native-type</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>
      Submit
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-form</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> username = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> password = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onSubmit</span> = (<span class="hljs-params">values</span>) =&gt; {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;submit&#39;</span>, values);
    };

    <span class="hljs-keyword">return</span> {
      username,
      password,
      onSubmit,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="validate-rules" tabindex="-1">Validate Rules</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-form</span> @<span class="hljs-attr">failed</span>=<span class="hljs-string">&quot;onFailed&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value1&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;pattern&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Use pattern&quot;</span>
      <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[{ pattern, message: &#39;Error message&#39; }]&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value2&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;validator&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Use validator&quot;</span>
      <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[{ validator, message: &#39;Error message&#39; }]&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value3&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;validatorMessage&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Use validator to return message&quot;</span>
      <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[{ validator: validatorMessage }]&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value4&quot;</span>
      <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;asyncValidator&quot;</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Use async validator&quot;</span>
      <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[{ validator: asyncValidator, message: &#39;Error message&#39; }]&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin: 16px;&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">round</span> <span class="hljs-attr">block</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">native-type</span>=<span class="hljs-string">&quot;submit&quot;</span>&gt;</span>
      Submit
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-form</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value1 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> value2 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> value3 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;abc&#39;</span>);
    <span class="hljs-keyword">const</span> value4 = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> pattern = <span class="hljs-regexp">/\\d{6}/</span>;

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">validator</span> = (<span class="hljs-params">val</span>) =&gt; <span class="hljs-regexp">/1\\d{10}/</span>.<span class="hljs-title function_">test</span>(val);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">validatorMessage</span> = (<span class="hljs-params">val</span>) =&gt; <span class="hljs-string">\`<span class="hljs-subst">\${val}</span> is invalid\`</span>;

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">asyncValidator</span> = (<span class="hljs-params">val</span>) =&gt;
      <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {
        <span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">loading</span>(<span class="hljs-string">&#39;Validating...&#39;</span>);

        <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
          <span class="hljs-title class_">Toast</span>.<span class="hljs-title function_">clear</span>();
          <span class="hljs-title function_">resolve</span>(val === <span class="hljs-string">&#39;1234&#39;</span>);
        }, <span class="hljs-number">1000</span>);
      });

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onFailed</span> = (<span class="hljs-params">errorInfo</span>) =&gt; {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;failed&#39;</span>, errorInfo);
    };

    <span class="hljs-keyword">return</span> {
      value1,
      value2,
      value3,
      value4,
      pattern,
      onFailed,
      validator,
      asyncValidator,
      validatorMessage,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="field-type---switch" tabindex="-1">Field Type - Switch</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;switch&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Switch&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">return</span> { checked };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="field-type---checkbox" tabindex="-1">Field Type - Checkbox</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkbox&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Checkbox&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;checkboxGroup&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;CheckboxGroup&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;groupChecked&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>Checkbox 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>Checkbox 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-checkbox-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> groupChecked = <span class="hljs-title function_">ref</span>([]);
    <span class="hljs-keyword">return</span> {
      checked,
      groupChecked,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="field-type---radio" tabindex="-1">Field Type - Radio</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;radio&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Radio&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>Radio 1<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">van-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>Radio 2<span class="hljs-tag">&lt;/<span class="hljs-name">van-radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">van-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;1&#39;</span>);
    <span class="hljs-keyword">return</span> { checked };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="field-type---stepper" tabindex="-1">Field Type - Stepper</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;stepper&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Stepper&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-stepper</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">1</span>);
    <span class="hljs-keyword">return</span> { value };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="field-type---rate" tabindex="-1">Field Type - Rate</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;rate&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Rate&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-rate</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">3</span>);
    <span class="hljs-keyword">return</span> { value };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="field-type---slider" tabindex="-1">Field Type - Slider</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;slider&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Slider&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-slider</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>(<span class="hljs-number">50</span>);
    <span class="hljs-keyword">return</span> { value };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="field-type---uploader" tabindex="-1">Field Type - Uploader</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;uploader&quot;</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Uploader&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">input</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-field</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> value = <span class="hljs-title function_">ref</span>([
      { <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg&#39;</span> },
    ]);
    <span class="hljs-keyword">return</span> { value };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="field-type---picker" tabindex="-1">Field Type - Picker</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;result&quot;</span>
  <span class="hljs-attr">is-link</span>
  <span class="hljs-attr">readonly</span>
  <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;picker&quot;</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Picker&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Select city&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showPicker = true&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPicker&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-picker</span>
    <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span>
    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>
    @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;showPicker = false&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> result = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> showPicker = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> columns = [<span class="hljs-string">&#39;Delaware&#39;</span>, <span class="hljs-string">&#39;Florida&#39;</span>, <span class="hljs-string">&#39;Georqia&#39;</span>, <span class="hljs-string">&#39;Indiana&#39;</span>, <span class="hljs-string">&#39;Maine&#39;</span>];

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
</code></pre></div><div class="van-doc-card"><h3 id="field-type---datetimepicker" tabindex="-1">Field Type - DatetimePicker</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;result&quot;</span>
  <span class="hljs-attr">is-link</span>
  <span class="hljs-attr">readonly</span>
  <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;datetimePicker&quot;</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Datetime Picker&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Select time&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showPicker = true&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showPicker&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-datetime-picker</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;time&quot;</span>
    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>
    @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;showPicker = false&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> result = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> showPicker = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params">value</span>) =&gt; {
      result.<span class="hljs-property">value</span> = value;
      showPicker.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
    };

    <span class="hljs-keyword">return</span> {
      result,
      onConfirm,
      showPicker,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="field-type---area" tabindex="-1">Field Type - Area</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;result&quot;</span>
  <span class="hljs-attr">is-link</span>
  <span class="hljs-attr">readonly</span>
  <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;area&quot;</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Area Picker&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Select area&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showArea = true&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showArea&quot;</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-area</span>
    <span class="hljs-attr">:area-list</span>=<span class="hljs-string">&quot;areaList&quot;</span>
    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span>
    @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;showArea = false&quot;</span>
  /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { areaList } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/area-data&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> result = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> showArea = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params">areaValues</span>) =&gt; {
      showArea.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
      result.<span class="hljs-property">value</span> = areaValues
        .<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> !!item)
        .<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> item.<span class="hljs-property">name</span>)
        .<span class="hljs-title function_">join</span>(<span class="hljs-string">&#39;/&#39;</span>);
    };

    <span class="hljs-keyword">return</span> {
      result,
      areaList,
      showArea,
      onConfirm,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="field-type---calendar" tabindex="-1">Field Type - Calendar</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-field</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;result&quot;</span>
  <span class="hljs-attr">is-link</span>
  <span class="hljs-attr">readonly</span>
  <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;calendar&quot;</span>
  <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;Calendar&quot;</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;Select date&quot;</span>
  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showCalendar = true&quot;</span>
/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-calendar</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showCalendar&quot;</span> @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;onConfirm&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> result = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;&#39;</span>);
    <span class="hljs-keyword">const</span> showCalendar = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onConfirm</span> = (<span class="hljs-params">date</span>) =&gt; {
      result.<span class="hljs-property">value</span> = <span class="hljs-string">\`<span class="hljs-subst">\${date.getMonth() + <span class="hljs-number">1</span>}</span>/<span class="hljs-subst">\${date.getDate()}</span>\`</span>;
      showCalendar.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;
    };

    <span class="hljs-keyword">return</span> {
      result,
      onConfirm,
      showCalendar,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>label-width</td><td>Field label width</td><td><em>number | string</em></td><td><code>6.2em</code></td></tr><tr><td>label-align</td><td>Field label align, can be set to <code>center</code> <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td>input-align</td><td>Field input align, can be set to <code>center</code> <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td>error-message-align</td><td>Error message align, can be set to <code>center</code> <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td>validate-trigger</td><td>When to validate the form, can be set to <code>onChange</code>\u3001<code>onSubmit</code>, supports using array to set multiple values</td><td><em>string | string[]</em></td><td><code>onBlur</code></td></tr><tr><td>colon</td><td>Whether to display colon after label</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>disabled</td><td>Whether to disable form</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly</td><td>Whether to be readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>validate-first</td><td>Whether to stop the validation when a rule fails</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>scroll-to-error</td><td>Whether to scroll to the error field when validation failed</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-error</td><td>Whether to highlight input when validation failed</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>show-error-message</td><td>Whether to show error message when validation failed</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>submit-on-enter</td><td>Whether to submit form on enter</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="data-structure-of-rule" tabindex="-1">Data Structure of Rule</h3><table><thead><tr><th>Key</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>required</td><td>Whether to be a required field, the value is not allowed to be empty (empty string, empty array, <code>false</code>, <code>undefined</code>, <code>null</code>)</td><td><em>boolean</em></td></tr><tr><td>message</td><td>Error message, can be a function to dynamically return message content</td><td><em>string | (value, rule) =&gt; string</em></td></tr><tr><td>validator</td><td>Custom validator, can return a Promise to validate dynamically</td><td><em>(value, rule) =&gt; boolean | string | Promise</em></td></tr><tr><td>pattern</td><td>Regexp pattern, if the regexp cannot match, means that the validation fails</td><td><em>RegExp</em></td></tr><tr><td>trigger</td><td>When to validate the form, priority is higher than the <code>validate-trigger</code> of the Form component, can be set to <code>onChange</code>, <code>onBlur</code>, <code>onSubmit</code></td><td><em>string | string[]</em></td></tr><tr><td>formatter</td><td>Format value before validate</td><td><em>(value, rule) =&gt; any</em></td></tr><tr><td>validateEmpty <code>v3.6.0</code></td><td>Controls whether the <code>validator</code> and <code>pattern</code> options to verify empty values, the default value is <code>true</code>, you can set to <code>false</code> to disable this behavior</td><td><em>boolean</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="validate-trigger" tabindex="-1">validate-trigger</h3><table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>onSubmit</td><td>Trigger validation after submitting form</td></tr><tr><td>onBlur</td><td>Trigger validation after submitting form or blurring input</td></tr><tr><td>onChange</td><td>Trigger validation after submitting form or changing input value</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>submit</td><td>Emitted after submitting the form and validation passed</td><td><em>values: object</em></td></tr><tr><td>failed</td><td>Emitted after submitting the form and validation failed</td><td><em>errorInfo: { values: object, errors: object[] }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3><p>Use <a href="https://v3.vuejs.org/guide/component-template-refs.html" target="_blank">ref</a> to get Form instance and call instance methods.</p><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>submit</td><td>Submit form</td><td>-</td><td>-</td></tr><tr><td>getValues <code>v3.4.8</code></td><td>Get current form values</td><td>-</td><td><em>Record&lt;string, unknown&gt;</em></td></tr><tr><td>validate</td><td>Validate form</td><td><em>name?: string | string[]</em></td><td><em>Promise&lt;void&gt;</em></td></tr><tr><td>resetValidation</td><td>Reset validation</td><td><em>name?: string | string[]</em></td><td>-</td></tr><tr><td>getValidationStatus <code>v3.5.0</code></td><td>Get validation status of all fields\uFF0Cstatus can be <code>passed</code>\u3001<code>failed</code>\u3001<code>unvalidated</code></td><td>-</td><td><em>Record&lt;string, FieldValidationStatus&gt;</em></td></tr><tr><td>scrollToField</td><td>Scroll to field</td><td><em>name: string, alignToTop: boolean</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">FormProps</span>, <span class="hljs-title class_">FormInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>FormInstance</code> is the type of component instance:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">FormInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> formRef = ref&lt;<span class="hljs-title class_">FormInstance</span>&gt;();

formRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">submit</span>();
</code></pre></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Form content</td></tr></tbody></table></div>`,25),e=[p],i={__name:"README",setup(c,{expose:s}){return s({frontmatter:{}}),(o,h)=>(a(),n("div",t,e))}};export{i as default};
