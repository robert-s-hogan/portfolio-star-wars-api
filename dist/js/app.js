let combinedData = [];
async function fetchData() {

    var apiRequest1 = fetch('https://swapi.dev/api/people/').then(function(response){ 
        return response.json()
    });
    var apiRequest2 = fetch('https://swapi.dev/api/planets/').then(function(response){
            return response.json()
    });
        combinedData = { apiRequest1:{},apiRequest2:{} };
        Promise.all([apiRequest1,apiRequest2]).then(function(values){
        combinedData["apiRequest1"] = values[0].results;
        combinedData["apiRequest2"] = values[1].results;
        // console.log(combinedData)
        return combinedData;
    });
}
    // data.results.forEach( obj => {
    //     dataArray.push(obj);
    //     planetData.results.forEach( planetObj => {
    //         if (obj.homeworld === planetObj.url) {
    //             // console.log(planetObj)
    //             console.log(planetObj)
    //         }
    //     })
    // })

async function render() {
    const data = await fetchData();
    // console.log(combinedData)

}

render();