let text =
  'Hello world, we are going to capture or count how ' +
  'many words exists in this paragraph, for that reason ' +
  "I'm writing another repeated phrase, Hello world. " +
  "That's all in this paragraph. We did it! bye World.";

function normalize(word: string): string {
  // return word.toLocaleLowerCase().replace(",", "").replace(".","").replace('!', '');
  return word.toLocaleLowerCase().replace(/[.!,]/g, '');
}

function wordRepetitions(text: string) {
  // let dict = {};
  let dict: { [key: string]: number } = {};
  let separatedWords = text.split(' ');
  console.log(separatedWords);
  for (let word of separatedWords) {
    if (normalize(word) in dict) {
      ++dict[normalize(word)];
    } else {
      dict[normalize(word)] = 1;
    }
  }
  console.log(dict);
}

wordRepetitions(text);
