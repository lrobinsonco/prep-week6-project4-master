$(document).ready(function () {

  //Q1
  $('#submitBtn').click(function () {
    var textOutput1 = $('#textInput').val();
    $("<h3>" + textOutput1 + "</h3>").insertAfter("#submitBtn")
  })

  //Q2
  $('.chex input').click(function () {
    $('h2').toggleClass('hidden');
  })

  //Q3
  $('.table-striped').append('<tr><td>Fifi</td><td>4</td><td>dead</td></tr>');

  //Q4
  $('.table-striped tbody').children().each(function () {
    var hungerColor = $(this).children("td:nth-child(3)")
    if (hungerColor.text() === "Content") {
      $(hungerColor).css('color' , '#629632')
    } else {
      $(hungerColor).css('color' , '#CD2626')
    }
  })

  // $(".table-striped tbody").children().each(function () {
  //       var hungerLevel = $(this).children("td:nth-child(3)");
  //       if (hungerLevel.text() === "Content") {
  //           $(hungerLevel).css("color", "#629632");
  //       } else {
  //           $(hungerLevel).css("color", "#CD2626");
  //       }
  //   })

//Q5
  $(".btn-warning").click(function () {
    $(".table-striped tbody").children().each(function () {
      var weight = $(this).children("td:nth-child(2)");
      if ($(weight).text() < 10) {
        $(this).hide();
      }
    })
  })

  //Q6
  $(".btn-success").click(function () {
    $("tbody").children().each(function () {
      var upper = $(this).children("td:nth-child(1)");
      $(upper).text($(upper).text().toUpperCase())
    })
  })

  // Q7
  $('.btn-primary').click(function () {
    $('.table-striped').toggle()
  })

  //Q8
  $('#disableUs input').prop("disabled" , true)

  $("#disableUs a").click(function () {
        return false;
    })

//Q9
$('.dropdown').change(function () {
  var value = $(this).find('option:selected').text()
  $('<h3>' + value +'</h3>').insertAfter('.dropdown')
})

})
