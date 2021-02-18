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
    console.log(combinedData)
    let starWars = '';
    // console.log(`obj.homeworld = ${obj.homeworld}`)
    // console.log(`planetData: ${planetObj.url}`)
    starWars += `
    <div class="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
        <img class="w-full" src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg" alt="" />
        <div class="badge absolute top-0 right-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">2021</div>
        <div class="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
            <span class="mr-1 p-1 px-2 font-bold">Height</span>
            <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">Mass</span>
            <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">DOB</span>
        </div>
        <div class="desc p-4 text-gray-800">
            <a href="https://www.youtube.com/watch?v=dvqT-E74Qlo" target="_new" class="title font-bold block cursor-pointer hover:underline"></a>
            <a id="home-world" href="" target="_new" class="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"></a>
            <span class="description text-sm block py-2 border-gray-400 mb-2">lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !</span>
        </div>
    </div>
    `
    document.getElementById('star-wars').innerHTML += starWars;
}

render();