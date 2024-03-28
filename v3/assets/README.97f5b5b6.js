import{o as a,a as t,y as e}from"./vue-libs.b44bc779.js";const n={class:"van-doc-markdown-body"},l=e(`<h1>Uploader</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Used to upload a local image or file to the server and display a preview image and upload progress during the upload process. The Uploader component does not currently contain the interface logic for uploading files to the server, this step needs to be implemented by the user.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Uploader</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Uploader</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">:after-read</span>=<span class="hljs-string">&quot;afterRead&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">afterRead</span> = (<span class="hljs-params">file</span>) =&gt; {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(file);
    };

    <span class="hljs-keyword">return</span> {
      afterRead,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="preview-file" tabindex="-1">Preview File</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">multiple</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> fileList = <span class="hljs-title function_">ref</span>([
      { <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg&#39;</span> },
      { <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://cloud-image&#39;</span>, <span class="hljs-attr">isImage</span>: <span class="hljs-literal">true</span> },
    ]);

    <span class="hljs-keyword">return</span> {
      fileList,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="upload-status" tabindex="-1">Upload Status</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">:after-read</span>=<span class="hljs-string">&quot;afterRead&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> fileList = <span class="hljs-title function_">ref</span>([
      {
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg&#39;</span>,
        <span class="hljs-attr">status</span>: <span class="hljs-string">&#39;uploading&#39;</span>,
        <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Uploading...&#39;</span>,
      },
      {
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/tree.jpeg&#39;</span>,
        <span class="hljs-attr">status</span>: <span class="hljs-string">&#39;failed&#39;</span>,
        <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Failed&#39;</span>,
      },
    ]);

    <span class="hljs-keyword">const</span> <span class="hljs-title function_">afterRead</span> = (<span class="hljs-params">file</span>) =&gt; {
      file.<span class="hljs-property">status</span> = <span class="hljs-string">&#39;uploading&#39;</span>;
      file.<span class="hljs-property">message</span> = <span class="hljs-string">&#39;Uploading...&#39;</span>;

      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        file.<span class="hljs-property">status</span> = <span class="hljs-string">&#39;failed&#39;</span>;
        file.<span class="hljs-property">message</span> = <span class="hljs-string">&#39;Failed&#39;</span>;
      }, <span class="hljs-number">1000</span>);
    };

    <span class="hljs-keyword">return</span> {
      fileList,
      afterRead,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="max-count" tabindex="-1">Max Count</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">multiple</span> <span class="hljs-attr">:max-count</span>=<span class="hljs-string">&quot;2&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> fileList = <span class="hljs-title function_">ref</span>([]);

    <span class="hljs-keyword">return</span> {
      fileList,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="max-size" tabindex="-1">Max Size</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">multiple</span> <span class="hljs-attr">:max-size</span>=<span class="hljs-string">&quot;500 * 1024&quot;</span> @<span class="hljs-attr">oversize</span>=<span class="hljs-string">&quot;onOversize&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onOversize</span> = (<span class="hljs-params">file</span>) =&gt; {
      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(file);
      <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;File size cannot exceed 500kb&#39;</span>);
    };

    <span class="hljs-keyword">return</span> {
      onOversize,
    };
  },
};
</code></pre><p>If you need to make different size limits for different types of files, you can pass a function to the <code>max-size</code> props.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">multiple</span> <span class="hljs-attr">:max-size</span>=<span class="hljs-string">&quot;isOverSize&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">isOverSize</span> = (<span class="hljs-params">file</span>) =&gt; {
      <span class="hljs-keyword">const</span> maxSize = file.<span class="hljs-property">type</span> === <span class="hljs-string">&#39;image/jpeg&#39;</span> ? <span class="hljs-number">500</span> * <span class="hljs-number">1024</span> : <span class="hljs-number">1000</span> * <span class="hljs-number">1024</span>;
      <span class="hljs-keyword">return</span> file.<span class="hljs-property">size</span> &gt;= maxSize;
    };
    <span class="hljs-keyword">return</span> {
      isOverSize,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="custom-upload-area" tabindex="-1">Custom Upload Area</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-button</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;plus&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>Upload Image<span class="hljs-tag">&lt;/<span class="hljs-name">van-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-uploader</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="preview-cover" tabindex="-1">Preview Cover</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">preview-cover</span>=<span class="hljs-string">&quot;{ file }&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;preview-cover van-ellipsis&quot;</span>&gt;</span>{{ file.name }}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-uploader</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
  <span class="hljs-selector-class">.preview-cover</span> {
    <span class="hljs-attribute">position</span>: absolute;
    <span class="hljs-attribute">bottom</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">box-sizing</span>: border-box;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
    <span class="hljs-attribute">padding</span>: <span class="hljs-number">4px</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.3</span>);
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="preview-size" tabindex="-1">Preview Size</h3><p>Using <code>preview-size</code> prop to custom the size of preview image.</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- The default unit is px --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">preview-size</span>=<span class="hljs-string">&quot;60&quot;</span> /&gt;</span>
<span class="hljs-comment">&lt;!-- Support other units, such as rem, vh, vw --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">preview-size</span>=<span class="hljs-string">&quot;5rem&quot;</span> /&gt;</span>
</code></pre><p>You can set the width and height separately.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">:preview-size</span>=<span class="hljs-string">&quot;[60, 40]&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="before-read" tabindex="-1">Before Read</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">:before-read</span>=<span class="hljs-string">&quot;beforeRead&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-comment">// \u8FD4\u56DE\u5E03\u5C14\u503C</span>
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">beforeRead</span> = (<span class="hljs-params">file</span>) =&gt; {
      <span class="hljs-keyword">if</span> (file.<span class="hljs-property">type</span> !== <span class="hljs-string">&#39;image/jpeg&#39;</span>) {
        <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;Please upload an image in jpg format&#39;</span>);
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
      }
      <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    };

    <span class="hljs-comment">// \u8FD4\u56DE Promise</span>
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">asyncBeforeRead</span> = (<span class="hljs-params">file</span>) =&gt;
      <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {
        <span class="hljs-keyword">if</span> (file.<span class="hljs-property">type</span> !== <span class="hljs-string">&#39;image/jpeg&#39;</span>) {
          <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;Please upload an image in jpg format&#39;</span>);
          <span class="hljs-title function_">reject</span>();
        } <span class="hljs-keyword">else</span> {
          <span class="hljs-keyword">const</span> img = <span class="hljs-keyword">new</span> <span class="hljs-title class_">File</span>([<span class="hljs-string">&#39;foo&#39;</span>], <span class="hljs-string">&#39;bar.jpg&#39;</span>, {
            <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;image/jpeg&#39;</span>,
          });
          <span class="hljs-title function_">resolve</span>(img);
        }
      });

    <span class="hljs-keyword">return</span> {
      beforeRead,
      asyncBeforeRead,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="disable-uploader" tabindex="-1">Disable Uploader</h3><p>Use <code>disabled</code> prop to disable uploader.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">disabled</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="customize-single-preview-image-style" tabindex="-1">Customize Single Preview Image Style</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-uploader</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;fileList&quot;</span> <span class="hljs-attr">:deletable</span>=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> fileList = <span class="hljs-title function_">ref</span>([
      {
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/sand.jpeg&#39;</span>,
        <span class="hljs-attr">deletable</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">beforeDelete</span>: <span class="hljs-function">() =&gt;</span> {
          <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;Customize the events and styles of a single preview image&#39;</span>);
        },
      },
      {
        <span class="hljs-attr">url</span>: <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/tree.jpeg&#39;</span>,
        <span class="hljs-attr">imageFit</span>: <span class="hljs-string">&#39;contain&#39;</span>,
      },
    ]);

    <span class="hljs-keyword">return</span> { fileList };
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>List of uploaded files</td><td><em>FileListItem[]</em></td><td>-</td></tr><tr><td>accept</td><td>Accepted <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers" target="_blank">file type</a></td><td><em>string</em></td><td><code>image/*</code></td></tr><tr><td>name</td><td>Input name, usually a unique string or number</td><td><em>number | string</em></td><td>-</td></tr><tr><td>preview-size</td><td>Size of preview image</td><td><em>number | string | Array</em></td><td><code>80px</code></td></tr><tr><td>preview-image</td><td>Whether to show image preview</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>preview-full-image</td><td>Whether to show full screen image preview when image is clicked</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>preview-options</td><td>Options of full screen image preview, see <a href="#/en-US/image-preview" target="_blank">ImagePreview</a></td><td><em>object</em></td><td>-</td></tr><tr><td>multiple</td><td>Whether to enable multiple selection pictures</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>disabled</td><td>Whether to disabled the upload</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>readonly <code>v3.1.5</code></td><td>Whether to make upload area readonly</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>deletable</td><td>Whether to show delete icon</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>show-upload</td><td>Whether to show upload area</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>lazy-load</td><td>Whether to enable lazy load, should register <a href="#/en-US/lazyload" target="_blank">Lazyload</a> component</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>capture</td><td>Capture, can be set to <code>camera</code></td><td><em>string</em></td><td>-</td></tr><tr><td>after-read</td><td>Hook after reading the file</td><td><em>Function</em></td><td>-</td></tr><tr><td>before-read</td><td>Hook before reading the file, return false to stop reading the file, can return Promise</td><td><em>Function</em></td><td>-</td></tr><tr><td>before-delete</td><td>Hook before delete the file, return false to stop reading the file, can return Promise</td><td><em>Function</em></td><td>-</td></tr><tr><td>max-size <code>v3.0.17</code></td><td>Max size of file</td><td><em>number | string | (file: File) =&gt; boolean</em></td><td><code>Infinity</code></td></tr><tr><td>max-count</td><td>Max count of image</td><td><em>number | string</em></td><td><code>Infinity</code></td></tr><tr><td>result-type</td><td>Type of file read result, can be set to <code>file</code> <code>text</code></td><td><em>string</em></td><td><code>dataUrl</code></td></tr><tr><td>upload-text</td><td>Upload text</td><td><em>string</em></td><td>-</td></tr><tr><td>image-fit</td><td>Preview image fit mode</td><td><em>string</em></td><td><code>cover</code></td></tr><tr><td>upload-icon</td><td>Upload icon</td><td><em>string</em></td><td><code>photograph</code></td></tr></tbody></table><blockquote><p>Tips: accept, capture and multiple are the attributes of the native input tag, there may be some compatibility issues under different systems and WebView.</p></blockquote></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>oversize</td><td>Emitted when file size over limit</td><td>Same as after-read</td></tr><tr><td>click-upload <code>v3.1.5</code></td><td>Emitted when click upload area</td><td><em>event: MouseEvent</em></td></tr><tr><td>click-preview</td><td>Emitted when preview image is clicked</td><td>Same as after-read</td></tr><tr><td>close-preview</td><td>Emitted when the full screen image preview is closed</td><td>-</td></tr><tr><td>delete</td><td>Emitted when preview file is deleted</td><td>Same as after-read</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td>default</td><td>Custom upload area</td><td>-</td></tr><tr><td>preview-delete <code>v.3.5.0</code></td><td>Custom delete icon</td><td><code>item: FileListItem</code></td></tr><tr><td>preview-cover</td><td>Custom content that covers the image preview</td><td><code>item: FileListItem</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="parameters-of-before-read-after-read-before-delete" tabindex="-1">Parameters of before-read\u3001after-read\u3001before-delete</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>file</td><td>File object</td><td><em>object</em></td></tr><tr><td>detail</td><td>Detail info, contains name and index</td><td><em>object</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="resulttype" tabindex="-1">ResultType</h3><table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>file</td><td>Result contains File object</td></tr><tr><td>text</td><td>Result contains File object and text content</td></tr><tr><td>dataUrl</td><td>Result contains File object and base64 content</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="methods" tabindex="-1">Methods</h3><p>Use <a href="https://v3.vuejs.org/guide/component-template-refs.html" target="_blank">ref</a> to get Uploader instance and call instance methods.</p><table><thead><tr><th>Name</th><th>Description</th><th>Attribute</th><th>Return value</th></tr></thead><tbody><tr><td>closeImagePreview</td><td>Close full screen image preview</td><td>-</td><td>-</td></tr><tr><td>chooseFile</td><td>Trigger choosing files, works with the user action context only because of browser security</td><td>-</td><td>-</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">UploaderProps</span>,
  <span class="hljs-title class_">UploaderInstance</span>,
  <span class="hljs-title class_">UploaderResultType</span>,
  <span class="hljs-title class_">UploaderFileListItem</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre><p><code>UploaderInstance</code> is the type of component instance:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">UploaderInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> uploaderRef = ref&lt;<span class="hljs-title class_">UploaderInstance</span>&gt;();

uploaderRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">chooseFile</span>();
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-uploader-size</td><td><em>80px</em></td><td>-</td></tr><tr><td>--van-uploader-icon-size</td><td><em>24px</em></td><td>-</td></tr><tr><td>--van-uploader-icon-color</td><td><em>var(--van-gray-4)</em></td><td>-</td></tr><tr><td>--van-uploader-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-uploader-text-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-uploader-upload-background-color</td><td><em>var(--van-gray-1)</em></td><td>-</td></tr><tr><td>--van-uploader-upload-active-color</td><td><em>var(--van-active-color)</em></td><td>-</td></tr><tr><td>--van-uploader-delete-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-uploader-delete-icon-size</td><td><em>14px</em></td><td>-</td></tr><tr><td>--van-uploader-delete-background-color</td><td><em>rgba(0, 0, 0, 0.7)</em></td><td>-</td></tr><tr><td>--van-uploader-file-background-color</td><td><em>var(--van-background-color)</em></td><td>-</td></tr><tr><td>--van-uploader-file-icon-size</td><td><em>20px</em></td><td>-</td></tr><tr><td>--van-uploader-file-icon-color</td><td><em>var(--van-gray-7)</em></td><td>-</td></tr><tr><td>--van-uploader-file-name-padding</td><td><em>0 var(--van-padding-base)</em></td><td>-</td></tr><tr><td>--van-uploader-file-name-margin-top</td><td><em>var(--van-padding-xs)</em></td><td>-</td></tr><tr><td>--van-uploader-file-name-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-uploader-file-name-text-color</td><td><em>var(--van-gray-7)</em></td><td>-</td></tr><tr><td>--van-uploader-mask-text-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-uploader-mask-background-color</td><td><em>fade(var(--van-gray-8), 88%)</em></td><td>-</td></tr><tr><td>--van-uploader-mask-icon-size</td><td><em>22px</em></td><td>-</td></tr><tr><td>--van-uploader-mask-message-font-size</td><td><em>var(--van-font-size-sm)</em></td><td>-</td></tr><tr><td>--van-uploader-mask-message-line-height</td><td><em>var(--van-line-height-xs)</em></td><td>-</td></tr><tr><td>--van-uploader-loading-icon-size</td><td><em>22px</em></td><td>-</td></tr><tr><td>--van-uploader-loading-icon-color</td><td><em>var(--van-white)</em></td><td>-</td></tr><tr><td>--van-uploader-disabled-opacity</td><td><em>var(--van-disabled-opacity)</em></td><td>-</td></tr></tbody></table></div>`,25),p=[l],h={__name:"README",setup(d,{expose:s}){return s({frontmatter:{}}),(o,c)=>(a(),t("div",n,p))}};export{h as default};
