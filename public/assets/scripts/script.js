/**
 * Home Page 
 */

 var elem = document.getElementsByClassName('box');
 elem.addEventListener('mouseover',showInfo);
 function showInfo(){
     var height = this.clientHieght;
     var outerHeight = this.childNodes[0].clientHieght;
     var pos = 0;
     var id = setInterval(frame, 10);
     function frame(){
        if (height == outerHeight) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.height = pos + 'px';
        }
    }
}