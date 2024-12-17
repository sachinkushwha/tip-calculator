function tipcal(){
   let totalbil=document.getElementById('total-bill').value;
   let tip=document.getElementById('tip').value;
   let person=document.getElementById('person').value;
   let totaltip=(totalbil*tip)/100;
   let totalfinalbil=(parseFloat(totaltip)+parseFloat(totalbil));
   let splitbil=totalfinalbil/person;
if(totalbil && tip && person >0){
  let newt=document.createElement("p");
  newt.innerHTML="Tip amount =  ₹"+totaltip;
  newt.setAttribute("id","tip-amount");
  document.getElementById('b').appendChild(newt);

  let newp=document.createElement("p");
  newp.innerHTML="Per Person =  ₹"+splitbil;
  newp.setAttribute("id","per-person");
  document.getElementById('b').appendChild(newp)

  let newtt=document.createElement("p");
  newtt.innerHTML="Total Bill =  ₹"+totalfinalbil
  newtt.setAttribute("id","final-amount");
  document.getElementById('b').appendChild(newtt)
}
  document.getElementById('total-bill').value=null;
  document.getElementById('tip').value=null;
  document.getElementById('person').value=null;
}
function cleary(){
    console.log("thsi")
   let am= document.getElementById('tip-amount');
   am.remove();
   console.log("thsi")
   document.getElementById('per-person').remove();
   document.getElementById('final-amount').remove();
}