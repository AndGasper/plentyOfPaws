// Javascript file for petfinder api stuff
//var animalType = $(".animalType").text();
//console.log(".animalType").text();

// $.getJSON('http://api.petfinder.com/my.method?format=json&key=12345&callback=?')
//     .done(function(petApiData) { alert('Data retrieved!'; })
//     .error(function(err) { alert('Error retrieving data!');
//     });
// var petDetails = ["age","animal","media" ]
// function displayPet() {
//     for (var i = 0; i <)
//
// }

function getRandomPet() {
    var dataObject = {
        format: "json",
        key: "1db51d3f16936ba505cf7a0476dd8771",
        animal: "dog",
        output: "basic"
        //callback: "\?"
    };
    var urlString = "http://api.petfinder.com/pet.getRandom?format=json" + "&" + dataObject["animal"] + "&" + dataObject["output"] + "&" + "callback=?";
        $.ajax({
            data: dataObject,
            dataType: "JSON",
            method: "GET",
            url: urlString, //"http://api.petfinder.com/pet.getRandom", // petFinder.php",
            success: function(response) {
                console.log(response["petfinder"]["pet"]);
            },
            error: function(response) {
                console.log(response);
            }
        });
}
//http://api.petfinder.com/pet.getRandom?key=1db51d3f16936ba505cf7a0476dd8771&animal=dog&output=basic

var shelterArray = [];
var shelterFinder = function () {
    $.ajax({
        url: 'http://api.petfinder.com/shelter.find?key=579d9f154b80d15e1daee8e8aca5ba7a&output=full&format=json&callback=?',
        type: 'GET',
        data: {
            location: 92705
        },
        dataType: 'json',
        success: function (result) {
            console.log(result);
            for(var i = 0; i < result.petfinder.shelters.shelter.length; i++) {
                shelterArray.push(result.petfinder.shelters.shelter[i])
            }
        }
    });
};