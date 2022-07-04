/*This is the original code
(function(){
    const getRepeated = (array1, array2) => {
        const dict = {}
        //console.log(dict);
        for (let index = 0; index < array1.length; index++) {
            const element = array1[index];
            //console.log(element);
            if (dict[element]) {
                //console.log(dict[element]);
                //console.log(dict);
                dict[element]++
                //console.log(dict[element]);
            } else {
                dict[element] = 1
                //console.log(dict[element]);
            }
            //console.log(dict);
        }
        //console.log(dict);

        for (let index = 0; index < array2.length; index++) {
            const element = array2[index];
            if (dict[element]) {
                dict[element]++
            } else {
                dict[element] = 1
            }
        }
        return dict
    }

    console.log(getRepeated(['a','b','c'], ['c','d','e']));
    console.log(getRepeated(['a','b'], ['c','d']))

})()*/

//Here you can see how the code was modified to remove the repeated section of it

(function(){
    const getRepeated = (array1, array2) => {
        const dict = {}
        //console.log(dict);
        const checkRepeated = (array) => {
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                //console.log(element);
                if (dict[element]) {
                    //console.log(dict[element]);
                    //console.log(dict);
                    dict[element]++
                    //console.log(dict[element]);
                } else {
                    dict[element] = 1
                    //console.log(dict[element]);
                }
            }
        }
        checkRepeated(array1);
        checkRepeated(array2);

        return dict
    }

    console.log(getRepeated(['a','b','c'], ['c','d','e']));
    console.log(getRepeated(['a','b'], ['c','d']))

})()