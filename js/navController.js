// Sets the on click for each element
$('.navElement').each(function() {
  $(this).click(function() {
    selectTab(this);
  })
})

function selectTab(navElement) {
  var tabSelected = $(navElement).attr("data-navTo");
  $(".navElement.selected").removeClass("selected");
  $(navElement).addClass("selected");
  $(".tab.selected").removeClass("selected").addClass("unselected");
  $("#" + tabSelected).addClass("selected").removeClass("unselected");
}