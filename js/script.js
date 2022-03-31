{
    const welcome = () => {
        console.log("Funkcja powitalna");
    };

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".themeName");
        body.classList.toggle("dark");
        themeName.innerText = body.classList.contains("dark") ? "jasny" : "inny";
    };

    const init = () => {
        const button = document.querySelector(".button");
        button.addEventListener("click", (toggleBackground));

        welcome();
    };

    init();
}