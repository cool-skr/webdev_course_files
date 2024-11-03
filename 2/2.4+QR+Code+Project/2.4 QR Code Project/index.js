import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


//var qr = require('qr-image');
inquirer
  .prompt([{message:"Enter url",name:"URL"}
  ])
  .then((answers) => {
    const url =answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr.png"));
    //console.log(answers);

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
/*
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
