const inquirer = require("inquirer");
const fs = require('fs');
const fileName = './examples/logo.svg'
const { Triangle, Circle, Square } = require("./lib/shapes")


const questions = [
    {
        type: "input",
        message: "Please enter 3 charcters for a name",
        name: "name",
        validate: function(input) {
            if (input.length > 3) {
                return "Please enter a name with 3 characters or fewer.";
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Please enter text color",
        name: "textColor"
    },
    {
        type: "list",
        message: "Please Enter the shape you'd like",
        name: "shape",
        choices: [
            { name: 'Triangle', value: 'Triangle' },
            { name: 'Circle', value: 'Circle' },
            { name: 'Square', value: 'Square' }
        ],
    },
    {
        type: "input",
        message: "Please enter shape color",
        name: "shapeColor",
    },

];

function createLogo(data) {
    const {name, textColor, shape, shapeColor} = data;

    let svg; 
    
    switch (shape) {
        case `Triangle`:
            svg = new Triangle(name, textColor, shapeColor);
            break;
        case `Circle`:
            svg = new Circle(name, textColor, shapeColor);
            break;
        case `Square`: 
            svg = new Square(name, textColor, shapeColor);
            break;
            default: 
            throw new Error(`Invalid shape input`);
    }

    if (svg instanceof Triangle || svg instanceof Circle || svg instanceof Square) {
        return `<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='300' height='200'>
                ${svg.render()}
                </svg>`;
    } else {
        throw new Error('Invalid shape instance');
    }
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log('error')
        } else {
            console.log('success')

        }
    })
}

function init() {
    inquirer.prompt(questions)
    .then((response) => {
        try {
            const page = createLogo(response);
            writeToFile(fileName, page);
            console.log("Generated logo.svg");
        } catch (error) {
            console.error('Error creating logo:', error);
        }
    });
}


init();