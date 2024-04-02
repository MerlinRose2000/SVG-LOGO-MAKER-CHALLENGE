const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');
const fs = require('fs');
async function promptForText() {
  try {
    const userInput = await inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'TEXT: Enter up to three (3) Characters:',
          validate: function (input) {
            if (input.length > 3) {
              return 'Please enter up to three (3) characters.';
            }
            return true;
          },
        },
        {
          type: 'input',
          name: 'textColour',
          message: 'TEXT COLOUR: Enter a colour keyword (OR a hexadecimal number):',
          validate: function (colourInput) {
            if (
              !/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^(\b(black|white|red|orange|yellow|green|blue|indigo|violet)\b)$/.test(
                colourInput
              )
            ) {
              return 'Please enter a valid colour keyword or hexadecimal number.';
            }
            return true;
          },
        },
        {
          type: 'input',
          name: 'shapeColour',
          message: 'SHAPE COLOUR: Enter a colour keyword (OR a hexadecimal number):',
          validate: function (colourInput) {
            if (
              !/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^(\b(black|white|red|orange|yellow|green|blue|indigo|violet)\b)$/.test(
                colourInput
              )
            ) {
              return 'Please enter a valid colour keyword or hexadecimal number.';
            }
            return true;
          },
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Which Shape you would like?',
          choices: ['Circle', 'Triangle', 'Square'],
        },
      ])
      .then((answers) => {
        let shape;

        if (answers.shape === 'Circle') {
          shape = new Circle();
          shape.setShapeColour(answers.shapeColour);
          shape.setTextColour(answers.textColour);
          shape.setText(answers.text);
        } else if (answers.shape === 'Square') {
          shape = new Square();
          shape.setShapeColour(answers.shapeColour);
          shape.setTextColour(answers.textColour);
          shape.setText(answers.text);
        } else if (answers.shape === 'Triangle') {
          shape = new Triangle();
          shape.setShapeColour(answers.shapeColour);
          shape.setTextColour(answers.textColour);
          shape.setText(answers.text);
        } 

        fs.writeFile('output/logo.svg', shape.generateSVG(), (err) => {
          if (err) {
            console.log('error');
            res.status(500).json({ error: 'Server error' }); //same as line 17
            return;
          }

          console.log('Logo Creation was Successful');
        });
      });
  } catch (error) {
    console.error(error);
  }
}
promptForText();
