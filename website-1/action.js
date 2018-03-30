
var indexSlide =1;
function plusSlides(n)
{
    indexSlide+=n;
    var slides=document.getElementsByClassName("container");
    var i;
    var j;
    if(indexSlide>slides.length)
        {
            indexSlide=1;
        }
    if(indexSlide<1)
        {
            indexSlide=slides.length;
        }
    for(i=0;i<slides.length;i++)
        {
            slides[i].style.transition="2s";
            slides[i].style.transform="scale(3)";
            slides[i].style.opacity=0;
        }
    j=indexSlide-1;
    slides[j].style.transition="2s";
    slides[j].style.transform="scale(1)";
    slides[j].style.opacity=1;
   }
function transPos(n)
{
    var im=document.getElementById("imgg");
    if(n==1)
        {
            im.style.transform="translateX(-50%)";
        }
    else{
            im.style.transform="translateX(0%)";
    }
}