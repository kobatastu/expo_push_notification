## セットアップ

### GCPのセットアップ

google-cloud-sdkのインストール

```
$ curl https://sdk.cloud.google.com | bash
$ exec -l $SHELL
```

初期化

```
$ gcloud init
```

アクセスの許可

```
$ gcloud auth application-default login
```

## Cloud Build & Cloud Run へのデプロイ

### Cloud Build

```
$ npm run build-image
```

### Cloud Run

GCPのGUIから行う
ここで取得したURLをexpo/App.tsxに反映する

## schedulerへの設定

通知の送信周期はcrontabで調整する