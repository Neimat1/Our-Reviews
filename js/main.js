const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
        },
];

/**/

let currentPerson=0;

let img = document.querySelector(".author-img");
let fullName = document.querySelector(".author-name");
let job = document.querySelector(".author-job");
let review = document.querySelector(".author-review");

function showPerson(){
    img.src             = reviews[currentPerson].img;
    fullName.innerHTML  = reviews[currentPerson].name;
    job.innerHTML       = reviews[currentPerson].job;
    review.innerHTML    = reviews[currentPerson].text;
}

document.addEventListener("DOMContentLoaded",showPerson)
let prevBtn = document.querySelector(".prev-button");
let nextBtn = document.querySelector(".next-button");
let randomBtn = document.querySelector(".random-button");

prevBtn.addEventListener("click",prevReview);
nextBtn.addEventListener("click",nextReview);
randomBtn.addEventListener("click",randomReview);
document.addEventListener('keydown',function(eventInfo){
    if(eventInfo.key=="ArrowLeft")
        prevReview();
    if(eventInfo.key=="ArrowRight")
        nextReview();
})


function nextReview(){
    currentPerson++;
    if(currentPerson==reviews.length){
        currentPerson=0;
    }
    showPerson();
}
function randomReview(){
    currentPerson=Math.floor(Math.random() * reviews.length);
    showPerson();
}
function prevReview(){
    currentPerson--;
    if(currentPerson==-1){
        currentPerson=reviews.length-1;
    }
    showPerson();
}

