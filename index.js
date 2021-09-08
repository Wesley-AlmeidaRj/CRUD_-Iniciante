
let dados = []  

function PopulaTabela() {
    if(Array.isArray(dados)) {

        localStorage.setItem("__dados__", JSON.stringify(dados))

        $(" #tblDados tbody ").html("")

        dados.forEach(function (item) { //TEMPLATE STRING

            $("#tblDados tbody ").append (`<tr>
 
            <td>${item.ID}</td>
            <td>${item.Nome}</td>
            <td>${item.Sobrenome}</td>
            <td>${item.DtNascimento}</td>
            <td>${item.Formacao}</td>

            </tr>`)

        })

    }

}



$(function () { 
    //executa ao carregar a tela
    dados = JSON.parse(localStorage.getItem("__dados__"))

    if ("dados") {
        PopulaTabela()

    }

    $("#btnSalvar").click(function() {
        //evento click do botão salvar

        let Nome = $("#txtNome").val()
        let Sobrenome = $("#txtSobrenome").val()
        let Nascimento = new Date($("#dtNascimento").val()).toLocaleDateString("pt-br",{ timeZone: "UTC"})
        let Formacao = $("#txtFormacao").val()

        let registro = {}

        registro.Nome = Nome
        registro.Sobrenome = Sobrenome
        registro.Nascimento = Nascimento
        registro.Formacao = Formacao 

        registro.ID = dados.length +1
        dados.push(registro)

        alert("registro salvo com sucesso")

        $("#exampleModal").modal("hide")


        $("#txtNome").val("")     // LIMPEZAS DOS CAMPOS
        $("#txtSobrenome").val("")
        $("#dtNascimento").val("")
        $("#txtFormacao").val("")

        PopulaTabela()
    })


})