function btnclick(val)
{
    console.log(val)
  document.getElementById("screen-input").value+=val
  
}  
function cleardis()
{
  console.log("print")
  document.getElementById("screen-input").value=""
  console.log(value)
}
function equalclick()
{
  var text=document.getElementById("screen-input").value
  var result=eval(text)
    document.getElementById("screen-input").value=result

  
}