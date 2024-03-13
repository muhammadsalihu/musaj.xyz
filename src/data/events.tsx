import { DateTime } from "luxon";
import Image from "next/image";
import { type ReactNode } from "react";
import june6 from "public/images/timeline/20230604.jpg";
import june30 from "public/images/timeline/june30.jpeg";
import feb42023 from "public/images/timeline/feb42023.png";

export type Event = {
  when: DateTime;
  text: ReactNode | string;
  category?: "Talk";
}

const allEvents: Event[] = [
  {
    when: DateTime.fromISO("2021-02-02"),
    text:
    <div>
      <p>
        Talk for Kernel in Kernel Block 2 on Patterns of Web3
      </p>
      <p>Delivered alongside the amazing <a href="https://sherifabushadi.com">Sherif Abushadi</a></p>
      <iframe src="https://www.youtube.com/embed/OkGDuhuiE9w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>,
    category: "Talk"
  },
  {
    when: DateTime.fromISO("2021-07-06"),
    text:
    <div>
      <p>
        Podcast with Alisha, for Crypto Native on Learning, Building and Generating ever-evolving NFTs
      </p>
      <iframe src="https://www.youtube.com/embed/GoM1Nk-7kHg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>,
    category: "Talk"
  },
  {
    when: DateTime.fromISO("2021-02-08"),
    text:
    <div>
      <p>
        Panel Discussion: for ETHDenver on Global Adoption - Where are we now?
      </p>
      <iframe src="https://www.youtube.com/embed/qIHX6bXCyJk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>,
    category: "Talk"
  },
  {
    when: DateTime.fromISO("2023-03-12"),
    text:
    <div>
      <p>
      Talk: for GeeksForGeeks on Learning to Build Blockchain Applications from Scratch
      </p>
      <iframe src="https://www.youtube.com/embed/sXJ2uOC0ZJw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>,
    category: "Talk"
  },
  {
    when: DateTime.fromISO("2023-02-04"),
    text:
    <div>
    <p>
      Panel Discussion for Devfolio's ETHForAll in Hyderabad
    </p>
    <blockquote className="twitter-tweet"><p lang="en" dir="ltr">The final panel of the day was a banger indeed, with discussion around all the exciting opportunities in Web3 💃 <br /><br/>Advice for builders: focus on the fundamentals, not the hype. <a href="https://t.co/42NZWKFvH4">pic.twitter.com/42NZWKFvH4</a></p>&mdash; ETHIndia 🦇🔊 (@ETHIndiaco) <a href="https://twitter.com/ETHIndiaco/status/1621856367727476736?ref_src=twsrc%5Etfw">February 4, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    <Image src={feb42023} width={424} height={24} alt="screenshot of the tweet" />
    </div>,
    category:"Talk"
  },
  {
    when: DateTime.fromISO("2020-09-27"),
    text:
    <div>
      <p>
      Talk: for EthGlobal's ETHOnline on Building for Scale and UX
      </p>
      <iframe src="https://www.youtube.com/embed/5tKzMcflOcY?start=903" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>,
    category: "Talk"
  },
  {
    when: DateTime.fromISO("2020-06-29"),
    text:
    <div>
      <p>
      Talk: Webinar with VIT Uni. on Basics of building your application on Matic
      </p>
      <p>Organised by WIE IEEE branch of Vellore Institute of Technology. The event was a two-part webinar - first focussed on the introduction to blockchain, while second focussed on programming on top of a blockchain 🏗</p>
      <Image src={june30} width={424} height={24} alt="image of the poster used in the event" />
    </div>,
    category: "Talk"
  },
  {
    when: DateTime.fromISO("2020-06-29"),
    text:
    <div>
      <p>
      Talk: at Namma Blockchain, Building out your first dApp on Matic
      </p>
      <p>Organised by Aicumen Technologies. The talk was a dev-focussed walkthrough of an introduction to Ethereum and development toolings to building a dApp 👼🏼</p>
      <iframe src="https://www.youtube.com/embed/Z3TWjkZ77_8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>,
    category: "Talk"
  },
  {
    when: DateTime.fromISO("2020-06-19"),
    text:
    <div>
      <p>
      Talk: at T-Block, Matic Product Workshop
      </p>
      <p>
      Organised by the T-Block Accelerator Program: An initiative by the Telangana Government, Tech Mahindra, in partnership with IBC Media 👩🏻‍💻
      </p>
      <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Nice turnout for the <a href="https://twitter.com/maticnetwork?ref_src=twsrc%5Etfw">@maticnetwork</a> <a href="https://twitter.com/hashtag/tblock?src=hash&amp;ref_src=twsrc%5Etfw">#tblock</a> workshop and a really high quality tech first discussion with <a href="https://twitter.com/sandeepnailwal?ref_src=twsrc%5Etfw">@sandeepnailwal</a> and Angela Gilhotra. <a href="https://t.co/f47zjFVqL9">https://t.co/f47zjFVqL9</a></p>&mdash; Raghu Mohan (Hiring for BD, Investing and legal) (@pythonhulk) <a href="https://twitter.com/pythonhulk/status/1274314519477510144?ref_src=twsrc%5Etfw">June 20, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    </div>,
    category: "Talk"
  },
  {
    when: DateTime.fromISO("2020-06-18"),
    text:
    <div>
      <p>
      Talk: at HackJaipur, AMA on building out applications with Ethereum and Matic
      </p>
      <blockquote className="twitter-tweet" data-lang="en" data-theme="dark"><p lang="en" dir="ltr">A big thanks to <a href="https://twitter.com/devfolioco?ref_src=twsrc%5Etfw">@Devfolioco</a> and <a href="https://twitter.com/maticnetwork?ref_src=twsrc%5Etfw">@MaticNetwork</a> team for setting up an AMA Session with @AngelaGilhotra for <a href="https://twitter.com/HackJaipur?ref_src=twsrc%5Etfw">@HackJaipur</a> participants to help them build cool hacks on Ethereum! ❤️ <a href="https://t.co/SMpAqlO8Zx">pic.twitter.com/SMpAqlO8Zx</a></p>&mdash; Rishabh Bansal (@rishabhbansal97) <a href="https://twitter.com/rishabhbansal97/status/1273967120863264768?ref_src=twsrc%5Etfw">June 19, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    </div>,
    category: "Talk"
  },
  {
    when: DateTime.fromISO("2019-04-15"),
    text:
    <div>
      <p>
      Talk: at InBlox Meetup, DApp 101
      </p>
      <blockquote className="twitter-tweet"><p lang="en" dir="ltr">What does it take to build decentralized apps? <br /><br />Refresh your understanding of the essentials of building <a href="https://twitter.com/hashtag/DApps?src=hash&amp;ref_src=twsrc%5Etfw">#DApps</a> on and for <a href="https://twitter.com/hashtag/blockchains?src=hash&amp;ref_src=twsrc%5Etfw">#blockchains</a>.<br /><br />Angela Gilhotra, Developer Evangelist, <a href="https://twitter.com/maticnetwork?ref_src=twsrc%5Etfw">@maticnetwork</a> speaks on &quot;DApp Building 101&quot; <br /><br />7Mar 3-6pm, <a href="https://twitter.com/hashtag/Bengaluru?src=hash&amp;ref_src=twsrc%5Etfw">#Bengaluru</a><br /><br/>RSVP: <a href="https://t.co/msODK2KZhz">https://t.co/msODK2KZhz</a> <a href="https://t.co/slL5r0B7JD">pic.twitter.com/slL5r0B7JD</a></p>&mdash; Safle (@GetSafle) <a href="https://twitter.com/GetSafle/status/1235875268834684928?ref_src=twsrc%5Etfw">March 6, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    </div>,
    category: "Talk"
  },
  {
    when: DateTime.fromISO("2019-04-15"),
    text:
    <div>
      <p>
      Talk: at InOut 6.0, API Demos for Matic's bounties
      </p>
      <iframe src="https://www.youtube.com/embed/kGUM8XhN9Pk?start=763" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>,
    category: "Talk"
  },
  {
    when: DateTime.fromISO("2023-06-06"),
    text:
      <div>
        <Image src={june6} width={424} height={24} alt="for the past, I can only learn; for the present I can only do; for the future I can only believe" />
      </div>,
  },
  {
    when: DateTime.fromISO("2020-04-14"),
    text:
    <p>
      <p>Life in a Transaction Output</p>
    <blockquote>
      Going deeper into the Ledger
    </blockquote>
    <p>
      We live our lives chained to our thoughts, chained to the actions we have made uptil this very moment, where we stand. All these actions taken by each one of us form the current state of all the unspent transactions output. A single transaction generates multiple outputs to the current state of UTXOs. Each action is an amalgamation, a motivation, dovetailing from all the previous actions either received or given out. The input of the next transaction between two humans is the output of all the previous transactions ever happened.
    </p>
    <p>
      An individual is the sum of all unspent transactions in their name. Spendable by only their name, unlocked with their intent. An individual, therefore, is sum of intent. He doesn’t exist as much as the balance doesn’t exist. It is ephemeral, it is a flow of intent, from action to action, from transaction to transaction. And, just like a wallet, the body is a display of the sum of these UTXOs, in a constant flow with other UTXOs.
    </p>
    </p>
    ,
  },
  {
    when: DateTime.fromISO("2020-04-07"),
    text:
    <div>
      <p>
      Talk: for Matic Masterclass on How to Build a Full Stack Decentralised Application
      </p>
      <p>
      Part of Matic Masterclass series. Demonstrates the basics of building out Ethereum applications from scratch.
      </p>
      <iframe src="https://www.youtube.com/embed/QAO7YxF7hSk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>,
    category: "Talk"
  }
]

const allSortedEvents = allEvents.sort( (a,b) => Number(b.when.diff(a.when)) );
const allTalks = allSortedEvents.filter(a => a.category === "Talk");
const allMusings = allSortedEvents.filter(a => a.category !== "Talk");

export const events = {
  talks: allTalks,
  all: allSortedEvents,
  musings: allMusings
}