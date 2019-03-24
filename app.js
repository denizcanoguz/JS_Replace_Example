function funnyReplace(){
  var queryElement = document.getElementById("query");
  const kelime = queryElement.value;
  const yamultulmusKelime = kelime.replace(/[aıoueiöü]/g, "i");
  alert(yamultulmusKelime);
}