// Zoo Animals Display

async function foo(){
    try{
        var name=document.getElementById("t1").value;
        console.log(name);
       
    let ani=await fetch(`https://zoo-animal-api.herokuapp.com/animals/rand/${name}`);
    console.log(ani);
    let result1= await ani.json();
    console.log(result1);

    for(var i in result1){
        
        console.log(result1[i].image_link);
        var img = document.createElement('img');
        img.src = result1[i].image_link;
        img.width = 150; 
		var divval = document.getElementById("mainbdy");
		divval.append(img);

   }
    } catch(error){
console.log(error);
    }
}



 
//var div1 = document.createElement('div');
//div1.classList.add('card', 'col-md-4', 'col-sm-12', 'my-2');

           
 
//multiple api with async and await
// async function getdata(){
//     try {

//         let res=await fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10');
//        // console.log(res);
//         let result= await res.json();
//         console.log(result);
        
//         for(var i in result){
//             console.log(result[i].image_link);
//         }
        
//     }

//     catch (error) {
//     console.log("error");
//     }
// }
// getdata();
