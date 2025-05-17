function predict() {
    const coin = document.getElementById("coinSelect").value;
    const result = document.getElementById("result");
    const predictions = {
        "Bitcoin": "Verwacht: stijging 📈",
        "Ethereum": "Verwacht: daling 📉"
    };
    result.textContent = predictions[coin] || "Geen voorspelling beschikbaar";
}
