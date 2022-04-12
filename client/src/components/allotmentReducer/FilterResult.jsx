

export default function  filterResultItems(studentData, colleges){

    let arr = [...studentData]
    
    
    let result = new Array(arr.length).fill(0)
    let arrIndex = [];
    for(let i =0; i < arr.length; i++) arrIndex.push(i)
    
    for(let i = 0 ; i < arr.length-1; i++){
        for(let j = i ; j < arr.length; j++){
            if(arr[i].rank > arr[j].rank) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                [arrIndex[i], arrIndex[j]] = [arrIndex[j], arrIndex[i]];
            }
        }
    }
    console.log(arr);
    console.log(arrIndex)
    
    
    for(let j = 0; j < arr.length; j++){
      let user = arr[j];
      let flag = false;
      let pref1 = user.preference1;
      let pref2 = user.preference2;
      let pref3 = user.preference3;
    
      for(let i = 0 ; i < colleges.length && flag === false; i++){
          if(colleges[i].name === pref1){
            if(colleges[i].noOfSeats > 0){
                let studentAllotData = {
                    name: user.name,
                    rank: user.rank,
                    allotedCollege: pref1
                };
                result[arrIndex[j]] = studentAllotData;
                colleges[i].noOfSeats = colleges[i].noOfSeats -1;
                flag = true;
            }
            break;
          }
      }
    
    
    
      for(let i = 0 ; i < colleges.length && flag === false; i++){
        if(colleges[i].name === pref2){
            if(colleges[i].noOfSeats > 0){
                let studentAllotData = {
                    name: user.name,
                    rank: user.rank,
                    allotedCollege: pref2
                };
                result[arrIndex[j]] = studentAllotData;
                colleges[i].noOfSeats = colleges[i].noOfSeats -1;
                flag = true;
            }
            break;
        }
    }
    for(let i = 0 ; i < colleges.length && flag === false; i++){
        if(colleges[i].name === pref3){
            if(colleges[i].noOfSeats > 0){
                let studentAllotData = {
                    name: user.name,
                    rank: user.rank,
                    allotedCollege: pref3
                };
                result[arrIndex[j]] = studentAllotData;
                colleges[i].noOfSeats = colleges[i].noOfSeats -1;
                flag = true;
            }
            break;
        }
    }
    
    if(!flag){
        let studentAllotData = {
            name: user.name,
            rank: user.rank,
            allotedCollege: "not alloted"
        };;
        result[arrIndex[j]] = studentAllotData;
    }
    
    
    }
    
    console.log("result", result)
    return result;
    }