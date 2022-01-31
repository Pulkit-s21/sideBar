const toggleBtn = document.querySelector(".sidebar-toggle"); // Accessing the burger button
const sideBar = document.querySelector(".sidebar"); // Accessing the sidebar
const closeBtn = document.querySelector(".close-btn"); // Accessing the close btn in the sidebar

// * Listening for the click on the burger icon to show/hide the sidebar..We need to listen to burger but chng the class on the sidebar
toggleBtn.addEventListener("click", function () {

    // Longer way
    // if (sideBar.classList.contains("show-sidebar")){
    //     sideBar.classList.remove("show-sidebar");
    // }
    // else {
    //     sideBar.classList.add("show-sidebar");
    // }

    // Shorter way
    sideBar.classList.toggle("show-sidebar");
});

// * Listening to the click on the close btn and if we can click the close btn that means the sidebar has the show-sidebar class and we need to just remove the class 
closeBtn.addEventListener("click", function () {
    sideBar.classList.remove("show-sidebar");
});