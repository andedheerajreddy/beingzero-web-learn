let todo;
let all = $(".all")
let allItemsHtml = ``;
todo = localStorage.getItem("todo");
if (!todo || todo.length == 0) {
    todo = [];
    localStorage.setItem('todo', todo);
} else
    todo = JSON.parse(todo);
// let active = $(".active");
// let activeItemsHtml = ``;
// let unActive = $(".active");
// let unActiveItemsHtml = ``;

loaddata();

// $('.list-group-item').click(function(e) {
//     let value = $(this).attr("id");
//     todo[value].isActive = false
//     localStorage.setItem("todo", JSON.stringify(todo));
//     alert(todo[value].isActive = false)
//     loaddata();
//     // allItemsHtml = ``;
// });

$('.todotext').on('keypress', function(e) {
    var code = e.keyCode || e.which;
    if (code == 13) {
        if ($('.todotext').val() != '') {
            todo.push({
                title: $('.todotext').val(),
                isActive: true
            });
            localStorage.setItem("todo", JSON.stringify(todo));
        }
        loaddata();
    }
});

function loaddata() {
    allItemsHtml = ``;

    for (let i = 0; i < todo.length; i++) {
        if (todo[i].isActive)
            allItemsHtml += ` <li class="list-group-item" id=${i} style="flex:1 1 auto">${todo[i].title} <button type="button" class="close" aria-label="Close">
            <span aria-hidden="true" class=${i}>&times;</span>
          </button></li>`;
        else {
            allItemsHtml += ` <li class="list-group-item" id=${i} ><del>${todo[i].title}</del> <button type="button" class="close" aria-label="Close">
            <span aria-hidden="true" class=${i}>&times;</span>
          </button></li>`;

        }
        // if (todo[i].isActive) {
        //     activeItemsHtml += ` <li class="list-group-item id=${i} ">${todo[i].title}</li>`;
        // } else {
        //     unActiveItemsHtml += ` <li class="list-group-item id=${i} ">${todo[i].title}</li>`;
        // }
    }
    all.html(allItemsHtml);
    $("button").click(() => {
        let value = $(this).attr("class");
        todo.splice(value, 1);
        localStorage.setItem("todo", JSON.stringify(todo));
        loaddata();

    })
    $('.list-group-item').click(function(e) {
        let value = $(this).attr("id");
        if (todo[value].isActive) {
            // todo.splice(value, 1);
            todo[value].isActive = false
        } else todo[value].isActive = true
        localStorage.setItem("todo", JSON.stringify(todo));
        loaddata();
        // allItemsHtml = ``;
    });

}