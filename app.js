var count = 0;

$(function(){
  $("#root").append("<ul id = list> </ul>");
  $("#list").append("<li id = " + count.toString() + "><span>Сделать задание #3 по web-программированию</span><button onClick = delete(" + count.toString() + ")>Удалить</button></li>");
  $("#root").append("<input id = add_task_input>");
  $("#root").append("<button onClick=addTask() id = add_task></button>");
 
  count = count + 1; })

function delete(id){
  $("#" + id).remove();
}

function addTask(){
  $("#list").append("<li id = " + count.toString() + "><span>" + document.getElementById("add_task_input").value + "</span><button onClick = delete(" + count.toString() + ")>Удалить</button></li>");
  count = count + 1;
}

