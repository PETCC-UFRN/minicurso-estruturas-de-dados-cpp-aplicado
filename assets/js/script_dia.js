/* <a href="https://www.flaticon.com/free-icons/lego" title="lego icons">Lego icons created by verluk - Flaticon</a> */

document.addEventListener("DOMContentLoaded", function () {
    const datasAtivacao = {
        "primeiroDia": new Date("2026-02-23"),
        "segundoDia": new Date("2026-02-24"),
        "terceiroDia": new Date("2026-02-25"),
        "quartoDia": new Date("2026-02-26"),
        "quintoDia": new Date("2026-02-27"),
        "projetoFinalSimplificado": new Date("2025-03-14")
        
        // "primeiroDia": new Date("2026-08-03"),
        // "segundoDia": new Date("2026-08-04"),
        // "terceiroDia": new Date("2026-08-05"),
        // "quartoDia": new Date("2026-08-06"),
        // "quintoDia": new Date("2026-08-07"),
        // "projetoFinalSimplificado": new Date("2025-03-14")
    };

    const agora = new Date();

    Object.keys(datasAtivacao).forEach(id => {
        const dataAtivacao = datasAtivacao[id];
        const link = document.getElementById(id);

        if (agora >= dataAtivacao) {

            link.classList.remove('inactive');

            const li = link.closest("li");
            li.classList.remove("inactive");

            //console.log(id);

            if (id === "primeiroDia") {

                li.classList.add("red");
            }

            else if (id === "segundoDia") {
                li.classList.add("pink")
            }

            else if (id === "terceiroDia") {
                li.classList.add("yellow")
            }

            else if (id === "quartoDia") {
                li.classList.add("green")
            }

            else if (id === "quintoDia") {
                li.classList.add("blue")
            }

        }
    });
});
