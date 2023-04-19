// Function for the color change and current hour
$(document).ready (function () {

  // Save Button Event Listener
    $(".saveBtn").on("click", function () {
      const savedInput = $(this).siblings("textarea").val()
      const timeInput = $(this).parent().attr("id")
      localStorage.setItem(timeInput, savedInput);
      console.log('hello');
    });
    
  // to retrieve from local storage..
    for (let i = 8; i < 18; i++) {
      $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`));
      var currentHour= dayjs().hour();
      $(`#hour-${i}`).removeClass('past present future')
      var hourClass= currentHour < i ? 'future' : currentHour > i ? 'past' : 'present'
      $(`#hour-${i}`).addClass(hourClass)
    }
  
    // TODO: Add code to display the current date in the header of the page.
    $("#currentDay").text(dayjs().format("ddd, MMM DD, YYYY h:mm a"));
  
  });