const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => mobileMenu.classList.toggle("open"));
}

const travelTabs = document.querySelectorAll(".tab");
let activeTravelType = "stays";
travelTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    travelTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    activeTravelType = tab.dataset.type;
  });
});

const searchForm = document.getElementById("searchForm");
const searchFeedback = document.getElementById("searchFeedback");
if (searchForm && searchFeedback) {
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(searchForm);
    const destination = data.get("destination");
    searchFeedback.textContent = `Searching ${activeTravelType} in ${destination}... results ready.`;
  });
}

const productData = {
  hotels: [
    ["Ocean Pearl Hotel", "Maldives", 4.9, 1280, 249, "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=900&q=85"],
    ["Skyline Grand", "Singapore", 4.7, 980, 179, "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=85"],
    ["The Palm Heritage", "Dubai", 4.8, 1120, 220, "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85"],
    ["Blue Haven", "Phuket", 4.6, 840, 139, "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=85"]
  ],
  resorts: [
    ["Lagoon Resort", "Bali", 4.8, 910, 189, "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=85"],
    ["Coral Bay", "Goa", 4.5, 620, 129, "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=900&q=85"],
    ["Azure Ridge", "Santorini", 4.9, 760, 279, "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?auto=format&fit=crop&w=900&q=85"],
    ["Cliffside Retreat", "Ibiza", 4.7, 505, 199, "https://images.unsplash.com/photo-1501117716987-c8e1ecb2101d?auto=format&fit=crop&w=900&q=85"]
  ],
  villas: [
    ["Eden Private Villa", "Ubud", 4.9, 430, 320, "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=85"],
    ["Olive Courtyard", "Crete", 4.8, 390, 295, "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=900&q=85"],
    ["Marina Luxe", "Nice", 4.7, 280, 350, "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=85"],
    ["Hilltop Haven", "Cape Town", 4.8, 315, 280, "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=900&q=85"]
  ],
  tours: [
    ["Northern Lights Tour", "Iceland", 4.8, 640, 199, "https://images.unsplash.com/photo-1571984405481-48fd81cb6882?auto=format&fit=crop&w=900&q=85"],
    ["Kyoto Culture Walk", "Japan", 4.7, 420, 89, "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=900&q=85"],
    ["Sahara Adventure", "Morocco", 4.9, 510, 230, "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=85"],
    ["Alpine Rail Escape", "Switzerland", 4.8, 370, 260, "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=900&q=85"]
  ],
  family: [
    ["Family Fun Week", "Orlando", 4.6, 900, 180, "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?auto=format&fit=crop&w=900&q=85"],
    ["Beach & Safari", "Kenya", 4.8, 410, 290, "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=85"],
    ["London Explorer", "UK", 4.7, 560, 170, "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=85"],
    ["Euro Highlights", "Europe", 4.8, 740, 210, "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=900&q=85"]
  ],
  luxury: [
    ["Royal Crescent", "Paris", 4.9, 280, 490, "https://images.unsplash.com/photo-1519821172141-b5d8d8ac6c2f?auto=format&fit=crop&w=900&q=85"],
    ["Emerald Coastline", "Amalfi", 4.9, 350, 520, "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=85"],
    ["Skyline Imperial", "New York", 4.8, 510, 430, "https://images.unsplash.com/photo-1445991842772-097fea258e7b?auto=format&fit=crop&w=900&q=85"],
    ["Silk Route Palace", "Doha", 4.9, 390, 410, "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=900&q=85"]
  ]
};

const productGrid = document.getElementById("productGrid");
const pTabs = document.querySelectorAll(".p-tab");
function renderProducts(tab = "hotels") {
  if (!productGrid) return;
  productGrid.innerHTML = productData[tab]
    .map(
      ([title, location, rating, reviews, price, img]) => `
      <article class="package-card reveal visible">
        <img src="${img}" alt="${title}" />
        <div class="meta">
          <h3>${title}</h3>
          <p>${location} · ${rating}★ (${reviews})</p>
          <div class="badges"><span>Free cancellation</span><span>Breakfast included</span><span>Pay later</span></div>
          <p><strong>From $${price}</strong> / night</p>
          <a href="details.html" class="btn btn-secondary">View Details</a>
        </div>
      </article>`
    )
    .join("");
}
if (productGrid) renderProducts();
pTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    pTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    renderProducts(tab.dataset.tab);
  });
});

const counters = document.querySelectorAll(".counter");
const animateCounter = (entry) => {
  const target = Number(entry.dataset.target || 0);
  const duration = 1200;
  const start = performance.now();
  const step = (time) => {
    const progress = Math.min((time - start) / duration, 1);
    entry.textContent = Math.floor(target * progress).toLocaleString();
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        if (entry.target.classList.contains("counter")) animateCounter(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);
revealItems.forEach((item) => observer.observe(item));
counters.forEach((c) => observer.observe(c));

const reviews = document.querySelectorAll(".review-card");
let reviewIndex = 0;
if (reviews.length) {
  setInterval(() => {
    reviews[reviewIndex].classList.remove("active");
    reviewIndex = (reviewIndex + 1) % reviews.length;
    reviews[reviewIndex].classList.add("active");
  }, 3800);
}

let remaining = 48 * 60 * 60;
const countdown = document.getElementById("countdown");
if (countdown) {
  setInterval(() => {
    remaining = Math.max(0, remaining - 1);
    const h = String(Math.floor(remaining / 3600)).padStart(2, "0");
    const m = String(Math.floor((remaining % 3600) / 60)).padStart(2, "0");
    const s = String(remaining % 60).padStart(2, "0");
    countdown.textContent = `${h}:${m}:${s}`;
  }, 1000);
}

const mapData = [
  { city: "Bali", text: "Ubud villas from $145/night • 1,200 stays" },
  { city: "Paris", text: "City hotels from $165/night • 940 stays" },
  { city: "Tokyo", text: "Modern stays from $130/night • 1,050 stays" }
];
const mapList = document.getElementById("mapList");
const mapPins = document.querySelectorAll(".map-pin");
const mapLabel = document.getElementById("mapLabel");
if (mapList && mapLabel) {
  mapList.innerHTML = mapData
    .map(
      (item, index) => `<article class="map-item ${index === 0 ? "active" : ""}" data-city="${item.city}"><strong>${item.city}</strong><p>${item.text}</p></article>`
    )
    .join("");
  mapLabel.textContent = mapData[0].text;

  const setMapCity = (city) => {
    const match = mapData.find((m) => m.city === city);
    if (!match) return;
    mapLabel.textContent = match.text;
    document.querySelectorAll(".map-item").forEach((i) => i.classList.toggle("active", i.dataset.city === city));
  };

  mapList.addEventListener("click", (event) => {
    const target = event.target.closest(".map-item");
    if (target) setMapCity(target.dataset.city);
  });
  mapPins.forEach((pin) => pin.addEventListener("click", () => setMapCity(pin.dataset.city)));
}

const newsletterForm = document.getElementById("newsletterForm");
const newsletterMsg = document.getElementById("newsletterMsg");
if (newsletterForm && newsletterMsg) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = new FormData(newsletterForm).get("email") || "your inbox";
    newsletterMsg.textContent = `Great! Fresh travel deals will now land in ${email}.`;
    newsletterForm.reset();
  });
}
