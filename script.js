"use strict";

const $tableElement = $("#pixelCanvas");
const $inputHeight = $("#inputHeight");
const $inputWidth = $("#inputWidth");
const $colorPicker = $("#colorPicker");

$("#sizePicker").submit((event) => {
    event.preventDefault();

    let width = $inputWidth.val();
    let height = $inputHeight.val();

    $tableElement.html(""); //clear
    document.getElementById("salvar").style.visibility = "visible";
    makeGrid(height, width);
    addCellClickListener();
});

function salvarTabela() {
    document.getElementById("tableText").innerText =
        "<table style='border-spacing: 0px;height: 720px; width: 720px;'>" +
        document.getElementById("pixelCanvas").innerHTML +
        "</table>";
    document.getElementById("generateCode").style.visibility = "visible";

}


function makeGrid(height, width) {
    for (let i = 0; i < height; i++) {
        $tableElement.append("<tr></tr>");
    }

    for (let i = 0; i < width; i++) {
        $("tr").append("<td></td>");
    }
    document.getElementById("generateCode").style.visibility = "hidden";
}

function addCellClickListener() {
    $("td").click((event) => {
        let color = $colorPicker.val();
        $(event.currentTarget).css("background-color", color);
    });
}