{/* <script> */}
    console.log("hello world");
    {/* </script> */}
    function nextInLine(arr,item){
        arr.push(item);
        return arr.shift();
    }
    var testArr =[1,2,3,4,5];

    console.log("before: "+JSON.stringify(testArr));
    console.log(nextInLine(testArr,6));
    console.log("after: "+JSON.stringify(testArr));
