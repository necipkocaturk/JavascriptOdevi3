let btnDOM = document.querySelector('#liveToastBtn')
let listDOM = document.querySelector('#list')
let taskDOM = document.querySelector('#task')
let ullength = document.getElementsByTagName("li")

for(let i=0; i< ullength.length; i++){
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    ullength[i].append(closeButton);
    ullength[i].onclick = check;
}

btnDOM.addEventListener('click', elemanEkle)

function check() {
    this.classList.toggle("checked")
}

function removeButton(){
    this.parentElement.remove();
}

function elemanEkle(){
    if(taskDOM.value.trim()==""){
        $(".error").toast("show");
        return
    } else {
        $(".success").toast("show");
    }

    let liDOM = document.createElement('li'); 
    liDOM.innerHTML = task.value;
    listDOM.append(liDOM);
    taskDOM.value = "";

    liDOM.onclick = check;

        let closeButton = document.createElement('span');
        closeButton.textContent = "\u00D7";
        closeButton.classList.add('close');
        closeButton.onclick = removeButton;

        liDOM.append(closeButton);
        listDOM.append(liDOM);
}
