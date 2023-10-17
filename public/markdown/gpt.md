# GPT

個人開発のサービスで使用していたコードをアーカイブ的に公開しています。GPT/LLMの勉強のために作成したものです。

# Worker AI

SlackAppで業務内の記録をメモとしてデータを溜めて、それを元に質問から回答を生成できると便利かと思い作成しました。

## 構成
Backend:Python, LangChain, Faiss, Docker
Infrastructure:GCP(Cloud Run, Cloud SQL, Artifact Registory, Datastore, Storage), Firebase(Store)

SlackApp

## 改善点
SlackAppのタイムアウトにより、処理がうまくいっていたとしてもタイムアップになる
->リクエストを直接CloudRunのサーバーに送っているため、間にすぐレスポンスを返すサーバーorバランサーを立てる


# どこいこちゃん

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