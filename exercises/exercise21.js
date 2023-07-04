  // https://www.codewars.com/kata/59f70440bee845599c000085
  // Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. ex> The scores for each grade is: A: 30 points / B: 20 points / C: 10 points / D: 5 points / Everything else: 0 points. If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. 
  // After all the calculations, the total score should be capped at 200 points. Returns the name of the hacked name as an array when scoring with this rule.
  
  let array = [
    ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
    ["name2", 110, ["B", "A", "A", "A"]],
    ["name3", 200, ["B", "A", "A", "C"]],
    ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]]
  ];

  function hacked (){
    let arrhacked = [];
    let score =[]
    let suma = 0
    
    for (let i= 0; i<array.length;i++){
      for (let j=0; j<array[i][2].length; j++){
        suma =0
        score = array[i][2].map((grade)=>{
            switch(grade){
              case "A":
                suma += 30;
              break;
              case "B":
                suma += 20;
              break;
              case "C":
                suma += 10;
              break;
              case "D":
                suma += 5;
              break;
              default:
                suma += 0;
            }
        })
      }
      
      if(array[i][2].filter((grade)=>{
        return grade ==="A"||grade ==="B"}).length >= 5){
          suma += 20;
      }  
        
      if (suma != array[i][1] && array[i][1] > 200 || array[i][1] > suma) {
        arrhacked.push(array[i][0])
      }
    }
    return arrhacked
    
  }

  console.log(hacked(array))