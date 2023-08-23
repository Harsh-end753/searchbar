var category = "";
function cat() {
    category = document.getElementById('select').value;


    if (category == "searchByName") {
        document.getElementById('input').placeholder = "Enter name..."
    }
    else if (category == "searchByDegree") {
        document.getElementById('input').placeholder = "Enter Degree..."
    }
    else if (category == "none") {
        document.getElementById('input').placeholder = "Select Category..."

    }
    else {
        document.getElementById('input').placeholder = "Enter Profession..."
    }
}

function search() {
    var userinput = document.getElementById('input').value.toUpperCase();

    var mytable = document.getElementById('table');
    var alltr = mytable.getElementsByTagName('tr');

    for (i = 1; i < alltr.length; i++) {
        var name = alltr[i].getElementsByTagName('td')[0].innerHTML;
        name = name.toUpperCase();
        var degree = alltr[i].getElementsByTagName('td')[1].innerHTML;
        degree = degree.toUpperCase();
        var profession = alltr[i].getElementsByTagName('td')[2].innerHTML;
        profession = profession.toUpperCase();


        if (category == "searchByName") {
            if (name.indexOf(userinput) > -1) {
                alltr[i].style.display = "";
            }
            else {
                alltr[i].style.display = "none";

            }
        }
        else if (category == "searchByDegree") {
            if (degree.indexOf(userinput) > -1) {
                alltr[i].style.display = "";
            }
            else {
                alltr[i].style.display = "none";

            }
        }
        else {
            if (profession.indexOf(userinput) > -1) {
                alltr[i].style.display = "";
            }
            else {
                alltr[i].style.display = "none";

            }
        }






    }




}
