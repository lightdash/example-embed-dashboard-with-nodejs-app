document.addEventListener("DOMContentLoaded", () => {
  // 🧑‍💻 Task 1 - Setup button click handler
  document
    .getElementById("generateBtn")
    .addEventListener("click", generateEmbedUrl);
});

async function generateEmbedUrl() {
  // 🧑‍💻 Task 2 - Generate token and add to iframe
  const response = await fetch("/generate-token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  const iframe = document.createElement("iframe");

  // 🧑‍💻 Task 3 - Add url to iframe
  iframe.src = data.url;

  iframe.style.border = "none";
  document.getElementById("iframeContainer").innerHTML = "";
  document.getElementById("iframeContainer").appendChild(iframe);
}
