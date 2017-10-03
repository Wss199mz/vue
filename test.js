function unique(arr){
  var res =[];
  var json = {};
  for(var i=0;i<arr.length;i++){
    if(!json[arr[i]]){
      res.push(arr[i]);
      json[arr[i]] = 1;
    }
  }
  console.log(json)
  return res;
}
console.log(unique([1,2,3,4,5,3,5,4,7,8]))
