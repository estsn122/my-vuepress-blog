---
date: 2020-6-16
tags: 
  - vuepress
---
# VuePressで簡単にブログを始める方法
本ブログは、VuePressを使用して作成しました。<br>
VuePressを使用した理由ですが、最近学んだvue.jsを生かしてブログを作りたいと思ったということと、静的サイトジェネレーターに触れてみたかったからです。<br>

今はシンプルすぎる構成をしていますが、徐々にカスタマイズしていき、余力があれば1から自作テーマを作ることにも挑戦してみたいと思ってます。<br>
(もっとカスタマイズしてから公開したい気持ちもあったのですが、公開がどんどん後に伸びるように思ったので、勢いで公開しました:sweat_smile:)<br>

今回VuePressに触れたので、早速VuePressの使い方について記事を書いていきます。

VuePressを始めること自体は凄く簡単で、[VuePress公式ドキュメント：Getting Started](https://vuepress.vuejs.org/guide/getting-started.html) の6つの手順踏めば、すぐにローカルで立ち上げることができます。

この手順を踏んで立ち上げ直後の画面です↓

![](https://paper-attachments.dropbox.com/s_E414CF1620EC12800F78D45F17EA2D7CD89AE9BA1D27F4C4F6D1C64788BE8998_1592239548024_image.png)


と、上記画像を見ればわかるように、記事をすぐ公開できる状態ではありません。

なので、手軽にブログを始めたい場合はブログテーマを使用するのが良いと思います。

上記とは別のフォルダで、[こちら](https://vuepress-theme-blog.ulivz.com/#quick-start) の手順を踏んでみてください。<br>
Quick Startの`yarn create vuepress [blogName]`から始まるコマンドです。


実行すると、次のようなことを聞かれますが
```
? Select the boilerplate type
```

公式ドキュメントで推奨するディレクトリ構成が次のようになっているので、`blog`と回答しました。

![](https://paper-attachments.dropbox.com/s_E414CF1620EC12800F78D45F17EA2D7CD89AE9BA1D27F4C4F6D1C64788BE8998_1592264975125_image.png)


Step2の`yarn dev`を実行すれば、テストデータが入ってることもあり、ブログが完成します。

![](https://paper-attachments.dropbox.com/s_E414CF1620EC12800F78D45F17EA2D7CD89AE9BA1D27F4C4F6D1C64788BE8998_1592264653785_image.png)


カスタマイズ方法は下記サイトに書いてあるので、参考にしてみてください。<br>
[https://vuepress-theme-blog.ulivz.com/](https://vuepress-theme-blog.ulivz.com/)


勢いで書き上げたので、今後補足追記など行うと思います。
