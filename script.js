const barcodelist = ["l","I"];

function makeid() {
    const barcodeid = [];
    var idList = document.getElementById("idList")
    for (let i = 0; i <= 12; i++) {
        var random_index = Math.floor(Math.random() * barcodelist.length);
        var random_id = barcodelist[random_index];
        barcodeid.push(random_id)
    }
    var newId = document.createElement("li");
    newId.textContent = barcodeid.join('');

    idList.appendChild(newId);
    newId.addEventListener("click",function () {
        newId.classList.toggle("competed");
    });
}
