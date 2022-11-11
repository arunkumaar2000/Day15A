var tableData =[
    {
     "Name": "Bertrand.Miller",
     "Place": "Tarynside",
     "Phone": "381-223-0427 x2808",
     "id": "1"
    },
    {
     "Name": "Ford_Rau27",
     "Place": "Muellerworth",
     "Phone": "745-990-5638 x98536",
     "id": "2"
    },
    {
     "Name": "Jean.Hilll92",
     "Place": "New Amanda",
     "Phone": "880.370.3045",
     "id": "3"
    },
    {
     "Name": "Lavonne.Rutherford",
     "Place": "Runolfssonstead",
     "Phone": "(340) 618-3291",
     "id": "4"
    },
    {
     "Name": "Damon_VonRueden38",
     "Place": "Lewisville",
     "Phone": "(544) 552-3747",
     "id": "5"
    },
    {
     "Name": "Janiya.Streich41",
     "Place": "Port Zoeystad",
     "Phone": "308-240-3658",
     "id": "6"
    },
    {
     "Name": "Alek_Lemke60",
     "Place": "New Elitown",
     "Phone": "1-980-949-3725 x78664",
     "id": "7"
    },
    {
     "Name": "Celestino31",
     "Place": "Connland",
     "Phone": "279.977.8139",
     "id": "8"
    },
    {
     "Name": "Adalberto.Toy87",
     "Place": "North Kyrafort",
     "Phone": "242.350.9613 x0159",
    "id": "9"
    },
    {
     "Name": "Shannon_Lowe7",
     "Place": "South Wymanhaven",
     "Phone": "(828) 317-8150 x2944",
     "id": "10"
    },
    {
     "Name": "Gilbert58",
     "Place": "North D'angelofurt",
     "Phone": "(873) 754-6965 x77282",
     "id": "11"
    },
    {
     "Name": "Lonzo.OConner",
     "Place": "Weberport",
     "Phone": "1-681-583-1255 x3123",
     "id": "12"
    },
    {
     "Name": "Larry69",
     "Place": "Fort Antonette",
     "Phone": "(692) 725-8398 x36238",
     "id": "13"
    },
    {
     "Name": "Elsa_Braun57",
     "Place": "New Tyreehaven",
     "Phone": "942-431-3343 x70474",
     "id": "14"
    },
    {
     "Name": "Ayla.Balistreri98",
     "Place": "Cerritos",
     "Phone": "(654) 318-3816",
     "id": "15"
    },
   ]
console.log(typeof tableData)
var state = {
'querySet': tableData,
'page': 1,
'rows': 5,
'window': 5,
}

buildTable()

function pagination(querySet, page, rows) {

var trimStart = (page - 1) * rows
var trimEnd = trimStart + rows

var trimmedData = querySet.slice(trimStart, trimEnd)

var pages = Math.round(querySet.length / rows);

return {
    'querySet': trimmedData,
    'pages': pages,
}
}

function pageButtons(pages) {
var wrapper = document.getElementById('pagination-wrapper')

wrapper.innerHTML = ``
console.log('Pages:', pages)

var maxLeft = (state.page - Math.floor(state.window / 2))
var maxRight = (state.page + Math.floor(state.window / 2))

if (maxLeft < 1) {
    maxLeft = 1
    maxRight = state.window
}

if (maxRight > pages) {
    maxLeft = pages - (state.window - 1)
    
    if (maxLeft < 1){
        maxLeft = 1
    }
    maxRight = pages
}



for (var page = maxLeft; page <= maxRight; page++) {
    wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`
}

if (state.page != 1) {
    wrapper.innerHTML = `<button value=${1} class="page btn btn-sm btn-info">&#171; First</button>` + wrapper.innerHTML
}

if (state.page != pages) {
    wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-info">Last &#187;</button>`
}

$('.page').on('click', function() {
    $('#table-body').empty()

    state.page = Number($(this).val())

    buildTable()
})

}

function buildTable() {
var table = $('#table-body')

var data = pagination(state.querySet, state.page, state.rows)
var myList = data.querySet;
var i = 1;
for ( i  in myList) {
    var row = `<tr>
              <td>${myList[i].id}</td>
              <td>${myList[i].Name}</td>
              <td>${myList[i].Place}</td>
              <td>${myList[i].Phone}</td>
              </tr>`
    
    table.append(row)
}

pageButtons(data.pages)
}