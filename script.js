const themes = [
  // 1. Classic White
  { bg: "#ffffff", text: "#000000", hoverBg: "#000000", hoverText: "#ffffff", selectionBg: "#000000", selectionText: "#ffffff" },

  // 2. Midnight Black
  { bg: "#000000", text: "#ffffff", hoverBg: "#ffffff", hoverText: "#000000", selectionBg: "#ffffff", selectionText: "#000000" },

  // 3. Solar Orange
  { bg: "#ff4f00", text: "#ffffff", hoverBg: "#ffffff", hoverText: "#ff4f00", selectionBg: "#ffffff", selectionText: "#ff4f00" },

  // 4. Cyber Grape
  { bg: "#5a189a", text: "#ffffff", hoverBg: "#ffffff", hoverText: "#5a189a", selectionBg: "#ffffff", selectionText: "#5a189a" },

  // 5. Deep Sea Blue
  { bg: "#023e8a", text: "#ffffff", hoverBg: "#ffffff", hoverText: "#023e8a", selectionBg: "#ffffff", selectionText: "#023e8a" },

  // 6. Emerald Forest
  { bg: "#014f43", text: "#ffffff", hoverBg: "#ffffff", hoverText: "#014f43", selectionBg: "#ffffff", selectionText: "#014f43" },

  // 7. Crimson Red
  { bg: "#d00000", text: "#ffffff", hoverBg: "#ffffff", hoverText: "#d00000", selectionBg: "#ffffff", selectionText: "#d00000" },

  // 8. Retro Green
  { bg: "#0f0f0f", text: "#00ff00", hoverBg: "#00ff00", hoverText: "#0f0f0f", selectionBg: "#00ff00", selectionText: "#000000" },

  // 9. Night Sky Blue
  { bg: "#0a1128", text: "#ffffff", hoverBg: "#ffffff", hoverText: "#0a1128", selectionBg: "#ffffff", selectionText: "#0a1128" },

  // 10. Highlighter Pink
  { bg: "#ff007f", text: "#ffffff", hoverBg: "#ffffff", hoverText: "#ff007f", selectionBg: "#ffffff", selectionText: "#ff007f" },

  // 11. Rich Gold
  { bg: "#f2aa4c", text: "#000000", hoverBg: "#000000", hoverText: "#f2aa4c", selectionBg: "#000000", selectionText: "#f2aa4c" },

  // 12. Royal Indigo
  { bg: "#3c096c", text: "#ffffff", hoverBg: "#ffffff", hoverText: "#3c096c", selectionBg: "#ffffff", selectionText: "#3c096c" },

  // 13. Teal Tech
  { bg: "#0f766e", text: "#ffffff", hoverBg: "#ffffff", hoverText: "#0f766e", selectionBg: "#ffffff", selectionText: "#0f766e" },

  // 14. Dark Cherry
  { bg: "#6a040f", text: "#ffffff", hoverBg: "#ffffff", hoverText: "#6a040f", selectionBg: "#ffffff", selectionText: "#6a040f" },

  // 15. Royal Maroon
  { bg: "#800000", text: "#ffffff", hoverBg: "#ffffff", hoverText: "#800000", selectionBg: "#ffffff", selectionText: "#800000" },

  // 16. Classic Navy
  { bg: "#001f3f", text: "#ffffff", hoverBg: "#ffffff", hoverText: "#001f3f", selectionBg: "#ffffff", selectionText: "#001f3f" },

  // 17. Burnt Sienna
  { bg: "#e97451", text: "#000000", hoverBg: "#000000", hoverText: "#e97451", selectionBg: "#000000", selectionText: "#e97451" },

  // 18. Moss Green
  { bg: "#4b5320", text: "#ffffff", hoverBg: "#ffffff", hoverText: "#4b5320", selectionBg: "#ffffff", selectionText: "#4b5320" },

  // 19. Ultramarine
  { bg: "#3f00ff", text: "#ffffff", hoverBg: "#ffffff", hoverText: "#3f00ff", selectionBg: "#ffffff", selectionText: "#3f00ff" },

  // 20. Arctic Ice
  { bg: "#e0f7fa", text: "#000000", hoverBg: "#000000", hoverText: "#e0f7fa", selectionBg: "#000000", selectionText: "#e0f7fa" }
];

function applyRandomTheme() {
  const theme = themes[Math.floor(Math.random() * themes.length)];
  document.body.style.backgroundColor = theme.bg;
  document.body.style.color = theme.text;

  const style = document.createElement("style");
  style.innerHTML = `
    a:hover, a:focus {
      background-color: ${theme.hoverBg} !important;
      color: ${theme.hoverText} !important;
    }
    ::selection {
      background-color: ${theme.selectionBg};
      color: ${theme.selectionText};
    }
  `;
  document.head.appendChild(style);
}

applyRandomTheme();
