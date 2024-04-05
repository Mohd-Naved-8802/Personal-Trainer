// MENU CLICK ACTIVE CODE ON CLICK START
function home(){
    document.getElementById("home").classList.add("my-active");
    document.getElementById("goals").classList.remove("my-active");
    document.getElementById("effects").classList.remove("my-active");
    document.getElementById("about").classList.remove("my-active");
    document.getElementById("opinion").classList.remove("my-active");
    document.getElementById("plans").classList.remove("my-active");
    document.getElementById("faq").classList.remove("my-active");
    document.getElementById("contact").classList.remove("my-active");
}

function goals(){
    document.getElementById("goals").classList.add("my-active");
    document.getElementById("home").classList.remove("my-active");
    document.getElementById("effects").classList.remove("my-active");
    document.getElementById("about").classList.remove("my-active");
    document.getElementById("opinion").classList.remove("my-active");
    document.getElementById("plans").classList.remove("my-active");
    document.getElementById("faq").classList.remove("my-active");
    document.getElementById("contact").classList.remove("my-active");
}

function effects(){
    document.getElementById("effects").classList.add("my-active");
    document.getElementById("goals").classList.remove("my-active");
    document.getElementById("home").classList.remove("my-active");
    document.getElementById("about").classList.remove("my-active");
    document.getElementById("opinion").classList.remove("my-active");
    document.getElementById("plans").classList.remove("my-active");
    document.getElementById("faq").classList.remove("my-active");
    document.getElementById("contact").classList.remove("my-active");
}

function about(){
    document.getElementById("about").classList.add("my-active");
    document.getElementById("effects").classList.remove("my-active");
    document.getElementById("goals").classList.remove("my-active");
    document.getElementById("home").classList.remove("my-active");
    document.getElementById("opinion").classList.remove("my-active");
    document.getElementById("plans").classList.remove("my-active");
    document.getElementById("faq").classList.remove("my-active");
    document.getElementById("contact").classList.remove("my-active");
}

function opinion(){
    document.getElementById("opinion").classList.add("my-active");
    document.getElementById("about").classList.remove("my-active");
    document.getElementById("effects").classList.remove("my-active");
    document.getElementById("goals").classList.remove("my-active");
    document.getElementById("home").classList.remove("my-active");
    document.getElementById("plans").classList.remove("my-active");
    document.getElementById("faq").classList.remove("my-active");
    document.getElementById("contact").classList.remove("my-active");
}

function plans(){
    document.getElementById("plans").classList.add("my-active");
    document.getElementById("opinion").classList.remove("my-active");
    document.getElementById("about").classList.remove("my-active");
    document.getElementById("effects").classList.remove("my-active");
    document.getElementById("goals").classList.remove("my-active");
    document.getElementById("home").classList.remove("my-active");
    document.getElementById("faq").classList.remove("my-active");
    document.getElementById("contact").classList.remove("my-active");
}

function faq(){
    document.getElementById("faq").classList.add("my-active");
    document.getElementById("plans").classList.remove("my-active");
    document.getElementById("opinion").classList.remove("my-active");
    document.getElementById("about").classList.remove("my-active");
    document.getElementById("effects").classList.remove("my-active");
    document.getElementById("goals").classList.remove("my-active");
    document.getElementById("home").classList.remove("my-active");
    document.getElementById("contact").classList.remove("my-active");
}

function contact(){
    document.getElementById("contact").classList.add("my-active");
    document.getElementById("faq").classList.remove("my-active");
    document.getElementById("plans").classList.remove("my-active");
    document.getElementById("opinion").classList.remove("my-active");
    document.getElementById("about").classList.remove("my-active");
    document.getElementById("effects").classList.remove("my-active");
    document.getElementById("goals").classList.remove("my-active");
    document.getElementById("home").classList.remove("my-active");
}
// MENU CLICK ACTIVE CODE ON CLICK END

// SIDE BAR MENU START
let slider = document.getElementById("menu");
function openMenu(){
    slider.classList.add("slideActive");
}

function closeMenu(){
    slider.classList.remove("slideActive");
}
// SIDE BAR MENU CLOSE


// FOR COUNTER  
$('.counter').counterUp({
    delay: 10,
    time: 2300
});

