const fs= require('fs')

const datasaver = function (filename, data) {    //const datasave = (data) => console.log(data)

   // fs.writeFileSync('data.json', data)  // data.json -> [object Object] error because files online understand strings.. we need to convert it to strings
   fs.writeFileSync(filename, JSON.stringify(data))  // we solved it!! // and we change the data.json -> filename to create new json file
   //console.log(data)

}

const dataloader= function (filename, data) {    //const datasave = (data) => console.log(data)

  // return fs.readFileSync(filename,'utf8' ) // computer interpret 0 and 1's as strings with the help of 'utf8'
  return JSON.parse( fs.readFileSync(filename,'utf8' )) //it understand its a structure of an object with the help of parse
    //console.log(data)

}

module.exports = {datasaver,dataloader}