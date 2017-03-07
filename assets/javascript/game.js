$(document).ready(function(){
  var numberToGuess
  var counter = 0
  var numberOfGems = 4
  var wins = 0
  var losses = 0

  // event handler for clicking a gem
  $('.gemImage').on("click", function() {

    // add gem number to total
    var gemNumber = $(this).attr('data-num')
    counter += parseInt(gemNumber)

    // display total
    $("#totalScore").text(counter)

    // alert if player won or lost
    if (counter === numberToGuess) {
      alert("You won!!!")
      wins++
      $('#wins').text(wins)
      reset()
    
    } else if (counter > numberToGuess) {
      alert("You lost!!!")
      losses++
      $("#losses").text(losses)
      reset()
    }
  })

  function appendGems () {
    // gem game image elements
    for(var i = 0; i < numberOfGems; i++){
      var imageGem = $("<img>")
      var imageSrc = "assets/images/image" + i + ".jpg"

      imageGem.attr('src', imageSrc)
      imageGem.attr('alt', "gems")
      imageGem.addClass("gemImage")

      $("#gems").append(imageGem)
    }
  }

  function reset () {
    counter = 0
    $("#totalScore").text(counter)

    numberToGuess = Math.floor((Math.random() * 120) + 19)
    $("#number").text(numberToGuess)

    $("#gems img").each(function(index){
      var num = Math.floor((Math.random() * 12) + 1)
      $(this).attr("data-num", num)
    })
  }

  appendGems()
  reset()

})
