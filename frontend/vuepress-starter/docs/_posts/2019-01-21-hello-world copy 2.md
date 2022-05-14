---
category: Vue.js
tags:
  - Vue
date: 2022-04-01
title: VuePress!
vssue-title: VuePress!
---

Vue.jsについて学んでみた


# VuePress

Vue.jsの作者Evan You氏が作成した静的サイトジェネレータで、特に技術ドキュメントの作成に向けて作られたもの
次のサイトはVuePressの公式ドキュメント


*  [VuePress](https://vuepress.vuejs.org/) 
```shell
mkdir vuepress-starter && cd vuepress-starter
yarn init
yarn add -D vuepress
mkdir docs && echo ‘# Hello VuePress’ > docs/README.md
```

package.jsonに追加
```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

```shell
yarn docs:dev
```

http://localhost:8080
にアクセスするとできる

# 設定の仕方
### 構成ファイル
構成がないと、ページは非常に小さくなり、ユーザーはサイト内を移動できなくなります。.vuepressサイトをカスタマイズするには、まずdocsディレクトリ内にディレクトリを作成しましょう。これは、すべてのVuePress固有のファイルが配置される場所です。プロジェクトの構造はおそらく次のようになります。

```
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json

```

config.js
```js
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around'
}
```

[VuePress+netlifyで技術ブログを立ち上げてみた | DORASU Tech. BLOG](https://dorasu-tech.dorasu.com/posts/2020/01/10/vuepress.html)
これみれば一発だった…()

他に使えそうなテーマもあったので調べてみるといいかも





#vue