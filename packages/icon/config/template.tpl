@import '../style/var';

@font-face {
  font-style: normal;
  font-weight: normal;
  font-family: '<%= fontName %>';
  src: url('https://img.yzcdn.cn/vant/<%= cssClass %>') format('truetype');
}

.van-icon {
  position: relative;
  display: inline-block;
  font: normal normal normal 14px/1 "<%= fontName %>";
  font-size: inherit;
  text-rendering: auto;

  &--image {
    width: 1em;
    height: 1em;

    img {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      max-width: 100%;
      max-height: 100%;
      position: absolute;
    }
  }

  &::before {
    display: inline-block;
  }
}

<% _.each(glyphs, function(glyph) { %>.van-icon-<%= glyph.fileName %>::before {
  content: "\<%= glyph.codePoint %>";
}

<% }); %>