var fs = require('fs');
// fs.readFile('json.txt', 'utf8', (err, data) => {  
//     if (err) throw err;
//     console.log(data);
// });
let arr =[];

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });

 if(!process.argv[2]){
     console.log('invalid command!')
 }


  if (process.argv[2]==='list'){      
fs.readFile('json.txt', 'utf8', (err, data) => {  
    if (err) throw err;
    arr=data.split('}')  
    console.log("Printing", arr.length-1,"note(s).");
    console.log(data);
});
  }


  var jsonData ={"title":`${process.argv[4]}`,"city":`${process.argv[6]}`};
 
  // parse json
//   var jsonObj = JSON.parse(jsonData);

   
  // stringify JSON Object
 
 
 
  data = JSON.stringify(jsonData);

  if (process.argv[2]==='add'){  
 
    fs.appendFile('json.txt', data, 'utf8', function (err) {
        if (err){ console.log("An error occured while writing JSON Object to File.");}
        console.log('Note created!');
        console.log('title : '+process.argv[4]);
        console.log('Body : '+process.argv[6]);
      });
      }
 

       if((process.argv[2]==='remove')&&(!process.argv[4])){
        console.log("Options:  \n --help Show help \n --title, -t Title of note \n Missing reuired : title"
        )
        }
        
     else if ((process.argv[2]==='remove')&&(process.argv[4]!='')){  
       
    fs.readFile('json.txt', 'utf8', (err, data) => {  
        if (err) throw err; 
        arr=data.split('\n')  
        console.log(arr)
         let newarr =  arr.filter (el =>!(el.includes(process.argv[4])));
         console.log(newarr);
         console.log(process.argv[4]);
         fs.writeFile('json.txt',newarr, 'utf8', function (err) {
            if (err){ console.log("An error occured while writing JSON Object to File.");}
            console.log('delete with sucess!')
        });
    
     
    
    

    
      });
    }

