import { useState } from "react";

function FormularioCadastro() {

    const [form, setForm] = useState({
        nome: "",
        email: "",
        cidade:"",
        perfil:"",
        recebernovidades:"",
        observacoes:""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        
        setForm({
            ...form,
            [name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log("Nome:", form.nome);
        console.log("Email:", form.email);
        console.log("Cidade:", form.cidade);
        console.log("Perfil:", form.perfil);
        console.log("ReceberNovidade:", form.recebernovidades);
        console.log("Observacoes:", form.observacoes);
    }

    return (
        <div>
            <h2>Cadastro Geral</h2>

            <form onSubmit={handleSubmit}>
                
            </form>
        </div>
    )
}