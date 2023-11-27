# Reach

Web: https://reach-agent.com

LP: https://reach.motoyui.com

Demo:https://youtu.be/R_Uc2HCeYsc

2022年2月の前身サービス(現在サービス終了)から2023年11月現在まで開発を担当しており、本サービスの開発には立ち上げ当初から開発に携わっております。前身サービスにおいても本サービスと同じく人材紹介会社向けのサービスでしたが、10社ほど導入した段階でサービスとしてうまく伸びなかったため、サービスの方針ごと変え新規で作るという形に至りました。

　私自身の役割に関しては、私ともう一人の社員のエンジニアの方との2人体制であるため、インターン・業務委託という形ではあるものの、設計部分から実装まで、バックエンド、フロント、インフラ面関係なく幅広く担当しています。機能の追加や変更の際も、社内のPMや営業担当と相談をしながら機能実装のイメージをコードに落とし込むような流れをとっています。

　そのため、プロダクトを作る上で、まず動くものを作るという点に重点を置いて開発していました。自社の業務にいち早く導入できるためだけでなく、前身サービスをご利用いただいているクライアントに対して待たせているような状態であったため、難しいコードの実装や新しい機能の追加は極力避け、シンプルな実装でそのサービスの中で本当に必要な機能だけを実装して可能な限り早く自社の業務に試験的に導入し、既存のクライアントに使っていただくかということをリリースまでは意識しました。リリース後は、営業担当から回ってくる要望をいかに機能が多くなりすぎることでUXが低下することや、コードが煩雑になることを避けれるかを考えながら取り組んでいます。また、機能の要望を受けるだけでなく、今後必要な機能を提案することも意識しています。実際に、サービス内にRPA機能を追加を提案し実装まで1人で担当しました。背景として、人材紹介業務の中で、各スカウト媒体などから求職者をCRMに転記、面談日程調整、LINE送信など手間がかかることや、社内で利用していたRPAサービスがコストの割に精度が低く自分たちでカスタムしないといけない手間がかかっていたため、技術的にも精度的にも他サービスと大差ないものを作れることを伝え、その機能を一括担当しました。

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

Demo:https://youtu.be/R_Uc2HCeYsc

I have been in charge of the development of this service from its predecessor service (currently terminated) in February 2022 to November 2023, and have been involved in the development of this service from its inception. The predecessor service, like this service, was for recruitment agencies, but after about 10 companies introduced the service, it did not grow well, so the entire policy of the service was changed and a new service was created.

　As for my own role, since there are two of us, myself and another employee engineer, I am in charge of a wide range of tasks from design to implementation, regardless of back-end, front-end, or infrastructure aspects, even though I am an intern or outsourced engineer. When adding or changing a function, we consult with the in-house PM and sales staff to develop an image of the function to be implemented into code.

　Therefore, in creating a product, we focused on developing something that works first. Not only to be able to introduce the product to our own business as quickly as possible, but also because we were making our clients who were using our predecessor service wait, we avoided implementing difficult code and adding new functions as much as possible, and implemented only the functions that were truly necessary for the service with a simple implementation as much as possible. We were conscious of the fact that until the release, we had to introduce the service on a trial basis as soon as possible and have existing clients use the service. After the release, we are working on the requests from the sales staff while considering how we can avoid the degradation of UX due to too many functions and the complexity of the code. I am also conscious of not only receiving requests for functions, but also proposing functions that will be needed in the future. In fact, I proposed the addition of an RPA function to the service and was in charge of its implementation by myself. The background of this project was that the job placement process requires a lot of time and effort, such as posting job seekers from various scouting media to CRM, adjusting interview schedules, sending a LINE message, etc., and that the RPA service we were using in-house was not accurate enough for the cost and we had to customize it ourselves. We told them that we could create something that was not much different from other services, and we were collectively responsible for that functionality.

## Job Details.
### Backend:Go, Docker

I'm using Echo for middleware implementation and sqlx for DB. As a CRM for a recruiting company, there are many aspects of business logic in the information of jobs and job seekers owned by each recruiting agency, so we designed a Domain-driven design.

In addition, the RPA service that we had been using for a while was not accurate enough for the cost, and we had to customize it ourselves. I proposed that RPA be added as an optional feature within Reach, and were responsible for the entire functionality.

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