
const reviews =[ 
    {
    id: 1,
    name: "Sara",
    job: "Web-devloper",
    img: "https://static.toiimg.com/photo/90399663.cms",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error suscipit quos illum itaque fugit ad id ullam facere, optio porro voluptas cum repudiandae quo vel culpa nemo fugiat commodi quibusdam!" ,
},
{
    id: 2,
    name: "Lana",
    job: "Designer",
    img: "https://accessaa.co.uk/wp-content/uploads/2021/12/Claire-Barnett.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error suscipit quos illum itaque fugit ad id ullam facere, optio porro voluptas cum repudiandae quo vel culpa nemo fugiat commodi quibusdam!" ,
},

{
    id: 3,
    name: "Muddassir",
    job: "Data base",
    img: "https://www.mensjournal.com/wp-content/uploads/mf/1280-selfie.jpg?w=900&quality=86&strip=all",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error suscipit quos illum itaque fugit ad id ullam facere, optio porro voluptas cum repudiandae quo vel culpa nemo fugiat commodi quibusdam!" ,
    },

    {
    id: 4,
    name: "Hamza",
    job: "SQA",
    img: "https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error suscipit quos illum itaque fugit ad id ullam facere, optio porro voluptas cum repudiandae quo vel culpa nemo fugiat commodi quibusdam!" ,
} 
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");


//set starting item 

let currentItem =0;

window.addEventListener("DOMContentLoaded", function(){
   showPerson(currentItem)

});

//show person based on item

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent=item.name;
    job.textContent=item.job
    text.textContent=item.text

}

//show next person

nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem >reviews.length-1){
        
    }
    showPerson(currentItem);
});

