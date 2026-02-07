function toggleChat() {
    const box = document.getElementById("chatBox");
    // This allows it to open on the very first click
    if (box.style.display === "none" || box.style.display === "") {
        box.style.display = "flex";
        document.getElementById("userText").focus();
    } else {
        box.style.display = "none";
    }
}

function sendMessage() {
    const textInput = document.getElementById("userText");
    const text = textInput.value.trim();
    const responseBox = document.getElementById("chatResponse");

    if (!text) return;

    responseBox.classList.remove("hidden");
    responseBox.innerHTML = '<em>AI is thinking...</em>';

    setTimeout(() => {
        responseBox.innerHTML = `
            <strong>AI Simplification:</strong><br><br>
            This article from the Constitution of Nepal ensures that all citizens are protected equally. 
            It is a fundamental pillar of our democracy designed to safeguard your freedom.
        `;
        textInput.value = ""; 
    }, 1200);
}