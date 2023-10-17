# Django

個人開発のサービスで使用していたコードをアーカイブ的に公開しています。django, gptの勉強のために作成したものです。

## 使用スタック
Backend:Go, Docker
Frontend:React, NextJs, TypeScript
Infrastructure:Google Cloud Platform(Cloud Run, Cloud SQL, ), MySQL, Firebase

## 構成
バックエンド:Artifact Registoryに配置したBackendのDockerコンテナを、Cloud Runで動かす。
DB: MySQLをCloud SQLで動しています。ベクトルDBは、費用を抑えるため,
Faissでベクトル化したものをCloud Storageに保存しています。

## 改善点
実験的に多くのサービスを入れているため、可読性が低い。