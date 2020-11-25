function lightswitch() {
    document.querySelector("img.lightswitch").src = "lightswitchClick.png"
}

document.querySelector("img.lightswitch").addEventListener("click", lightswitch)



function changeVideo(videoName) {
    document.getElementById("color").style.display = "none";
    var tvChannel = document.getElementById("tvChannel");
    tvChannel.style.visibility = "visible";
    tvChannel.src = videoName;
    while (tvChannel.hasChildNodes()) {
        tvChannel.removeChild(tvChannel.firstChild);
    }
    if (videoName == "icebells.mp4") {
        showSub("pizzacats.vtt")
    }
}


function changeBg() { //hur kan jag göra den som en loop?
    var wallpaper = ["wallpaper1.jpg", "wallpaper.jpg", "wallpaper4.jpg"]
    var n = Math.floor(Math.random() * 3);
    document.getElementById("wall").style.backgroundImage = 'url(' + wallpaper[n] + ')'; //får inte till det med tagnamn
}

function showSub(subtitleFile) {

    let subtitle = document.createElement("track");
    subtitle.setAttribute("src", subtitleFile);
    subtitle.setAttribute("kind", "subtitles")
    subtitle.setAttribute("mode", "showing")
    subtitle.setAttribute("id", "subtitle")
    subtitle.setAttribute("default", "default")
    let tvChannel = document.getElementById("tvChannel");
    tvChannel.appendChild(subtitle);
}

function turnOff() {
    var tvChannel = document.getElementById("tvChannel");
    tvChannel.pause()
    tvChannel.style.visibility = "hidden";
}

var button = document.getElementById("button1");
button.addEventListener("click", function () {
    changeVideo("icebells.mp4");
}); //jag gör en anonym funktion för annars kan jag inte skicka in en parameter.


var button2 = document.getElementById("button2");
button2.addEventListener("click", function () {
    changeVideo("sun.mp4");
});

var button3 = document.getElementById("button3");
button3.addEventListener("click", function () {
    changeVideo("slowsun.mp4");
});

var button4 = document.getElementById("button4");
button4.addEventListener("click", function () {
    changeVideo("wiggelysticks.MP4");
});

var button5 = document.getElementById("button5");
button5.addEventListener("click", function () {
    changeVideo("green.mp4");
});

var button6 = document.getElementById("button6");
button6.addEventListener("click", function () {
    turnOff();document.getElementById("color").style.display = "block";
});




var buttonOff = document.getElementById("buttonOff");
buttonOff.addEventListener("click", changeBg);
buttonOff.addEventListener("click", turnOff);

function loadPainting() {
    var paintings = ["water.mp4", "icewaves.mp4", "wind.mp4"];
    var paintingbutton = document.getElementById("paintingbutton");
    var i = -1
    paintingbutton.addEventListener("click", changePainting);


    function changePainting() { //skitfult,fixa
        i++;
        if (i == paintings.length) {
            i = 0;
        };
        var painting = document.getElementById("painting");
        painting.style.display = "block";
        painting.src = paintings[i];


    }
}




function valjfarg() {
    let valdfarg = document.querySelector("input.color").value;
    let fargenfinns = false
    while (fargenfinns == false) {
        for (let i = 0; i < CSS_COLOR_NAMES.length; i++) {

            if (valdfarg.toUpperCase() == CSS_COLOR_NAMES[i].toUpperCase()) {
                document.body.style.backgroundColor = valdfarg;
                fargenfinns = true;
                break;
            }
        }
        if (fargenfinns == false) {
            alert("färgen finns inte");
            break;
        }
    }
}

loadPainting()

const CSS_COLOR_NAMES = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
];