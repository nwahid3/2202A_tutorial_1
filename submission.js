function createCharacter(charName, catName = null, initialSkills = [0,0,0]) //default values for skills and catName
{
    function limitSkillLevel(value) //limit skill level to 10 and convert string inputs to numbers.
    {
        let level = Number(value);
        return level > 10 ? 10 : level; //if level is greater than 10, return 10; otherwise, return the level
    }
    //initialSkills is [fishingSkill, miningSkill, farmingSkill]; accounts for string and number inputs
    let characterName = charName;
    let fishingSkill = limitSkillLevel(initialSkills[0]);
    let miningSkill = limitSkillLevel(initialSkills[1]);
    let farmingSkill = limitSkillLevel(initialSkills[2]);

    //increase skill level by 1, but not above 10. typeof verifies that the skill is a number before incrementing
    function levelUp(skill)
    {
        if((typeof this[skill] === "number") && (this[skill] < 10)) 
        {
            this[skill]++;
        }
    }
    //add items to the character's inventory. ...items collects arguments into an array, allowing for multiple items to be added at once.
    function grabItems(...items)
    {
        this.inventory.push(...items); 
    }

    function dropItem(item) //remove the first instance of an item from the character's inventory
    {
        let index = this.inventory.indexOf(item);
        if(index !== -1) // Check if the item exists in the inventory
        {
            this.inventory.splice(index, 1);
        }
    }
    //Create the character object with properties and methods
    let character = {
        characterName,
        fishingSkill,
        miningSkill,
        farmingSkill,
        inventory: [],
        levelUp,
        grabItems,
        dropItem
    };
    //Add catName property if provided. allows "" to still work as a valid cat name.
    if(catName !== null)
    {
        character.catName = catName;
    }

    return character;                   
}

function describeCharacter(character) //describe the character based on their skills and cat ownership
{
    let total = character.fishingSkill + character.miningSkill + character.farmingSkill; //calculate total skill level

    let description = character.characterName; //Start description with character's name

    //Determine the character's skill level based on total skill points
    if (total < 10) {
        description += " is just starting out";
    } else {
        description += " is a skilled adventurer";
    }

    //Add cat ownership information if the character has a cat. if it equals undefined it means the character does not have a cat, so we don't add anything to the description.
    if(character.catName !== undefined)
    {
        description += ` and has a cat ${character.catName}`;
    }

    description += ".";

    console.log(description);

    return description;                 
}
// Example usage
let player = createCharacter("New Player", null)
player.levelUp("farmingSkill")
console.log(player.farmingSkill)
player.grabItems("Apple", "Peach") 
player.dropItem("Peach")
console.log(...player.inventory)
describeCharacter(player)