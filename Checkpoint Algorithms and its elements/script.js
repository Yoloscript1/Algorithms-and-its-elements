function sentenceStatistics(sentence) {
    let length = 0;
    let words = 0;
    let vowels = 0;
    for (let character of sentence) {
      length++;
      if (character === ' ') {
        words++;
      }
      if ('aeiouAEIOU'.includes(character)) {
        vowels++;
      }
      if (character === '.') {
        break;
      }
    }
    return { length, words, vowels };
  }
