window.onload = load;
window.onclick = load;

backgrounds = ["#FAE8DA", "#C47684", "#EBD1EC", "#FFB68C", "#C7DAC7", "#E5F8FC", "#FAFFC7", "#D7EEFF", "#CCF1FF", "#E0D7FF", "#FFCCE1", "#D7E2FA", "#B8D6F2", "#DDC3E0", "#EDCCE5", "#F5D7E2", "#F7E7DE", "#C6CEFA"]

words = ["beautiful", "fierce", "dazzling", "radiant", "to die for", "lovely", "stunning", "magic", "exquisite", "splendid", "like coming home", "extraordinary", "formidable", "brave", "glorious", "intoxicating", "spectacular", "inspiring", "stellar", "daring", "mesmerizing", "brilliant", "furiously funny", "witty", "heart melting", "delightful", "hilarious", "astute", "sensitive", "courageous", "quirky", "audacious", "searing", "bulletproof", "resourceful", "blissful", "bright", "amazing", "lovable", "special", "strong", "worth fighting for", "fascinating", "smart", "insightful", "fearless", "powerful", "capable", "meaningful", "enough", "compassionate", "wonderful", "fascinating"]

function load() {
  javascript:document.getElementById('body').style.backgroundColor=randomSelection(backgrounds);
  javascript:document.getElementById('msg').innerText = "You are " + randomSelection(words) + ".";
}

function randomSelection(collection) {
  return collection[Math.floor(Math.random() * collection.length)]
}
