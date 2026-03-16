function isValidPage() {
  const path = window.location.pathname;
  return path.startsWith("/film/") || path.startsWith("/series/");
}

function addButton() {
  if (!isValidPage()) return;

  const button = document.createElement("button");
  button.textContent = "Смотреть";

  button.style.position = "fixed";
  button.style.bottom = "20px";
  button.style.right = "20px";
  button.style.zIndex = "9999";
  button.style.padding = "10px 14px";
  button.style.fontSize = "14px";
  button.style.cursor = "pointer";
  button.style.backgroundColor = "#EB4E00";
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "6px";

  button.onclick = () => {
    const newUrl = window.location.href.replace("kinopoisk.ru", "kinopoisk.cx");
    window.location.href = newUrl;
  };

  document.body.appendChild(button);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", addButton);
} else {
  addButton();
}