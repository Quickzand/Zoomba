$(".wheelSlider input").on("input", function() {
  $(this).parent().next(".wheelSliderValue").text((this.value - 100) * -1);
  onWheelSliderValueChange((this.value - 100) * -1);
})


function onWheelSliderValueChange(value) {
  // AYDEN FATHER PLEASE INSERT YOUR CODE HERE PLEASE 
}