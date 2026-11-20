// alert('i am working')l
let cart=[]
function additem(){
     let input=document.getElementById('input').value
    //  let displayarea=document.getElementById('display')

     if(input.trim() ==''){
         alert('kindly fill the input')
     }else{
         cart.push(input)
          console.log(cart);
          document.getElementById('input').value =''  
          document.getElementById('display').innerHTML=''
     }for(index=0;index<cart.length;index++){
        document.getElementById('display').innerHTML  +=`<p>${index+1} ${cart[index]}</p>`

     } 
}

function deletelast(){
    cart=[]
          document.getElementById('input').value =''  
          document.getElementById('display').innerHTML=''
 for(index=0;index<cart.length;index++){
        document.getElementById('display').innerHTML  +=''
       

     } 
}
