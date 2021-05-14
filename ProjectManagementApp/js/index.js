var projectListObject = [
    {
        name: 'Project 1'
    },
    {
        name: 'Project 2'
    }
];

function toggleMenu() {
    var toggleVar = document.getElementsByClassName('menu-block')[0];

    if (toggleVar.style.display == 'none') {
        toggleVar.style.display = '';
    } else {
        toggleVar.style.display = "none";
    }
}

function showProjects(listId) {
    

    projectListObject.forEach(function(value, index){
        console.log(value);
        var template = '<div class="project-card">' +
                    value.name +
                    '<ul>' +
                    '<li>Task 1</li>' +
                    '<li>Task 2</li>' +
                    '</ul>' +
                    '</div>';
        document.getElementById(listId).innerHTML += template;
    });
}

function removeCard(element){
    document.getElementById(element.id).innerHTML = '';
    
}

var id = 1;
function addBoard(name){
    var listId = 'projectList_'+id;
    var boardId = 'board_'+id;
    var templateBlock = '<section class="board-block" id='+ boardId +'>' +
                        '<div>' + 
                        name.value +
                        '<button onclick="removeCard('+ listId +')">Remove</button></div>' +
                        '<div class="project-block" id='+ listId +'>' +
                        '</div>' +
                        '</section>';
    document.getElementById('boardBlockList').innerHTML += templateBlock;
    showProjects(listId);
    id++;
    document.getElementById('menuList').innerHTML += '<li onclick="loadMenu('+ boardId +')">'+ name.value +'</li>';
}

document.getElementById('add-board-btn').addEventListener('click', function(){
    document.getElementById('newBoardName').value = '';
});

function loadMenu(element){
    console.log(element.id)
    document.getElementById(element.id).style.display = 'block';
}