/*
this code calls on the external json file called nubers.json then goes through the data and outputs it on the html file in the div id called test repacing its current data. 

Remember that json data must be parsed before being used
remember that to cycle / iterate throug data you must create a variable to store the data in.

*/


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(xhttp.responseText);
      var numbers2018 = response.numbers2018;

      // this outputs the data in the json file in a ul li to the dom
      var output = '';
      for(var i = 0;i < numbers2018.length;i++){
        output += '<li>'+numbers2018[i].dates+' : '+numbers2018[i].numbers+ '</li>';
      }
      document.getElementById('test').innerHTML = output; // prints to dom the list of dates and numbers from the json file




      // output all the winning numbers in to a new array then sort them.
      var allWinningNumbers = [];
      for(var i = 0; i< numbers2018.length; i++){
        allWinningNumbers = allWinningNumbers.concat(numbers2018[i].numbers); // using concat() method get the numbers2018[i].numbers to add the numbers to the allWinningNumbers array // unsorted
        allWinningNumbers.sort(function(a, b){return a - b}); // sorting the new array values
      }
      console.log(allWinningNumbers); // console logs out newly created array
      console.log('these are the winning numbers : '  + allWinningNumbers); // console logs list of array entries
      document.getElementById('allWinningNumbers').innerHTML = allWinningNumbers; // prints to dom the array entries



      // console log frequency of all numbers as an object
      var recurrenceCount = allWinningNumbers.reduce(function (number, recurrence) { // set new variable to allWinningNumbers.reduce function checks number and recurrence times
        if (typeof number[recurrence] == 'undefined') {
          number[recurrence] = 1;
        } else {
          number[recurrence] += 1;
        }
      
        return number;
      }, {}); // creates the object from the array allWinningNumbers
      console.log(recurrenceCount);




       // convert frequency numbers object to arrays
      var resultArray = Object.keys(recurrenceCount).map(function(key) { // using the Object.keys() method to return an array of a given object's own property names, in the same order as we get with a normal loop and using map() method.
        return [Number(key), recurrenceCount[key]]; // number(key) is the number & recurrenceCount[key] is the times it came out
      });
       console.log(resultArray);   // logs out arrays of pairs number and reccurence



    
      // prints the array itmes as list unsorted
      var output = '';
            for (var property in resultArray) { // results array from above
        output += '<li>' + resultArray[property] + '</li>';
       
      }
      console.log('Prints a list of numbers from the object key values : ' + output);
      document.getElementById('allWinningNumbersFrequency').innerHTML = output;
   



     // sorting the array of numbers
     var sortable = [];
        function sortAssocObject(recurrenceCount) {
       sortable = [];
      for (var key in recurrenceCount) {
          sortable.push([key, recurrenceCount[key]]);
      }
  
      sortable.sort(function(a, b) {
          return (a[1] < b[1] ? -1 : (a[1] > b[1] ? 1 : 0));
      });
  
      var orderedList = {};
      for (var i = 0; i < sortable.length; i++) {
          orderedList[sortable[i][0]] = sortable[i][1];
      }
  
      return orderedList;

  }

  sortAssocObject(recurrenceCount);
  console.log(sortable);
  document.getElementById('allWinningNumbersArray').innerHTML = sortable;


  
        // prints the array itmes as list sorted 
        var output2 = '';
        for (var property in sortable) { // results array from above
    output2 += '<li>' + sortable[property] + '</li>';
   
  }
  console.log('Prints a list of numbers from the object key values : ' + output2);
  document.getElementById('allWinningNumbersArraySorted').innerHTML = output2;

    }
   
};
xhttp.open("GET", "json/numbers.json", true);
xhttp.send();











// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       //  // Typical action to be performed when the document is ready:
//       //  document.getElementById("test").innerHTML = xhttp.responseText;
//       //  console.log(xhttp.responseText);
//        var response = JSON.parse(xhttp.responseText);

//        var output = '';
//        for(var i = 0; i < numbers2018.length; i++){
//          output += '<li>' +numbers2018[i].dates+'</li>';
//        }
//        document.getElementById('test').innerHTML = output;
//     }
// };
// xhttp.open("GET", "json/numbers.json", true);
// xhttp.send();


// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       var response = JSON.parse(xhttp.responseText);
//       var people = response.people;

//       var output = '';
//       for(var i = 0;i < people.length;i++){
//         output += '<li>'+people[i].name+'</li>';
//       }
//       document.getElementById('people').innerHTML = output;
//     }
// };
// xhttp.open("GET", "json/people.json", true);
// xhttp.send();

