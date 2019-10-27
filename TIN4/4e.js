function findLongest(text) {
   var arr = text.split(' ');
   var lng = " ";

   for(var i=0; i < arr.length ; i++) {
       if (arr[i].length > lng.length) {
            lng = arr[i];
       }  
   }
   return lng;
}
 var longest = findLongest("Hello how are you.");
 console.log(longest);


