$( document ).ready(function() {
    $.get("https://www.eventbriteapi.com/v3/users/me/owned_events/?token=UYNH2POKDBXS4RMSDZJV&expand=ticket_classes,venue", function( data ) {
        var events = data.events;
        var html = "";
        $.each(events, function(i, event) {
            var remaining_tickets = event.ticket_classes[0].quantity_total - event.ticket_classes[0].quantity_sold
            console.log(remaining_tickets);
            if (remaining_tickets > 0) {
                html += "<div class='well'><h2>" + event.name.html + "</h2><p>" + event.venue.name + "</p><p>Remaining spots: <b>" + remaining_tickets + "</b></p><a class='btn btn-default' href='" + event.url + "' role='button' target='_blank'>Sign Up to Volunteer</a></div>";
            }
        });
        console.log(html);
        $("#upcoming").html(html);
    });
});
