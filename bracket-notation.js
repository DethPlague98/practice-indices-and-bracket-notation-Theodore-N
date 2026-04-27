//Task 1
let library =[
    ["Sword and the Stone", "Divergent", "The People of Sparks"],
    ["Die Hard", "Home Alone", "Ready Player One"],
    ["The Chronicles of Narnia", "The Lightning Thief", "Napolean Dynamite"]
];
//Task 2 
console.log(library[0][0],"\n",library[0][1],"\n",library[0][2],"\n",library[1][0],"\n",library[1][1],
   "\n",library[1][2],"\n",library[2][0],"\n",library[2][1],"\n",library[2][2]);//Reworked from below for what the task is asking
/*
    for (let i =0; i < library.length; i++){
        for (let j =0; j < library[i].length; j++){
            console.log(library[i][j]);
        }
    }
        */ 
    
//Task 3
let row = 0;
let item = 0;

console.log(library[row][item],"\n",library[0][item + 1],"\n",library[0][item + 2],"\n",library[row + 1][0],"\n",library[row + 1][item + 1],"\n",library[row + 1][item +2],
    "\n",library[row + 2][0],"\n",library[row + 2][item + 1],"\n",library[row + 2][item + 2]);

//Task 4 (complete)

 for (let i = 1; i < library.length; i++){
    if (i > 1){
        break
    }
        for (let j =0; j < library[i].length; j++){
            console.log(library[i][j]);
        }
    }
        