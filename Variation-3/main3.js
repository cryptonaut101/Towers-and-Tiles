const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

draggableElements.forEach(elem => {
    elem.addEventListener("dragstart", dragStart);
    // elem.addEventListener("drag", drag);
    // elem.addEventListener("dragend", dragEnd);
});

droppableElements.forEach(elem => {
    elem.addEventListener("dragenter", dragEnter);
    elem.addEventListener("dragover", dragOver);
    elem.addEventListener("dragleave", dragLeave);
    elem.addEventListener("drop", drop);
});

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.target.classList.remove("droppable-hover");

    // get the draggableElement
    const draggableElementData = event.dataTransfer.getData("text");
    const draggable = document.getElementById(draggableElementData);

    event.target.appendChild(draggable);

    draggable.classList.remove('hide');
}

$(function () {
    $(".draggable").draggable({            
        stack: ".draggable"
    });
});

function dragEnter(event) {
    event.target.classList.add("droppable-hover");
}

function dragLeave(event) {
    event.target.classList.remove("droppable-hover");
}

// old drop code - didn't allow pieces to move around after initial placement:
/*
    event.preventDefault();
    // removes effects when hover wrongly
    event.target.classList.remove("droppable-hover");
    // below is to get the value of the item: can change to fit requirements
    const draggableElementData = event.dataTransfer.getData("text");
    // changes background color of the base squares
    //event.target.style.backgroundColor = draggableElementData;
    const droppableElementData = event.target.getAttribute("data-draggable-id");

    // comparing for restrictions
    //if(draggableElementData === droppableElementData) {
        //event.target.classList.add("dropped");
    const draggableElement = document.getElementById(draggableElementData);
        //event.target.style.backgroundColor = draggableElement.style.color;
        // more general way to do above line for non-inline style
        // event.target.style.backgroundColor = window.getComputedStyle(draggableElement).color;
    const width = draggableElement.style.width
    const height = draggableElement.style.height
    draggableElement.classList.add("dragged");
        // below turns it into not draggable element
        // draggableElement.setAttribute("draggable", "false");
    
    event.target.insertAdjacentHTML("afterbegin", `<img src="https://tinyurl.com/${draggableElementData}" style="width:${width}; height:${height}; z-index:1;">`)
    //}
    */

    /* dice */

    // Function to roll the dice
    function rollTheDice() {
        setTimeout(function () {
            var randomNumber1 = Math.floor(Math.random() * 6) + 1;

            document.querySelector(".img1").setAttribute("src",
                "dice" + randomNumber1 + ".png");
        }, 2500);
    }
