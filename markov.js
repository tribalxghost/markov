/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/
  
  constructor(text) {
    let newList = {}
    let words = text.split(/[ \r\n]+/);
    this.newList = newList
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */
  
  makeChains() {
    // TODO
  
    for(let i = 0; i < this.words.length; i++){
      this.newList[this.words[i]] = []
      for(let j = 0; j < this.words.length; j++){
        if(this.words[i] === this.words[j]){
          this.newList[this.words[i]].push(this.words[j + 1])
        }  
      }

    }
    return this.newList
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    let txt = ""
    for(key in this.newList){
    console.log(key)
    }
    
  }
}

let m = new MarkovMachine("the cat in the hat")

m.makeChains()

