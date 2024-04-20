import{o as s,a as e,y as a}from"./vue-libs.b44bc779.js";const n={class:"van-doc-markdown-body"},d=a(`<h1>ImagePreview</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to zoom in and preview the picture, and it supports two methods: function call and component call.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ImagePreview</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ImagePreview</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-js"><span class="hljs-title class_">ImagePreview</span>([
  <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&#39;</span>,
  <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&#39;</span>,
]);
</code></pre></div><div class="van-doc-card"><h3 id="set-start-position" tabindex="-1">Set Start Position</h3><pre><code class="language-js"><span class="hljs-title class_">ImagePreview</span>({
  <span class="hljs-attr">images</span>: [
    <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&#39;</span>,
    <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&#39;</span>,
  ],
  <span class="hljs-attr">startPosition</span>: <span class="hljs-number">1</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="show-close-icon" tabindex="-1">Show Close Icon</h3><p>After setting the <code>closeable</code> attribute, the close icon will be displayed in the upper right corner of the pop-up layer, and the icon can be customized through the <code>close-icon</code> attribute, and the icon location can be customized by using the <code>close-icon-position</code> attribute.</p><pre><code class="language-js"><span class="hljs-title class_">ImagePreview</span>({
  <span class="hljs-attr">images</span>: [
    <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&#39;</span>,
    <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&#39;</span>,
  ],
  <span class="hljs-attr">closeable</span>: <span class="hljs-literal">true</span>,
});
</code></pre></div><div class="van-doc-card"><h3 id="close-event" tabindex="-1">Close Event</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-title class_">ImagePreview</span>({
  <span class="hljs-attr">images</span>: [
    <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&#39;</span>,
    <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&#39;</span>,
  ],
  <span class="hljs-title function_">onClose</span>(<span class="hljs-params"></span>) {
    <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;closed&#39;</span>);
  },
});
</code></pre></div><div class="van-doc-card"><h3 id="before-close" tabindex="-1">Before Close</h3><pre><code class="language-js"><span class="hljs-keyword">const</span> instance = <span class="hljs-title class_">ImagePreview</span>({
  <span class="hljs-attr">images</span>: [
    <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&#39;</span>,
    <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&#39;</span>,
  ],
  <span class="hljs-attr">beforeClose</span>: <span class="hljs-function">() =&gt;</span> <span class="hljs-literal">false</span>,
});

<span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
  instance.<span class="hljs-title function_">close</span>();
}, <span class="hljs-number">2000</span>);
</code></pre></div><div class="van-doc-card"><h3 id="component-call" tabindex="-1">Component Call</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image-preview</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:images</span>=<span class="hljs-string">&quot;images&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:index</span>&gt;</span>Page: {{ index }}<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-image-preview</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> index = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);
    <span class="hljs-keyword">const</span> images = [
      <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&#39;</span>,
      <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&#39;</span>,
    ];
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">newIndex</span>) =&gt; {
      index.<span class="hljs-property">value</span> = newIndex;
    };

    <span class="hljs-keyword">return</span> {
      show,
      index,
      images,
      onChange,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="use-image-slot" tabindex="-1">Use image slot</h3><p>When using ImagePreview component, you can custom the image through the <code>image</code> slot, such as render a video content.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-image-preview</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">:images</span>=<span class="hljs-string">&quot;images&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">image</span>=<span class="hljs-string">&quot;{ src }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">video</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 100%;&quot;</span> <span class="hljs-attr">controls</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">source</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;src&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">video</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-image-preview</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> show = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);
    <span class="hljs-keyword">const</span> images = [
      <span class="hljs-string">&#39;https://www.w3school.com.cn/i/movie.ogg&#39;</span>,
      <span class="hljs-string">&#39;https://www.w3school.com.cn/i/movie.ogg&#39;</span>,
      <span class="hljs-string">&#39;https://www.w3school.com.cn/i/movie.ogg&#39;</span>,
    ];
    <span class="hljs-keyword">return</span> {
      show,
      images,
    };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="options" tabindex="-1">Options</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>images</td><td>Images URL list</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td>startPosition</td><td>Start position</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>showIndex</td><td>Whether to show index</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>showIndicators</td><td>Whether to show indicators</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>loop</td><td>Whether to enable loop</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>swipeDuration</td><td>Animation duration (ms)</td><td><em>number | string</em></td><td><code>300</code></td></tr><tr><td>onClose</td><td>Emitted when ImagePreview is closed</td><td><em>Function</em></td><td>-</td></tr><tr><td>onChange</td><td>Emitted when current image changed</td><td><em>Function</em></td><td>-</td></tr><tr><td>onScale</td><td>Emitted when scaling current image</td><td><em>Function</em></td><td>-</td></tr><tr><td>closeOnPopstate</td><td>Whether to close when popstate</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>beforeClose</td><td>Callback function before close</td><td><em>(action) =&gt; boolean | Promise</em></td><td>-</td></tr><tr><td>className</td><td>Custom className</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>maxZoom</td><td>Max zoom</td><td><em>number | string</em></td><td><code>3</code></td></tr><tr><td>minZoom</td><td>Min zoom</td><td><em>number | string</em></td><td><code>1/3</code></td></tr><tr><td>closeable</td><td>Whether to show close icon</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>closeIcon</td><td>Close icon name</td><td><em>string</em></td><td><code>clear</code></td></tr><tr><td>closeIconPosition</td><td>Close icon position, can be set to <code>top-left</code> <code>bottom-left</code> <code>bottom-right</code></td><td><em>string</em></td><td><code>top-right</code></td></tr><tr><td>transition <code>v3.0.8</code></td><td>Transition, equivalent to <code>name</code> prop of <a href="https://v3.vuejs.org/api/built-in-components.html#transition" target="_blank">transition</a></td><td><em>string</em></td><td><code>van-fade</code></td></tr><tr><td>overlayClass <code>v3.2.8</code></td><td>Custom overlay class</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>overlayStyle <code>v3.0.8</code></td><td>Custom overlay style</td><td><em>object</em></td><td>-</td></tr><tr><td>teleport</td><td>Specifies a target element where ImagePreview will be mounted</td><td><em>string | Element</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model:show</td><td>Whether to show ImagePreview</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>images</td><td>Images URL list</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td>start-position</td><td>Start position</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>swipe-duration</td><td>Animation duration (ms)</td><td><em>number | string</em></td><td><code>300</code></td></tr><tr><td>show-index</td><td>Whether to show index</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-indicators</td><td>Whether to show indicators</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>loop</td><td>Whether to enable loop</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>before-close</td><td>Callback function before close</td><td><em>(action: number) =&gt; boolean | Promise&lt;boolean&gt;</em></td><td>-</td></tr><tr><td>close-on-popstate</td><td>Whether to close when popstate</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>class-name</td><td>Custom className</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>max-zoom</td><td>Max zoom</td><td><em>number | string</em></td><td><code>3</code></td></tr><tr><td>min-zoom</td><td>Min zoom</td><td><em>number | string</em></td><td><code>1/3</code></td></tr><tr><td>closeable</td><td>Whether to show close icon</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>close-icon</td><td>Close icon name</td><td><em>string</em></td><td><code>clear</code></td></tr><tr><td>close-icon-position</td><td>Close icon position, can be set to <code>top-left</code> <code>bottom-left</code> <code>bottom-right</code></td><td><em>string</em></td><td><code>top-right</code></td></tr><tr><td>transition <code>v3.0.8</code></td><td>Transition, equivalent to <code>name</code> prop of <a href="https://v3.vuejs.org/api/built-in-components.html#transition" target="_blank">transition</a></td><td><em>string</em></td><td><code>van-fade</code></td></tr><tr><td>overlay-class <code>v3.2.8</code></td><td>Custom overlay class</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>overlay-style <code>v3.0.8</code></td><td>Custom overlay style</td><td><em>object</em></td><td>-</td></tr><tr><td>teleport</td><td>Specifies a target element where ImagePreview will be mounted</td><td><em>string | Element</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>close</td><td>Emitted when closing ImagePreview</td><td><em>value: { index, url }</em></td></tr><tr><td>closed</td><td>Emitted when ImagePreview is closed</td><td>-</td></tr><tr><td>change</td><td>Emitted when current image changed</td><td><em>index: number</em></td></tr><tr><td>scale</td><td>Emitted when scaling current image</td><td><em>value: ImagePreviewScaleEventParams</em></td></tr><tr><td>scale</td><td>Emitted when scaling current image</td><td><em>value: ImagePreviewScaleEventParams</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3><p>Use <a href="https://vuejs.org/v2/api/#ref" target="_blank">ref</a> to get ImagePreview instance and call instance methods.</p><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>swipeTo <code>2.9.0</code></td><td>Swipe to target index</td><td><em>index: number, options?: SwipeToOptions</em></td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">ImagePreviewProps</span>,
  <span class="hljs-title class_">ImagePreviewOptions</span>,
  <span class="hljs-title class_">ImagePreviewInstance</span>,
  <span class="hljs-title class_">ImagePreviewScaleEventParams</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>ImagePreviewInstance</code> is the type of component instance:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ImagePreviewInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> imagePreviewRef = ref&lt;<span class="hljs-title class_">ImagePreviewInstance</span>&gt;();

imagePreviewRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">swipeTo</span>(<span class="hljs-number">1</span>);
</code></pre></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td>index</td><td>Custom index</td><td>{ index: index of current image }</td></tr><tr><td>cover</td><td>Custom content that covers the image preview</td><td>-</td></tr><tr><td>image <code>v3.6.5</code></td><td>Custom image content</td><td>{ src: current image src }</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="onclose-parameters" tabindex="-1">onClose Parameters</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>url</td><td>URL of current image</td><td><em>number</em></td></tr><tr><td>index</td><td>Index of current image</td><td><em>number</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="onscale-parameters" tabindex="-1">onScale Parameters</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>index</td><td>Index of current image</td><td><em>number</em></td></tr><tr><td>scale</td><td>scale of current image</td><td><em>number</em></td></tr></tbody></table></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-image-preview-index-text-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-image-preview-index-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-image-preview-index-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-image-preview-index-text-shadow</td><td><em>0 1px 1px var(--van-gray-8)</em></td><td>-</td></tr><tr><td>--van-image-preview-overlay-background-color</td><td><em>rgba(0, 0, 0, 0.9)</em></td><td>-</td></tr><tr><td>--van-image-preview-close-icon-size</td><td><em>22px</em></td><td>-</td></tr><tr><td>--van-image-preview-close-icon-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr><tr><td>--van-image-preview-close-icon-margin</td><td><em>var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-image-preview-close-icon-z-index</td><td><em>1</em></td><td>-</td></tr></tbody></table></div>`,22),o=[d],h={__name:"README",setup(l,{expose:t}){return t({frontmatter:{}}),(c,p)=>(s(),e("div",n,o))}};export{h as default};
