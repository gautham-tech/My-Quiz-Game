class Question{
    constructor(){
        this.button = createButton('Submit');
        this.input = createInput('Enter your name');
        this.input2 = createInput('Enter question number');
        this.title = createElement('h1');
        this.question = createElement('p');
        this.option1 = createElement('p');
        this.option2 = createElement('p');
        this.option3 = createElement('p');
        this.option4 = createElement('p');
    }
    hide(){
        this.input.hide();
        this.input2.hide();
        this.button.hide();
    }

    display(){
        this.title.html("My Quiz Game")
        this.question.html(" Speaking of rivers, a man calls his dog from the opposite side of the river. The dog crosses the river without getting wet, and without using a bridge or boat. How?");
        this.option1.html("Option 1 : The dog flew across the river");
        this.option2.html("Option 2 : The man went to the dog");
        this.option3.html("Option 3 : The river was frozen");
        this.option4.html("Option 4 : None of these");

        this.title.position(250,10);
        this.question.position(150,80);
        this.option1.position(150,100);
        this.option2.position(150,120);
        this.option3.position(150,140);
        this.option4.position(150,160);
        this.input.position(150,230);
        this.input2.position(350,230);
        this.button.position(340,300);
        
        this.button.mousePressed(()=>{
        contestant.name = this.input.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
        });
    }
}