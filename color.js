  const btn=document.querySelector("#btn");/* getting the button element*/
  
  const body=document.querySelector("body");/* getting the body element*/

  /* adding and event listner to the button element and creating an automatic background color to the body element*/
btn.addEventListener("click", ()=>{
    const hexdecimalNo=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexcolor="#";
    for(x=0; x<6; x++){
        const randomNo=Math.floor(Math.random()*hexdecimalNo.length);
        const noFetch=hexdecimalNo[randomNo];
        hexcolor+=noFetch;
        body.style.backgroundColor=hexcolor;
    }
})