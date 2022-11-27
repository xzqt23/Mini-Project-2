
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