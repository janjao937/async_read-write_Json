const fs = require("fs/promises");
const dataPath = "./products.json";
const outputPath = "./output/allProduct.json";

fs.readFile(dataPath,"utf-8").then((res)=>{
    const resObj = JSON.parse(res);
    const result = resObj.reduce((out,current)=>{
        if(!out[current.category.name]){
            
            out[current.category.name]=1;        
        }else{
            out[current.category.name] +=1;
        }
        out.allObj++

        return out;
    },{allObj:0})
   return result;
}).then((r)=> {

   return fs.writeFile(outputPath,JSON.stringify(r));
}).then(()=>{
    console.log("read and write complete:" +"Path: " +outputPath);
});