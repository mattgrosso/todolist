function toDoList(){

  var itemCount = $(".incomplete-items")

  $("form").submit(function(event){
    event.preventDefault();
    var inputText = $(".new-todo").val();
    var checkMark = $('<button>')
      .attr({class: 'check'});
    var newItemText = $('<p>').text(inputText);
    var changeEntry = $('<input>')
      .attr({type: 'text', class: 'edit-todo', value: inputText});
    var deleteButton = $('<button>')
      .attr({class: 'delete'})
      .text('X');
    var listArticle = $("<article>")
      .append(checkMark)
      .append(newItemText)
      .append(changeEntry)
      .append(deleteButton);
    var newEntry = $("<li>")
      .append(listArticle);
    $(".items")
      .prepend(newEntry);
    itemCount.text(Number(itemCount.text()) + 1);
    $('.new-todo').val("");
  });

  $('ul').on('click', 'p', function(){
    $(this).closest('article').toggleClass('editing');
  });

  $('ul').on('keyup', '.edit-todo', function(event){
    if(event.keyCode === 13){
      $(this).closest('article').find('p').text($(this).val());
      $(this).closest('article').toggleClass('editing');
    }
  });

  $('ul').on('click', '.check', function(event){
    if($(this).closest('article').hasClass('completed')){
      itemCount.text(Number(itemCount.text()) + 1);
    } else{
      itemCount.text(Number(itemCount.text()) - 1);
    }
    $(this).closest('article').toggleClass('completed');
  });

  $('ul').on('click', '.delete', function(event){
    $(this).closest('li').remove();
    itemCount.text(Number(itemCount.text()) - 1);
  });

  $('.clear').on('click', function(event){
    $(this).closest('main').find('.completed').closest('li').remove();
  });

  $('.show-all').on('click', function(event){
    $('article').closest('li').css('display', 'block');
    $('.show-all').addClass('active');
    $('.show-active').removeClass('active');
    $('.show-completed').removeClass('active');
  });

  $('.show-active').on('click', function(event){
    $('.completed').closest('li').css('display', 'none');
    $('article').not('.completed').closest('li').css('display', 'block');
    $('.show-all').removeClass('active');
    $('.show-active').addClass('active');
    $('.show-completed').removeClass('active');
  });

  $('.show-completed').on('click', function(event){
    $('.completed').closest('li').css('display', 'block');
    $('article').not('.completed').closest('li').css('display', 'none');
    $('.show-all').removeClass('active');
    $('.show-active').removeClass('active');
    $('.show-completed').addClass('active');
  });





}

toDoList();
