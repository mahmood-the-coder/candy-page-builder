let isResizing=false;
let MIN=10;
let MAX=100;
export function initResize(e)
{
  isResizing=true;
 
  window.addEventListener("mousemove",handleMouseMove)
  window.addEventListener("mouseup",handleMouseUp)

}

function handleMouseMove(e){
   let x=(e.clientX*100)/$(window).width();

   if(x<MIN)
   {
     x=0.5
     
   }
   if(x>MAX)
   {
    x=MAX
    
    
   }
   $(".layoutResizeHandle").css("left",x+"%")
   $(".layoutLeftContainer").css("width",x+"%")
   $(".layoutRightContainer").css("width",`calc(100% - ${x}%)`)
   
}

function handleMouseUp(e){
  isResizing=false;
  window.removeEventListener("mousemove",handleMouseMove)
  window.removeEventListener("mouseup",handleMouseUp)
}