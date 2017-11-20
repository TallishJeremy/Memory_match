$( document ).ready(function() {

  $(".smiley").hide();



  $('#memory_board').on('click', '.smile', function() {
    $(this).hide();
  });

  $(".frowny").hide();


  $('#memory_board').on('click', '.frown', function() {
    $(this).hide();
  });


  $(".suprised").hide();

  $('#memory_board').on('click', '.suprise',function() {
    $(this).hide();
  });

  $('#memory_board').on('click', ".card",function() {
    console.log($(this).children())
    $(this).children().show();

    $(".article").on('click', '.smiley', function () {
    $(this).parents('div').eq(0).trigger("destroy");
});
  });
});
