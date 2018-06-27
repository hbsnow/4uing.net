---
title: 「エンジニアのための WordpPress 開発入門」感想
tags: book, wordpress
description: 技術評論社「エンジニアのための WordPress 開発入門」を読んでの感想。
datePublished: 2018-05-14
dateModified: 2018-06-24
---

## 前置き

これまで私が WordPress にもっていた印象はものすごく悪くて、その理由はこの本にもいくつか書かれているのだけれどもその理由が2つ。

* WordPress について Web 上の検索で得られる情報の質が低いものが多い
* 現実に自分が見てきた WordPress の `functions.php` が本当に酷い

特に2つ目のものは実害があるのでつらい。[CODEX](https://codex.wordpress.org/) を見つつ機能追加をしたり程度はするけども、新規案件でわざわざ WordPress を使おうという気持ちが起きるわけもなく、正直まったく興味はありませんでした。

この本を手にとった動機は [PHP の現場という Podcast](https://php-genba.shin1x1.com/) で紹介されていて、なんとなく記憶の片隅にあったからで、購入にまで至ったのは第一章に目を通したときに、自分がどのように WordPress と付き合えばいいのかというのが示されていると思えたからだと思う。

## 第 1 章 WordPress とは

この章を読んで WordPress を選択肢として考慮すべきものと考えを改めた。よく知りもしないで否定的な態度をとるというのは、これだけ多く使われているものに対して良い姿勢ではないなと反省できたのが良かったと思う。

## 第 2 章 環境の準備

初心者向けの本ではやたらと長い環境開発の解説がありがちだったりしますが、この本では本当に動かすだけの解説にとどまっていて、対象読者がエンジニアというのがよく理解できる章。この本では [VCCW](http://vccw.cc/) を使った環境構築が解説されています。私は[ローカル環境の構築には Docker をつかいました](/blog/wordpress-docker/)。

この章では WordPress でのデバック方法についても書かれています。

## 第 3 章 基本機能

WordPress の基本機能の解説で、WordPress を少しでも使ったことがあればさらっと目を通すだけで問題ないはず。

## 第 4 章 プラグインによる機能拡張

すでにあるものをわざわざ自分で作るのはまったくの無駄ということもないのですが、実務ではコストという制約があるので、ある程度のプラグインについての知識はカバーしておきたい、という要望に答えてくれる章。

こういったものは実際に使ってみる、あるいは者によってはコードを読まないとわからないと考えているので、この章についてはとにかくプラグインを入れて実際に手を動かしました。

だいたい必要になりそうなプラグインは網羅されてるんじゃないかという気もします。とはいっても私が WordPress でいくつもサイトを作った経験があるわけでもないので、これで不足がないのかというと微妙なのかもしれません。ただ、ここに書かれていないプラグインでその数があまりに膨大になるようであれば、そもそも WordPress で解決すべきプロジェクトなのかどうかという話になるような気がします。

また、気になったのが [Toolset Types](https://wordpress.org/plugins/types/) というプラグインで、このプラグインは 2018 年から無料版のバグフィックス、セキュリティアップデートが行われなくなっているため、現在では有料版を使う必要があります。WordPress のエコシステムではこういったことが起こり得るということを知ると、WordPress におけるプラグインの選定はコードが安全かどうか以外にも、案件によってはそのあたりの配慮も必要になり難しい。

## 第 5 章 WordPress の基本アーキテクチャ

最低限知っておけばいいだろうアーキテクチャの解説で、WordPress ではどうコードを書くべきかを知ることができます。

* どの処理中にフックして、何ができるか
* DB からどうデータをもってくるか
* もってきたデータをどう出力するか
* テンプレートの仕組み

といったようなことが解説されています。多少思うところはあったのですが、この本ではいたるところで「これが WordPress なので受け入れよう」といった趣旨の記述があるので、そういうことなのだと思う。

## 第 6 章 テーマの作成・カスタマイズ

テーマ作成について。このあたりは案件によって何にすべきかが変わるだろうけれども、この本を手に取る層はおそらくなんでも作りたがる傾向にある気がするので、そうではない方法もあることが最初に示されていて、これは自分も気をつけたい。ただ何が何でもプラグインというよりは、使用するプラグインは厳選してある程度は自分で書く方針でいきたい。突然の有料化がある以上、他のエコシステムと同等に考えるべきものではないと思う。

テーマにも一応テスト(いわゆる私たちの想像するテストではない)があるらしく、その紹介もされています。

## 第 7 章 プラグインの作成と公開

WordPress プラグインを作成することに興味がもてなかったので、読み流した。簡単に作れ公開もできるようだが、あまり興味がないのでさっと流した。とはいえ、もちろん WordPress に貢献するエネルギーがあるのであれば、それはとても素晴らしいことだと思う。

## 第 8 章 投稿データと関連エンティティ

WordPress では、

* 投稿タイプ
* カスタムフィールド
* タクソノミー

の 3 つの概念によってエンティティが表現されていて、この章ではこれらを管理する API と具体的なサンプルが紹介されています。

API の紹介は公式を見れば済む話なんだけど、実際にそれらにどういったユースケースがあるのかというのはこういうので解説されるととても助かります。

## 第 9 章 投稿データの検索・取得

DB から欲しいデータをどう取ってくればよいのかがソース付きで解説されています。

すべてが解説されているわけではないようで、この章の最後には興味があればソースコードを、といったことが書いているのですが、この章の冒頭でも書かれているように、解説されているクラスの行数は 6000 行を超えているため軽い興味程度では厳しい。

## 第 10 章 ユーザーと権限

ユーザ・権限グループ・権限について。管理者と編集者の中間の権限をもつユーザが欲しくなるというのは結構ある。

## 第 11 章 管理画面のカスタマイズ

メインになるのはカスタムフィールドの追加の話なんだろうけど、前述の通り注意すべきこととして Toolset Types が有料化しているので、それでは困る場合には別のプラグインで実装する必要があるということ。管理画面の作成は本当に面倒なので、プラグインで解決できるのであればプラグインで解決すべきだと思います。[Advanced Custom Fields](https://www.advancedcustomfields.com/) はほぼ必須になるはず。

Settings API についてはサンプルコードがあるにはあるんだけど、これを見るなら [CODEX](https://codex.wordpress.org/Settings_API) のほうがわかりやすい。

## 第 12 章 その他の機能や API

おまけの章なのかと思ったら結構ボリュームがあって

* wpdb クラス (DAO)
* バリデーション・ナンス・サニタイズ
* JS/CSS の追加方法
* キャッシュ
* ショートコード
* ウィジェット
* マルチサイト
* WP REST API
* 多言語化
* 自動アップデート
* メール送信

上記についての解説があります。