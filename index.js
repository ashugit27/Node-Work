const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the root route");
} );

app.get("/speak/:animal", (req,res) => {
    var sounds = {
        pig: "Oink",
        dog: "Woof Woof",
        cat: "Meow",
        cow: "Moo"

    };
    var animal  = req.params.animal.toLowerCase();
    var sound = sounds[animal];

    res.send("The " + animal + " says " + sound);
    // if (animal == "pig") {
    //     res.send("The " + animal + " says oink");
    // }
    // else if (animal == "cow"){
    //     res.send("The " + animal + " says Moo!");
    // }
    // else if (animal == "dog"){
    //     res.send("The " + animal + " says Woof Woof!");
    // }
    // else{
    //     res.send("Animal not responding");
    // }
    
});

app.get("/repeat/:word/:count" , (req,res) => {
    var word = req.params.word
    var count = parseInt(req.params.count)
    console.log(typeof(count));
    console.log(req.params.count);
    var result = " ";
    
    // for (var  i = 0 ; i < count ; i++ ){
    //     res.send(word); RES.SEND won't send multiple data back
    // }
    // res.send('Testing');
    for(var times = 0 ; times < count ; times ++){
        result+=word + " ";
    }
    res.send(result);
});

app.get("*", (req , res) => {
    res.send("The page does not exist");
});


app.listen(3000, function(){

    console.log('Server is started');
});