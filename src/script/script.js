const handleScroll = () => {
    let headerEl = document.getElementsByClassName("header")[0];
    if (window.scrollY > 100) {
        headerEl.style.background = "#FFFFFF";
    } else {
        headerEl.style.background = "";
    }
};

window.addEventListener("scroll", handleScroll);
