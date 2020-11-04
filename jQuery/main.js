//ben Ex1+ex2
$('#btn').click(function(){
    $("ul").append("<li>"+$("#txt").val()+ "</li>")
    $('li').click(function(){
        $(this).remove()
    })
    $("#txt").val("") 
})
// end ex1+ex2


//ben Ex4

$('.item').click(function(){
    if($(this).data().instock != false)
    $("#cart").append("<div class=cart-item>"+$(this).text()+"</div>")
})
// end ex4