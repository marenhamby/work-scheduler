// make sure the page has fully loaded before doing anything
$(document).ready(function() {

    //add the current date and time information at the top of the page
    $("#currentDay").text(moment().format("dddd, Do MMMM YYYY, h:mm a"))


    //add code to pull any existing saved text from local storage
    $("#9 .description").val(localStorage.getItem("9"))
    $("#10 .description").val(localStorage.getItem("10"))
    $("#11 .description").val(localStorage.getItem("11"))
    $("#12 .description").val(localStorage.getItem("12"))
    $("#13 .description").val(localStorage.getItem("13"))
    $("#14 .description").val(localStorage.getItem("14"))
    $("#15 .description").val(localStorage.getItem("15"))
    $("#16 .description").val(localStorage.getItem("16"))
    $("#17 .description").val(localStorage.getItem("17"))


    //add function for the save buttons to save the information for that row to local storage
    $(".saveBtn").on("click", function(){

      //add variable to pull the value of the task column from the row where the button was pressed so it can later be saved to local storage.
      var tasks = $(this).siblings(".description").val();

      //add variable to pull the id of the row where the button was pressed so it can be saved with the value to local storage-- instead of setting static text as the key, then it's more specifically descriptive
      var time = $(this).parent().attr("id");

      //save the tasks to local storage with the key for the line it's from
      localStorage.setItem(time, tasks)
    })


    //add function to figure out the current time
    var currentTime = parseInt(moment().format("H"))
    // console.log(parseInt(moment().format("H")))

    //add function to compare current time to the times on the chart and change the color format--already listed as classes in the css--according to what is current, past, and future
    function changeColor() {

      $(".schedule-row").each(function(){

        //add variable for each row to have a time quantity that can be compared to the current time
        var rowTime = parseInt($(this).attr("id"))

        //set if statements to change the color of the description of a row depending on if it is before, during, or after the present hour of the user
        if (rowTime < currentTime) {
          console.log("before time");
          $(this).children(".description").addClass("past")
        }

        if(rowTime === currentTime) {
          console.log("now");
          $(this).children(".description").addClass("present")
        }

        if (rowTime > currentTime) {
          console.log("the future");
          $(this).children(".description").addClass("future")
        }

      })

    }

    //run function about changing time
    changeColor()


  })
