var fs = require('fs');
const yargs = require('yargs');
const argv = yargs.argv;
// fs.readFile('json.txt', 'utf8', (err, data) => {  
//     if (err) throw err;
//     console.log(data);
// });
let arr =[];

// argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
//   });


 if(argv._){
     console.log(argv._)
 }


  if (argv._.includes('list')){      
fs.readFile('json.txt', 'utf8', (err, data) => {  
    if (err) throw err;
    console.log(data);
});
  }


  var jsonData ={"title":`${argv.title}`,"city":`${argv.city}`};
  console.log(argv.title)
  console.log(argv.city)
 
 // parse json
//   var jsonObj = JSON.parse(jsonData);

   
 // stringify JSON Object
  data = JSON.stringify(jsonData);

  if (argv._.includes('add')){      
    fs.appendFile('json.txt', data, 'utf8', function (err) {
        if (err){ console.log("An error occured while writing JSON Object to File.");}
        console.log('Saved!');
      });
      }







       if((argv._.includes('remove'))&&(!argv.title)){
        console.log("invalid command!")
        }
        
     else if (argv._.includes('remove')&&(argv.title!='')){   
    fs.readFile('json.txt', 'utf8', (err, data) => {  
        if (err) throw err; 
        arr=data.split('\n')  
        console.log(arr)
         let newarr =  arr.filter (el => !(el.includes(argv.title)));
         console.log(newarr);
         console.log(argv.title);
         fs.writeFile('json.txt',newarr, 'utf8', function (err) {
            if (err){ console.log("An error occured while writing JSON Object to File.");}
            console.log('delete with sucess!')
        });

     
    
    

    
      });
    }
 

