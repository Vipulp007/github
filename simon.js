let color = ['red','blue','green','yellow'];
let usercolor = [];
let computercolor = [];
let click = -1;

$('.color').click(function(event)
{
    click++;
    let key = event.target.id;
    animation('#'+key)
    usercolor.push(key);
    if(key == computercolor[click])
    {
        if(usercolor.length == computercolor.length)
        {
        usercolor = [];
        click=-1;
        nextsequence();
        }
    }

    else{
        alert("incorrect")
    }
   
});

function nextsequence() 
{
let ran = Math.floor(Math.random()*4);
let ranginiyan = color[ran];
computercolor.push(ranginiyan);
// alert(computercolor)
animation('#'+ ranginiyan);
}

function animation(id)
{
    $(id).fadeOut(100).fadeIn(100);
}

nextsequence();
