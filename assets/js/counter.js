


function adicionar() {
    var campo = document.getElementById('counter-field').value;
    campo = parseInt(campo)
    var campo = campo + 1;
    document.getElementById('counter-field').value = campo;

    if (campo % 2 === 0) {
        document.getElementById('counter-field').style.color = "#008000";
    } else {
        document.getElementById('counter-field').style.color = "#FF0000"
    }
}

function decrementar() {
    var campo = document.getElementById('counter-field').value;
    campo = parseInt(campo)
    var campo = campo - 1;
    document.getElementById('counter-field').value = campo;

    if (campo < 0) {
        document.getElementById('counter-field').value = "0";
    }

    if (campo % 2 === 0) {
        document.getElementById('counter-field').style.color = "#008000";
    } else {
        document.getElementById('counter-field').style.color = "#FF0000"
    }
}

function limpar() {
    document.getElementById('counter-field').value = "0"
    document.getElementById('counter-field').style.color = "#008000"

}
