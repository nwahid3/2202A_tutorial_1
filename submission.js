/**
 * Calculates the average grade after late penalties.
 * @param assignments - array of objects which have an id, grade, and amount of daysLate.
 */
function summarizeGrades(assignments) 
{
  //sum is reassigned later on as sum += grade so it must be declared with let.
  let sum = 0;

  //count and LATE_PENALTY_PER_DAY aren't reassigned and are declared as const.
  const count = assignments.length;

  //The late penalty is 20 percentage points per day, not a percentage of the grade.
  const LATE_PENALTY_PER_DAY = 20;

  //Declared outside the for loop so that it can be used outside/after the loop.
  let assignment;
  
  for (let i = 0; i < count; i++) 
  {
    assignment = assignments[i];

    //grade is reassigned a value inside the if statement and requires let declaration.
    let grade = assignment.grade;

    if (assignment.daysLate > 0) 
    {
      //latePenalty is set once per pass, so it is never reassigned and is a constant.
      const latePenalty = assignment.daysLate * LATE_PENALTY_PER_DAY;

      //The minimum grade allowed is 0.
      grade = grade - latePenalty >= 0 ? grade - latePenalty: 0;
    }
    sum += grade;
  }
  
  //After the loop, assignment holds the value of the last assignment in the list. lastGraded is never reassigned so it is a constant.
  const lastGraded = assignment;
  return { average: sum/count, lastGraded: lastGraded.id };
}

//assignments is only passed into a method, never reassigned so it is a constant.
const assignments = 
[
  { id: "1234", grade: 80, daysLate: 2 },
  { id: "5678", grade: 50, daysLate: 0},
  { id: "9876", grade: 30, daysLate: 2},
];
console.log(summarizeGrades(assignments));

/**
 Task 2
 letterCounter returns the function counter, which takes a word and counts how many times a particular letter appears.
 Capitalization is ignored if the ignoreCapitalization argument is true.

 @param {String} letter   The single letter to count.
 @param {boolean} ignoreCapitalization   If true, "A" is the same as "a".
**/

let letterCounter = function (letter, ignoreCapitalization) 
{

  //letter and ignoreCapitalization can be used within counter through its closure  
    let counter = function(word)
    {
        let target = letter

        if (ignoreCapitalization)
        {
            word = word.toLowerCase()
            target = target.toLowerCase()
        }

        //Splitting on a letter gives one more piece than there are copies of the letter
        //"hello".split("l") returns ["he","","o"]
        return word.split(target).length - 1
    }

    return counter
}
/**
  makeCharacter takes a character name, and returns an object that includes
  name and the functions that modify two skills.
  The skills themselves aren't properties otherwise they would be able to be modified without using a method.

  The character returned from makeCharacter has both skills start at 0.

  @param {String} characterName   The character's name

*/
function makeCharacter(characterName)
{

  //Local variables, not properties, so only levelUp and showSkill access them through closure.
   let farmingSkill = 0
   let fishingSkill = 0

    //Raises the inputted skill by 1, up to a maximum of 10. if statements make sure the skill is farming or fishing.
    let levelUp = function (skill)
    {
        if (skill === "farming" && farmingSkill < 10)
        {
            farmingSkill++
        }
        if (skill === "fishing" && fishingSkill < 10)
        {
            fishingSkill++
        }
    }

    //Returns the level of the inputted skill (only "fishing" or "farming"), otherwise it is undefined.
    let showSkill = function (skill)
    {
        if (skill === "farming")
        {
            return farmingSkill
        }
        if (skill === "fishing")
        {
            return fishingSkill
        }
    }

    return {
      name: characterName,
      levelUp,
      showSkill
    }
}