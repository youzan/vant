
import sass from 'sass';
import { VueLoaderPlugin } from 'vue-loader';
import { POSTCSS_CONFIG_FILE } from '../common/constant';

const CSS_LOADERS = [
  'style-loader',
  'css-loader',
  {
    loader: 'postcss-loader',
    options: {
      config: {
        path: POSTCSS_CONFIG_FILE
      }
    }
  }
];

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx', '.vue', '.less']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          }
        ]
      },
      {
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /node_modules\/(?!(@youzan\/create-vue-components))/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        sideEffects: true,
        use: CSS_LOADERS
      },
      {
        test: /\.less$/,
        sideEffects: true,
        use: [...CSS_LOADERS, 'less-loader']
      },
      {
        test: /\.scss$/,
        sideEffects: true,
        use: [
          ...CSS_LOADERS,
          {
            loader: 'sass-loader',
            options: {
              implementation: sass
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: ['vue-loader', '@vant/markdown-loader']
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};

export default module.exports;
