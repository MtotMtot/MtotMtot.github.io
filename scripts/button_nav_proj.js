/*
    This script handles the content assignment of project data
*/



function LoadProject1() {
    var currently = document.getElementById('info').getAttribute('style');
    var currently = document.getElementById('info1').getAttribute('style');
    if (currently != 'display:none') {
        document.getElementById('info1').setAttribute('style', 'display:none');
    }
    else {
        document.getElementById('info1').setAttribute('style', 'display:block');
    }
}

function LoadProject2() {
    var currently = document.getElementById('info').getAttribute('style');
    var currently = document.getElementById('info2').getAttribute('style');
    if (currently != 'display:none') {
        document.getElementById('info2').setAttribute('style', 'display:none');
    }
    else {
        document.getElementById('info2').setAttribute('style', 'display:block');
    }
}

function LoadProject3() {
    var currently = document.getElementById('info').getAttribute('style');
    var currently = document.getElementById('info3').getAttribute('style');
    if (currently != 'display:none') {
        document.getElementById('info3').setAttribute('style', 'display:none');
    }
    else {
        document.getElementById('info3').setAttribute('style', 'display:block');
    }
}

function LoadProject4() {
    var currently = document.getElementById('info').getAttribute('style');
    var currently = document.getElementById('info4').getAttribute('style');
    if (currently != 'display:none') {
        document.getElementById('info4').setAttribute('style', 'display:none');
    }
    else {
        document.getElementById('info4').setAttribute('style', 'display:block');
    }
}

function LoadProject5() {
    var currently = document.getElementById('info5').getAttribute('style');
    if (currently != 'display:none') {
        document.getElementById('info5').setAttribute('style', 'display:none');
    }
    else {
        document.getElementById('info5').setAttribute('style', 'display:block');
    }
}

/*      /// OLD PROJECT NAV CODE.
const ProjectNames = 
[
    "api",
    "BF",
    "net",
    "PP",
    "ST",
    "vpa"
]

let ProjectText = [];

let projTextArea = document.getElementById("project_data_area");

/// Adds the included text data into the array of text. 
for(let i = 0; i < ProjectNames.length; ++i)
{
    ProjectText.push("");
    fetch("./Data/pages/projects/" + ProjectNames[i] + ".html")
    .then( r => r.text() )
    .then( t => ProjectText[i] = t )
}

let bLock = false;
let prevBtnIndex = -1; 

function LoadProject(button, btnIndex)
{
    if(button.getAttribute("class") == "proj-button-active") /// case where you select the active button
    {
        var x = document.getElementsByClassName("proj-button-active");

        x[0].className = "proj-button";
        projTextArea.innerHTML = "";
        projTextArea.style.opacity = 0;
    }
    else 
    {
        var x = document.getElementsByClassName("proj-button-active");
        if(x.length != 0) /// case where another project is currently active and being displayed.
        {
            x[0].className = "proj-button";
            projTextArea.innerHTML = "";
            projTextArea.style.opacity = 0;
        }

        /// Set this button as the active display
        projTextArea.innerHTML = ProjectText[btnIndex];
        projTextArea.style.opacity = 1;
        document.getElementById(button.getAttribute("id")).className = "proj-button-active";
    }
}
*/