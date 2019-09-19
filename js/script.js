
window.onload = function() {
    var postButton = document.getElementsByClassName("submitButton")[0];
    var listDiv = document.getElementsByClassName("panel-body listOfTodos")[0];
    var list = document.createElement("UL");
    list.setAttribute("id", "myUL");
    listDiv.appendChild(list);
    postButton.addEventListener("click", ( event ) => {
        event.preventDefault();
        let toDo = document.createElement("LI");
        let textArea = document.getElementsByClassName("newTodo form-control")[0];
        let text = document.createTextNode(textArea.value);
        let input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        toDo.appendChild(input);
        toDo.appendChild(text);
        list.appendChild(toDo);
        textArea.value = "";
    });

    var clearButton = document.getElementsByClassName("clearButton btn-info")[0];
    clearButton.addEventListener("click", ( event )=> {
        let items = list.getElementsByTagName("LI");
        for (var i = 0; i < items.length; ++i) {
            let element = items[i];
            let input = element.getElementsByTagName("input")[0];
            input.checked = false;
          }
    });
    var markButton = document.getElementsByClassName("markAllButton btn-success")[0];
    markButton.addEventListener("click", ( event )=> {
        let items = list.getElementsByTagName("LI");
        for (var i = 0; i < items.length; ++i) {
            let element = items[i];
            let input = element.getElementsByTagName("input")[0];
            input.checked = true;
          }
    });
    var deleteButton = document.getElementsByClassName("deleteButton btn-danger")[0];
    deleteButton.addEventListener("click", ( event )=> {
        while( list.firstChild ) {
            list.removeChild( list.firstChild );
          }
    });
}