class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.reset = createButton('reset')
    this.greeting = createElement('h2');
    this.title2 = createElement('h2')
   
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }
  show(){
    this.title2.show();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2,10);
    
    this.title2.html("YOU WON");
    this.title2.position(displayWidth/2,0);
    this.title2.hide();

    this.input.position(displayWidth/2-40,displayHeight/2-80);
    this.button.position(displayWidth/2+30,displayHeight/2);
    this.reset.position(displayWidth-100,20);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2-70,displayHeight/4);
    });
    this.reset.mousePressed(()=>{
    player.updateCount(0);
    game.update(0);
    })
  }
}