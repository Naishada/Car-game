class Form{
    constructor(){
        this.input = createInput("Name");
        this.button =  createButton("Play");
        this.greeting = createElement("h2")
    }

    display(){
        //heading - h1,h2,h3 
        var title = createElement("h1");
        title.html("Car race");
        title.position(100,0);

        this.input.position(400,0);
        
        this.button.position(400,30);
        //'this' should refer to form inside the function .. arrow function .. ()=>{//code}
        // arrow function changes binding of 'this'
        this.button.mousePressed(()=>{
            player.name = this.input.value();
            this.input.hide();
            this.button.hide();
            this.greeting.html("Welcome " + player.name);
            playerCount = playerCount+1;
            player.index = playerCount;
            player.updateCount(playerCount);
            player.update();
        })
    }
};