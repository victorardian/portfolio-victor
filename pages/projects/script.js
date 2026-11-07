function menutoggle() {
    const sidemenu = document.getElementById("sidemove");
    const navigation = document.getElementById("navmove")
    sidemenu.classList.toggle("sidetransform");
    navigation.classList.toggle("menutransform")
}