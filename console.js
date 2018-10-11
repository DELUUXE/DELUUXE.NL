consolefun();
setInterval(function() {
    consolefun();
}, 1000);

function consolefun() {
    var css = "font-family: 'Roboto', sans-serif;color:#00adff;font-size:2em;";
    console.clear();
    console.log("%cWow, you have found your way into the developer tools, congrats. 🎉", css);
}