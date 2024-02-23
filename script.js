function transformInputSame(userInput) {
  userInput = userInput.toLowerCase();
  let transformedInput = "[" + userInput.replace(/^(?!([aeiou]|[jklmnpstw][aeiou]|[jklmnpstw][aeiou]n)\b)/gm, '\'').replace(/\s(?!([aeiou]|[jklmnpstw][aeiou]|[jklmnpstw][aeiou]n)\b)/g, ' \'').replace(/a/g, 'ä').replace(/e/g, 'e̞').replace(/o/g, 'o̞').replace(/np/g, 'mp').replace(/n p/g, 'm p').replace(/n \'p/g, 'm \'p').replace(/nj/g, 'ɲj').replace(/n j/g, 'ɲ j').replace(/n \'j/g, 'ɲ \'j').replace(/nw/g, 'ŋʷw').replace(/n w/g, 'ŋʷ w').replace(/n \'w/g, 'ŋʷ \'w').replace(/nk/g, 'ŋk').replace(/n k/g, 'ŋ k').replace(/n \'k/g, 'ŋ \'k').replace(/kije̞te̞säntäkälu/g, 'kije̞te̞sänˌtäkälu') + "]";
  return transformedInput;
}

function transformInputDifferent(userInput) {
  userInput = userInput.toLowerCase();
  let transformedInput = "[" + userInput.replace(/^(?!([aeiou]|[jklmnpstw][aeiou]|[jklmnpstw][aeiou]n)\b)/gm, '\'').replace(/\s(?!([aeiou]|[jklmnpstw][aeiou]|[jklmnpstw][aeiou]n)\b)/g, ' \'').replace(/a/g, 'ä').replace(/e/g, 'e̞').replace(/o/g, 'o̞').replace(/kije̞te̞säntäkälu/g, 'kije̞te̞sänˌtäkälu') + "]";
  return transformedInput;
}

function transformText() {
    var userInput = document.getElementById("user-input").value;
    var transformedTextSame = transformInputSame(userInput);
    var transformedTextDifferent = transformInputDifferent(userInput)
    document.getElementById("transformed-text-same").textContent = transformedTextSame;
  document.getElementById("transformed-text-different").textContent = transformedTextDifferent;
}

function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}
