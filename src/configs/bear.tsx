import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hey there! I'm a dragon lost in human world..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "Here are some status about my github account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "portfolio-macos",
        title: "Portfolio macOS",
        file: "https://raw.githubusercontent.com/hidenari-yuda/playground-macos/main/README.md",
        icon: "i-ri:gamepad-line",
        excerpt: "My portfolio website simulating macOS's GUI...",
        link: "https://github.com/hidenari-yuda/playground-macos"
      }
      // {
      //   id: "oh-my-cv",
      //   title: "Oh, My CV!",
      //   file: "https://raw.githubusercontent.com/hidenari-yuda/oh-my-cv/main/README.md",
      //   icon: "i-ri:newspaper-fill",
      //   excerpt: "Write your curriculum vitae / resume in Markdown online...",
      //   link: "https://ohmycv.app"
      // },
      // {
      //   id: "oh-vue-icons",
      //   title: "Oh, Vue Icons!",
      //   file: "https://raw.githubusercontent.com/hidenari-yuda/oh-vue-icons/master/README.md",
      //   icon: "i-fa-brands:vuejs",
      //   excerpt: "Importing icons from different icon packs in Vue easily...",
      //   link: "https://oh-vue-icons.js.org"
      // },
      // {
      //   id: "gungnir",
      //   title: "Gungnir",
      //   file: "https://raw.githubusercontent.com/hidenari-yuda/vuepress-theme-gungnir/main/README.md",
      //   icon: "i-akar-icons:sword",
      //   excerpt: "A simple and beautiful blog theme for VuePress...",
      //   link: "https://vuepress-theme-gungnir.vercel.app"
      // },
      // {
      //   id: "metallic",
      //   title: "Metallic",
      //   file: "https://raw.githubusercontent.com/hidenari-yuda/metallic/master/README.md",
      //   icon: "i-icon-park-outline:heavy-metal",
      //   excerpt: "A meta-learning library base on PyTorch...",
      //   link: "https://github.com/hidenari-yuda/metallic"
      // },
      // {
      //   id: "text-classification",
      //   title: "Text Classification",
      //   file: "https://raw.githubusercontent.com/hidenari-yuda/Text-Classification/master/README.md",
      //   icon: "i-gg:format-text",
      //   excerpt: "PyTorch implementation of text classificaiton models...",
      //   link: "https://github.com/hidenari-yuda/Text-Classification"
      // },
      // {
      //   id: "speech-emotion-recognition",
      //   title: "Speech Emotion",
      //   file: "https://raw.githubusercontent.com/hidenari-yuda/Speech-Emotion-Recognition/master/README.md",
      //   icon: "i-ant-design:audio-filled",
      //   excerpt: "Speech emotion recognition using Keras and sklearn...",
      //   link: "https://github.com/hidenari-yuda/Speech-Emotion-Recognition"
      // },
      // {
      //   id: "pcalg-py",
      //   title: "PC Algorithm",
      //   file: "https://raw.githubusercontent.com/hidenari-yuda/pcalg-py/master/README.md",
      //   icon: "i-tabler:atom-2",
      //   excerpt: "Implement PC algorithm in Python...",
      //   link: "https://github.com/hidenari-yuda/pcalg-py"
      // },
      // {
      //   id: "midgard",
      //   title: "Interactable Resume",
      //   file: "https://raw.githubusercontent.com/hidenari-yuda/midgard/master/README.md",
      //   icon: "i-bx:game",
      //   excerpt: "An interactable version of my resume, powered by Vue...",
      //   link: "https://resume.co.ai-st.art/"
      // },
      // {
      //   id: "image-captioning",
      //   title: "Image Captioning",
      //   file: "https://raw.githubusercontent.com/hidenari-yuda/Image-Captioning/master/README.md",
      //   icon: "i-bi:image-fill",
      //   excerpt: "PyTorch implementation of image captioning models...",
      //   link: "https://github.com/hidenari-yuda/Image-Captioning"
      // },
      // {
      //   id: "wordle-helper",
      //   title: "Wordle Helper",
      //   file: "https://raw.githubusercontent.com/hidenari-yuda/wordle-helper/main/README.md",
      //   icon: "i-bi:grid-1x2",
      //   excerpt: "Help you solve Wordle puzzles...",
      //   link: "https://wordle.co.ai-st.art"
      // },
      // {
      //   id: "cube-solver",
      //   title: "Cube Solver",
      //   file: "https://raw.githubusercontent.com/hidenari-yuda/Just-a-Cube/master/README.md",
      //   icon: "i-bx:cube",
      //   excerpt: "A rubik's cube solver (layer-by-layer & two-phase)...",
      //   link: "https://cube.co.ai-st.art"
      // },
      // {
      //   id: "alkaid",
      //   title: "Alkaid",
      //   file: "https://raw.githubusercontent.com/hidenari-yuda/alkaid/main/README.md",
      //   icon: "i-simple-icons:stellar",
      //   excerpt: "Minimal reinforcement-learning toolbox for PyTorch...",
      //   link: "https://github.com/hidenari-yuda/alkaid"
      // },
      // {
      //   id: "fishmail",
      //   title: "Fishmail",
      //   file: "https://raw.githubusercontent.com/hidenari-yuda/Fishmail/master/README.md",
      //   icon: "i-game-icons:fish-escape",
      //   excerpt: "上班的时候装作在 Gmail 上查邮件的样子看知乎摸鱼...",
      //   link: "https://fishmail.vercel.app"
      // }
    ]
  }
];

export default bear;
