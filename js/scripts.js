$(document).ready(function() {
  $("#location1").hide();
  $("#location2").hide();
  $("#location3").hide();
  $("#location4").hide();
  $("#location5").hide();

  $("form#destination").submit(function(event) {

    var ques1 = parseInt($('input[name=optionsRadiosA]:checked').val());
    var ques2 = parseInt($("input[name=optionsRadiosB]:checked").val());
    var ques3 = parseInt($("input[name=optionsRadiosC]:checked").val());
    var ques4 = parseInt($("input[name=optionsRadiosD]:checked").val());
    var ques5 = parseInt($("input[name=optionsRadiosE]:checked").val());

    var total = (ques1 + ques2 + ques3 + ques4 + ques5);

    // for (i = 0; i < 5; i ++);

    if (total === 0) {
      $("#location1").show()
    } else if ((total >= 5) && (total <= 25)) {
      $("#location2").show();
    } else if ((total >= 25) && (total <= 100)) {
      $("#location3").show();
    } else if ((total > 100) && (total <= 300)) {
      $("#location4").show();
    } else if ((total >= 400) && (total <= 500)){
      $("#location5").show();
    }
  console.log(total);
  event.preventDefault();
  });
});
