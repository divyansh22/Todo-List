$(function(){
    let newTodoBox = $('#newtodo')
    let addtodoBtn = $('#addtodo')
    let todoList = $('#todolist')

    addtodoBtn.click(function () {
     
        let newTodo = newTodoBox.val()
        if(newTodo!="")
        $("ul").append('<li>'+'<p spellcheck="false">'+String(newTodo)+'</p>'+'<span class="icon strike glyphicon glyphicon-check"></span>'+'<span class="icon delete glyphicon glyphicon-trash" id="delete"></span>'+'<span class="icon update glyphicon glyphicon-edit"></span>'+'</li>').hide().fadeIn(1100);
        newTodoBox.val("");
    })
    addtodoBtn.click(function () {
     
        let newTodo = newTodoBox.val()
        if(newTodo!="")
        $("ul").append('<li>'+'<p spellcheck="false">'+String(newTodo)+'</p>'+'<span class="icon strike glyphicon glyphicon-check"></span>'+'<span class="icon delete glyphicon glyphicon-trash" id="delete"></span>'+'<span class="icon update glyphicon glyphicon-edit"></span>'+'</li>').hide().fadeIn(1100);
        newTodoBox.val("");
    })
    newTodoBox.keydown(function(event){
        if(event.which===13){
            let newTodo = newTodoBox.val()
        if(newTodo!="")
        $("ul").append('<li>'+'<p spellcheck="false">'+String(newTodo)+'</p>'+'<span class="icon strike glyphicon glyphicon-check"></span>'+'<span class="icon delete glyphicon glyphicon-trash" id="delete"></span>'+'<span class="icon update glyphicon glyphicon-edit"></span>'+'</li>').hide().fadeIn(1100);
        newTodoBox.val("");
        }

    })
  /*  addtTodoBtn.mouseup(function(){
        newTodoBox.val(""); 
    })*/
    $('#hidebutton').click(function () {
        $('#todolist').slideUp("slow");
        
    })
    $('#showbutton').click(function () {
        $('#todolist').show("slow");
    })
   
    $('#todolist').on('click', '.delete', function(){
        $(this).closest('li').remove();
      });

    $('#todolist').on('click', '.update', function(){
        $(this).closest('li').find('p').prop("contenteditable", true).focus().css("outline","none");
      });

      $('#todolist').on('click', '.strike', function(){
        $(this).closest('li').css("background-color","rgb(109, 211, 109)")
      });
     
})