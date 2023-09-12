const fs = require("fs/promises");
const dataPath = "./products.json";
const outputPath = "./output/allProduct.json";

fs.readFile(dataPath,"utf-8").then((res)=>{
    const resObj = JSON.parse(res);
   

    let countItem = {};
    const result = resObj.reduce((out,current)=>{
        if(!out[current.category.name]){
            out.allObj = 1;
            countItem[current.category.name]=1;
            out[current.category.name]=countItem[current.category.name];
     
            
        }else{
            out[current.category.name] +=1;
            
        }
        if(out.allObj)out.allObj++

        return out;
    },{})
   return result;
}).then((r)=> {

   return fs.writeFile(outputPath,JSON.stringify(r));
}).then(()=>{
    console.log("read and write complete:" +"Path: " +outputPath);
});