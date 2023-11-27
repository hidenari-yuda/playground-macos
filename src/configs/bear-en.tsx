import type { BearData } from "~/types";

const bearEn: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:user",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me-en.md",
        icon: "i-la:dragon",
        excerpt: "I love to create something new..."
      },
      {
        id: "reach",
        title: "reach",
        file: "markdown/reach-en.md",
        icon: "i-icon-park-outline:github",
        excerpt: "人材紹介会社向けの送客・CRMシステムです。",
        link: "https://reach-agent.com/"
      }
    ]
  },
  {
    id: "personal-projects",
    title: "Personal Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "clean-grpc",
        title: "gRPC Template",
        file: "markdown/clean-grpc-en.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Clean ArchitectureとgRPCを用いたGo/NextJsテンプレート",
        link: "https://github.com/hidenari-yuda/ai-market"
      },
      {
        id: "expert",
        title: "Expert Slack",
        file: "markdown/expert-ai-en.md",
        icon: "i-icon-park-outline:github",
        excerpt: "長期記憶LLMを用いた業務チャットbot(Slack App)",
        link: "https://co.ai-st.art/memo"
      },
      {
        id: "django",
        title: "Django Template",
        file: "markdown/django-en.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Djangoを用いたWebアプリケーションテンプレート",
        link: "https://github.com/ai-start/career-server"
      },
      {
        id: "english-slack",
        title: "English Slack",
        file: "markdown/english-slack-en.md",
        icon: "i-icon-park-outline:github",
        excerpt: "ChatGPT×英語学習コミュニティ内のSlack App",
        link: "https://circular-tricorne-9bc.notion.site/ChatGPT-dd8b10a7efcd49159c52f714e8cce395"
      },
      // {
      //   id: "rust",
      //   title: "Learning Rust",
      //   file: "markdown/rust-en.md",
      //   icon: "i-icon-park-outline:github",
      //   excerpt: "This is a list of my source codes to learn Rust...",
      //   link: "https://github.com/hidenari-yuda/rust-web"
      // },
      // {
      //   id: "nextjs-ts",
      //   title: "Convert to TypeScript",
      //   file: "markdown/nextjs-ts-en.md",
      //   icon: "i-icon-park-outline:github",
      //   excerpt: "JavaScriptで書かれたNextJsプロジェクトをTypeScriptに変換しました。",
      //   link: "https://co.ai-st.art"
      // },
      // {
      //   id: "line",
      //   title: "LINE",
      //   file: "markdown/english-slack-en.md",
      //   icon: "i-icon-park-outline:github",
      //   excerpt: "ChatGPT×英語学習コミュニティ内のSlack App",
      //   link: "https://circular-tricorne-9bc.notion.site/ChatGPT-dd8b10a7efcd49159c52f714e8cce395"
      // },
      {
        id: "opensource",
        title: "Open Source",
        file: "markdown/opensource-en.md",
        icon: "i-icon-park-outline:github",
        excerpt: "This is a list of my open source projects that I've contributed to..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats-en.md",
        icon: "i-icon-park-outline:github",
        excerpt: "This is some status about my github account..."
      }
      // {
      //   id: "recognize",
      //   title: "recognize",
      //   file: "markdown/recognize-en.md",
      //   icon: "i-icon-park-outline:github",
      //   excerpt: "音声認識を用いた文字起こし",
      //   // link: "https://github.com/hidenari-yuda/playground-macos"
      // },
      // {
      //   id: "friend",
      //   title: "AI Friend",
      //   file: "markdown/friend-en.md",
      //   icon: "i-icon-park-outline:github",
      //   excerpt: "LLMを用いた長期記憶型英語学習チャットボット"
      //   // link: "https://github.com/hidenari-yuda/playground-macos"
      // },
      // {
      //   id: "neyagawa",
      //   title: "Neyagawa",
      //   file: "markdown/neayagawa-en.md",
      //   icon: "i-icon-park-outline:github",
      //   excerpt: "長期記憶LLMを用いた大阪府寝屋川市に関する情報を提供するLINE Bot"
      //   // link: "https://github.com/hidenari-yuda/playground-macos"
      // },
      // {
      //   id: "dokoiko",
      //   title: "Dokoiko Chan",
      //   file: "markdown/dokoiko-en.md",
      //   icon: "i-icon-park-outline:github",
      //   excerpt: "LLMを用いた場所検索チャットボット"
      //   // link: "https://github.com/hidenari-yuda/playground-macos"
      // },
      // {
      //   id: "paychan",
      //   title: "Paychan",
      //   file: "markdown/paychan-en.md",
      //   icon: "i-icon-park-outline:github",
      //   excerpt: "ECサイトのお買い物履歴買い取りサービス"
      //   // link: "https://github.com/hidenari-yuda/playground-macos"
      // },
      // {
      //   id: "portfolio-macos",
      //   title: "Portfolio macOS",
      //   file: "https://raw.githubusercontent.com/hidenari-yuda/playground-macos/main/README-en.md",
      //   icon: "i-icon-park-outline:github",
      //   excerpt: "My portfolio website simulating macOS's GUI...",
      //   link: "https://github.com/hidenari-yuda/playground-macos"
      // },
      // {
      //   id: "about-site",
      //   title: "About This Site",
      //   file: "markdown/about-site-en.md",
      //   icon: "i-octicon:browser",
      //   excerpt: "Something about this personal portfolio site..."
      // }
    ]
  }
];

export default bearEn;

// 人材紹介会社向け管理システム
// バックエンド（Go, Docker）と管理者用サイトのフロントエンド（Javascript/React）を担当。

// 詳しくみる

// 求人・求職者シェアシステム
// バックエンド（Go,Docker）を主に担当

// 詳しくみる

// ECサイトのお買い物履歴買い取りサービス
// 事業企画から設計、開発の実行まで担当。
// バックエンド：Go,Docker
// フロント：Javascript, React
// インフラ：GCP
// 連携API：LINE
