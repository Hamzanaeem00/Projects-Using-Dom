function getAndUpdate(){ 
    console.log('updating...');
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray=[];
        itemJsonArray.push([tit,desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray ))
    }
    else{
        itemJsonArrayStr =localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr)
        itemJsonArray.push([tit,desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray ))
    }
    update();
    
}

function update(){
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray=[];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray ))
    }
    else{
        itemJsonArrayStr =localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr)
    }

 //Populate the Table

    let tableBody = document.getElementById('tableBody');
    let str ="";
    itemJsonArray.forEach((element, index) => {
        str +=
        `<tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td> <button class="btn btn-primary btn-sm" onclick ="deleted(${index})"> Delete</button></td>
      </tr>
      `
        });
    tableBody.innerHTML = str;
    
}
    add= document.getElementById('add');
add.addEventListener('click', getAndUpdate);

update();

  

function deleted(itemIndex){
    console.log("Delete", itemIndex);
    itemJsonArrayStr =localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr)
        //delete index element from the array
        itemJsonArray.splice(itemIndex, 1)
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray ));
        update();
}

function clearstorage(){
    if(confirm("Do you really want to clear?")){
    console.log('clearing storage');
    localStorage.clear();
    update();
    }
}

// function mySearch() {
//     var input, filter, td, li, a, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//         // ul = document.getElementById("myUL");
//     td = ul.getElementsByTagName("td");
//     for (i = 0; i < td.length; i++) {
//         a = td[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }
    


