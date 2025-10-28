
//Implemented JavaScript code on the philosophy section of the index.html page. Code allows user to click a button and recieve an inspirational teaching quote. 

// Inspirational teaching quotes bank - 6 hand selected quotes which align with my teaching practice
const quote = [
    "The art of teaching is the art of assisting discovery - Mark Van Doren",
    "A good teacher can inspire hope, ignite the imagination, and instill a love of learning - Brad Henry",
    "Education is not the filling of a pail, but the lighting of a fire - William Butler Yeats",
    "The best teachers show you where to look, but don’t tell you what to see -  Alexandra K. Trenfor",
    "A teachers influence extends beyond the classroom, into the realms of the future, unseen but profoundly felt - F. Sionil Jose",
    "Educators who put relationships first don't just have students for one year, they have students who view them as their teacher for life - Justin Tare"
];

//JaveScriot code to randomly select a quote from the bank and display on screen in itlaics
function generateQuote() {
    const display = document.getElementById("quoteDisplay");
    const randomIndex = Math.floor(Math.random() * quote.length);
    display.style.opacity = 0;
    setTimeout(() => {
        display.innerText = quote[randomIndex];
        display.style.opacity = 1;
    }, 300);
}


