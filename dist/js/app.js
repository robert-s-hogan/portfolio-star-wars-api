let dataArray = [];

async function fetchPeopleData() {

    const responsePeople = await fetch('https://swapi.dev/api/people/');
    const data = await responsePeople.json();

    // console.log(data)

    const responsePlanet = await fetch('https://swapi.dev/api/planets/');
    const planetData = await responsePlanet.json();

    data.results.forEach( obj => {
    let starWars = '';
        dataArray.push(obj);
        planetData.results.forEach( planetObj => {
            if (obj.homeworld === planetObj.url)
                // console.log(`obj.homeworld = ${obj.homeworld}`)
                // console.log(`planetData: ${planetObj.url}`)
                starWars += `
                <div class="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
                    <img class="w-full" src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg" alt="" />
                    <div class="badge absolute top-0 right-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">${obj.birth_year}</div>
                    <div class="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
                        <span class="mr-1 p-1 px-2 font-bold">Height ${obj.height}</span>
                        <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">Mass ${obj.mass}</span>
                        <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">DOB ${obj.birth_year}</span>
                    </div>
                    <div class="desc p-4 text-gray-800">
                        <a href="https://www.youtube.com/watch?v=dvqT-E74Qlo" target="_new" class="title font-bold block cursor-pointer hover:underline">${obj.name}</a>
                        <a id="home-world" href="${obj.homeworld}" target="_new" class="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer">${planetObj.name}</a>
                        <span class="description text-sm block py-2 border-gray-400 mb-2">lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !</span>
                    </div>
                </div>
                `
                dataArray.push(planetObj)
        })
        // console.log(dataArray)
        document.getElementById('star-wars').innerHTML += starWars;
    })
    console.log(dataArray)
}

// async function render() {

//     const data = await fetchPeopleData();
//     let starWars = '';
//     console.log(data)
//     data.results.forEach(obj => {
//         starWars += `
//         <div class="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
//             <img class="w-full" src="https://i.ytimg.com/vi/qew27BNl7io/maxresdefault.jpg" alt="" />
//             <div class="badge absolute top-0 right-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">${obj.birth_year}</div>
//             <div class="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
//                 <span class="mr-1 p-1 px-2 font-bold">${obj.height} Height</span>
//                 <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">${obj.mass} Mass</span>
//                 <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">${obj.birth_year} DOB</span>
//             </div>
//             <div class="desc p-4 text-gray-800">
//                 <a href="https://www.youtube.com/watch?v=dvqT-E74Qlo" target="_new" class="title font-bold block cursor-pointer hover:underline">${obj.name}</a>
//                 <a id="home-world" href="${obj.homeworld}" target="_new" class="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer">${obj.homeworld}</a>
//                 <span class="description text-sm block py-2 border-gray-400 mb-2">lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !</span>
//             </div>
//         </div>
//         `
//         document.getElementById('star-wars').innerHTML = starWars;
//     });
// }

fetchPeopleData();