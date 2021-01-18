function printTriangle()
{
  for(var i=1; i<6; i++){
    if (i==1) console.log("    #    ");
    else if (i==2) console.log("   # #   ");
    else if (i==3) console.log("  # # #  ");
    else if (i==4) console.log(" # # # # ");
    else if (i==5) console.log("# # # # #");
  };

};

var arr = [];

for(var i = -100; i<101; i++){
  arr.push(i)
};

arr.forEach(function(item,i,arr){
  if(item<0) arr[i] = 0;

})

arr.forEach(function(item,i,arr){
  if(i%2==0 && item==0) arr.splice(i+1,0,-1)
})


console.log(arr)
