var ulWrapper = document.querySelector('#wrap');
var pi = document.querySelector("#piy");

var sum = 0;

for (var avgWeight of pokemons) {
    var rem = avgWeight.weight.replace(' kg', '');
    var editedWeight = Math.round(rem);
    sum += editedWeight / pokemons.length
}

pi.textContent = `Average weight: ${Math.round(sum)} kg`


// Funksiya

var addObject = function (product) {
    var li = document.createElement("li");
    var newsImg = document.createElement('img');

    // Pokemon img
    newsImg.src = product.img;
    li.append(newsImg)
    ulWrapper.append(li)

    //Pokemon Title
    var newsTitle = document.createElement('h2');
    newsTitle.textContent = product.name;
    li.append(newsTitle)
    ulWrapper.append(li);

    // pokemon type
    product.type.forEach(function (element) {
        var newsGenreText = document.createElement('a');
        newsGenreText.href = "#";
        newsGenreText.textContent = element;

        li.append(newsGenreText)
        ulWrapper.append(li)
    });
    /* FOR Of orqali qilingan varianti
    for (var genre of product.type) {
        var newsGenreText = document.createElement('a');
        newsGenreText.href = "#";
        newsGenreText.textContent = genre;
        
        li.append(newsGenreText)
        ulWrapper.append(li)
    } */

    // pokemon weights
    var newsWeight = document.createElement('p');
    var removed = product.weight.replace(' kg', '')
    newsWeight.textContent = `${Math.round(removed)} kg`;
    li.append(newsWeight)
    ulWrapper.append(li);


    // Pokemon birth
    var newsDate = document.createElement('p');
    newsDate.textContent = ` ${new Date(product.birth_date).getDate()}.${new Date(product.birth_date).getMonth() + 1}.${new Date(product.birth_date).getFullYear()}`;
    li.append(newsDate)
    ulWrapper.append(li);

}

var formAdd = document.querySelector('#formAdd');
var inputTitle = document.querySelector('#inputTitle');

var looper = function (pokemonsArray) {
    ulWrapper.innerHTML = " ";
    for (var i = 1; i <= pokemonsArray.length; i++) {
        var pookemon = pokemonsArray[i - 1];
        //console.log(pookemon)
        addObject(pookemon)
    }
}

looper(pokemons);

// Option tanlanadigan qismi
// 1. janrlani yi'gib olish
var getTypes = function () {
    var types = [];
    pokemons.forEach(function (pokemon) {
        pokemon.type.forEach(function (type) {
            if (!types.includes(type)) {
                types.push(type)
            }
        })
    })
    return types
};

var types = getTypes();

var formAdd = document.querySelector("#formAdd");
var select = document.querySelector("select");

types.forEach(function (type) {
    var optionName = document.createElement("option");
    optionName.value = type;
    optionName.textContent = type;
    select.append(optionName);

});

formAdd.addEventListener("submit", function (evt) {
    evt.preventDefault();
    var optionValue = document.querySelector("select").value;
    var searchInput = document.querySelector("#searchInput").value;
    var inputValue = new RegExp(searchInput, "gi")
    var filtredTypes = pokemons.filter(function (type) {
        if (optionValue === "0") {
            return true;
        }
        return type.type.includes(optionValue);
    }).filter(function (namee) {
        return namee.name.match(inputValue);
    });
    console.log(filtredTypes);
    looper(filtredTypes);
})
// qism tugadi.


//Ism bilan qidiradigan qismi

/*
var arrLengthP = document.querySelector("#formP");
var nameSearchForm = document.querySelector("#nameSearchForm");
var searchBtn = document.querySelector("#searchBtn");


nameSearchForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    var searchInput = document.querySelector("#searchInput").value;
    // var filtredNames = pokemons.filter(function (namee) {
    //     if (namee.name.toLowerCase().includes(searchInput)) {
    //         return namee
    //     }
    // });

    var filtredNames = pokemons.filter(function (namee) {
        return namee.name.match(inputValue);
    });
    arrLengthP.textContent = `Qidiruvdan keyingi pokemonlar soni: ${filtredNames.length}`
   looper(filtredNames);
})
*/


/* O'xshamagan funksiya

nameSearchForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    var choosen;
    for (var chosen of namePo) {
        if (chosen.includes(searchInput)) {
            console.log(searchInput);
            choosen = chosen
        }
        else {
            document.querySelector("#formP").textContent = `Bunday nomli pokemon mavjud emas`;
        }
    }
    console.log(choosen);
})
*/


/* Arrayga custom push qilish va ekranga chiqarish.
formAdd.addEventListener('submit', function (evt) {
    evt.preventDefault();
        var arr = ({
			"id": 1,
			"num": "001",
			"name": inputTitle.value,
			"img": "http://www.serebii.net/pokemongo/pokemon/001.png",
			"type": [
					"Grass",
					"Poison"
			],
			"height": "0.71 m",
			"weight": "6.9 kg",
			"candy": "Bulbasaur Candy",
			"candy_count": 25,
			"egg": "2 km",
			"spawn_chance": 0.69,
			"avg_spawns": 69,
			"spawn_time": "20:00",
			"multipliers": [
					1.58
			],
			"weaknesses": [
					"Fire",
					"Ice",
					"Flying",
					"Psychic"
			],
			"next_evolution": [
					{
							"num": "002",
							"name": "Ivysaur"
					},
					{
							"num": "003",
							"name": "Venusaur"
					}
			],
			"birth_date": 539530445121
	})
    
    pokemons.push(arr);
    addObject(arr);
})

*/











/*
// Funksiya
var startedTime = new Date();
var monthIndex = startedTime.getMonth();

var monthes = {
    0: "Yanvar",
    1: "Fevral",
    2: "Mart", 
    3: "Aprel",
    4: "May",
    5: "Iyun",
    6: "Iyul",
    7: "Avgust",
    8: "Sentabr",
    9: "Oktabr",
    10: "Noyabr",
    11: "Dekabr",
}

console.log(monthes[monthIndex])
*/



/*
for (var i = 0; i >= -5; i--) {
    console.log(i)
}

*/

/*
for (object of obj) {
    console.log(object);
    var newsImg = document.createElement('img');
    newsImg.src = object.img.url;
    newsImg.alt = object.img.alt;
    newsImg.width = object.img.width;
    newsImg.height = object.img.height;
    
    wrapper.append(newsImg)
    
    for (var genre of object.genres) {
        console.log(genre);
        var newsGenreText = document.createElement('a');
        newsGenreText.href = "#";
        newsGenreText.textContent = genre;
    
        wrapper.append(newsGenreText)
    }
    
    var newsDate = document.createElement('p');
    newsDate.textContent = object.date;
    wrapper.append(newsDate);
    
    var newsTitle = document.createElement('h2');
    newsTitle.textContent = object.title;
    wrapper.append(newsTitle);

}

*/