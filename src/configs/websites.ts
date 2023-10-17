import type { WebsitesData } from "~/types";

const websites: WebsitesData = {
  favorites: {
    title: "SNS Links",
    sites: [
      {
        id: "my-github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/hidenari-yuda"
      },
      {
        id: "my-facebook",
        title: "Facebook",
        img: "img/sites/facebook.svg",
        link: "https://www.facebook.com/hideyuda"
      },
      {
        id: "my-linkedin",
        title: "Linkedin",
        img: "img/sites/linkedin.svg",
        link: "https://www.linkedin.com/in/hidenari-yuda-212076266/"
      },
      {
        id: "my-x",
        title: "x",
        img: "img/sites/x.svg",
        link: "https://www.x.com/hideyuda_jp"
      },
      {
        id: "my-email",
        title: "Email",
        img: "img/sites/gmail.svg",
        link: "mailto:yhide327@gmail.com"
      }
    ]
  },
  freq: {
    title: "Frequently Visited",
    sites: [
      {
        id: "github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/"
      },
      {
        id: "x",
        title: "x",
        img: "img/sites/x.svg",
        link: "https://www.x.com/"
      },
      {
        id: "pinterest",
        title: "Pinterest",
        img: "img/sites/pinterest.svg",
        link: "https://www.pinterest.com/"
      },
      {
        id: "reddit",
        title: "Reddit",
        img: "img/sites/reddit.svg",
        link: "https://www.reddit.com/"
      }
    ]
  }
};

export default websites;
