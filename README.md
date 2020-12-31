# expo_push_notification


## 構造図

expoアプリでデバイスのpushTokenをFirestoreに登録し、登録したデバイスに定期的にpush通知を送るためのシステム

### token取得

![token](./diagrams/getToken.svg)

### push通知送信

![token](./diagrams/pushToken.svg)