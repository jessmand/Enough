var pageJavascript = function() {
    
    var people = JSON.parse(localStorage["people"]);
    
     $(".people-btn-side").addClass("main-nav-on-page");
    
    var constructFollowingList = function() {
        $(".following-nav").empty();
        for (var i=0; i<people.length; i++) {
            if (people[i].following == "true") {
                var link = $("<a>"+people[i].name+"</a>");
                link.on('click', function() {
                    //$('#view-following-modal modal-dialog').width
                    $('#view-following-modal').modal('toggle');
                    $('#view-following-modal .modal-title').html($(this).text());
            
                });
                var listElement = $("<li></li>").append(link);
                $(".following-nav").append(listElement);
            }
        }
    }
    
    
    
    var followClickEvent = function(button) {
        var person_name = button.parent().parent().find("h3").text();
        for (var k=0; k<people.length; k++) {
            if (people[k].name == person_name) {
                people[k].following = "true";
            }
        }
        localStorage["people"] = JSON.stringify(people);
        button.addClass("following");
        button.text("Following");
        constructFollowingList();
        button.unbind("click");
        button.on("click", function() {
            unfollowClickEvent($(this));
        });
    };
    
    var unfollowClickEvent = function(button) {
        var person_name = button.parent().parent().find("h3").text();
        for (var k=0; k<people.length; k++) {
            if (people[k].name == person_name) {
                people[k].following = "false";
            }
        }
        localStorage["people"] = JSON.stringify(people);
        button.removeClass("following");
        button.text("Follow");
        constructFollowingList();
        button.unbind("click");
        button.on("click", function() {
            followClickEvent($(this));
        });
    }
    
    var populatePeople = function(possiblePeople) {
        $("#people").empty();
        var peopleTiles = [];
    
        for (var i=0; i<possiblePeople.length; i++) {
            var personTile = '<div class="col-sm-6 col-md-6">'
                                        +'<div class="thumbnail">'
                                            +'<img src="./images/'+possiblePeople[i].name.replace(" ", "")+'.jpg" alt="..." class="people-pic">'
                                            +'<div class="caption">'
                                                +'<h3>'+possiblePeople[i].name+'</h3>'
                                                +'<p>'+possiblePeople[i].bio.substr(0,100)+'...</p>'
                                                +'<p>'
                                                    +'<button class="btn btn-view">View Profile</button>'
                                                    +'<button href="#" class="btn btn-follow"></button>'
                                                +'</p>'
                                            +'</div>'
                                        +'</div>'
                                    +'</div>';
            personTileObject = $(personTile);
            if (possiblePeople[i].following == "true") {
                personTileObject.find(".btn-follow").addClass("following").text("Following").on("click", function() {
                    unfollowClickEvent($(this))
                });
            } else {
                personTileObject.find(".btn-follow").text("Follow").on("click", function() {
                    followClickEvent($(this))
                });
            }
            peopleTiles.push(personTileObject);
        }
        
        for (var j=0; j<possiblePeople.length; j+=2) {
            var newRow = $("<div class='row'></div>");
            newRow.append(peopleTiles[j]);
            if (j+1!=possiblePeople.length) {
                newRow.append(peopleTiles[j+1]);
            }
            $("#people").append(newRow);
        }
    }
    
    populatePeople(people);

    $("#search").on("click", function() {
        populatePeople([people[people.length-1]]);
        $("#view-all").show();
    }); 

    $("#view-all").on("click", function() {
        populatePeople(people);
        $("#view-all").hide();
    }); 
    
    $("#view-all").hide();

    $('#view-following-modal').on('shown.bs.modal', function (e) {
        $(".btn-view-follow").on("click", function() {
            populatePeople(JSON.parse(localStorage["people"]));
        });
    });
};
