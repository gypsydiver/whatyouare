window.onload = pre_loader;

backgrounds = [
"#FAE8DA",
"#C47684",
"#EBD1EC",
"#FFB68C",
"#C7DAC7",
"#E5F8FC",
"#FAFFC7",
"#D7EEFF",
"#CCF1FF",
"#E0D7FF",
"#FFCCE1",
"#D7E2FA",
"#B8D6F2",
"#DDC3E0",
"#EDCCE5",
"#F5D7E2",
"#F7E7DE",
"#C6CEFA"
]

words = ["beautiful", "fierce", "dazzling", "radiant", "to die for", "lovely", "stunning"]

function pre_loader() {
  javascript:document.getElementById('body').style.backgroundColor=randomSelection(backgrounds);
  javascript:document.getElementById('msg').innerText = "You are " + randomSelection(words) + ".";
}

function randomSelection(collection) {
  return collection[Math.floor(Math.random() * collection.length)]
}
