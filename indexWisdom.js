// Teitei Wisdom Assignment: Explaining Basic Methods Associated with Arrays

// Initial months array with a mix of numbers and strings
const months = [
    1, 'January',
    2, 'February',
    3, 'March',
    4, 'April',
    5, 'May',
    6, 'June',
    7, 'July',
    8, 'August',
    9, 'September',
    10, 'October',
    11, 'November'
  ];
  
  // ---------------------------------- Adding value to the end of an array ----------------------------------
  
  // Add December at the end
  months.push(12, 'December');
  
  // ----------------------------------  Removing the last value from the array ----------------------------------
  
  // Remove the last added value (e.g., December)
  months.pop(); // Removes 'December'
  months.pop(); // Removes 12
  
  // ---------------------------------- Removing value from the beginning  ----------------------------------
  
  // Remove the first two values (1 and 'January')
  months.shift(); // Removes 1
  months.shift(); // Removes 'January'
  
  // ----------------------------------  Adding value at the beginning ----------------------------------
  
  // Add January back at the beginning
  months.unshift(1, 'January');
  
  // ----------------------------------  Inserting values using splice  ----------------------------------
  
  // Example: Insert a correction or a missing value at a specific index
  // Syntax: array.splice(startIndex, numberToDelete, valueToInsert)
  months.splice(1, 0, ' Happy New Year'); // Inserts a  message after '1'
  
  // ----------------------------------   General Console Log to See Result ----------------------------------

    
  console.log(months);

   // ----------------------------------  To know the length of values in an array ----------------------------------

 const arrayLength = months.length
 console.log(arrayLength)

  
  // ---------------------------------- Summary of Array Methods: ----------------------------------

  
  /*
  months.push(value)        // Add value to the end of the array
  months.pop()              // Remove the last value in the array
  months.shift()            // Remove the first value in the array
  months.unshift(value)     // Add value to the beginning of the array
  months.splice(start, deleteCount, value) // Insert value at specific index
  arraylength   // the number of value in months array
  */
  