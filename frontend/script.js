function toggleChat() {
  const box = document.getElementById("chatBox");
  box.classList.toggle("active");

  if (box.classList.contains("active")) {
    document.getElementById("userText").focus();
  }
}

async function sendMessage() {
  const textInput = document.getElementById("userText");
  const responseBox = document.getElementById("chatResponse");
  const query = textInput.value.trim();

  if (!query) return;

  responseBox.classList.remove("hidden");
  responseBox.innerHTML += `<div style="color:#666;font-size:0.9rem;">AI is thinking...</div>`;

  try {
    const response = await fetch("http://127.0.0.1:8000/api/explain", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: query })
    });

    if (!response.ok) throw new Error("Backend Error");

    const data = await response.json();

    // Remove the last "AI is thinking..." message
    const thinkingNodes = responseBox.querySelectorAll("div");
    if (thinkingNodes.length) {
      thinkingNodes[thinkingNodes.length - 1].remove();
    }

    responseBox.innerHTML += `
      <div style="margin-bottom:12px;">
        <div style="font-weight:700;color:red;font-size:0.8rem;">AI EXPLANATION</div>
        <div>${data.explanation.replace(/\n/g, "<br>")}</div>
        <hr style="margin:10px 0; border: none; border-top: 1px solid #ddd;">
      </div>
    `;

    // Keep textarea content (do NOT clear)
    // textInput.value = "";

    // Auto scroll to latest explanation
    responseBox.scrollTop = responseBox.scrollHeight;

  } catch (error) {
    responseBox.innerHTML += `<b style="color:red;">Backend not reachable</b>`;
    console.error("Fetch error:", error);
  }
}

document.addEventListener('keydown', (e) => {
  const textInput = document.getElementById("userText");
  if (e.key === "Enter" && !e.shiftKey && document.activeElement === textInput) {
    e.preventDefault();
    sendMessage();
  }
});
