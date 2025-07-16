/* Edit this array to change your links. Order shown is render order. */
const linkData = [
  {
    label: "Calculadora UF",
    sublabel: "Valor UF actualizado",
    url: "https://calculadora-uf.vercel.app/",
    icon: "🧮"
  },
  {
    label: "Calculadora IVA Chile",
    sublabel: "Agrega o desglosa IVA 19%",
    url: "https://calculadora-iva-chile.vercel.app/",
    icon: "🧾"
  },
  {
    label: "Divisas Chile",
    sublabel: "Tipo de cambio CLP",
    url: "https://divisas-chile.vercel.app/",
    icon: "💱"
  },
  {
    label: "Radio Online 24",
    sublabel: "Radio Batista en vivo",
    url: "https://radio-batista.vercel.app/",
    icon: "📻"
  }
];

// Optional override tagline here if you want to set via JS instead of HTML.
// Leave empty to use the one in index.html.
const taglineOverride = "";

/* Render */
document.addEventListener("DOMContentLoaded", function () {
  const listEl = document.getElementById("linkList");
  const tg = document.getElementById("tagline");
  if (taglineOverride && tg) tg.textContent = taglineOverride;

  linkData.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "link-btn";
    a.href = item.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    // Text Wrapper for main label and sublabel
    const textWrapper = document.createElement("div");

    // Icon (optional)
    if (item.icon) {
      const spanIcon = document.createElement("span");
      spanIcon.className = "link-icon";
      spanIcon.setAttribute("aria-hidden", "true");
      spanIcon.textContent = item.icon;
      textWrapper.appendChild(spanIcon);
    }

    // Main Label
    const spanLabel = document.createElement("span");
    spanLabel.textContent = item.label;
    textWrapper.appendChild(spanLabel);

    // Sublabel (if it exists)
    if (item.sublabel) {
      const spanSublabel = document.createElement("small");
      spanSublabel.className = "link-sublabel";
      spanSublabel.textContent = item.sublabel;
      textWrapper.appendChild(spanSublabel);
    }

    a.appendChild(textWrapper);
    li.appendChild(a);
    listEl.appendChild(li);
  });
});