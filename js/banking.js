document.getElementById('deposit-btn').addEventListener('click',function(){
    // Deposit Amount 
    const newdepositamount=document.getElementById('deposit-field')
     const newdamount=newdepositamount.value;
     const prevoiusdeposit=document.getElementById('curentdeposit')
     const pdp=prevoiusdeposit.innerText
     const newamonutdeposit=parseFloat(pdp)+parseFloat(newdamount)
     prevoiusdeposit.innerText=newamonutdeposit
     newdepositamount.value=''
  // balance add   
  const pbalance=document.getElementById('blance')
  const prevoiusblance=pbalance.innerText
  const newblance=parseFloat(prevoiusblance)+parseFloat(newdamount)
  pbalance.innerText=newblance;
})

// new  blance add using javascript
document.getElementById('widraw-btn').addEventListener('click',function()
{
    const widrawAmmount=document.getElementById('widraw-field');
    const widrawblance=widrawAmmount.value;
    const previousbalncewidraw=document.getElementById('widraw')
    const pblancewidraw=previousbalncewidraw.innerText
    const newwidrawblance=parseFloat(pblancewidraw)+parseFloat(widrawblance)
    previousbalncewidraw.innerText=newwidrawblance

    // tota blanc update afetr widraw

    const totalblance=document.getElementById('blance')
    const totalamount=totalblance.innerText;
    const newtotalblance=parseFloat(totalamount)-parseFloat(newwidrawblance);
    totalblance.innerText=newtotalblance
    widrawAmmount.value=''


})
