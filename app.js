var monthNames = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];

var dayNames = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

$( document ).ready(function() {
    $.get("https://www.eventbriteapi.com/v3/users/me/owned_events/?token=UYNH2POKDBXS4RMSDZJV&expand=ticket_classes,venue", function( data ) {
        var events = data.events;
        var html = "";
        $.each(events, function(i, event) {
            var remaining_tickets = event.ticket_classes[0].quantity_total - event.ticket_classes[0].quantity_sold
            if (remaining_tickets > 0) {
                var date = new Date(event.start.local);
                date =  dayNames[date.getDay()] + ", " + monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
                html += "<div class='well'><h2>" + event.name.html + "</h2><h4>" + date + "</h4><p>" + event.venue.address.address_1 + "</p><p>Remaining spots: <b>" + remaining_tickets + "</b></p><a class='btn btn-default' href='" + event.url + "' role='button' target='_blank'>Sign Up to Volunteer</a></div>";
            }
        });
        $("#upcoming").html(html);
    });
});
