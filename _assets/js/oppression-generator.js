// Define arrays for each attribute
const attributes = {
    bonus: [
        "with nine kids",
        "on a boat",
        "currently on fire",
        "with honey glaze",
        "from space",
        "with a slice of lime",
        "with no parents",
        "with bear lungs",
        "on the rocks",
        "without any rhythm",
        "who died years ago",
        "in a body cast",
        "who sucks at Tetris",
        "who can’t spell for crap",
        "with no sense of smell",
        "who fell down a well",
        "who eats babies",
        "on stilts",
        "on top of old smoky",
        "on a unicycle",
        "who sucks at harmonies",
        "with large moles",
        "on their death bed",
        "with no spleen",
        "created by mad scientists",
        "built by Jim Henson"
    ],
    disability: [
        "Underdeveloped",
        "Anxious",
        "Bipedal",
        "One-legged",
        "Huge-gummed",
        "Balding",
        "Obese",
        "Deaf",
        "Blind",
        "Hirsute",
        "Headless",
        "Many-fingered",
        "Kneeless",
        "Boneless",
        "Squeaky-breathing",
        "Buck-toothed",
        "Harelipped",
        "Crazy-eyed",
        "Cyclopian",
        "Double amputee",
        "Legally blonde",
        "Papier-mâché",
        "Flea-ridden",
        "Horse-faced",
        "Jawless",
        "Pointy-headed"
    ],
    gender: [
        "cisgendered",
        "bisexual",
        "bipolar",
        "pansexual",
        "trans-Siberian",
        "agender",
        "androgynous",
        "transsexual",
        "demigender",
        "feminine adjacent",
        "gender apathetic",
        "treesexual",
        "gender-neutral",
        "gender-fluid",
        "gender-nonconforming",
        "graygender",
        "hermaphroditic",
        "multigender",
        "omnigender",
        "polygender",
        "math-loving",
        "cat-loving",
        "germophobe",
        "homophobe",
        "stone butch",
        "tri-gender"
    ],
    race: [
        "Pacific Islander",
        "New Jerseyan",
        "white",
        "Hmong",
        "Arab",
        "indigenous",
        "African-American",
        "Armenian",
        "Calvinist",
        "Kyrgyz",
        "Uyghur",
        "Muslim",
        "Christian",
        "Alaskan",
        "Eskimo",
        "elf",
        "Haitian",
        "Quaker",
        "Simpson",
        "troglodyte",
        "Philistine",
        "fishmonger",
        "lunatic",
        "Turk",
        "tater tot",
        "Amazonian"
    ]
};

// Function to select a random item from an array
const getRandomItem = array => array[Math.floor(Math.random() * array.length)];

// Function to generate a random character description
function generateCharacterDescription() {
    const character = {};
    for (const key in attributes) {
        character[key] = getRandomItem(attributes[key]);
    }
    return character;
}

// Function to update HTML elements with character description
function updateCharacterDescription() {
    const character = generateCharacterDescription();
    for (const key in character) {
        document.getElementById(key).innerHTML = character[key];
    }
}

// Call updateCharacterDescription when the page loads
window.onload = updateCharacterDescription;
