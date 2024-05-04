const fs = require('fs')
const path = require('path')

const Data = path.join(__dirname , 'ExtraPathFolder')
console.log(Data);

// for(i=1 ; i<=10; i++){
//     fs.writeFileSync(Data + '/' + 'Abc' + i + '.js','Hello Abc File' + i)
// }

fs.readdir(Data , (err, list)=>{
   if(!err){
    
    console.log(list);
   list.forEach((i)=>{
       console.log(i);
    });



   }
})