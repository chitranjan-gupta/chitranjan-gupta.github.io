import Link from "next/link";

export default function Projects() {
  return (
    <section
      id="projects"
      className="container projects w-full flex flex-row relative"
    >
      <div className="emptyBox hidden md:block md:w-1/3 h-full"></div>
      <div className="detailBox w-full md:w-2/3 h-full">
        <h2 className="boxTitle bungee-tint font-black text-2xl mb-[20px] text-center underline">
          Projects
        </h2>
        <div className="prBox flex flex-col md:flex-row md:flex-wrap items-center justify-around mx-3">
          <div className="cBox w-full h-[150px] md:w-[400px] md:h-[150px] shadow-md rounded-[5px] mb-[30px] flex flex-col justify-around p-2 bg-white dark:bg-[#E0E0E0]">
            <div className="icon-box flex flex-row items-center justify-start">
              <svg className="w-[20px] h-[20px]">
                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
              </svg>
              <Link
                href="https://github.com/chitranjan-gupta/expo-react-native-devtools"
                target="_blank"
                prefetch={false}
              >
                <span className="text-xl">Expo React Native Devtools</span>
              </Link>
            </div>
            <div className="sum-box pl-[5px]">
              <p className="text-ellipsis text-sm">
                Chrome Extension to Open React Native Devtools in Expo Projects
                through ngrok tunnel
                <br />
                With 12 users on Microsoft Edge
              </p>
            </div>
            <div className="lang-box flex flex-row justify-start items-center gap-x-2 pl-[5px]">
              <span className="w-[10px] h-[10px] bg-yellow-300 rounded-full"></span>
              <span className="">Javascript</span>
            </div>
          </div>
          <div className="cBox w-full h-[150px] md:w-[400px] md:h-[150px] shadow-md rounded-[5px] mb-[30px] flex flex-col justify-around p-2 bg-white dark:bg-[#E0E0E0]">
            <div className="icon-box flex flex-row items-center justify-start">
              <svg className="w-[20px] h-[20px]">
                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
              </svg>
              <Link
                href="https://github.com/chitranjan-gupta/cloudflare-telegram-bot"
                target="_blank"
                prefetch={false}
              >
                <span className="text-xl">Cloudflare Worker Telegram Bot</span>
              </Link>
            </div>
            <div className="sum-box pl-[5px]">
              <p className="text-ellipsis text-sm">
                Package Hosted on npmjs to acts a telegram bot using cloudflare
                worker
              </p>
            </div>
            <div className="lang-box flex flex-row justify-start items-center gap-x-2 pl-[5px]">
              <span className="w-[10px] h-[10px] bg-yellow-300 rounded-full"></span>
              <span className="">Javascript</span>
            </div>
          </div>
          <div className="cBox w-full h-[150px] md:w-[400px] md:h-[150px] shadow-md rounded-[5px] mb-[30px] flex flex-col justify-around p-2 bg-white dark:bg-[#E0E0E0]">
            <div className="icon-box flex flex-row items-center justify-start">
              <svg className="w-[20px] h-[20px]">
                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
              </svg>
              <Link
                href="https://github.com/chitranjan-gupta/freshmarks"
                target="_blank"
                prefetch={false}
              >
                <span className="text-xl">FreshMarks</span>
              </Link>
            </div>
            <div className="sum-box pl-[5px]">
              <p className="text-ellipsis text-sm">
                Firefox Addon and Chrome Extension used to update Bookmark
                <br />
                With 2 users on Microsoft Edge and 1 average daily users on
                Firefox
              </p>
            </div>
            <div className="lang-box flex row justify-start items-center gap-x-2 pl-[5px]">
              <span className="w-[10px] h-[10px] bg-yellow-300 rounded-full"></span>
              <span>Javascript</span>
            </div>
          </div>
          <div className="cBox w-full h-[150px] md:w-[400px] md:h-[150px] shadow-md rounded-[5px] mb-[30px] flex flex-col justify-around p-2 bg-white dark:bg-[#E0E0E0]">
            <div className="icon-box flex flex-row items-center justify-start">
              <svg className="w-[20px] h-[20px]">
                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
              </svg>
              <Link
                href="https://github.com/chitranjan-gupta/pastepass"
                target="_blank"
                prefetch={false}
              >
                <span className="text-xl">PastePass</span>
              </Link>
            </div>
            <div className="sum-box pl-[5px]">
              <p className="text-ellipsis text-sm">
                Firefox Addon and Chrome Extension used to Easily Paste
                Anywhere, Even on Restricted Websites!
                <br />
                With 9 Users on Microsoft Edge and 20 average daily users on
                Firefox
              </p>
            </div>
            <div className="lang-box flex row justify-start items-center gap-x-2 pl-[5px]">
              <span className="w-[10px] h-[10px] bg-yellow-300 rounded-full"></span>
              <span>Javascript</span>
            </div>
          </div>
          <div className="cBox w-full h-[150px] md:w-[400px] md:h-[150px] shadow-md rounded-[5px] mb-[30px] flex flex-col justify-around p-2 bg-white dark:bg-[#E0E0E0]">
            <div className="icon-box flex flex-row items-center justify-start">
              <svg className="w-[20px] h-[20px]">
                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
              </svg>
              <Link
                href="https://github.com/chitranjan-gupta/QRGenie"
                target="_blank"
                prefetch={false}
              >
                <span className="text-xl">QRGenie</span>
              </Link>
            </div>
            <div className="sum-box pl-[5px]">
              <p className="text-ellipsis text-sm">
                Firefox Addon and Chrome Extension used to Easily Scan QR Code &
                Generate it!
                <br />
                With 14 users on Microsoft Edge and 11 average daily users on
                Firefox
              </p>
            </div>
            <div className="lang-box flex row justify-start items-center gap-x-2 pl-[5px]">
              <span className="w-[10px] h-[10px] bg-yellow-300 rounded-full"></span>
              <span>Javascript</span>
            </div>
          </div>
          <div className="cBox w-full h-[150px] md:w-[400px] md:h-[150px] shadow-md rounded-[5px] mb-[30px] flex flex-col justify-around p-2 bg-white dark:bg-[#E0E0E0]">
            <div className="icon-box flex flex-row items-center justify-start">
              <svg className="w-[20px] h-[20px]">
                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
              </svg>
              <Link
                href="https://github.com/chitranjan-gupta/Telegram-OAuth"
                target="_blank"
                prefetch={false}
              >
                <span className="text-xl">Telegram OAuth</span>
              </Link>
            </div>
            <div className="sum-box pl-[5px]">
              <p className="text-ellipsis text-sm">
                Authentication using Telegram
              </p>
            </div>
            <div className="lang-box flex row justify-start items-center gap-x-2 pl-[5px]">
              <span className="w-[10px] h-[10px] bg-gray-900 rounded-full"></span>
              <span>Next.js</span>
              <span className="w-[10px] h-[10px] bg-blue-400 rounded-full"></span>
              <span>React</span>
              <span className="w-[10px] h-[10px] bg-yellow-300 rounded-full"></span>
              <span>Javascript</span>
            </div>
          </div>
          <div className="cBox w-full h-[150px] md:w-[400px] md:h-[150px] shadow-md rounded-[5px] mb-[30px] flex flex-col justify-around p-2 bg-white dark:bg-[#E0E0E0]">
            <div className="icon-box flex flex-row items-center justify-start">
              <svg className="w-[20px] h-[20px]">
                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
              </svg>
              <Link
                href="https://github.com/chitranjan-gupta/sanity-plugin-social-embed"
                target="_blank"
                prefetch={false}
              >
                <span className="text-xl">Sanity Plugin Social Embed</span>
              </Link>
            </div>
            <div className="sum-box pl-[5px]">
              <p className="text-ellipsis text-sm">
                Embed Social Media Post in Sanity
              </p>
            </div>
            <div className="lang-box flex row justify-start items-center gap-x-2 pl-[5px]">
              <span className="w-[10px] h-[10px] bg-blue-300 rounded-full"></span>
              <span>React</span>
              <span className="w-[10px] h-[10px] bg-blue-600 rounded-full"></span>
              <span>Typescript</span>
            </div>
          </div>
          <div className="cBox w-full h-[150px] md:w-[400px] md:h-[150px] shadow-md rounded-[5px] mb-[30px] flex flex-col justify-around p-2 bg-white dark:bg-[#E0E0E0]">
            <div className="icon-box flex flex-row items-center justify-start">
              <svg className="w-[20px] h-[20px]">
                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
              </svg>
              <Link
                href="https://github.com/chitranjan-gupta/QRPhishing"
                target="_blank"
                prefetch={false}
              >
                <span className="text-xl">QRPhishing</span>
              </Link>
            </div>
            <div className="sum-box pl-[5px]">
              <p className="text-ellipsis">
                Hijack Web Session using QRPhishing
              </p>
            </div>
            <div className="lang-box flex row justify-start items-center gap-x-2 pl-[5px]">
              <span className="w-[10px] h-[10px] bg-red-500 rounded-full"></span>
              <span>HTML</span>
              <span className="w-[10px] h-[10px] bg-yellow-200 rounded-full"></span>
              <span>Javascript</span>
            </div>
          </div>
          <div className="cBox w-full h-[150px] md:w-[400px] md:h-[150px] shadow-md rounded-[5px] mb-[30px] flex flex-col justify-around p-2 bg-white dark:bg-[#E0E0E0]">
            <div className="icon-box flex flex-row items-center justify-start">
              <svg className="w-[20px] h-[20px]">
                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
              </svg>
              <Link
                href="https://github.com/chitranjan-gupta/Flipkart-Bot"
                target="_blank"
                prefetch={false}
              >
                <span className="text-xl">Flipkart-Bot</span>
              </Link>
            </div>
            <div className="sum-box pl-[5px]">
              <p className="text-ellipsis text-sm">
                Flipkart Product Price Tracker Telegram Bot
              </p>
            </div>
            <div className="lang-box flex row justify-start items-center gap-x-2 pl-[5px]">
              <span className="w-[10px] h-[10px] bg-blue-800 rounded-full"></span>
              <span>Python</span>
            </div>
          </div>
          <div className="cBox w-full h-[150px] md:w-[400px] md:h-[150px] shadow-md rounded-[5px] mb-[30px] flex flex-col justify-around p-2 bg-white dark:bg-[#E0E0E0]">
            <div className="icon-box flex flex-row items-center justify-start">
              <svg className="w-[20px] h-[20px]">
                <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
              </svg>
              <Link
                href="https://github.com/chitranjan-gupta/Ganache-Server"
                target="_blank"
                prefetch={false}
              >
                <span className="text-xl">Ganache Server</span>
              </Link>
            </div>
            <div className="sum-box pl-[5px]">
              <p className="text-ellipsis text-sm">
                Docker Container with Ganache Server for Ethereum with custom
                accounts.
                <br />
                With 368 downloads on Github Registry
              </p>
            </div>
            <div className="lang-box flex row justify-start items-center gap-x-2 pl-[5px]">
              <span className="w-[10px] h-[10px] bg-blue-800 rounded-full"></span>
              <span>Dockerfile</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
