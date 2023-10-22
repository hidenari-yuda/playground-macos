# Expert AI

SlackAppで業務内の記録をメモとしてデータを溜めて、それを元に質問から回答を生成できると便利かと思い作成しました。

## 構成
Backend:Python, LangChain, Faiss, Docker
Infrastructure:GCP(Cloud Run, Cloud SQL, Artifact Registory, Datastore, Storage), Firebase(Store)

LLMの部分は、SlackAppから取得したテキストデータをFaissを使用して、類似度の高いデータを取得しています。PineconeなどのベクトルDBは費用が高いため、Faissでベクトル化したものをCloud Storageに保存する形をとっています。

## 改善点
SlackAppのタイムアウトにより、処理がうまくいっていたとしてもタイムアップになる
->リクエストを直接CloudRunのサーバーに送っているため、間にすぐレスポンスを返すサーバーorバランサーを立てる

## App Link
https://co.ai-st.art/memo