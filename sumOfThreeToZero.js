let arr = [0, 1,-1,10,5,-5,4,-3,-2];

    let triplet = (arr)=> {
        for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0)
                {
                    console.log(arr[i]);                  
                    console.log(arr[j]); 
                    console.log(arr[k]);
                              
                }
            }
        }

   }
    }
    triplet(arr);