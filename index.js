                                        // EXCERCISE 1

let getData = function(url){
    let result = fetch(url);
    result.then(response => 
        {
            if (response.ok){
                return response.json();
            }
            throw new Error(`Error: ${response.status}`);
        })
        .then(data => {
            let dataSort = [];
            for (let i=0; i < data.length; i++){
                if (data[i].title.split('').shift() == 'a'){
                    dataSort.push(data[i]);
                }
            }
            console.log(dataSort)
        })
        .catch(error => console.log(error.message))
}
getData('https://jsonplaceholder.typicode.com/todos/'); 


                                        // EXCERCISE 2

// let getData = async function(url){
//     try{
//         let result = await fetch(url);
//         if (result.ok){
//             let response = await result.json();
//             let dataSort = [];
//             for (let i=0; i < response.length; i++){
//                 if (response[i].title.split('').shift() == 'a'){
//                     dataSort.push(response[i]);
//                 }
//             }
//             console.log(dataSort)
//         }else{
//             throw new Error(`Error: ${response.status}`);
//         }
//     }catch(error){
//         console.log(error.message);
//     }
// }
// getData('https://jsonplaceholder.typicode.com/todos/');


                                        // EXCERCISE 3

// let getData = async function(url){
//     try{
//         let sortBy_a = document.body.querySelector('.user-a');
//         let sortBy_ab = document.body.querySelector('.user-ab');
//         let result = await fetch(url);
//         if (result.ok){
//             let response = await result.json();

//             // for (let i=0; i < response.length; i++){                // перший варіант розвʼязку
//             //     let splittedTitle = response[i].title.split('');
//             //     if(splittedTitle.shift() == 'a' && splittedTitle.shift() == 'b'){
//             //         sortBy_ab.innerHTML = `${sortBy_ab.innerHTML + JSON.stringify(response[i])+'<br>'}`;
//             //         sortBy_a.innerHTML = `${sortBy_a.innerHTML + JSON.stringify(response[i])+'<br>'}`
//             //     }else if(response[i].title.split('').shift() == 'a'){
//             //         sortBy_a.innerHTML = `${sortBy_a.innerHTML + JSON.stringify(response[i])+'<br>'}`
//             //     }else{
//             //         continue
//             //     }
//             // }
            
//             // sortBy_a = response.filter(response => response.title.split('').shift() == 'a');            // другий варіант розвʼязку
//             // for (let i = 0; i < sortBy_a.length; i++){
//             //     document.querySelector('.user-a').innerHTML += `${JSON.stringify(sortBy_a[i])+'<br>'}`;
//             //     if (sortBy_a[i].title.split('')[1] == 'b'){
//             //         document.body.querySelector('.user-ab').innerHTML += `${JSON.stringify(sortBy_a[i])+'<br>'}`;
//             //     }
//             // }
            
//         }else{
//             throw new Error(`Error: ${response.status}`);
//         }
//     }catch(error){
//         console.log(error.message);
//     }
// }
// getData('https://jsonplaceholder.typicode.com/todos/');


                                        // EXCERCISE 4

// let getData = async function(url){
//     try{
//         let sortBy_a = document.body.querySelector('.user-a');
//         let sortBy_ab = document.body.querySelector('.user-ab');
//         let result = await fetch(url);
//         if (result.ok){
//             let response = await result.json();
            
//             sortBy_a = response.filter(response => response.title.split('').shift() == 'a');
//             sortBy_ab = sortBy_a.filter(elem => elem.title.split('')[1] == 'b');

//             let sortBy_a_p = document.createElement('p');
//             let sortBy_ab_p = document.createElement('p');

//             for (let i = 0; i < sortBy_a.length; i++){
//                 sortBy_a_p.innerHTML += `${JSON.stringify(sortBy_a[i])+'<br>'}`;
//                 if (sortBy_a[i].title.split('')[1] == 'b'){
//                     sortBy_ab_p.innerHTML += `${JSON.stringify(sortBy_a[i])+'<br>'}`;
//                 }
//             }

//             document.querySelector('.add-a').onclick = () => {
//                 document.querySelector('.user-a').innerHTML = sortBy_a_p.outerHTML;
//                 document.querySelector('.user-ab').innerHTML = null;
//             }

//             document.querySelector('.add-ab').onclick = () => {
//                 document.querySelector('.user-ab').innerHTML = sortBy_ab_p.outerHTML;
//                 document.querySelector('.user-a').innerHTML = null;
//             }

//             document.querySelector('.add-all').onclick = () => {
//                 document.querySelector('.user-a').innerHTML = sortBy_a_p.outerHTML;
//                 document.querySelector('.user-ab').innerHTML = sortBy_ab_p.outerHTML;
//             }
            
//         }else{
//             throw new Error(`Error: ${response.status}`);
//         }
//     }catch(error){
//         console.log(error);
//     }
// }
// getData('https://jsonplaceholder.typicode.com/todos/');