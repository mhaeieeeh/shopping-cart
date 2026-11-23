
let cart=[]
function additem(){
     let input=document.getElementById('input').value
     if(input.trim() ==''){
         alert('kindly fill the input')
     }else{
         cart.push(input)
          console.log(cart);
          document.getElementById('input').value =''  
          displayitem()
}
}

function deleteall(){
    if(cart.length===0){
        alert('there is nothing here')
    }else{
        cart.splice(0,cart.length)
        document.getElementById('input').value =''  
    }
          displayitem()

}
function deletelast(){
    if(cart.length===0){
        alert('there is nothing here')
    }
    else{
        cart.pop()
        // document.getElementById('display').innerHTML=''
        displayitem()
    }
  
} 
        
     function displayitem() {
        document.getElementById('display').innerHTML=''
        for(index=0;index<cart.length;index++){
            document.getElementById('display').innerHTML  +=`<p>${index+1}. ${cart[index]}</p>
            <button onclick="removeitems(${index})" type="button" class="btn btn-primary">delete item</button>`
        } 
     }

function removeitems(index){
    if(cart.length<1){
        alert('there is nothing to delete')
    }else{
        cart.splice(index,1)
    }
    displayitem()
}
