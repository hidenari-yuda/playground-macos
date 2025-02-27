import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>Hi, this is Hidenari Yuda.</div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Software Engineering, Football, and Food"
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:yhide327@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                yhide327@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/hidenari-yuda"
                target="_blank"
                rel="noreferrer"
              >
                @hidenari-yuda
              </a>
            </li>
            <li>
              Facebook:{" "}
              <a
                className="text-blue-300"
                href="https://www.facebook.com/hideyuda"
                target="_blank"
                rel="noreferrer"
              >
                @hideyuda
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/hidenari-yuda-212076266/"
                target="_blank"
                rel="noreferrer"
              >
                @hidenari-yuda
              </a>
            </li>
            <li>
              X:{" "}
              <a
                className="text-blue-300"
                href="https://www.x.com/hideyuda_jp"
                target="_blank"
                rel="noreferrer"
              >
                @hideyuda_jp
              </a>
            </li>
            <li>
              Project Website:{" "}
              <a
                className="text-blue-300"
                href="https://co.ai-st.art"
                target="_blank"
                rel="noreferrer"
              >
                https://co.ai-st.art
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
