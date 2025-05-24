<script>
  const themes = [
    {
      name: "white",
      bg: "#ffffff",
      text: "#000000",
      link: "inherit",
      linkHoverText: "#ffffff",
      linkHoverBg: "#000000",
      selectionBg: "#000000",
      selectionText: "#ffffff"
    },
    {
      name: "black",
      bg: "#000000",
      text: "#ffffff",
      link: "#cccccc",
      linkHoverText: "#000000",
      linkHoverBg: "#ffffff",
      selectionBg: "#ffffff",
      selectionText: "#000000"
    },
    {
      name: "deep-orange",
      bg: "#5C2B00",
      text: "#FFFFFF",
      link: "#FFD580",
      linkHoverText: "#5C2B00",
      linkHoverBg: "#FFD580",
      selectionBg: "#FFD580",
      selectionText: "#5C2B00"
    },
    {
      name: "deep-red",
      bg: "#4B0000",
      text: "#FFFFFF",
      link: "#FF6B6B",
      linkHoverText: "#4B0000",
      linkHoverBg: "#FF6B6B",
      selectionBg: "#FF6B6B",
      selectionText: "#4B0000"
    },
    {
      name: "deep-purple",
      bg: "#3D007A",
      text: "#FFFFFF",
      link: "#B399FF",
      linkHoverText: "#3D007A",
      linkHoverBg: "#B399FF",
      selectionBg: "#B399FF",
      selectionText: "#3D007A"
    },
    {
      name: "deep-green",
      bg: "#004B2D",
      text: "#FFFFFF",
      link: "#80FFB3",
      linkHoverText: "#004B2D",
      linkHoverBg: "#80FFB3",
      selectionBg: "#80FFB3",
      selectionText: "#004B2D"
    },
    {
      name: "deep-blue",
      bg: "#00294B",
      text: "#FFFFFF",
      link: "#80B3FF",
      linkHoverText: "#00294B",
      linkHoverBg: "#80B3FF",
      selectionBg: "#80B3FF",
      selectionText: "#00294B"
    }
  ];

  function applyTheme(theme) {
    document.body.style.setProperty('--bg-color', theme.bg);
    document.body.style.setProperty('--text-color', theme.text);
    document.body.style.setProperty('--link-color', theme.link);
    document.body.style.setProperty('--link-hover-text', theme.linkHoverText);
    document.body.style.setProperty('--link-hover-bg', theme.linkHoverBg);
    document.body.style.setProperty('--selection-bg', theme.selectionBg);
    document.body.style.setProperty('--selection-text', theme.selectionText);
  }

  // Pick a random theme on page load
  const randomTheme = themes[Math.floor(Math.random() * themes.length)];
  applyTheme(randomTheme);
</script>
