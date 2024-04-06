function setColor(color){
    var alist = document.querySelectorAll('a');
        var len = alist.length;
        var i = 0;
        while(i<len){
            console.log(alist[i]);
            alist[i].style.color =color;
            i += 1;
        }
}
var Body = {
    timeSetColor : function(color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor : function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
    
}

function nightDayHandler(self) {
    var target = document.querySelector('body')
    if(self.value === 'night'){
        Body.setBackgroundColor('black');
        Body.timeSetColor('white');              
        self.value = 'day';            
        setColor('PowderBlue');

    }
    else{
        Body.setBackgroundColor('white');
        Body.timeSetColor('black');
        self.value = 'night';
        setColor('blue');

        
    }
}
