(function($){
    $.fn.searchDrop=function(){
        var myList=arguments;
        const droppedDiv=$("<div></div>")
        droppedDiv.addClass("droppedDiv")
        FillList(arguments,droppedDiv)
        const wrapperDiv=$("<div></div>")
        wrapperDiv.addClass("wrapperDiv")
       
        this.wrap(wrapperDiv)
        this.after(droppedDiv)

        var marginLeft=this.css("marginLeft")
        marginLeft=PxParse(marginLeft)

        var marginTop=this.css("marginTop")
        marginTop=PxParse(marginTop)
        droppedDiv.css({
            left:marginLeft+"px",
            top:marginTop+this.outerHeight()+"px",
            width:this.outerWidth()+"px"
        })
        this.on("focus",function(){
            droppedDiv.fadeIn(500)
        })
        
        this.on("keyup",function(){
           let letter = $(this).val()
           let myNewList=letterFind(letter,myList)
           droppedDiv.html("")
            FillList(myNewList,droppedDiv)        
        })
    }
}(jQuery))


function PxParse(element){
    return Number(element.slice(0,element.length-2))
}

function letterFind(letter,lists){
    var myList=[];
    for(var list of lists){
        if(list.toUpperCase().startsWith(letter.toUpperCase())){
            myList.push(list)
        }
    }
    return myList;
}
function FillList(lt,droppedDiv){
    for(var element of lt){
        const span=$("<span></span>")
        span.html(element)
        droppedDiv.append(span)
    }      
}