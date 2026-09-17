let entered = false;

function functransition() {
    const fade = document.getElementById("enter");
    const unblur = document.getElementById("main");
    if (entered == false) {
        entered = true;
        fade.classList.add("fadetransition");
        unblur.classList.add("blurtransition")
    }
}