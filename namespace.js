//namespace.js

//Assignment NameSpacing

//1. create a div,
//2. give it the CSS className "box",
//3. add your username as text,
//4. append the div to the element with the id "boxes",
//5. add three event listeners. The listeners it needs are a click listener, a mouseover listener, and a mouseout listener.
//6. The mouseover and mouseout functions will toggle a CSS className called "highlight".
//7. Your click function should change the color of your border and the background-color of the box.

var TIBU0003 = {
    init: function () {

        let childDiv = document.createElement("div"); //1.div

            childDiv.classList.add("box"); //2.className "box"

            childDiv.textContent = "TIBU0003"; //3.username as text

        let boxesDiv = document.querySelector("#boxes"); //4.element id "boxes"

            childDiv.addEventListener("click", TIBU0003.boxesClick); //5. event click listener

            childDiv.addEventListener("mouseover", TIBU0003.boxesMouseOver); //5. event mouseover listener

            childDiv.addEventListener("mouseout", TIBU0003.boxesMouseOut); //5. event mouseout listener

            boxesDiv.appendChild(childDiv);
    },
    
    //7.function change the colour border and background
    boxesClick: function (ev) {
        ev.currentTarget.style.borderColor = "#000000";
        ev.currentTarget.style.backgroundColor = "#00CC00";
    },

    //6.mouseover and mouseout function, "hightlight" 
    boxesMouseOver: function (ev) {
        ev.currentTarget.classList.toggle("highlight");
    },

    boxesMouseOut: function (ev) {
        ev.currentTarget.classList.toggle("highlight");
    }
}