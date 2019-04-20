'use strict';
/*
const Welcome = props=>
  <div>
    <h1>Hello, world!<br/>
      It's nice to meet you. My name is Saarya :-)
    </h1>
  </div>
*/
class Card {
  constructor(){
    this.attributes = {
      shape: this.rand(),
      fill: this.rand(),
      color: this.rand(),
      num: this.rand(),
    };
  }
  rand(){
    return Math.floor(Math.random()*1000)%3;
  }
}

class Board {
  constructor(){
    this.cards = [];
    for (let i=0; i<4; i++)
      this.add_row();
    this.score = 0;
  }
  add_row(){
    this.cards.push(new Card(), new Card(), new Card());
  }
  check_set(cards){
    // console.log(cards)
    let get_attrib = attrib=>cards.map(card=>card.attributes[attrib]);
    for (let attrib in cards[0].attributes) {
      let a = get_attrib(attrib);
      // console.log(attrib,a)
      if (a[0]==a[1] && a[0]==a[2] || a[0]!=a[1] && a[0]!=a[2] && a[1]!=a[2])
        continue;
      // console.log('test', a[0]==b[1] && a[0]==a[2])
      return false;
    }
    return true;
  }
  pick_set(cards){
    if (!this.check_set(cards))
      return false;
    this.score++;
    for (let c of cards)
      this.cards.splice(this.cards.indexOf(c), 1);
    return true;
  }
}


var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let b = new Board()
let print = ()=>{
let str = ''
  for (let [i, c] of b.cards.entries()) {
    str += i+'['
    str += c.attributes.shape
    str += c.attributes.fill;
    str += c.attributes.num;
    str += c.attributes.color;
    str += '] '
    if (!((i+1)%3))
    {
      console.log(str)
      str = '';
    }
  }
}



let _card = str=>({attributes: {shape: str.split('')[0], fill: str.split('')[1],
  color: str.split('')[2], num: str.split('')[3]}});


let test = arr=>{
  let res = b.check_set(arr.map(_card))
  console.log(res ? 'great job' : ':-(')
}
test(['0000','0000','0000'])
test(['0001','0002','0000'])
test(['0001','0000','0000'])

/*
print()
rl.on('line', function (choose) {
  if (choose=='add'){
    b.add_row()
    print()
    return;
  }
  choose = choose.split(',')
  let res = b.pick_set(choose.map(i=>b.cards[i]))
  console.log(res ? 'great job' : ':-(')
  console.log('socre: '+b.score)
  print()
});
*/

/*
const domContainer = document.querySelector('#react_root');
ReactDOM.render(<Welcome/>, domContainer);
*/