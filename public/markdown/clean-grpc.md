# Clean gRPC

個人開発のサービスで使用していたコードをアーカイブ的に公開しています。gRPCの勉強のために作成したものです。

## 使用スタック
Backend:Go, Docker
Frontend:React, NextJs, TypeScript
Infrastructure:gRPC, Envoy, Google Cloud Platform, MySQL, Firebase

## 構成
フロントエンド:Firebase Hosting
バックエンド:Artifact Registoryに配置したBackendのDockerコンテナを、Cloud Runで動かす。
DB: MySQLをCloud SQLで動しています。極力費用を抑えたかったため、Cloud SQLのリージョン等はアイオワあたりに設定しています。

## 改善点
費用を抑えたかったためロードバランサーでgRPCを制御するのではなく、DockerコンテナにEnvoyサーバーを立て、そこからバックエンドにHTTP1.1でリクエストを送るようにしたため、複雑かつ不安定な構成になってしまった。