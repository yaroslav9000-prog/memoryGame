const colorsArray = ['green', 'blue', 'red', 'yellow', 'brown', 'beige', 'orange', 'navy', 'purple', 'chocolate']; 


       const createNumber = ()=>{
            return Math.floor(Math.random()* 20 + 1);
        
       } 
       const createArray = () =>{
        // array of numbers from 1 to 20;    
        const numArray = [];
        // array of numbers in random order, that dont repeat themselfs.    
        const squareIDS = [];
        // array of square pairs 
        const finalArray = [];
        // Here we create array of number from 1 to 20.    
        for(let index = 1; index < 21; index++){
                numArray.push(index);
            }
            //This loop checks if newly created number is present in array of 1 to 20.
            //If not he is not added, If existant he is added to random number array and removed from ordered one.
        while(numArray.length > 0){
            let randomNumber = createNumber();
            let randomIndex = numArray.indexOf(randomNumber);
                if(randomIndex > -1){
                    numArray.splice(randomIndex, 1);
                    squareIDS.push(randomNumber);
            }
        }
        //In loop below we create pairs of square's ids that will receive the same colors. 
            for(let index =0; index < squareIDS.length; index+= 2){
                finalArray.push([squareIDS[index], squareIDS[index + 1]]);
            }
            return finalArray;
       }
       
       const assignColor= ()=>{
            const numberArray = createArray();
            for(let index = 0; index < colorsArray.length; index++){
                document.getElementById('pic' + numberArray[index][0]).classList.add( colorsArray[index]);
                document.getElementById('pic'+ numberArray[index][1]).classList.add(colorsArray[index]);
                // document.getElementById('pic' + numberArray[index][0]).style.backgroundColor = colorsArray[index];
                // document.getElementById('pic'+ numberArray[index][1]).style.backgroundColor = colorsArray[index];
            }
        }

        const hideSquareColors= ()=>{
            document.querySelectorAll('.pic').forEach(item=> item.style.backgroundColor = "black");
        }
        // hideSquareColors();
        
        
        let pairSquares = [];
        let score;
        const showSquare = (idNumber) =>{
           document.getElementById(`pic${idNumber}`).style.backgroundColor = document.getElementById('pic'+ idNumber).classList[1];
           pairSquares.push(idNumber);
           checkDup();  
        }
        //Async function  const waitForSecondClick = () =>{

        // }
        const checkDup = ()=>{
            let firstSquare;
            let secondSquare;
            console.log(pairSquares);
            if(pairSquares.length == 2){
                firstSquare = document.getElementById('pic'+ pairSquares[0]);
                secondSquare = document.getElementById('pic'+ pairSquares[1]);
                if(firstSquare.classList[1] == secondSquare.classList[1] && firstSquare !== secondSquare){
                setTimeout(()=>{
                    score++;
                    firstSquare.style.opacity = 0.5;
                    secondSquare.style.opacity = 0.5;
                    pairSquares = [];
                }, 500)
                    
                }else{
                    setTimeout(()=>{
                        firstSquare.style.backgroundColor = "black";
                        secondSquare.style.backgroundColor = "black";
                        pairSquares = [];
                    }, 500)
                }
                          
            }
            console.log(score);
        }
        const theGame = ()=>{
            const buttonList = document.querySelectorAll('.pic');
            for(let index = 0; index < buttonList.length; index++){
                buttonList[index].removeAttribute('disabled');
            }
            score = 0;
            assignColor();
            hideSquareColors();            
        }

