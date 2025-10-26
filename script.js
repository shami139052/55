// حالت شب
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.createElement("button");
  toggle.textContent = "🌓 حالت شب";
  toggle.onclick = () => document.body.classList.toggle("dark");
  document.body.appendChild(toggle);
});
