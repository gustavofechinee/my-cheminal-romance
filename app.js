const BODY_ASSET = "./assets/vendor/basics/basics_body1.png";
const EMPTY_THUMB = "./assets/decor/sparkles.svg";
const COLOR_CUSTOM_ID = "custom";
const LIVE_COLOR_CATEGORIES = new Set(["eyebrowColors", "eyeColors", "lashColors", "hairColors"]);
const GAME_TITLE = "My charminal romance";
const GAME_FILE_SLUG = "my-charminal-romance";

const steps = [
  {
    id: "makeup",
    label: "1. Face",
    kicker: "Etapa 1",
    title: "Monte o rosto e o cabelo da sua doll",
    categories: [
      "skinTones",
      "eyes",
      "eyeColors",
      "eyebrows",
      "eyebrowColors",
      "lashes",
      "lashColors",
      "mouths",
      "makeup",
      "hair",
      "hairColors",
    ],
  },
  {
    id: "clothes",
    label: "2. Look",
    kicker: "Etapa 2",
    title: "Monte o look da sua doll",
    categories: ["tops", "bottoms", "dresses", "shoes"],
  },
  {
    id: "pet",
    label: "3. Kittys",
    kicker: "Etapa 3",
    title: "Escolha uma kitty para acompanhar a sua doll",
    categories: ["pets", "petColors"],
  },
  {
    id: "final",
    label: "4. Final",
    kicker: "Etapa 4",
    title: "Salve e compartilhe o resultado final",
    categories: [],
  },
];

const categories = {
  skinTones: { label: "Pele" },
  eyes: { label: "Formato dos olhos" },
  eyeColors: { label: "Cor dos olhos" },
  eyebrows: { label: "Sobrancelhas" },
  eyebrowColors: { label: "Cor da sobrancelha" },
  lashes: { label: "Cilios" },
  lashColors: { label: "Cor dos cilios" },
  mouths: { label: "Bocas" },
  makeup: { label: "Maquiagem" },
  hair: { label: "Cabelos" },
  hairColors: { label: "Cor do cabelo" },
  pets: { label: "Kittys" },
  petColors: { label: "Aura" },
  tops: { label: "Blusas" },
  bottoms: { label: "Saias e bottoms" },
  dresses: { label: "Vestidos" },
  shoes: { label: "Calcados" },
};

const optionData = {
  skinTones: [
    {
      id: "porcelain",
      name: "Porcelana",
      description: "Clara e suave.",
      bodyAsset: "./assets/vendor/basics/basics_body1.png",
      palette: ["#ffe9e3", "#fff6f3", "#ffd7d9"],
    },
    {
      id: "rosy",
      name: "Rosy",
      description: "Clara com calor natural.",
      bodyAsset: "./assets/vendor/basics/basics_body2.png",
      palette: ["#ffd8ce", "#ffe5ea", "#fff7f8"],
    },
    {
      id: "golden",
      name: "Golden",
      description: "Quente e iluminada.",
      bodyAsset: "./assets/vendor/basics/basics_body3.png",
      palette: ["#f4c59d", "#ffe3b7", "#fff5df"],
    },
    {
      id: "caramel",
      name: "Caramelo",
      description: "Media com calor bonito.",
      bodyAsset: "./assets/vendor/basics/basics_body4.png",
      palette: ["#d49b74", "#f1c2a3", "#fff1e6"],
    },
    {
      id: "deep",
      name: "Deep",
      description: "Mais profunda e intensa.",
      bodyAsset: "./assets/vendor/basics/basics_body5.png",
      palette: ["#8e5b49", "#bc816c", "#f2c6b6"],
    },
  ],
  eyebrows: [
    {
      id: "sweet-arch",
      name: "Arco sweet",
      description: "Suave e delicada.",
      asset: "./assets/vendor/basics/basics_eyebrow1.png",
      palette: ["#5f4037", "#ffdfe9", "#fff8fb"],
    },
    {
      id: "doll-arch",
      name: "Arco doll",
      description: "Equilibrada para quase todo look.",
      asset: "./assets/vendor/basics/basics_eyebrow2.png",
      palette: ["#5a3b36", "#ffe5ef", "#fff9fb"],
    },
    {
      id: "romance-brow",
      name: "Romance",
      description: "Mais expressiva e meiga.",
      asset: "./assets/vendor/basics/basics_eyebrow3.png",
      palette: ["#5c3f38", "#ffc6db", "#fff3f7"],
    },
    {
      id: "glam-brow",
      name: "Glam",
      description: "Mais forte e marcada.",
      asset: "./assets/vendor/basics/basics_eyebrow4.png",
      palette: ["#47302d", "#ffbfd6", "#fff0f6"],
    },
    {
      id: "soft-brow",
      name: "Soft",
      description: "Levinha e bem cute.",
      asset: "./assets/vendor/basics/basics_eyebrow5.png",
      palette: ["#6c4a43", "#ffe6f0", "#fff8fb"],
    },
  ],
  eyes: [
    {
      id: "round-doll",
      name: "Round doll",
      description: "Grande, redondo e bem bonequinha.",
      asset: "./assets/vendor/basics/basics_eyes1.png",
      palette: ["#8fd39e", "#fff7fb", "#ffd6e5"],
    },
    {
      id: "almond-soft",
      name: "Almond soft",
      description: "Amendoado e delicado.",
      asset: "./assets/vendor/basics/basics_eyes2.png",
      palette: ["#72bf7d", "#ffffff", "#ffdce8"],
    },
    {
      id: "cat-glam",
      name: "Cat glam",
      description: "Levantado e mais fashion.",
      asset: "./assets/vendor/basics/basics_eyes3.png",
      palette: ["#8a5d47", "#fffafc", "#ffd0df"],
    },
    {
      id: "sleepy-soft",
      name: "Sleepy soft",
      description: "Mais suave e meigo.",
      asset: "./assets/vendor/basics/basics_eyes4.png",
      palette: ["#4d3d39", "#fff7fb", "#ffcfe1"],
    },
    {
      id: "sparkle-wide",
      name: "Sparkle wide",
      description: "Aberto com brilho cute.",
      asset: "./assets/vendor/basics/basics_eyes5.png",
      palette: ["#91c2a0", "#ffffff", "#ffe2ec"],
    },
  ],
  eyeColors: [
    {
      id: COLOR_CUSTOM_ID,
      name: "Cor livre",
      description: "Ajuste no seletor abaixo.",
      palette: ["#ffffff", "#d9dde3", "#5f7268"],
    },
    {
      id: "emerald",
      name: "Emerald",
      description: "Verde natural.",
      hex: "#6f9a69",
      palette: ["#59b96f", "#d8f5df", "#fffafb"],
    },
    {
      id: "aqua",
      name: "Aqua",
      description: "Azul acinzentado.",
      hex: "#7ca3be",
      palette: ["#67bfd6", "#d8f3fa", "#fff9fb"],
    },
    {
      id: "gray",
      name: "Gray",
      description: "Cinza frio realista.",
      hex: "#97a0aa",
      palette: ["#97a0aa", "#e1e5ea", "#fff9fb"],
    },
    {
      id: "honey",
      name: "Honey",
      description: "Mel dourado.",
      hex: "#b48b4d",
      palette: ["#c79c4a", "#f7e3b8", "#fff9ee"],
    },
    {
      id: "cocoa",
      name: "Cocoa",
      description: "Castanho suave.",
      hex: "#6f4e3c",
      palette: ["#8b5c46", "#e7c8bb", "#fff4ef"],
    },
  ],
  lashes: [
    {
      id: "airy-fan",
      name: "Airy fan",
      description: "Bem leve e aberta.",
      asset: "./assets/vendor/basics/basics_eyelashes1.png",
      palette: ["#2f2424", "#ffe0e8", "#fff8fb"],
    },
    {
      id: "classic-fan",
      name: "Classic fan",
      description: "Bonita e equilibrada.",
      asset: "./assets/vendor/basics/basics_eyelashes2.png",
      palette: ["#312626", "#ffd9e5", "#fff8fb"],
    },
    {
      id: "doll-fan",
      name: "Doll fan",
      description: "Mais volumosa e glam.",
      asset: "./assets/vendor/basics/basics_eyelashes3.png",
      palette: ["#2e2324", "#ffcfe0", "#fff6fa"],
    },
    {
      id: "liner-fan",
      name: "Liner fan",
      description: "Marcada para looks fortes.",
      asset: "./assets/vendor/basics/basics_eyelashes4.png",
      palette: ["#231a1c", "#ffcadf", "#fff5fa"],
    },
    {
      id: "tiny-fan",
      name: "Tiny fan",
      description: "Delicada e discreta.",
      asset: "./assets/vendor/basics/basics_eyelashes5.png",
      palette: ["#35282a", "#ffe3eb", "#fff9fb"],
    },
  ],
  eyebrowColors: [
    {
      id: COLOR_CUSTOM_ID,
      name: "Cor livre",
      description: "Ajuste fino no seletor abaixo.",
      palette: ["#ffffff", "#d9dde3", "#5f7268"],
    },
    {
      id: "soft-blonde",
      name: "Soft blonde",
      description: "Loiro suave.",
      hex: "#a88a63",
      palette: ["#a88a63", "#e4cfab", "#fff2de"],
    },
    {
      id: "taupe",
      name: "Taupe",
      description: "Marrom acinzentado.",
      hex: "#7e665c",
      palette: ["#7e665c", "#c8b3ab", "#fff2ef"],
    },
    {
      id: "chestnut",
      name: "Chestnut",
      description: "Castanho quente.",
      hex: "#6a4635",
      palette: ["#6a4635", "#be8b73", "#ffe9df"],
    },
    {
      id: "espresso",
      name: "Espresso",
      description: "Escuro e definido.",
      hex: "#352623",
      palette: ["#352623", "#7a5e5b", "#ead3d1"],
    },
    {
      id: "soft-black",
      name: "Soft black",
      description: "Quase preto.",
      hex: "#1d181b",
      palette: ["#1d181b", "#4c4449", "#d6ccd0"],
    },
  ],
  mouths: [
    {
      id: "rose-smile",
      name: "Rose smile",
      description: "Sorriso pequeno e fofo.",
      asset: "./assets/vendor/basics/basics_mouth1.png",
      palette: ["#ffb0c7", "#ffdbe8", "#fff7fb"],
    },
    {
      id: "petal-smile",
      name: "Petal smile",
      description: "Boca delicada para a sua doll.",
      asset: "./assets/vendor/basics/basics_mouth2.png",
      palette: ["#ffb4c8", "#ffe0eb", "#fff7fb"],
    },
    {
      id: "gloss-smirk",
      name: "Gloss smirk",
      description: "Mais fashion e confiante.",
      asset: "./assets/vendor/basics/basics_mouth3.png",
      palette: ["#f5b2c2", "#ffd4e3", "#fff6fa"],
    },
    {
      id: "berry-smile",
      name: "Berry smile",
      description: "Sorriso meigo e glam.",
      asset: "./assets/vendor/basics/basics_mouth4.png",
      palette: ["#f0a3b9", "#ffd6e4", "#fff6fa"],
    },
  ],
  makeup: [
    {
      id: "none",
      name: "Sem make",
      description: "Rosto limpo para montar do zero.",
      thumb: EMPTY_THUMB,
      palette: ["#ffffff", "#ffe6ef"],
    },
    {
      id: "soft-pink",
      name: "Soft pink",
      description: "Blush rosinha bem leve.",
      asset: "./assets/looks/makeup/soft-pink.svg",
      palette: ["#f7a9c7", "#ffe2ec", "#fff9fb"],
    },
    {
      id: "peach-glow",
      name: "Peach glow",
      description: "Tom quente com brilho suave.",
      asset: "./assets/looks/makeup/peach-glow.svg",
      palette: ["#f6bf8e", "#fff0d5", "#fff8fb"],
    },
    {
      id: "berry-blush",
      name: "Berry blush",
      description: "Bochecha mais marcada.",
      asset: "./assets/looks/makeup/berry-blush.svg",
      palette: ["#da6c9a", "#ffd5e7", "#fff8fb"],
    },
    {
      id: "gloss-heart",
      name: "Gloss heart",
      description: "Glow fofo com detalhe de coracao.",
      asset: "./assets/looks/makeup/gloss-heart.svg",
      palette: ["#ffb7c9", "#ffe2ec", "#fff9fb"],
    },
    {
      id: "sweet-liner",
      name: "Sweet liner",
      description: "Delineado doce com blush limpo.",
      asset: "./assets/looks/makeup/sweet-liner.svg",
      palette: ["#ff9fc0", "#ffd7e7", "#fff8fb"],
    },
    {
      id: "rosy-dust",
      name: "Rosy dust",
      description: "Rosado delicado com glow central.",
      asset: "./assets/looks/makeup/rosy-dust.svg",
      palette: ["#ffb2cb", "#ffe5ef", "#fff8fb"],
    },
    {
      id: "pearl-pop",
      name: "Pearl pop",
      description: "Pontos de luz e brilho cute.",
      asset: "./assets/looks/makeup/pearl-pop.svg",
      palette: ["#f5bfd7", "#fff1f7", "#fff8fb"],
    },
  ],
  hair: [
    {
      id: "wave-long",
      name: "Wave long",
      description: "Longo ondulado.",
      asset: "./assets/vendor/basics/basics_hairABW.png",
      palette: ["#d2d2d2", "#f2f2f2", "#fff8fb"],
    },
    {
      id: "ponytail-side",
      name: "Ponytail side",
      description: "Rabo alto estiloso.",
      asset: "./assets/vendor/basics/basics_hairBBW.png",
      palette: ["#d2d2d2", "#f2f2f2", "#fff8fb"],
    },
    {
      id: "volume-glam",
      name: "Volume glam",
      description: "Mais cheio e elegante.",
      asset: "./assets/vendor/basics/basics_hairCBW.png",
      palette: ["#d2d2d2", "#f2f2f2", "#fff8fb"],
    },
    {
      id: "bob-swing",
      name: "Bob swing",
      description: "Curto e arrumado.",
      asset: "./assets/vendor/basics/basics_hairDBW.png",
      palette: ["#d2d2d2", "#f2f2f2", "#fff8fb"],
    },
    {
      id: "fluffy-short",
      name: "Fluffy short",
      description: "Curtinho baguncado.",
      asset: "./assets/vendor/basics/basics_hairEBW.png",
      palette: ["#d2d2d2", "#f2f2f2", "#fff8fb"],
    },
    {
      id: "wave-golden",
      name: "Wave luxe",
      description: "Versao mais glam da onda longa.",
      asset: "./assets/vendor/basics/basics_hairA_5.png",
      palette: ["#f6d994", "#fef0c7", "#e7b1bf"],
    },
    {
      id: "volume-luxe",
      name: "Volume luxe",
      description: "Cheio e com franja.",
      asset: "./assets/vendor/basics/basics_hairC_5.png",
      palette: ["#f3d182", "#fff0b8", "#f9d9ea"],
    },
    {
      id: "bob-luxe",
      name: "Bob luxe",
      description: "Bob limpinho e elegante.",
      asset: "./assets/vendor/basics/basics_hairD_5.png",
      palette: ["#f6d48a", "#ffe9b8", "#efe2f8"],
    },
    {
      id: "fluffy-luxe",
      name: "Fluffy luxe",
      description: "Curtinho com atitude.",
      asset: "./assets/vendor/basics/basics_hairE_5.png",
      palette: ["#f4d283", "#fff2be", "#ffd6e4"],
    },
  ],
  lashColors: [
    {
      id: COLOR_CUSTOM_ID,
      name: "Cor livre",
      description: "Controle no seletor abaixo.",
      palette: ["#ffffff", "#d9dde3", "#5f7268"],
    },
    {
      id: "brown-soft",
      name: "Brown soft",
      description: "Marrom leve.",
      hex: "#5d463d",
      palette: ["#5d463d", "#b08a78", "#ffeae0"],
    },
    {
      id: "chestnut",
      name: "Chestnut",
      description: "Mais quente e definido.",
      hex: "#4f372f",
      palette: ["#4f372f", "#987165", "#f2d7cd"],
    },
    {
      id: "espresso",
      name: "Espresso",
      description: "Escuro classico.",
      hex: "#261c1d",
      palette: ["#261c1d", "#635055", "#e5d7dc"],
    },
    {
      id: "soft-black",
      name: "Soft black",
      description: "Intenso sem pesar demais.",
      hex: "#171316",
      palette: ["#171316", "#40393d", "#d8d0d4"],
    },
  ],
  hairColors: [
    {
      id: COLOR_CUSTOM_ID,
      name: "Cor livre",
      description: "Ajuste no seletor abaixo.",
      palette: ["#ffffff", "#d9dde3", "#5f7268"],
    },
    {
      id: "platinum",
      name: "Platinum",
      description: "Loiro frio.",
      hex: "#e8ddc8",
      palette: ["#f5f1df", "#fff9ef", "#e9e4d7"],
    },
    {
      id: "golden",
      name: "Golden",
      description: "Loiro dourado.",
      hex: "#d7bb63",
      palette: ["#edcf72", "#fff0ba", "#f6d67f"],
    },
    {
      id: "strawberry",
      name: "Strawberry",
      description: "Loiro com rosa suave.",
      hex: "#cb9a7f",
      palette: ["#e7b193", "#ffd2c3", "#fff0e9"],
    },
    {
      id: "cocoa",
      name: "Cocoa",
      description: "Castanho medio.",
      hex: "#7a5847",
      palette: ["#7b4e3e", "#b27d6e", "#e8c2b3"],
    },
    {
      id: "espresso",
      name: "Espresso",
      description: "Castanho escuro.",
      hex: "#422f29",
      palette: ["#4a3028", "#74463c", "#ae7c70"],
    },
    {
      id: "rose-brown",
      name: "Rose brown",
      description: "Marrom com toque rosado.",
      hex: "#8d655b",
      palette: ["#8d5b64", "#c88a92", "#f3c6cb"],
    },
  ],
  pets: [
    {
      id: "none",
      name: "Sem kitty",
      description: "Sua doll fica sem companhia por enquanto.",
      thumb: EMPTY_THUMB,
      palette: ["#ffffff", "#ffe0ee"],
    },
    {
      id: "kitty-cat",
      name: "Kitty cat",
      description: "Gatinha 3D bem fofinha.",
      asset: "./assets/pets/fluent/cat.png",
      palette: ["#d6d8de", "#ffc8dc", "#fff6fb"],
    },
    {
      id: "puppy-bow",
      name: "Puppy bow",
      description: "Cachorrinho cute com carinha doce.",
      asset: "./assets/pets/fluent/dog.png",
      palette: ["#d7dade", "#ffd2df", "#fff8fb"],
    },
    {
      id: "bunny-milk",
      name: "Bunny milk",
      description: "Coelhinho meigo e bem delicado.",
      asset: "./assets/pets/fluent/rabbit.png",
      palette: ["#d9dbe1", "#f7d5df", "#fff8fb"],
    },
    {
      id: "froggy-bow",
      name: "Froggy bow",
      description: "Sapinho redondo super cute.",
      asset: "./assets/pets/fluent/frog.png",
      palette: ["#d5d8dd", "#ffc5d9", "#fff8fb"],
    },
    {
      id: "hamster-mochi",
      name: "Hamster mochi",
      description: "Hamster mochi fofinho.",
      asset: "./assets/pets/fluent/hamster.png",
      palette: ["#d6d8de", "#f5b9c8", "#fff8fb"],
    },
    {
      id: "duckling",
      name: "Baby chick",
      description: "Pintinho pequeno e alegre.",
      asset: "./assets/pets/fluent/chick.png",
      palette: ["#d7dade", "#f3bf77", "#fff8fb"],
    },
    {
      id: "panda-baby",
      name: "Panda baby",
      description: "Panda mini super cute.",
      asset: "./assets/pets/fluent/panda.png",
      palette: ["#e8e8ec", "#8b8a90", "#fff8fb"],
    },
  ],
  petColors: [
    {
      id: "cloud-cream",
      name: "Cloud cream",
      description: "Clarinho e macio.",
      hex: "#efe6d4",
      palette: ["#efe6d4", "#fff7ea", "#f7d8e1"],
    },
    {
      id: "honey",
      name: "Honey",
      description: "Quentinho e dourado.",
      hex: "#d2ab61",
      palette: ["#d2ab61", "#f5ddb6", "#fff5e8"],
    },
    {
      id: "strawberry",
      name: "Strawberry",
      description: "Rosadinho cute.",
      hex: "#d899a8",
      palette: ["#d899a8", "#f7d7e1", "#fff7fb"],
    },
    {
      id: "mint",
      name: "Mint",
      description: "Verde pastel fofo.",
      hex: "#8db9a0",
      palette: ["#8db9a0", "#d7efe2", "#fff8fb"],
    },
    {
      id: "sky",
      name: "Sky",
      description: "Azul bem suave.",
      hex: "#90afcd",
      palette: ["#90afcd", "#dce9f7", "#fff8fb"],
    },
    {
      id: "cocoa",
      name: "Cocoa",
      description: "Marrom aconchegante.",
      hex: "#8c6555",
      palette: ["#8c6555", "#e0b9a8", "#fff1ea"],
    },
    {
      id: "lilac",
      name: "Lilac",
      description: "LilÃ¡s docinho.",
      hex: "#b39bd5",
      palette: ["#b39bd5", "#ebe3ff", "#fff8fb"],
    },
  ],
  tops: [
    {
      id: "none",
      name: "Sem blusa",
      description: "Use um vestido inteiro ou deixe sem roupa.",
      thumb: EMPTY_THUMB,
      palette: ["#ffffff", "#ffe0ee"],
    },
    {
      id: "tee-pearl",
      name: "Tee pearl",
      description: "Basica clarinha para combinar com tudo.",
      asset: "./assets/vendor/basics/basics_top5.png",
      palette: ["#ffffff", "#efeff5", "#ffdbe9"],
    },
    {
      id: "tee-sky",
      name: "Tee sky",
      description: "Azul suave com cara de look colegial.",
      asset: "./assets/vendor/basics/basics_top3.png",
      palette: ["#9bcfe4", "#dff5ff", "#ffdbe7"],
    },
    {
      id: "tee-berry",
      name: "Tee berry",
      description: "Tom fechado para looks mais glam.",
      asset: "./assets/vendor/basics/basics_top2.png",
      palette: ["#aa5450", "#e8bab8", "#ffe7ef"],
    },
    {
      id: "tee-matcha",
      name: "Tee matcha",
      description: "Basica fashion em tom verdinho.",
      asset: "./assets/vendor/basics/basics_top1.png",
      palette: ["#88a962", "#d9e6bd", "#fff1d9"],
    },
    {
      id: "tee-midnight",
      name: "Tee midnight",
      description: "Basica preta para um look mais forte.",
      asset: "./assets/vendor/basics/basics_top4.png",
      palette: ["#222227", "#797987", "#fbd1e3"],
    },
    {
      id: "cami-pearl",
      name: "Cami pearl",
      description: "Regatinha delicada e mais arrumada.",
      asset: "./assets/vendor/basics/basics_topB_5.png",
      palette: ["#faf8f7", "#c9c3c6", "#ffe0ea"],
    },
    {
      id: "cami-cherry",
      name: "Cami cherry",
      description: "Vermelhinha cute para sair do obvio.",
      asset: "./assets/vendor/basics/basics_topB_3.png",
      palette: ["#a5141b", "#ff8d95", "#fff0f3"],
    },
    {
      id: "cami-midnight",
      name: "Cami midnight",
      description: "Regatinha preta de festa.",
      asset: "./assets/vendor/basics/basics_topB_4.png",
      palette: ["#1e1f24", "#7d7f87", "#ffe1eb"],
    },
    {
      id: "wrap-cream",
      name: "Wrap cream",
      description: "Faixa clara com cara de closet fashion.",
      asset: "./assets/vendor/basics/basics_topC_5.png",
      palette: ["#f4f0eb", "#d1cad2", "#ffe5ef"],
    },
    {
      id: "wrap-honey",
      name: "Wrap honey",
      description: "Versao douradinha para looks quentes.",
      asset: "./assets/vendor/basics/basics_topC_3.png",
      palette: ["#b3a06f", "#e5d5ac", "#fff1dc"],
    },
  ],
  bottoms: [
    {
      id: "none",
      name: "Sem parte de baixo",
      description: "Sua doll fica sem roupa nessa parte.",
      thumb: EMPTY_THUMB,
      palette: ["#ffffff", "#ffe0ee"],
    },
    {
      id: "jeans-sky",
      name: "Jeans sky",
      description: "Jeans azul clarinho.",
      asset: "./assets/vendor/basics/basics_bottom3.png",
      palette: ["#9fc9d8", "#d8eef7", "#eaf2ff"],
    },
    {
      id: "jeans-royal",
      name: "Jeans royal",
      description: "Azul medio com carinha casual.",
      asset: "./assets/vendor/basics/basics_bottom5.png",
      palette: ["#5f8cca", "#b2d3ff", "#e6f2ff"],
    },
    {
      id: "jeans-night",
      name: "Jeans night",
      description: "Escuro para looks mais fashion.",
      asset: "./assets/vendor/basics/basics_bottom4.png",
      palette: ["#2b346d", "#8ea0f4", "#dfe5ff"],
    },
    {
      id: "jeans-silver",
      name: "Jeans silver",
      description: "Cinza claro e facil de combinar.",
      asset: "./assets/vendor/basics/basics_bottom2.png",
      palette: ["#c8d0d5", "#eff4f7", "#fff4f9"],
    },
    {
      id: "short-honey",
      name: "Short honey",
      description: "Curtinho casual em tom mostarda.",
      asset: "./assets/vendor/basics/basics_bottomB_3.png",
      palette: ["#988a54", "#d8cf9e", "#fff2d9"],
    },
    {
      id: "short-mocha",
      name: "Short mocha",
      description: "Tom fechado para contrastar com blusas claras.",
      asset: "./assets/vendor/basics/basics_bottomB_4.png",
      palette: ["#965f4d", "#d8b1a5", "#fff0ea"],
    },
    {
      id: "skirt-pearl",
      name: "Skirt pearl",
      description: "Drapeada e mais bonequinha.",
      asset: "./assets/vendor/basics/basics_bottomC_5.png",
      palette: ["#fcfaf7", "#e2e2e9", "#ffe4ee"],
    },
    {
      id: "skirt-cocoa",
      name: "Skirt cocoa",
      description: "Drapeada em tom quente.",
      asset: "./assets/vendor/basics/basics_bottomC_4.png",
      palette: ["#a86b59", "#e2b7a9", "#fff0ea"],
    },
  ],
  dresses: [
    {
      id: "none",
      name: "Sem vestido",
      description: "Combine blusa e bottom separados.",
      thumb: EMPTY_THUMB,
      palette: ["#ffffff", "#ffe0ee"],
    },
    {
      id: "paper-black-glam",
      name: "Mint corset",
      description: "Vestido fofo ombro a ombro do pack reworked.",
      asset: "./assets/vendor/reworked/dresses/mint-corset.png",
      palette: ["#9fd2c9", "#d9f2ee", "#f7fffd"],
    },
    {
      id: "paper-pink-ribbon",
      name: "Cloud tee",
      description: "Vestidinho clarinho bem leve e clean.",
      asset: "./assets/vendor/reworked/dresses/cloud-tee.png",
      palette: ["#f1f1ef", "#ffffff", "#ece6ee"],
    },
    {
      id: "paper-blue-school",
      name: "Cherry dream",
      description: "Vestido romantico de manga longa em tom cereja.",
      asset: "./assets/vendor/reworked/dresses/cherry-dream.png",
      palette: ["#992229", "#cf6970", "#ffe5e8"],
    },
    {
      id: "paper-cream-lace",
      name: "Pink frill",
      description: "Rosinha com babadinho e clima super cute.",
      asset: "./assets/vendor/reworked/dresses/pink-frill.png",
      palette: ["#e9b3c5", "#f8dbe6", "#fff4f8"],
    },
    {
      id: "paper-berry-party",
      name: "Ivory drape",
      description: "Elegante e delicado, com caimento macio.",
      asset: "./assets/vendor/reworked/dresses/ivory-drape.png",
      palette: ["#f2efe8", "#ffffff", "#d9d0c5"],
    },
  ],
  shoes: [
    {
      id: "none",
      name: "Sem calcado",
      description: "Descalca por enquanto.",
      thumb: EMPTY_THUMB,
      palette: ["#ffffff", "#ffe0ee"],
    },
    {
      id: "shoes-cocoa",
      name: "Shoes cocoa",
      description: "Sapato marrom classico.",
      asset: "./assets/vendor/basics/basics_shoes1.png",
      palette: ["#5d382f", "#e0b49f", "#fff0ea"],
    },
    {
      id: "shoes-caramel",
      name: "Shoes caramel",
      description: "Tom canela para looks quentes.",
      asset: "./assets/vendor/basics/basics_shoes2.png",
      palette: ["#925f46", "#e8bea4", "#fff3e9"],
    },
    {
      id: "shoes-black",
      name: "Shoes black",
      description: "Preto chic e facil de usar.",
      asset: "./assets/vendor/basics/basics_shoes3.png",
      palette: ["#161618", "#6e6e76", "#ffd8e7"],
    },
    {
      id: "shoes-silver",
      name: "Shoes silver",
      description: "Cinza clarinho e delicado.",
      asset: "./assets/vendor/basics/basics_shoes4.png",
      palette: ["#b2afb2", "#ececef", "#fff0f6"],
    },
    {
      id: "shoes-pearl",
      name: "Shoes pearl",
      description: "Branquinho para looks mais suaves.",
      asset: "./assets/vendor/basics/basics_shoes5.png",
      palette: ["#f8f8f7", "#d7d4d9", "#fff0f3"],
    },
    {
      id: "mary-jane-glam",
      name: "Noir gloss",
      description: "Variacao escura usando o sapato base do pack.",
      asset: "./assets/vendor/basics/basics_shoesBW.png",
      recolorKind: "mono",
      recolorHex: "#171319",
      palette: ["#111015", "#3a313d", "#ffe1ea"],
    },
    {
      id: "pink-heels-glam",
      name: "Pink gloss",
      description: "Variacao rosada no sapato estatico do pack.",
      asset: "./assets/vendor/basics/basics_shoesBW.png",
      recolorKind: "mono",
      recolorHex: "#ff8dba",
      palette: ["#ff8dba", "#ffdce8", "#fff6fa"],
    },
    {
      id: "cream-flats-glam",
      name: "Cream gloss",
      description: "Variacao clara no sapato estatico do pack.",
      asset: "./assets/vendor/basics/basics_shoesBW.png",
      recolorKind: "mono",
      recolorHex: "#fff1db",
      palette: ["#fff1db", "#d9b06f", "#ff9fc1"],
    },
  ],
};

const defaultSelections = {
  skinTones: "rosy",
  eyes: "round-doll",
  eyeColors: "emerald",
  eyebrows: "doll-arch",
  eyebrowColors: "taupe",
  lashes: "classic-fan",
  lashColors: "espresso",
  mouths: "petal-smile",
  makeup: "soft-pink",
  hair: "wave-long",
  hairColors: "golden",
  pets: "none",
  petColors: "cloud-cream",
  tops: "none",
  bottoms: "none",
  dresses: "none",
  shoes: "none",
};

const defaultCustomColors = {
  eyeColors: optionData.eyeColors.find((item) => item.id === defaultSelections.eyeColors)?.hex || "#6f9a69",
  eyebrowColors: optionData.eyebrowColors.find((item) => item.id === defaultSelections.eyebrowColors)?.hex || "#7e665c",
  lashColors: optionData.lashColors.find((item) => item.id === defaultSelections.lashColors)?.hex || "#261c1d",
  hairColors: optionData.hairColors.find((item) => item.id === defaultSelections.hairColors)?.hex || "#d7bb63",
};

const state = {
  mode: "intro",
  activeStep: "makeup",
  activeCategory: "skinTones",
  animationTick: 0,
  selections: { ...defaultSelections },
  customColors: { ...defaultCustomColors },
};

const landingScreen = document.getElementById("landing-screen");
const studioScreen = document.getElementById("studio-screen");
const startButton = document.getElementById("start-btn");
const shuffleButton = document.getElementById("shuffle-btn");
const resetButton = document.getElementById("reset-btn");
const nextStepButton = document.getElementById("next-step-btn");
const stepper = document.getElementById("stepper");
const panelKicker = document.getElementById("panel-kicker");
const panelTitle = document.getElementById("panel-title");
const categoryTabs = document.getElementById("category-tabs");
const optionsGrid = document.getElementById("options-grid");
const colorLab = document.getElementById("color-lab");
const finalActions = document.getElementById("final-actions");
const statusCard = document.getElementById("status-card");
const sceneFrame = document.getElementById("scene-frame");
const layerEyebrows = document.getElementById("layer-eyebrows");
const layerEyes = document.getElementById("layer-eyes");
const layerLashes = document.getElementById("layer-lashes");
const layerMouth = document.getElementById("layer-mouth");
const layerMakeup = document.getElementById("layer-makeup");
const layerTop = document.getElementById("layer-top");
const layerBottom = document.getElementById("layer-bottom");
const layerDress = document.getElementById("layer-dress");
const layerShoes = document.getElementById("layer-shoes");
const layerHair = document.getElementById("layer-hair");
const petPedestal = document.getElementById("pet-pedestal");
const layerPet = document.getElementById("layer-pet");
const bodyLayer = document.querySelector(".main-doll .doll-layer");
let colorDragState = null;
const assetImageCache = new Map();
const recoloredAssetCache = new Map();

function getStepIndex(stepId) {
  return steps.findIndex((step) => step.id === stepId);
}

function getStep() {
  return steps.find((step) => step.id === state.activeStep);
}

function getOption(categoryId, optionId) {
  return optionData[categoryId].find((item) => item.id === optionId);
}

function getSelectedName(categoryId) {
  return getOption(categoryId, state.selections[categoryId])?.name || "Sem selecao";
}

function setLayerImage(element, path, recolor = null) {
  if (!path) {
    element.removeAttribute("src");
    delete element.dataset.recolorToken;
    element.classList.add("hidden");
    return;
  }

  element.src = path;
  element.classList.remove("hidden");

  if (recolor?.kind && recolor?.hex) {
    applyRecolorToElement(element, path, recolor.kind, recolor.hex);
  } else {
    delete element.dataset.recolorToken;
  }
}

function getOptionRecolor(item) {
  if (!item?.recolorKind || !item?.recolorHex) {
    return null;
  }

  return {
    kind: item.recolorKind,
    hex: item.recolorHex,
  };
}

function ensureActiveCategory() {
  const step = getStep();
  if (!step.categories.length) {
    state.activeCategory = null;
    return;
  }

  if (!step.categories.includes(state.activeCategory)) {
    state.activeCategory = step.categories[0];
  }
}

function buildPalette(colors = []) {
  return colors.map((color) => `<span style="background:${color}"></span>`).join("");
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function hexToRgb(hex) {
  const raw = hex.replace("#", "");
  const value = raw.length === 3 ? raw.split("").map((char) => `${char}${char}`).join("") : raw;
  const parsed = Number.parseInt(value, 16);
  return {
    r: (parsed >> 16) & 255,
    g: (parsed >> 8) & 255,
    b: parsed & 255,
  };
}

function rgbToHex(r, g, b) {
  return `#${[r, g, b]
    .map((value) => clamp(Math.round(value), 0, 255).toString(16).padStart(2, "0"))
    .join("")}`;
}

function rgbToHsv({ r, g, b }) {
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const delta = max - min;
  let hue = 0;

  if (delta !== 0) {
    if (max === red) {
      hue = ((green - blue) / delta) % 6;
    } else if (max === green) {
      hue = (blue - red) / delta + 2;
    } else {
      hue = (red - green) / delta + 4;
    }
  }

  hue = Math.round(hue * 60);
  if (hue < 0) {
    hue += 360;
  }

  return {
    h: hue,
    s: max === 0 ? 0 : delta / max,
    v: max,
  };
}

function hsvToRgb(h, s, v) {
  const hue = ((h % 360) + 360) % 360;
  const chroma = v * s;
  const match = chroma * (1 - Math.abs(((hue / 60) % 2) - 1));
  const light = v - chroma;
  let red = 0;
  let green = 0;
  let blue = 0;

  if (hue < 60) {
    red = chroma;
    green = match;
  } else if (hue < 120) {
    red = match;
    green = chroma;
  } else if (hue < 180) {
    green = chroma;
    blue = match;
  } else if (hue < 240) {
    green = match;
    blue = chroma;
  } else if (hue < 300) {
    red = match;
    blue = chroma;
  } else {
    red = chroma;
    blue = match;
  }

  return {
    r: (red + light) * 255,
    g: (green + light) * 255,
    b: (blue + light) * 255,
  };
}

function hsvToHex(h, s, v) {
  const rgb = hsvToRgb(h, s, v);
  return rgbToHex(rgb.r, rgb.g, rgb.b);
}

function hexToHsv(hex) {
  return rgbToHsv(hexToRgb(hex));
}

function getLuminance(r, g, b) {
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
}

function tintPixelWithTarget(target, luminance, highlightBoost = 0.14, shadowLift = 0.24) {
  const shade = shadowLift + luminance * (1 - shadowLift);
  const highlight = Math.pow(luminance, 2.1) * 255 * highlightBoost;
  return {
    r: clamp(target.r * shade + highlight, 0, 255),
    g: clamp(target.g * shade + highlight, 0, 255),
    b: clamp(target.b * shade + highlight, 0, 255),
  };
}

function recolorMonoImageData(data, target, mode = "mono") {
  const highlightBoost = mode === "hair" ? 0.19 : 0.08;
  const shadowLift = mode === "hair" ? 0.2 : 0.34;

  for (let i = 0; i < data.length; i += 4) {
    const alpha = data[i + 3];
    if (!alpha) {
      continue;
    }

    const luminance = getLuminance(data[i], data[i + 1], data[i + 2]);
    const tinted = tintPixelWithTarget(target, luminance, highlightBoost, shadowLift);
    data[i] = tinted.r;
    data[i + 1] = tinted.g;
    data[i + 2] = tinted.b;
  }
}

function recolorIrisImageData(data, target) {
  for (let i = 0; i < data.length; i += 4) {
    const alpha = data[i + 3];
    if (!alpha) {
      continue;
    }

    const red = data[i];
    const green = data[i + 1];
    const blue = data[i + 2];
    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);
    const saturation = max - min;
    const luminance = getLuminance(red, green, blue);

    if (saturation < 16 || luminance < 0.08 || luminance > 0.9) {
      continue;
    }

    const tinted = tintPixelWithTarget(target, luminance, 0.12, 0.28);
    data[i] = tinted.r;
    data[i + 1] = tinted.g;
    data[i + 2] = tinted.b;
  }
}

async function getRecoloredAssetSrc(src, kind, hex) {
  if (!kind || !hex) {
    return src;
  }

  const cacheKey = `${kind}|${hex.toLowerCase()}|${src}`;
  if (!recoloredAssetCache.has(cacheKey)) {
    recoloredAssetCache.set(
      cacheKey,
      (async () => {
        const image = await loadAssetImage(src);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        canvas.width = image.naturalWidth || image.width;
        canvas.height = image.naturalHeight || image.height;
        ctx.drawImage(image, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const target = hexToRgb(hex);

        if (kind === "iris") {
          recolorIrisImageData(imageData.data, target);
        } else {
          recolorMonoImageData(imageData.data, target, kind);
        }

        ctx.putImageData(imageData, 0, 0);
        return canvas.toDataURL("image/png");
      })()
    );
  }

  return recoloredAssetCache.get(cacheKey);
}

async function applyRecolorToElement(element, src, kind, hex) {
  const token = `${src}|${kind}|${hex.toLowerCase()}`;
  element.dataset.recolorToken = token;

  try {
    const recoloredSrc = await getRecoloredAssetSrc(src, kind, hex);
    if (element.dataset.recolorToken === token) {
      element.src = recoloredSrc;
    }
  } catch {
    if (element.dataset.recolorToken === token) {
      element.src = src;
    }
  }
}

function hydrateRecoloredImages(root) {
  if (!root) {
    return;
  }

  root.querySelectorAll("[data-recolor-kind][data-recolor-hex][data-base-src]").forEach((image) => {
    applyRecolorToElement(
      image,
      image.dataset.baseSrc,
      image.dataset.recolorKind,
      image.dataset.recolorHex
    );
  });
}

function isLiveColorCategory(categoryId) {
  return LIVE_COLOR_CATEGORIES.has(categoryId);
}

function getCurrentColorHex(categoryId, optionId = state.selections[categoryId]) {
  const option = getOption(categoryId, optionId);
  return option?.hex || state.customColors[categoryId] || "#7a6a63";
}

function buildTintFilter(hex) {
  const { h, s, v } = hexToHsv(hex);
  const sepia = 0.22 + s * 0.78;
  const saturate = 0.85 + s * 4.6;
  const brightness = 0.46 + v * 0.74;
  const contrast = 0.92 + s * 0.42;
  return `grayscale(1) sepia(${sepia.toFixed(2)}) saturate(${saturate.toFixed(2)}) hue-rotate(${Math.round(
    h - 18
  )}deg) brightness(${brightness.toFixed(2)}) contrast(${contrast.toFixed(2)})`;
}

function buildEyeColorFilter(hex) {
  const { h, s, v } = hexToHsv(hex);
  const hueRotate = Math.round(h - 122);
  const saturate = 0.7 + s * 1.55;
  const brightness = 0.82 + v * 0.3;
  return `hue-rotate(${hueRotate}deg) saturate(${saturate.toFixed(2)}) brightness(${brightness.toFixed(2)})`;
}

function syncCustomColorsFromSelections() {
  for (const categoryId of LIVE_COLOR_CATEGORIES) {
    const option = getOption(categoryId, state.selections[categoryId]);
    if (option?.hex) {
      state.customColors[categoryId] = option.hex;
    }
  }
}

function getDisplayColorLabel(categoryId) {
  const option = getOption(categoryId, state.selections[categoryId]);
  return option?.id === COLOR_CUSTOM_ID ? state.customColors[categoryId].toUpperCase() : option?.name || "Cor livre";
}

function setFittedTitleFont(ctx, text, maxWidth, initialSize = 76, minSize = 48) {
  let size = initialSize;
  while (size > minSize) {
    ctx.font = `700 ${size}px Fraunces, Georgia, serif`;
    if (ctx.measureText(text).width <= maxWidth) {
      return;
    }
    size -= 2;
  }
  ctx.font = `700 ${minSize}px Fraunces, Georgia, serif`;
}

function buildPet(overrides = {}) {
  const pet = getOption("pets", overrides.pets ?? state.selections.pets);
  const petColor = getOption("petColors", overrides.petColors ?? state.selections.petColors);

  return {
    pet,
    petColor,
    petFilter: "none",
    petAccent: petColor.hex,
  };
}

function buildFace(overrides = {}) {
  const eyebrowColorId = overrides.eyebrowColors ?? state.selections.eyebrowColors;
  const eyeColorId = overrides.eyeColors ?? state.selections.eyeColors;
  const lashColorId = overrides.lashColors ?? state.selections.lashColors;
  const hairColorId = overrides.hairColors ?? state.selections.hairColors;
  const eyebrowHex = getCurrentColorHex("eyebrowColors", eyebrowColorId);
  const eyeHex = getCurrentColorHex("eyeColors", eyeColorId);
  const lashHex = getCurrentColorHex("lashColors", lashColorId);
  const hairHex = getCurrentColorHex("hairColors", hairColorId);

  return {
    skinTones: getOption("skinTones", overrides.skinTones ?? state.selections.skinTones),
    eyes: getOption("eyes", overrides.eyes ?? state.selections.eyes),
    eyeColors: getOption("eyeColors", eyeColorId),
    eyeColorHex: eyeHex,
    eyeFilter: "",
    eyeRecolor: { kind: "iris", hex: eyeHex },
    eyebrows: getOption("eyebrows", overrides.eyebrows ?? state.selections.eyebrows),
    eyebrowColors: getOption("eyebrowColors", eyebrowColorId),
    eyebrowColorHex: eyebrowHex,
    eyebrowFilter: "",
    eyebrowRecolor: { kind: "mono", hex: eyebrowHex },
    lashes: getOption("lashes", overrides.lashes ?? state.selections.lashes),
    lashColors: getOption("lashColors", lashColorId),
    lashColorHex: lashHex,
    lashFilter: "",
    lashRecolor: { kind: "mono", hex: lashHex },
    mouths: getOption("mouths", overrides.mouths ?? state.selections.mouths),
    makeup: getOption("makeup", overrides.makeup ?? state.selections.makeup),
    hair: getOption("hair", overrides.hair ?? state.selections.hair),
    hairColors: getOption("hairColors", hairColorId),
    hairColorHex: hairHex,
    hairFilter: "",
    hairRecolor: { kind: "hair", hex: hairHex },
  };
}

function makeLayer(
  src,
  filter = "",
  objectPosition = "center bottom",
  transform = "",
  recolorKind = "",
  recolorHex = ""
) {
  return { src, filter, objectPosition, transform, recolorKind, recolorHex };
}

function faceLayers(face) {
  const layers = [
    makeLayer(face.eyebrows.asset, "", "center bottom", "", face.eyebrowRecolor.kind, face.eyebrowRecolor.hex),
    makeLayer(face.eyes.asset, face.eyeFilter, "center bottom", "", face.eyeRecolor.kind, face.eyeRecolor.hex),
    makeLayer(face.lashes.asset, "", "center bottom", "", face.lashRecolor.kind, face.lashRecolor.hex),
    makeLayer(face.mouths.asset),
  ];

  if (face.makeup.id !== "none") {
    layers.push(makeLayer(face.makeup.asset));
  }

  return layers;
}

function renderStack(layers, fallbackIcon = EMPTY_THUMB, options = {}) {
  const thumbClass = options.thumbClass ? ` ${options.thumbClass}` : "";
  const thumbStyle = options.thumbStyle ? ` style="${options.thumbStyle}"` : "";
  if (!layers.length) {
    return `
      <span class="option-thumb is-icon${thumbClass}"${thumbStyle}>
        <img class="option-thumb-icon" src="${fallbackIcon}" alt="" />
      </span>
    `;
  }

  return `
    <span class="option-thumb${thumbClass}"${thumbStyle}>
      ${layers
        .map((layer) => {
          const value =
            typeof layer === "string"
              ? { src: layer, filter: "", objectPosition: "center bottom", transform: "" }
              : layer;
          const style = [
            value.filter ? `filter:${value.filter}` : "",
            value.objectPosition ? `object-position:${value.objectPosition}` : "",
            value.transform ? `transform:${value.transform}` : "",
          ]
            .filter(Boolean)
            .join(";");
          const styleAttr = style ? ` style="${style}"` : "";
          const recolorAttr =
            value.recolorKind && value.recolorHex
              ? ` data-base-src="${value.src}" data-recolor-kind="${value.recolorKind}" data-recolor-hex="${value.recolorHex}"`
              : "";
          return `<img class="thumb-layer" src="${value.src}" alt=""${styleAttr}${recolorAttr} />`;
        })
        .join("")}
    </span>
  `;
}

function previewBodyLayer(face) {
  return makeLayer(face.skinTones.bodyAsset || BODY_ASSET);
}

function getThumbLayers(categoryId, item) {
  if (!item || item.id === "none") {
    return [];
  }

  const face = buildFace();

  switch (categoryId) {
    case "skinTones":
      return [makeLayer(item.bodyAsset || BODY_ASSET, "", "center bottom", "translateY(6%) scale(1.06)")];
    case "eyes":
      return [makeLayer(item.asset, "", "center center", "translateY(18%) scale(2.55)", "iris", face.eyeColorHex)];
    case "eyeColors": {
      const eyeHex = item.hex || getCurrentColorHex("eyeColors");
      return [makeLayer(face.eyes.asset, "", "center center", "translateY(18%) scale(2.55)", "iris", eyeHex)];
    }
    case "eyebrows":
      return [makeLayer(item.asset, "", "center center", "translateY(18%) scale(2.55)", "mono", face.eyebrowColorHex)];
    case "eyebrowColors": {
      const eyebrowHex = item.hex || getCurrentColorHex("eyebrowColors");
      return [makeLayer(face.eyebrows.asset, "", "center center", "translateY(18%) scale(2.55)", "mono", eyebrowHex)];
    }
    case "lashes":
      return [makeLayer(item.asset, "", "center center", "translateY(18%) scale(2.55)", "mono", face.lashColorHex)];
    case "lashColors": {
      const lashHex = item.hex || getCurrentColorHex("lashColors");
      return [makeLayer(face.lashes.asset, "", "center center", "translateY(18%) scale(2.55)", "mono", lashHex)];
    }
    case "mouths":
      return [makeLayer(item.asset, "", "center center", "translateY(8%) scale(2.35)")];
    case "makeup":
      return [makeLayer(item.asset, "", "center center", "translateY(10%) scale(2.35)")];
    case "hair":
      return [makeLayer(item.asset, "", "center center", "translateY(10%) scale(1.46)", "hair", face.hairColorHex)];
    case "hairColors": {
      const hairHex = item.hex || getCurrentColorHex("hairColors");
      return [makeLayer(face.hair.asset, "", "center center", "translateY(10%) scale(1.46)", "hair", hairHex)];
    }
    case "pets":
      return [makeLayer(item.asset, "", "center center", "scale(0.84)")];
    case "petColors": {
      const pet = buildPet();
      const previewAsset =
        pet.pet.id === "none" ? getOption("pets", "kitty-cat").asset : pet.pet.asset;
      return [makeLayer(previewAsset, "", "center center", "scale(0.84)")];
    }
    case "tops":
      return [makeLayer(item.asset, "", "center center", "translateY(14%) scale(1.72)")];
    case "bottoms":
      return [makeLayer(item.asset, "", "center center", "translateY(-14%) scale(1.72)")];
    case "dresses":
      return item.asset
        ? [makeLayer(item.asset, "", "center center", "translateY(2%) scale(1.58)")]
        : [
            makeLayer(item.skirtAsset, "", "center center", "translateY(2%) scale(1.58)"),
            makeLayer(item.topAsset, "", "center center", "translateY(2%) scale(1.58)"),
          ];
    case "shoes":
      return [
        makeLayer(face.skinTones.bodyAsset || BODY_ASSET, "", "center bottom", "translateY(-78%) scale(2.22)"),
        makeLayer(
          item.asset,
          "",
          "center bottom",
          "translateY(-78%) scale(2.22)",
          item.recolorKind || "",
          item.recolorHex || ""
        ),
      ];
    default:
      return [];
  }
}

function renderStepper() {
  const activeIndex = getStepIndex(state.activeStep);

  stepper.innerHTML = steps
    .map((step, index) => {
      const className =
        step.id === state.activeStep ? "step-chip is-active" : index < activeIndex ? "step-chip is-complete" : "step-chip";

      return `
        <button type="button" class="${className}" data-step="${step.id}">
          ${step.label}
        </button>
      `;
    })
    .join("");
}

function renderPanelHeader() {
  const step = getStep();
  panelKicker.textContent = step.kicker;
  panelTitle.textContent = step.title;
  nextStepButton.textContent = state.activeStep === "final" ? "Voltar para face" : "Proxima etapa";
}

function renderCategoryTabs() {
  const step = getStep();
  if (!step.categories.length) {
    categoryTabs.classList.add("hidden");
    categoryTabs.innerHTML = "";
    return;
  }

  categoryTabs.classList.remove("hidden");
  categoryTabs.innerHTML = step.categories
    .map(
      (categoryId) => `
        <button
          type="button"
          class="category-tab ${state.activeCategory === categoryId ? "is-active" : ""}"
          data-category="${categoryId}"
          role="tab"
          aria-selected="${state.activeCategory === categoryId}"
        >
          ${categories[categoryId].label}
        </button>
      `
    )
    .join("");
}

function renderOptionCard(categoryId, item) {
  const thumbOptions =
    categoryId === "petColors"
      ? { thumbClass: "pet-preview", thumbStyle: `--pet-accent:${item.hex};` }
      : categoryId === "pets"
        ? {
            thumbClass: item.id === "none" ? "" : "pet-preview",
            thumbStyle:
              item.id === "none"
                ? ""
                : `--pet-accent:${getOption("petColors", state.selections.petColors)?.hex || "#f7d2df"};`,
          }
        : {};

  return `
    <button
      type="button"
      class="option-card ${state.selections[categoryId] === item.id ? "is-active" : ""}"
      data-category="${categoryId}"
      data-option="${item.id}"
    >
      ${renderStack(getThumbLayers(categoryId, item), item.thumb || EMPTY_THUMB, thumbOptions)}
      <span class="option-copy">
        <span class="option-name">${item.name}</span>
        <span class="option-desc">${item.description}</span>
        <span class="palette">${buildPalette(item.palette)}</span>
      </span>
    </button>
  `;
}

function renderColorLab() {
  if (state.activeStep === "final" || !isLiveColorCategory(state.activeCategory)) {
    colorLab.classList.add("hidden");
    colorLab.innerHTML = "";
    return;
  }

  const categoryId = state.activeCategory;
  const hex = getCurrentColorHex(categoryId);
  const { h, s, v } = hexToHsv(hex);
  const previewItem = getOption(categoryId, COLOR_CUSTOM_ID);

  colorLab.classList.remove("hidden");
  colorLab.innerHTML = `
    <section class="color-lab-card">
      <div class="color-lab-head">
        <div>
          <p class="eyebrow small">Color lab</p>
          <strong>Editar ${categories[categoryId].label.toLowerCase()}</strong>
          <p class="option-desc">Arraste para uma cor livre e veja a doll mudar na hora.</p>
        </div>
        <div class="color-lab-preview">
          ${renderStack(getThumbLayers(categoryId, previewItem), EMPTY_THUMB)}
        </div>
      </div>

      <div class="sv-field" data-picker="sv" style="--picker-hue:${h};">
        <span class="sv-indicator" style="left:${(s * 100).toFixed(1)}%; top:${((1 - v) * 100).toFixed(1)}%;"></span>
      </div>

      <div class="hue-field" data-picker="hue">
        <span class="hue-indicator" style="left:${((h / 360) * 100).toFixed(1)}%;"></span>
      </div>

      <div class="color-lab-footer">
        <span class="color-chip-live" style="--live-color:${hex};"></span>
        <strong class="color-hex">${hex.toUpperCase()}</strong>
      </div>
    </section>
  `;
  hydrateRecoloredImages(colorLab);
}

function setCustomColor(categoryId, hex) {
  state.selections[categoryId] = COLOR_CUSTOM_ID;
  state.customColors[categoryId] = hex.toLowerCase();
  renderOptions();
  renderScene();
}

function updateColorFromPointer(event) {
  if (!colorDragState) {
    return;
  }

  const rect = colorDragState.element.getBoundingClientRect();
  const current = hexToHsv(getCurrentColorHex(colorDragState.categoryId));

  if (colorDragState.type === "hue") {
    const x = clamp((event.clientX - rect.left) / rect.width, 0, 1);
    setCustomColor(colorDragState.categoryId, hsvToHex(x * 360, current.s, current.v));
  } else {
    const x = clamp((event.clientX - rect.left) / rect.width, 0, 1);
    const y = clamp((event.clientY - rect.top) / rect.height, 0, 1);
    setCustomColor(colorDragState.categoryId, hsvToHex(current.h, x, 1 - y));
  }

  colorDragState.element = colorLab.querySelector(`[data-picker="${colorDragState.type}"]`) || colorDragState.element;
  colorDragState.didChange = true;
}

function stopColorDrag() {
  colorDragState = null;
  window.removeEventListener("pointermove", updateColorFromPointer);
}

function loadAssetImage(src) {
  if (!assetImageCache.has(src)) {
    assetImageCache.set(
      src,
      new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = reject;
        image.src = src;
      })
    );
  }

  return assetImageCache.get(src);
}

function roundRectPath(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

async function drawLayerToCanvas(ctx, layer, x, y, width, height) {
  const resolvedSrc =
    layer.recolorKind && layer.recolorHex
      ? await getRecoloredAssetSrc(layer.src, layer.recolorKind, layer.recolorHex)
      : layer.src;
  const image = await loadAssetImage(resolvedSrc);
  ctx.save();
  ctx.filter = layer.filter || "none";
  ctx.drawImage(image, x, y, width, height);
  ctx.restore();
}

async function buildExportCanvas() {
  const pet = buildPet();
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 1400;
  canvas.height = 1800;

  if (document.fonts?.ready) {
    try {
      await document.fonts.ready;
    } catch {}
  }

  const bg = ctx.createLinearGradient(0, 0, 0, canvas.height);
  bg.addColorStop(0, "#fff9fd");
  bg.addColorStop(0.45, "#ffeef5");
  bg.addColorStop(1, "#ffe1ee");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(255,255,255,0.82)";
  ctx.beginPath();
  ctx.arc(180, 180, 120, 0, Math.PI * 2);
  ctx.arc(1180, 190, 150, 0, Math.PI * 2);
  ctx.fill();

  roundRectPath(ctx, 70, 78, 1260, 1640, 60);
  ctx.fillStyle = "rgba(255, 252, 254, 0.8)";
  ctx.fill();

  roundRectPath(ctx, 118, 170, 1164, 1088, 58);
  ctx.fillStyle = "rgba(255,255,255,0.75)";
  ctx.fill();

  const backdrop = await loadAssetImage("./assets/stage/closet.svg");
  ctx.drawImage(backdrop, 150, 210, 1100, 1008);

  const sparkle = await loadAssetImage("./assets/decor/sparkles.svg");
  const heartRibbon = await loadAssetImage("./assets/decor/heart-ribbon.svg");
  const blossom = await loadAssetImage("./assets/decor/cherry-blossom.svg");
  const kitty = await loadAssetImage("./assets/decor/kitty-mascot.svg");

  ctx.drawImage(sparkle, 132, 238, 120, 120);
  ctx.drawImage(heartRibbon, 1096, 192, 112, 112);
  ctx.drawImage(blossom, 130, 920, 120, 120);
  ctx.drawImage(kitty, 1096, 88, 144, 144);

  const dollLayers = selectedLookLayers();
  const dollX = 338;
  const dollY = 272;
  const dollWidth = 620;
  const dollHeight = 978;

  for (const layer of dollLayers) {
    await drawLayerToCanvas(ctx, layer, dollX, dollY, dollWidth, dollHeight);
  }

  if (pet.pet.id !== "none") {
    const petRgb = hexToRgb(pet.petAccent);
    const petGlow = ctx.createRadialGradient(1040, 1048, 22, 1040, 1048, 170);
    petGlow.addColorStop(0, "rgba(255,255,255,0.96)");
    petGlow.addColorStop(0.24, `rgba(${petRgb.r}, ${petRgb.g}, ${petRgb.b}, 0.48)`);
    petGlow.addColorStop(0.68, `rgba(${petRgb.r}, ${petRgb.g}, ${petRgb.b}, 0.14)`);
    petGlow.addColorStop(1, `rgba(${petRgb.r}, ${petRgb.g}, ${petRgb.b}, 0)`);
    ctx.fillStyle = petGlow;
    ctx.beginPath();
    ctx.arc(1040, 1048, 170, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = `rgba(${petRgb.r}, ${petRgb.g}, ${petRgb.b}, 0.28)`;
    ctx.beginPath();
    ctx.ellipse(1040, 1118, 116, 40, 0, 0, Math.PI * 2);
    ctx.fill();

    await drawLayerToCanvas(
      ctx,
      makeLayer(pet.pet.asset, "", "center center", ""),
      930,
      930,
      220,
      220
    );
  }

  roundRectPath(ctx, 120, 1296, 1160, 336, 42);
  ctx.fillStyle = "rgba(255, 248, 252, 0.96)";
  ctx.fill();

  ctx.fillStyle = "#d45d93";
  ctx.font = "900 26px Nunito, sans-serif";
  ctx.fillText("KITTY CUTE FINAL", 168, 1356);

  ctx.fillStyle = "#693d57";
  setFittedTitleFont(ctx, GAME_TITLE, 760);
  ctx.fillText(GAME_TITLE, 160, 1436);

  ctx.fillStyle = "#8b647a";
  ctx.font = "600 32px Nunito, sans-serif";
  ctx.fillText(currentLookLine().replace("Ã‚Â·", "Â·"), 160, 1496);
  ctx.fillText(
    pet.pet.id === "none" ? "Nenhuma kitty escolhida nessa rodada." : `Kitty: ${pet.pet.name} em ${pet.petColor.name}.`,
    160,
    1542
  );
  ctx.fillText(
    `Rosto: ${getSelectedName("eyes")} Â· ${getDisplayColorLabel("eyeColors")} Â· ${getSelectedName("makeup")}`,
    160,
    1588
  );

  roundRectPath(ctx, 940, 1380, 264, 176, 34);
  ctx.fillStyle = "#fff2f8";
  ctx.fill();
  ctx.drawImage(kitty, 996, 1398, 96, 96);
  ctx.fillStyle = "#cf5b91";
  ctx.font = "800 28px Nunito, sans-serif";
  ctx.fillText("Doll & kitty", 954, 1518);
  ctx.fillStyle = "#8b647a";
  ctx.font = "600 22px Nunito, sans-serif";
  ctx.fillText("closet cute export", 986, 1554);

  return canvas;
}

async function exportLookBlob() {
  const canvas = await buildExportCanvas();
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error("Nao foi possivel gerar o PNG."));
        return;
      }
      resolve(blob);
    }, "image/png");
  });
}

function setFinalFeedback(message) {
  const feedback = finalActions.querySelector(".final-feedback");
  if (feedback) {
    feedback.textContent = message;
  }
}

async function saveLookAsPng() {
  try {
    const blob = await exportLookBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
      link.download = `${GAME_FILE_SLUG}-${Date.now()}.png`;
    link.click();
    URL.revokeObjectURL(url);
    setFinalFeedback("PNG salvo com sucesso.");
  } catch (error) {
    setFinalFeedback("Nao consegui salvar o PNG agora.");
  }
}

async function shareLook() {
  try {
    const blob = await exportLookBlob();
    const file = new File([blob], `${GAME_FILE_SLUG}.png`, { type: "image/png" });

    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({
        title: GAME_TITLE,
        text: `Meu look cute em ${GAME_TITLE}`,
        files: [file],
      });
      setFinalFeedback("Compartilhamento pronto.");
      return;
    }

    await saveLookAsPng();
    setFinalFeedback("Seu navegador baixou o PNG porque compartilhar direto nao esta disponivel.");
  } catch (error) {
    if (error?.name !== "AbortError") {
      setFinalFeedback("Nao consegui compartilhar agora.");
    }
  }
}

function renderFinalActions() {
  if (state.activeStep !== "final") {
    finalActions.classList.add("hidden");
    finalActions.innerHTML = "";
    return;
  }

  const pet = buildPet();
  finalActions.classList.remove("hidden");
  finalActions.innerHTML = `
    <section class="final-action-card">
      <div class="final-action-head">
        <img src="./assets/decor/kitty-mascot.svg" alt="" />
        <div>
          <p class="eyebrow small">Cute Share</p>
          <strong>Salve ou compartilhe o resultado final</strong>
          <p>${pet.pet.id === "none" ? "Seu look ja esta pronto para salvar." : `A kitty escolhida foi ${pet.pet.name} em ${pet.petColor.name}.`}</p>
        </div>
      </div>
      <div class="final-buttons">
        <button type="button" class="secondary-button" data-final-action="save">Salvar em PNG</button>
        <button type="button" class="secondary-button primary-share" data-final-action="share">Compartilhar look</button>
      </div>
      <p class="final-feedback">A exportacao monta um poster cute do look completo.</p>
    </section>
  `;
}

function hasNoClothes() {
  return state.selections.tops === "none" && state.selections.bottoms === "none" && state.selections.dresses === "none";
}

function currentLookLine() {
  if (state.selections.dresses !== "none") {
    return `Vestido: ${getSelectedName("dresses")}`;
  }

  if (hasNoClothes()) {
    return "Sua doll esta sem roupa no momento.";
  }

  return `Blusa: ${getSelectedName("tops")} Â· Bottom: ${getSelectedName("bottoms")}`;
}

function selectedLookLayers() {
  const face = buildFace();
  const top = getOption("tops", state.selections.tops);
  const bottom = getOption("bottoms", state.selections.bottoms);
  const dress = getOption("dresses", state.selections.dresses);
  const shoes = getOption("shoes", state.selections.shoes);
  const layers = [previewBodyLayer(face)];

  if (dress.id !== "none") {
    if (dress.asset) {
      layers.push(makeLayer(dress.asset));
    } else {
      layers.push(makeLayer(dress.skirtAsset), makeLayer(dress.topAsset));
    }
  } else {
    if (bottom.id !== "none") {
      layers.push(makeLayer(bottom.asset));
    }
    if (top.id !== "none") {
      layers.push(makeLayer(top.asset));
    }
  }

  if (shoes.id !== "none") {
    layers.push(makeLayer(shoes.asset, "", "center bottom", "", shoes.recolorKind || "", shoes.recolorHex || ""));
  }

  layers.push(...faceLayers(face), makeLayer(face.hair.asset, "", "center bottom", "", "hair", face.hairColorHex));
  return layers;
}

function buildFinalCard(title, description, thumbHtml, palette) {
  return `
    <article class="final-card">
      ${thumbHtml}
      <strong class="final-title">${title}</strong>
      <p>${description}</p>
      <span class="palette">${buildPalette(palette)}</span>
    </article>
  `;
}

function renderFinalCards() {
  const face = buildFace();
  const shoes = getOption("shoes", state.selections.shoes);
  const pet = buildPet();
  const dressSelected = state.selections.dresses !== "none";
  const clothing = dressSelected
    ? getOption("dresses", state.selections.dresses)
    : getOption("tops", state.selections.tops);

  optionsGrid.innerHTML = [
    buildFinalCard("Look final", currentLookLine(), renderStack(selectedLookLayers()), clothing.palette),
    buildFinalCard(
      "Rosto",
      `${face.eyebrows.name} Â· ${face.eyes.name} Â· ${face.mouths.name}`,
      renderStack([previewBodyLayer(face), ...faceLayers(face), makeLayer(face.hair.asset, "", "center bottom", "", "hair", face.hairColorHex)]),
      ["#ffdce8", "#f7f7fb", "#d1f3ec"]
    ),
    buildFinalCard(
      "Cores",
      `Pele ${face.skinTones.name} Â· Olho ${getDisplayColorLabel("eyeColors")} Â· Cabelo ${getDisplayColorLabel("hairColors")}`,
      renderStack([previewBodyLayer(face), ...faceLayers(face), makeLayer(face.hair.asset, "", "center bottom", "", "hair", face.hairColorHex)]),
      ["#ffe4ef", "#fff5de", "#ead7ff"]
    ),
    buildFinalCard(
      "Calcado",
      shoes.id === "none" ? "Sua doll segue descalca." : shoes.name,
      renderStack(getThumbLayers("shoes", shoes), EMPTY_THUMB),
      shoes.palette
    ),
    buildFinalCard(
      "Kittys",
      pet.pet.id === "none" ? "Nenhuma kitty escolhida ainda." : `${pet.pet.name} Â· ${pet.petColor.name}`,
      pet.pet.id === "none"
        ? renderStack([], EMPTY_THUMB)
        : renderStack([makeLayer(pet.pet.asset, "", "center center", "scale(0.82)")]),
      pet.pet.id === "none" ? ["#ffffff", "#ffe8f1", "#fff9fb"] : pet.petColor.palette
    ),
  ].join("");
  hydrateRecoloredImages(optionsGrid);
}

function renderOptions() {
  if (state.activeStep === "final") {
    renderFinalCards();
    colorLab.classList.add("hidden");
    colorLab.innerHTML = "";
    return;
  }

  const list = optionData[state.activeCategory];
  optionsGrid.innerHTML = list.map((item) => renderOptionCard(state.activeCategory, item)).join("");
  hydrateRecoloredImages(optionsGrid);
  renderColorLab();
}

function renderStatusCard() {
  const pet = buildPet();
  statusCard.innerHTML = `
    <span class="status-row"><strong>${GAME_TITLE}</strong></span>
    <span class="status-row">${currentLookLine()}</span>
    <span class="status-row">Pele: <strong>${getSelectedName("skinTones")}</strong></span>
    <span class="status-row">Olhos: <strong>${getSelectedName("eyes")} Â· ${getDisplayColorLabel("eyeColors")}</strong></span>
    <span class="status-row">Sobrancelha: <strong>${getSelectedName("eyebrows")} Â· ${getDisplayColorLabel("eyebrowColors")}</strong></span>
    <span class="status-row">Cilios: <strong>${getSelectedName("lashes")} Â· ${getDisplayColorLabel("lashColors")}</strong></span>
    <span class="status-row">Cabelo: <strong>${getSelectedName("hair")} Â· ${getDisplayColorLabel("hairColors")}</strong></span>
    <span class="status-row">Make: <strong>${getSelectedName("makeup")}</strong></span>
    <span class="status-row">Kittys: <strong>${pet.pet.id === "none" ? "Sem kitty" : `${pet.pet.name} Â· ${pet.petColor.name}`}</strong></span>
  `;
}

function renderLayers() {
  const face = buildFace();
  const pet = buildPet();
  const top = getOption("tops", state.selections.tops);
  const bottom = getOption("bottoms", state.selections.bottoms);
  const dress = getOption("dresses", state.selections.dresses);
  const shoes = getOption("shoes", state.selections.shoes);

  setLayerImage(bodyLayer, face.skinTones.bodyAsset || BODY_ASSET);
  bodyLayer.style.filter = "none";
  setLayerImage(layerEyebrows, face.eyebrows.asset, face.eyebrowRecolor);
  setLayerImage(layerEyes, face.eyes.asset, face.eyeRecolor);
  setLayerImage(layerLashes, face.lashes.asset, face.lashRecolor);
  setLayerImage(layerMouth, face.mouths.asset);
  setLayerImage(layerMakeup, face.makeup.id === "none" ? "" : face.makeup.asset);
  setLayerImage(layerHair, face.hair.asset, face.hairRecolor);
  setLayerImage(layerShoes, shoes.id === "none" ? "" : shoes.asset, getOptionRecolor(shoes));
  setLayerImage(layerPet, pet.pet.id === "none" ? "" : pet.pet.asset);

  layerEyebrows.style.filter = "none";
  layerEyes.style.filter = "none";
  layerLashes.style.filter = "none";
  layerHair.style.filter = "none";
  layerPet.style.filter = "none";

  if (sceneFrame) {
    sceneFrame.style.setProperty("--pet-accent", pet.petAccent);
  }

  if (petPedestal) {
    petPedestal.style.setProperty("--pet-accent", pet.petAccent);
    petPedestal.classList.toggle("hidden", pet.pet.id === "none");
    petPedestal.classList.toggle("is-visible", pet.pet.id !== "none");
  }

  if (dress.id !== "none") {
    setLayerImage(layerDress, dress.asset || dress.skirtAsset);
    setLayerImage(layerTop, dress.asset ? "" : dress.topAsset);
    setLayerImage(layerBottom, "");
  } else {
    setLayerImage(layerDress, "");
    setLayerImage(layerBottom, bottom.id === "none" ? "" : bottom.asset);
    setLayerImage(layerTop, top.id === "none" ? "" : top.asset);
  }
}

function renderScene() {
  renderLayers();
  renderStatusCard();
}

function setSelection(categoryId, optionId) {
  if (categoryId === "petColors" && state.selections.pets === "none") {
    state.selections.pets = "kitty-cat";
  }

  state.selections[categoryId] = optionId;

  if (isLiveColorCategory(categoryId)) {
    const option = getOption(categoryId, optionId);
    if (option?.hex) {
      state.customColors[categoryId] = option.hex;
    }
  }

  if (categoryId === "dresses" && optionId !== "none") {
    state.selections.tops = "none";
    state.selections.bottoms = "none";
  }

  if ((categoryId === "tops" || categoryId === "bottoms") && optionId !== "none") {
    state.selections.dresses = "none";
  }

  renderOptions();
  renderScene();
}

function randomOption(categoryId, includeNone = false) {
  const pool = optionData[categoryId].filter(
    (item) => (includeNone || item.id !== "none") && item.id !== COLOR_CUSTOM_ID
  );
  return pool[Math.floor(Math.random() * pool.length)].id;
}

function randomizeLook() {
  state.selections.skinTones = randomOption("skinTones");
  state.selections.eyes = randomOption("eyes");
  state.selections.eyeColors = randomOption("eyeColors");
  state.selections.eyebrows = randomOption("eyebrows");
  state.selections.eyebrowColors = randomOption("eyebrowColors");
  state.selections.lashes = randomOption("lashes");
  state.selections.lashColors = randomOption("lashColors");
  state.selections.mouths = randomOption("mouths");
  state.selections.makeup = Math.random() > 0.2 ? randomOption("makeup") : "none";
  state.selections.hair = randomOption("hair");
  state.selections.hairColors = randomOption("hairColors");
  state.selections.pets = Math.random() > 0.12 ? randomOption("pets") : "none";
  state.selections.petColors = randomOption("petColors");
  state.selections.shoes = Math.random() > 0.18 ? randomOption("shoes") : "none";

  if (Math.random() > 0.45) {
    state.selections.dresses = randomOption("dresses");
    state.selections.tops = "none";
    state.selections.bottoms = "none";
  } else {
    state.selections.dresses = "none";
    state.selections.tops = randomOption("tops");
    state.selections.bottoms = randomOption("bottoms");
  }

  syncCustomColorsFromSelections();
  renderOptions();
  renderScene();
}

function resetLook() {
  state.selections = { ...defaultSelections };
  state.customColors = { ...defaultCustomColors };
  state.activeStep = "makeup";
  state.activeCategory = "skinTones";
  renderUI();
}

function goToStep(stepId) {
  state.activeStep = stepId;
  ensureActiveCategory();
  renderUI();
}

function nextStep() {
  if (state.activeStep === "makeup") {
    goToStep("clothes");
    return;
  }

  if (state.activeStep === "clothes") {
    goToStep("pet");
    return;
  }

  if (state.activeStep === "pet") {
    goToStep("final");
    return;
  }

  goToStep("makeup");
}

function enterStudio() {
  state.mode = "game";
  landingScreen.classList.add("hidden");
  studioScreen.classList.remove("hidden");
  renderUI();
}

function renderUI() {
  ensureActiveCategory();
  syncCustomColorsFromSelections();
  renderStepper();
  renderPanelHeader();
  renderCategoryTabs();
  renderOptions();
  renderScene();
  renderFinalActions();
}

function renderGameToText() {
  return JSON.stringify({
    coordinate_system: "Layered dress-up scene, top-left origin, x right, y down.",
    game: GAME_TITLE,
    mode: state.mode,
    step: state.activeStep,
    active_category: state.activeCategory,
    doll: {
      skin: state.selections.skinTones,
      eyebrows: state.selections.eyebrows,
      eyebrow_color: state.customColors.eyebrowColors,
      eyes: state.selections.eyes,
      eye_color: state.customColors.eyeColors,
      lashes: state.selections.lashes,
      lash_color: state.customColors.lashColors,
      mouth: state.selections.mouths,
      makeup: state.selections.makeup,
      hair: state.selections.hair,
      hair_color: state.customColors.hairColors,
      pet: state.selections.pets,
      pet_color: state.selections.petColors,
      top: state.selections.tops,
      bottom: state.selections.bottoms,
      dress: state.selections.dresses,
      shoes: state.selections.shoes,
      clothing_state: hasNoClothes() ? "sem roupa" : "vestida",
    },
  });
}

function applyDebugStateFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const wantsGame = params.get("mode") === "game" || params.get("autostart") === "1";

  for (const categoryId of Object.keys(optionData)) {
    const requested = params.get(categoryId);
    if (requested && optionData[categoryId].some((item) => item.id === requested)) {
      state.selections[categoryId] = requested;
    }
  }

  const requestedStep = params.get("step");
  if (requestedStep && steps.some((step) => step.id === requestedStep)) {
    state.activeStep = requestedStep;
  }

  const requestedCategory = params.get("category");
  if (requestedCategory && categories[requestedCategory]) {
    state.activeCategory = requestedCategory;
  }

  syncCustomColorsFromSelections();

  if (state.selections.dresses !== "none") {
    state.selections.tops = "none";
    state.selections.bottoms = "none";
  }

  if (wantsGame) {
    state.mode = "game";
    landingScreen.classList.add("hidden");
    studioScreen.classList.remove("hidden");
    renderUI();
    return true;
  }

  return false;
}

startButton.addEventListener("click", enterStudio);
shuffleButton.addEventListener("click", randomizeLook);
resetButton.addEventListener("click", resetLook);
nextStepButton.addEventListener("click", nextStep);

stepper.addEventListener("click", (event) => {
  const button = event.target.closest("[data-step]");
  if (button) {
    goToStep(button.dataset.step);
  }
});

categoryTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (button) {
    state.activeCategory = button.dataset.category;
    renderCategoryTabs();
    renderOptions();
  }
});

optionsGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-option]");
  if (button) {
    setSelection(button.dataset.category, button.dataset.option);
  }
});

colorLab.addEventListener("pointerdown", (event) => {
  const control = event.target.closest("[data-picker]");
  if (!control) {
    return;
  }

  colorDragState = {
    type: control.dataset.picker,
    categoryId: state.activeCategory,
    element: control,
    didChange: false,
  };

  updateColorFromPointer(event);
  window.addEventListener("pointermove", updateColorFromPointer);
  window.addEventListener("pointerup", stopColorDrag, { once: true });
});

finalActions.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-final-action]");
  if (!button) {
    return;
  }

  if (button.dataset.finalAction === "save") {
    await saveLookAsPng();
    return;
  }

  await shareLook();
});

window.render_game_to_text = renderGameToText;
window.advanceTime = async (ms = 16) => {
  state.animationTick += ms;
  return Promise.resolve();
};

if (!applyDebugStateFromQuery()) {
  renderScene();
}

