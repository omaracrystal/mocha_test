// add scripts

$(document).on('ready', function() {
});


$('form').on('submit', function() {
  var totalCost = +($('#totalCost').val());
  var discount = +($('#discount').val());
  $('#totalDiscount').append(totalDiscount(totalCost, discount));
})



function totalDiscount(totalCost, discount) {
  if (typeof(totalCost) !== "number") {
    return 'Please choose only numbers';
  } else if (typeof(discount) !== 'number') {
    return 'Please choose only numbers';
  } else if (0 > discount || discount > 100) {
    return 'Please choose a discount that is between 0 and 100.';
  } else {
    return "Your total discount is " + totalCost * (discount/100);
  }
}
