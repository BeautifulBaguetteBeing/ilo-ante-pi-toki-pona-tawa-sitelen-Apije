function transformInputSame(userInput) {
  userInput = userInput.toLowerCase();

  let transformedInput = "[" + userInput.replace(/^(?!([aeiou]|[jklmnpstw][aeiou]|[jklmnpstw][aeiou]n)\b)/gm, '\'').replace(/\s(?!([aeiou]|[jklmnpstw][aeiou]|[jklmnpstw][aeiou]n)\b)/gm, ' \'').replace(/kijetesantakalu/g, 'kijetesanˌtakalu').replace(/a/g, 'ä').replace(/e/g, 'e̞').replace(/o/g, 'o̞');

  if (document.getElementById("chkReplaceNP").checked) {
    transformedInput = transformedInput.replace(/np/g, 'mp').replace(/n \'p/g, 'm \'p');
  }

  if (document.getElementById("chkReplaceNJ").checked) {
    transformedInput = transformedInput.replace(/nj/g, 'ɲj').replace(/n \'j/g, 'ɲ \'j');
  }

  if (document.getElementById("chkReplaceNW").checked) {
    transformedInput = transformedInput.replace(/nw/g, 'ŋʷw').replace(/n \'w/g, 'ŋʷ \'w');
  }

  if (document.getElementById("chkReplaceNK").checked) {
    transformedInput = transformedInput.replace(/nk/g, 'ŋk').replace(/n \'k/g, 'ɲ \'k');
  }

  if (document.getElementById("chkReplaceNW2").checked) {
    transformedInput = transformedInput.replace(/nw/g, 'nʷw').replace(/n \'w/g, 'nʷ \'w');
  }

  if (document.getElementById("chkReplaceAN").checked) {
    transformedInput = transformedInput.replace(/an/g, 'ä̃:');
  }

  if (document.getElementById("chkReplaceEN").checked) {
    transformedInput = transformedInput.replace(/en/g, 'ẽ̞:');
  }

  if (document.getElementById("chkReplaceIN").checked) {
    transformedInput = transformedInput.replace(/in/g, 'ĩ:');
  }

  if (document.getElementById("chkReplaceON").checked) {
    transformedInput = transformedInput.replace(/on/g, 'õ̞:');
  }

  if (document.getElementById("chkReplaceUN").checked) {
    transformedInput = transformedInput.replace(/un/g, 'ũ:');
  }

  if (document.getElementById("chkReplaceAN2").checked) {
    transformedInput = transformedInput.replace(/an/g, 'ä̃n');
  }

  if (document.getElementById("chkReplaceEN2").checked) {
    transformedInput = transformedInput.replace(/en/g, 'ẽ̞n');
  }

  if (document.getElementById("chkReplaceIN2").checked) {
    transformedInput = transformedInput.replace(/in/g, 'ĩn');
  }

  if (document.getElementById("chkReplaceON2").checked) {
    transformedInput = transformedInput.replace(/on/g, 'õ̞n');
  }

  if (document.getElementById("chkReplaceUN2").checked) {
    transformedInput = transformedInput.replace(/un/g, 'ũn');
  }
  transformedInput += "]";
  return transformedInput;
}


function transformText() {
  var userInput = document.getElementById("user-input").value;
  var transformedTextSame = transformInputSame(userInput)
  document.getElementById("transformed-text").textContent = transformedTextSame;
}
