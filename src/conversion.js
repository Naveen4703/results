const fs = require('fs');


// Read the JSON file
fs.readFile('src/jsonFiles/4-1r19.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Parse the data as JSON
  let jsonData;
  try {
    jsonData = JSON.parse(data);
  } catch (err) {
    console.error('Error parsing the JSON data:', err);
    return;
  }

  // Create an empty object to store the structured data
  const structuredData = {};

  // Iterate over each object in the parsed JSON data
  for (const obj of jsonData) {
    const rollNumber = obj.Htno;

    // Check if the roll number already exists as a key in the structured data object
    if (structuredData.hasOwnProperty(rollNumber)) {
      // If the roll number exists, push the subject object to the array under that roll number
      structuredData[rollNumber].push({
        Subcode: obj.Subcode,
        Subname: obj.Subname,
        Internals: obj.Internals,
        Grade: obj.Grade,
        Credits: obj.Credits,
      });
    } else {
      // If the roll number doesn't exist, create a new array with the subject object and assign it to the roll number key
      structuredData[rollNumber] = [{
        Subcode: obj.Subcode,
        Subname: obj.Subname,
        Internals: obj.Internals,
        Grade: obj.Grade,
        Credits: obj.Credits,
      }];
    }
  }

  // The structured data is now stored in the 'structuredData' object
 
  const jsonsData = JSON.stringify(structuredData, null, 2);

// Write JSON data to a file
fs.writeFile('src/jsonFiles/structured-4-1-r19.json', jsonsData, 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('JSON data has been written to the file.');
});


/*
// Write the JSON data to a text file
fs.writeFile('src/textFiles/test.txt', jsonsData, 'utf8', (err) => {
  if (err) {
    console.error('Error writing the file:', err);
    return;
  }

  console.log('The structured data has been written to test.txt');
});   */
});

