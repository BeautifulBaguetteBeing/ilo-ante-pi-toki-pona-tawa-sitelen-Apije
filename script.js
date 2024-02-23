function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function transformInputSame(userInput) {
  userInput = userInput.toLowerCase();

  let transformedInput = "[" + userInput.replace(/^(?!([aeiou]|[jklmnpstw][aeiou]|[jklmnpstw][aeiou]n)\b)/gm, '\'').replace(/\s(?!([aeiou]|[jklmnpstw][aeiou]|[jklmnpstw][aeiou]n)\b)/gm, ' \'').replace(/kijetesantakalu/g, 'kijetesanˌtakalu').replace(/a/g, 'ä').replace(/e/g, 'e̞').replace(/o/g, 'o̞');

  if (document.getElementById("chkReplaceAN").checked) {
    transformedInput = transformedInput.replace(/än/g, 'ä̃:');
    sleep(10)
  }

  if (document.getElementById("chkReplaceEN").checked) {
    transformedInput = transformedInput.replace(/e̞n/g, 'ẽ̞:');
    sleep(10)
  }

  if (document.getElementById("chkReplaceIN").checked) {
    transformedInput = transformedInput.replace(/in/g, 'ĩ:');
    sleep(10)
  }

  if (document.getElementById("chkReplaceON").checked) {
    transformedInput = transformedInput.replace(/o̞n/g, 'õ̞:');
    sleep(10)
  }

  if (document.getElementById("chkReplaceUN").checked) {
    transformedInput = transformedInput.replace(/un/g, 'ũ:');
    sleep(10)
  }

  if (document.getElementById("chkReplaceAN2").checked) {
    transformedInput = transformedInput.replace(/än/g, 'ä̃n');
    sleep(10)
  }

  if (document.getElementById("chkReplaceEN2").checked) {
    transformedInput = transformedInput.replace(/e̞n/g, 'ẽ̞n');
    sleep(10)
  }

  if (document.getElementById("chkReplaceIN2").checked) {
    transformedInput = transformedInput.replace(/in/g, 'ĩn');
    sleep(10)
  }

  if (document.getElementById("chkReplaceON2").checked) {
    transformedInput = transformedInput.replace(/o̞n/g, 'õ̞n');
    sleep(10)
  }

  if (document.getElementById("chkReplaceUN2").checked) {
    transformedInput = transformedInput.replace(/un/g, 'ũn');
    sleep(10)
  }
  
  if (document.getElementById("chkReplaceNP").checked) {
    transformedInput = transformedInput.replace(/np/g, 'mp').replace(/n \'p/g, 'm \'p');
    sleep(10)
  }

  if (document.getElementById("chkReplaceNJ").checked) {
    transformedInput = transformedInput.replace(/nj/g, 'ɲj').replace(/n \'j/g, 'ɲ \'j');
    sleep(10)
  }

  if (document.getElementById("chkReplaceNW").checked) {
    transformedInput = transformedInput.replace(/nw/g, 'ŋʷw').replace(/n \'w/g, 'ŋʷ \'w');
    sleep(10)
  }

  if (document.getElementById("chkReplaceNK").checked) {
    transformedInput = transformedInput.replace(/nk/g, 'ŋk').replace(/n \'k/g, 'ɲ \'k');
    sleep(10)
  }

  if (document.getElementById("chkReplaceNW2").checked) {
    transformedInput = transformedInput.replace(/nw/g, 'nʷw').replace(/n \'w/g, 'nʷ \'w');
    sleep(10)
  }
  
  transformedInput += "]";
  return transformedInput;
}


function transformText() {
  var userInput = document.getElementById("user-input").value;
  var transformedTextSame = transformInputSame(userInput)
  document.getElementById("transformed-text").textContent = transformedTextSame;
}
