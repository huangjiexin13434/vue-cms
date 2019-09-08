
var fs=require('fs');

function getfile(filepath){
  return   promise=new Promise(function(resolve,reject){
        fs.readFile(filepath,'utf-8',function(err,data){
            // if(err) {
            //     console.log(err);
            // }
            // console.log(data);
            if(err) reject(err);
            resolve(data);
        });
    });    
};
// getfile('./11.txt').then(function(data){
//     console.log(data);
// },function(err){
//     console.log(err.message);
// });
/* getfile('./11.txt').then(function(data){
    console.log(data);
    return getfile('./2.txt');
},function(err){
    console.log(err.message);
    return getfile('./2.txt');
}).then(function(data){
    console.log(data);
    return getfile('./3.txt');
}).then(function(data){
    console.log(data);
}); */

    getfile('./1.txt').then(function(data){
        console.log(data);
        return getfile('./2.txt');
    }).then(function(data){
        console.log(data);
        return getfile('./3.txt');
    }).then(function(data){
        console.log(data);
    }).catch(function(err){
        console.log(err.message);
    });
    console.log('okok');
