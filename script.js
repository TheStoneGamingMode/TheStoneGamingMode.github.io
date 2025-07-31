// Define RNG items with image URLs and drop weights
const items = [
  {
    name: "Common Meme",
    chance: 60,
    rarity: "common",
    image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/06/Stop-Playing-Roblox-Meme-(1)-1.jpg"
  },
  {
    name: "Common Meme",
    chance: 60,
    rarity: "common",
    image: "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/02/Roblox-10-Memes-That-Will-Leave-You-Cry-Laughing.jpg"
  },
  {
    name: "Common Meme",
    chance: 60,
    rarity: "common",
    image: "https://wallpapers.com/images/hd/funny-roblox-pictures-6vvcg0pcmu5sml2q.jpg"
  },
  {
    name: "Common Meme",
    chance: 60,
    rarity: "common",
    image: "https://i.pinimg.com/originals/10/3e/e0/103ee0d0f77ebdea18e931ab00615233.jpg"
  },
  {
    name: "Common Meme",
    chance: 60,
    rarity: "common",
    image: "https://media.tenor.com/vLvvyR1OKiEAAAAC/funny-memes-roblox.gif"
  },
  {
    name: "Common Meme",
    chance: 60,
    rarity: "common",
    image: "https://images3.memedroid.com/images/UPLOADED34/5c651a5770152.jpeg"
  },
  {
    name: "Common Meme",
    chance: 60,
    rarity: "common",
    image: "data:image/webp;base64,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"
  },
  {
    name: "Common Meme",
    chance: 60,
    rarity: "common",
    image: "https://th.bing.com/th/id/OIP.0nc33dSTHx9NSofnU4LbpgHaGV?w=214&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    name: "Common Meme",
    chance: 60,
    rarity: "common",
    image: "https://i.pinimg.com/originals/34/ad/b5/34adb55ae76ca6c55ff2b6fe7a98ae63.jpg"
  },
  {
    name: "Common Meme",
    chance: 60,
    rarity: "common",
    image: "https://images7.memedroid.com/images/UPLOADED525/5cd1e51dd77b1.jpeg"
  },
  {
    name: "Common Meme",
    chance: 60,
    rarity: "common",
    image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/07/Relations.jpg"
  },
  {
    name: "Common Meme",
    chance: 60,
    rarity: "common",
    image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/07/Unique-Game-Experience.jpg"
  },
  {
    name: "Common Meme",
    chance: 60,
    rarity: "common",
    image: "https://i.imgflip.com/6qxe1g.jpg"
  },
  {
    name: "Rare Meme",
    chance: 30,
    rarity: "rare",
    image: "https://www.boredpanda.com/blog/wp-content/uploads/2023/10/651d13145c4f1_cursed-memes.jpg"
  },
  {
    name: "Rare Meme",
    chance: 30,
    rarity: "rare",
    image: "https://img-9gag-fun.9cache.com/photo/amA72Gv_460s.jpg"
  },
  {
    name: "Rare Meme",
    chance: 30,
    rarity: "rare",
    image: "https://i0.wp.com/winkgo.com/wp-content/uploads/2023/02/roblox-memes-05.jpg?resize=768%2C729&ssl=1"
  },
  {
    name: "Rare Meme",
    chance: 30,
    rarity: "rare",
    image: "https://th.bing.com/th/id/OIP.BDq12eu6GIv7kFlC4ppvIgHaDt?w=340&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    name: "Rare Meme",
    chance: 30,
    rarity: "rare",
    image: "https://i.pinimg.com/originals/35/93/0f/35930f65ae87092e6cd63f03b11bb6ef.jpg"
  },
  {
    name: "Rare Meme",
    chance: 30,
    rarity: "rare",
    image: "https://i.pinimg.com/originals/e4/e9/d2/e4e9d28ba2c48be904263efd27b65599.jpg"
  },
  {
    name: "Ultra Meme",
    chance: 10,
    rarity: "ultra",
    image: "https://th.bing.com/th/id/OIP.aXCZ-FeP3m7tixbphuc9TgHaDL?w=308&h=150&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  }
];

// Load sounds once
const commonSound = new Audio("fail.mp3");
const rareSound = new Audio("sus.mp3");
commonSound.load();
rareSound.load();

// Pre-calculate total chance
const totalChance = items.reduce((sum, item) => sum + item.chance, 0);

// Attach rarity percentage to each item
items.forEach(item => {
  item.percentage = ((item.chance / totalChance) * 100).toFixed(2);
});

function rollItem() {
  const rngtext = document.getElementById("rngtext");
  const rngimage = document.getElementById("rngimage");
  rngtext.classList.remove("grand-opening");

  let roll = Math.random() * totalChance;
  let selected;

  for (let item of items) {
    if (roll < item.chance) {
      selected = item;
      break;
    }
    roll -= item.chance;
  }

  // Show result text and image
  rngtext.textContent = `You got: ${selected.name} (${selected.rarity.toUpperCase()} – ${selected.percentage}%)`;
  rngimage.src = selected.image;
  rngimage.alt = selected.name;
  rngimage.style.display = "block";

  // Remove expanded class if previously expanded
  rngimage.classList.remove("expanded");

  // Play sound and add grand-opening effect for rare/ultra
  if (selected.rarity === "rare" || selected.rarity === "ultra") {
    rareSound.currentTime = 0;
    rareSound.play();
    rngtext.classList.add("grand-opening");
  } else {
    commonSound.currentTime = 0;
    commonSound.play();
  }
}
