var remained=document.querySelector('#remained')

var pecentage=document.querySelector('#percentage')

var litres=document.querySelector('#litres')

var smallCups=document.querySelectorAll('.cup-small')

var litres=document.querySelector('#litres')

updateBigCup()




smallCups.forEach((ele,ind) => {
    ele.addEventListener('click',()=>{
        fill(ind) 

    })

});


function fill(ind){
    if(smallCups[ind].classList.contains('full')){
        if(ind==smallCups.length-1 ||  !smallCups[ind+1].classList.contains('full')){
            smallCups[ind].classList.remove('full')

        ind-- ;

        }
    }
    smallCups.forEach((element,ind2) => {
        if(ind2<=ind){
            element.classList.add('full') ;

        }
    })
    updateBigCup()

}




function updateBigCup(){

    var total=smallCups.length

    var full=document.querySelectorAll('.full').length

    percentage.innerText=`${full/total*100}%`
    if(full===0){
        percentage.style.visibility='hidden' ;

        percentage.style.height=0 ;

    }

    else {

        percentage.style.visibility='visible' ;

        percentage.style.height=`${full/total*330}px`

    }
    litres.innerText=`${2-(250*full/1000)}Litres`
    if(full===total){
        remained.style.visibility='hidden' ;

        remained.style.height=0 ;

    }

    else

    {

        remained.style.visibility='visible'

    }
}