const reviews = [
  {
    id: 1,
    name: "Elon Musk",
    job: "Tesla",
    img:
      "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102",
    text:
      "Elon Reeve Musk FRS (/ˈiːlɒn/ EE-lon; born June 28, 1971) is a business magnate, industrial designer, and engineer.[3] He is the founder, CEO, CTO, and chief designer of SpaceX; early stage investor,[b] CEO, and product architect of Tesla, Inc.; founder of The Boring Company; ",
  },
  {
    id: 2,
    name: "Evan Spiegel",
    job: "snapchat",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Evan_Spiegel%2C_founder_of_Snapchat.jpg/330px-Evan_Spiegel%2C_founder_of_Snapchat.jpg",
    text:
      "Evan Thomas Spiegel (born June 4, 1990)[1] is an American businessman who is the co-founder and CEO of the American social media company Snap Inc., which he created (as Snapchat Inc.) with Bobby Murphy and Reggie Brown while they were students at Stanford University",
  },
  {
    id: 3,
    name: "Larry Page",
    job: "Google",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg/330px-Larry_Page_in_the_European_Parliament%2C_17.06.2009_%28cropped%29.jpg",
    text:
      "Lawrence Edward Page[3][4][5] (born March 26, 1973) is an American computer scientist and Internet entrepreneur. He is best known as one of the co-founders of Google along with Sergey Brin Page was the chief executive officer of Google from 1997 until August 2001.",
  },
  {
    id: 4,
    name: "Jeff Bezos",
    job: "Amazon",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg/330px-Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg",
    text:
      "Jeffrey Preston Bezos (/ˈbeɪzoʊs/ BAY-zohss;[3] né Jorgensen; born January 12, 1964)[4] is an American internet entrepreneur, industrialist, media proprietor, and investor. Bezos is the founder and CEO[a] of the multi-national technology company Amazon.",
  },
  {
    id: 5,
    name: "Mark Zuckerberg",
    job: "facebook",
    img:
      " https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/330px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
    text:
      "Mark Elliot Zuckerberg (/ˈzʌkərbɜːrɡ/; born May 14, 1984) is an American media magnate, internet entrepreneur, and philanthropist. He is known for co-founding Facebook, Inc. and serves as its chairman, chief executive officer, and controlling shareholder.",
  },
];

const image = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

nextBtn.addEventListener("click", function () {
  if (currentItem == reviews.length) {
    currentItem = 0;
    image.src = reviews[currentItem].img;
    author.textContent = reviews[currentItem].name;
    job.textContent = reviews[currentItem].job;
    info.textContent = reviews[currentItem].text;
  } else {
    currentItem += 1;
    image.src = reviews[currentItem].img;
    author.textContent = reviews[currentItem].name;
    job.textContent = reviews[currentItem].job;
    info.textContent = reviews[currentItem].text;
  }
});

prevBtn.addEventListener("click", function () {
  currentItem -= 1;
  image.src = reviews[currentItem].img;
  author.textContent = reviews[currentItem].name;
  job.textContent = reviews[currentItem].job;
  info.textContent = reviews[currentItem].text;
});

randomBtn.addEventListener("click", function () {
  currentItem = getRandom();
  image.src = reviews[currentItem].img;
  author.textContent = reviews[currentItem].name;
  job.textContent = reviews[currentItem].job;
  info.textContent = reviews[currentItem].text;
});

const getRandom = () => Math.floor(Math.random() * reviews.length);
