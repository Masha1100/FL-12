let request = confirm('Do you want to play a game?');
if(request === true) {
  let question = 'Choose a roulette pocket number from 0 to 8',
  attempt = 3,
  prize = 100,
  total_prize = 0,
  max = 8,
  start_num = Math.ceil(0),
  end_num = Math.floor(max),
  game_num = Math.floor(Math.random() * (end_num - start_num + 1)) + start_num,
  left = 'Attempts left:',
  current = 'Possible prize on current attempt:';
  let game = prompt(question + '<br>' + left+attempt + '<br>Total prize:' + total_prize + '$<br>' + current+prize);
    game;
    if(game === game_num){
      total_prize +=prize;
    }
}else{
  alert('You did not become a billionaire, but can.')
}