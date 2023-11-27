# Reach

Web: https://reach-agent.com

LP: https://reach.motoyui.com

2022年2月の前身サービス(現在サービス終了)から2023年10月現在まで開発を担当しています。

会社全体で4名、エンジニアは私と社員の方との2人体制のため、バックエンドとフロントエンド関係なく業務を担当しています。

社員の方も未経験の方だったため、実際にサービスを利用・営業をしている社員との機能追加からDB設計などを話し合う形でサービスを作っています。

## 業務詳細
### Backend:Go, Docker

ミドルウェア部分の実装をEcho、DB関連をsqlxを使っています。人材紹介会社のCRMとして、各転職エージェントが所有している求人、求職者の情報などの中にビジネスロジックの側面が多くなるため、Domain駆動型の設計をしました。

また、人材紹介の業務の中で、各スカウト媒体などから求職者をCRMに転記する手間がかかるかつ、社内で一時期利用していたRPAサービスがコストの割に精度が低く自分たちでカスタムしないといけない手間が結局かかっていたため、技術的にも精度的にも他サービスと大差ないものを作れるため、Reach内のオプション機能として追加するよう提案し、その機能を一括担当しました。

### Frontend:React, NextJs, TypeScript

NextJsを使用しており、recoilを使って状態管理をしています。

基本機能的に機能を追加する際に、機能ごとに担当となるため、フロントエンドの画面を着手した上で、足りない要素をバックエンドのAPIやDBのカラムに追加していくような形で作業しています。

フロントエンドでは、会社の規模が小さいため、デザイナーがいないことに加えて、営業社員がPM業務を兼任しているため、UI/UXの面は、営業社員と利用ユーザーからのフィードバックをもとに手探りのような形で実装しています。

### Infrastructure:AWS, Firebase, MySQL
使用しているサービスと役割は以下になります。

Route53: ドメイン管理
S3: next.jsのコンテンツなど静的なファイルの配置場所
Cloud Front: サイトにアクセスした際のアクセス先になります。S3のファイルを配信先として使用。サービスの仕様上Server Side RenderingのServer Less Functionのいづれも必要ないため、VercelではなくAWSで統一できるようこの形にしました。

ECS: ECRに配置したBackendのDockerコンテナを動かす。RPAの処理を追加する際に

ALB: フロントからのアクセスをECSに渡す

RDS: Managedのデータベースです。当初は動画データを保存する予定でしたが、仕様変更でテキストのみになったためMaster/Slave構成にして冗長化を図りました。

Firebaseは主に、 Authによる認証、Firebase Storageによる画像の保存先として使用しています。

RPA実装時に、APIサーバーとは別にRPA用のバッチサーバーを立てる必要があったため、ECSで実装しました。その後通知処理などでバッチ処理再度追加することや、利用エージェント単位でバッチサーバーを建てる必要があったため、現状デプロイ作業が複雑になっています。

フロントはGithub Actionでの自動デプロイを実装できていますが、バックエンドは未実装のため、デプロイ業務の効率化のために実装したいです。

# Reach

Web: https://reach-agent.com

LP: https://reach.motoyui.com

I have been in charge of the development of this service from its predecessor service in February 2022 (service now terminated) until now in October 2023.

There are 4 people in the entire company, and since there are 2 engineers, myself and an employee, we are in charge of the work regardless of backend and frontend.

Since the employee was also inexperienced, we are creating the service by discussing the addition of functions, DB design, etc. with the employees who are actually using and selling the service.

## Job Details.
### Backend:Go, Docker

We are using Echo for middleware implementation and sqlx for DB. As a CRM for a recruiting company, there are many aspects of business logic in the information of jobs and job seekers owned by each recruiting agency, so we designed a Domain-driven design.

In addition, the RPA service that we had been using for a while was not accurate enough for the cost, and we had to customize it ourselves. We proposed that RPA be added as an optional feature within Reach, and were responsible for the entire functionality.

### Frontend: React, NextJs, TypeScript

NextJs is used, and recoil is used for state management.

When adding basic functionalities, we are in charge of each feature, so we work on the frontend screen as we start, and then add the missing elements to the backend API or DB columns.

As for the front-end, due to the small size of the company, we do not have a designer, and our sales staff also serve as PMs, so the UI/UX aspect is implemented by hand based on feedback from our sales staff and users.

### Infrastructure: AWS, Firebase, MySQL
The services and roles used are as follows

Route53: Domain management
S3: Location of static files such as next.js content
Cloud Front: The destination when the site is accessed, using S3 files as the delivery destination. Since the service specification does not require any of the Server Less Functions of Server Side Rendering, we chose this form so that we can use AWS instead of Vercel.

ECS: Runs a Backend Docker container placed in ECR, which is used to add RPA processing.

ALB: Passing access from the front desk to ECS

RDS: Managed database. Originally planned to store video data, but due to specification changes, only text was used, so a Master/Slave configuration was used for redundancy.

Firebase is mainly used for authentication with Auth and for storing images with Firebase Storage.

When implementing RPA, it was necessary to set up a batch server for RPA separately from the API server, so it was implemented on ECS. After that, batch processing had to be added again for notification processing, etc., and batch servers had to be set up for each agent, so the current deployment process is complicated.

The front end is an automatic deployment using Github Action.

Translated with www.DeepL.com/Translator (free version)