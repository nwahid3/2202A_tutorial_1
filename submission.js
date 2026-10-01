//Accepted inputs: null, undefined, any number (including NaN), or a string representing a number.

let even_predicate = function (value)
{
    //if remainder of division of 2 is 0, its an even number. makes sure to not consider null.
    if(value!=null&&Number(value)%2===0)
    {
        return true;
    }
    else
    {
        return false;
    }
};

let odd_predicate = function (value)
{
    //if remainder of division by 2 is 1 or -1 for negative numbers, its an odd number. makes sure to not consider null.
    if(value!=null&&(Number(value)%2===1||Number(value)%2===-1))
    {
        return true;
    }
    else
    {
        return false;
    }
};

//only true if value is undefined.
let undefined_predicate = function (value)
{

    if(value===undefined)
    {
        return true;
    }
    else
    {
        return false;
    }

};

//only true if value is null.
let null_predicate = function (value)
{
    if(value===null)
    {
        return true;
    }
    else
    {
        return false;
    }
};

let check = function (predicate,value)
{
    return predicate(value);
};

let getDictionary = function (lang)
{

    let englishDictionary = function (number)
    {
        //checks each case and returns the corresponding string. If not found, returns default string.
        switch(number)
        {
        case 1:
                return "one";
        case 2:
                return "two";
        case 3:
                return "three"; 
        default:
                return "not included in dictionary";
        }
              
    }

    let frenchDictionary = function (number)
    {
        //checks each case and returns the corresponding string. If not found, returns default string.
        switch(number)
        {
        case 1:
                return "un";
        case 2:
                return "deux";
        case 3:
                return "trois"; 
        default:
                return "not included in dictionary";
        }
              
    }

    //returns the corresponding dictionary based on the input language (ignoring case).
    if(lang.toLowerCase()==="e"||lang.toLowerCase()==="english")
        return englishDictionary;
    if(lang.toLowerCase()==="f"||lang.toLowerCase()==="french")
        return frenchDictionary;
}

//tests the getDictionary function by creating two dictionaries and calling them with different numbers.
let english = getDictionary("English");
let french = getDictionary("f");

console.log(english(2));
console.log(english(3));
console.log(english(4));

console.log(french(1));
console.log(french(3));
console.log(french(6));