const crudResult= document.getElementById('result')
const readInput= document.getElementById('read-input')
const crudDescription= document.getElementById('crud-description')
const readOperation=document.getElementById("read-operation")

readOperation.style.display="none";

function showReadOperation(){
    crudDescription.style.display="none";
    readOperation.style.display="block";

}








function getData(url){
  axios.get(url).then(function(response) {
      console.log(response)
        crudResult.innerHTML=JSON.stringify(response.data);
    }).catch((err)=>{
        crudResult.innerHTML=err;

    })
    // https://jsonplaceholder.typicode.com/todos
}


 function readFunction () {
    if(!readInput.value){

        crudResult.innerHTML="NOT Valid Input";
    }

     else(getData(readInput.value))
 }
//  function createFunction () {
//     document.getElementById('result').innerHTML=b;
// }
// function updateFunction () {
//     document.getElementById('result').innerHTML="updated";
// }
// function deleteFunction () {
//     document.getElementById('result').innerHTML="delete";
// }