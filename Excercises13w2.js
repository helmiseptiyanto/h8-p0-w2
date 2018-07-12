 //X dan O

function xo(str) {
  // you can only write your code here!

    var cariCharacter = "";
    var counter1 = 0;
    var counter2 = 0;


    for(var a = 0; a < str.length; a++)
        {
            //console.log(str.length);

            cariCharacter = cariCharacter + str[a];

            if (cariCharacter[a] === "x")
                {

                    counter1 = counter1 + 1;
                }

            else if (cariCharacter[a] === "o")
                {
                    counter2 = counter2 + 1;
                }
        };


        if (counter1 == counter2)
            {
                return true;
            }
        else
            {
                return false;
            }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
