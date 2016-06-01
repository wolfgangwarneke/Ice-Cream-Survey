$(document).ready(function() {
  $("#iceCreamSurvey form").submit(function(event) {
    var surveyResult = {
      name: $("#name").val(),
      email: $("#email").val(),
      chocolate: $("#chocolate").val(),
      happiness: $("#happiness").val(),
      totallyEat: $("#totallyEat").val(),
      favoriteColor: $("#favColor").val(),
      iceCreamDay: $("#iceCreamDay").val(),
      wouldYouRather: $("input:radio[name=wouldYouRather]:checked").val()
    }

    var surveyJSON = JSON.stringify(surveyResult, null, 4);

    $("#dataPrint").append("<li>" + surveyJSON + "</li>");

    event.preventDefault();
    });
});
