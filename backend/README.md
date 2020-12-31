## クイックスタート

デバイスのpushTokeを通知に使うため、実機で行う

1. pcにxcodeをインストール、携帯端末にexpoアプリをインストールする
2. App.tsxのURLをバックエンドで設定したCloudRunのものに置き換える
3. 以下のコマンドを実行

```
$ cd expo
$ npm install
$ npm run start
```

4. pcのウェブ画面にQRコードが表示されるので、iOSの場合カメラアプリを起動、Androidの場合はexpoアプリでQRコードを読み込む
5. 起動したアプリで「Send PushToken to FireStore」を押すとpushTokenがFireStoreに保存される

## アプリ画面

うまくデバイスのpushTokeが取得できていれば画面に表示される（画像はシミュレーターのため表示されていない）

<img src="https://user-images.githubusercontent.com/46289011/103399095-c8b3f280-4b82-11eb-981a-7049d597d489.png" width=40% />