
function myFunction() {
    let moreContent = document.getElementById("more");
    let clickBtn = document.getElementById("myBtn");

    if (moreContent.style.display === 'none') {
        moreContent.style.display = 'block';
        clickBtn.innerHTML = "Load Less";
    }
    else {
        moreContent.style.display = 'none';
        clickBtn.innerHTML = "Load More";
    }
  
};


function myLearn() {
    document.getElementById("learnMoreContent_1").style.display = 'block';
    document.getElementById("courseFirst").style.display = 'none';
}

function myBack() {
    document.getElementById("learnMoreContent_1").style.display = 'none';
    document.getElementById("courseFirst").style.display = 'block';
}

function myLearn2() {
    document.getElementById("learnMoreContent_2").style.display = 'block';
    document.getElementById("courseSecond").style.display = 'none';
}

function myBack2() {
    document.getElementById("learnMoreContent_2").style.display = 'none';
    document.getElementById("courseSecond").style.display = 'block';
}

function myLearn3() {
    document.getElementById("learnMoreContent_3").style.display = 'block';
    document.getElementById("courseThird").style.display = 'none';
}

function myBack3() {
    document.getElementById("learnMoreContent_3").style.display = 'none';
    document.getElementById("courseThird").style.display = 'block';
}

function myLearn4() {
    document.getElementById("learnMoreContent_4").style.display = 'block';
    document.getElementById("courseFourth").style.display = 'none';
}

function myBack4() {
    document.getElementById("learnMoreContent_4").style.display = 'none';
    document.getElementById("courseFourth").style.display = 'block';
}