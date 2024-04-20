import{o as a,a as n,y as l}from"./vue-libs.b44bc779.js";const t={class:"van-doc-markdown-body"},p=l(`<h1>Built-in Style</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Vant contains some common styles that can be used directly by the className.</p></div><div class="van-doc-card"><h3 id="text-ellipsis" tabindex="-1">Text ellipsis</h3><p>When the text content length exceeds the maximum container width, the excess text is automatically omitted.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;van-ellipsis&quot;</span>&gt;</span>
  This is a paragraph that displays up to one line of text, and the rest of the
  text will be omitted.
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;van-multi-ellipsis--l2&quot;</span>&gt;</span>
  This is a paragraph that displays up to two lines of text, and the rest of the
  text will be omitted.
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;van-multi-ellipsis--l3&quot;</span>&gt;</span>
  This is a paragraph that displays up to three lines of text, and the rest of
  the text will be omitted.
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="hairline" tabindex="-1">Hairline</h3><p>Add 1px border under the Retina screen for the element, based on a pseudo element.</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- border top --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;van-hairline--top&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-comment">&lt;!-- border bottom --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;van-hairline--bottom&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-comment">&lt;!-- border left --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;van-hairline--left&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-comment">&lt;!-- border right --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;van-hairline--right&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-comment">&lt;!-- border top &amp; bottom --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;van-hairline--top-bottom&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-comment">&lt;!-- full border --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;van-hairline--surround&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="safe-area" tabindex="-1">Safe Area</h3><p>Enable safe area.</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- top --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;van-safe-area-top&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-comment">&lt;!-- bottom --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;van-safe-area-bottom&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="animation" tabindex="-1">Animation</h3><pre><code class="language-html"><span class="hljs-comment">&lt;!-- fade in  --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">transition</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;van-fade&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">&quot;visible&quot;</span>&gt;</span>Fade<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">transition</span>&gt;</span>

<span class="hljs-comment">&lt;!-- slide up --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">transition</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;van-slide-up&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">&quot;visible&quot;</span>&gt;</span>Slide Up<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">transition</span>&gt;</span>

<span class="hljs-comment">&lt;!-- slide down --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">transition</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;van-slide-down&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">&quot;visible&quot;</span>&gt;</span>Slide Down<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">transition</span>&gt;</span>

<span class="hljs-comment">&lt;!-- slide left --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">transition</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;van-slide-left&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">&quot;visible&quot;</span>&gt;</span>Slide Left<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">transition</span>&gt;</span>

<span class="hljs-comment">&lt;!-- slide right --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">transition</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;van-slide-right&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-show</span>=<span class="hljs-string">&quot;visible&quot;</span>&gt;</span>Slide Right<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">transition</span>&gt;</span>
</code></pre></div>`,6),e=[p],g={__name:"README",setup(c,{expose:s}){return s({frontmatter:{}}),(i,o)=>(a(),n("div",t,e))}};export{g as default};
