# Hypersonic with IME

Make Hypersonic easy to use even when using an IME
※ [Hypersonic](https://www.raycast.com/reboot/hypersonic)を日本語入力でも使いやすいように微調整したものです

# Hypersonic（というよりRaycast Extension全般）の問題点
Listの検索フォームに文字入力する際、変換確定のEnterでRaycastのPrimary Actionが発火してしまい、変換確定されません。
Listの最上位のItemにActionを持たないコンポーネントを配置することで、変換確定のEnterと干渉しないようにカスタマイズしました。

# 使い方
通常のHypersonicと同じです。
MyTaskを開いて`⌘ + ⇧ + A`でNotionと連携してください。
Hypersonic標準のNotion Database作成を勧められるので、それを使うと簡単に始められます。

# 参考リンク
- [GitHub Issue](https://github.com/raycast/extensions/issues/3504)
- [esa の記事を簡単に検索できる Raycast 拡張を作ってみた: 日本語変換確定時のEnterキーのイベントハンドリング](https://zenn.dev/ryo_kawamata/articles/965ef95ad8bb0d#%E6%97%A5%E6%9C%AC%E8%AA%9E%E5%A4%89%E6%8F%9B%E7%A2%BA%E5%AE%9A%E6%99%82-%E3%81%AE-enter-%E3%82%AD%E3%83%BC%E3%81%AE%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%83%8F%E3%83%B3%E3%83%89%E3%83%AA%E3%83%B3%E3%82%B0)
