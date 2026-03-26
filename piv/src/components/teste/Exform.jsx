import { useState } from "react";

function FormularioCadastro() {

    const [form, setForm] = useState({
        nome: "",
        email: "",
        cidade:"",
        perfil:"",
        recebernovidades: false,
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
        alert('Cadastro efetuado com sucesso!');
    }

    return (
        <div>
            <h2>Cadastro Geral</h2>

            <form onSubmit={handleSubmit}>

            <div>
                <label>Nome:</label>
                <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
            />
            </div>

            <div>
                <label>Email:</label>
                <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
            />
            </div>

            <div>
                <label>Cidade:</label>
                <input
                type="text"
                name="cidade"
                value={form.cidade}
                onChange={handleChange}
            />
            </div>

            <div>
                <label>Perfil:</label>
                <select
                    name="perfil"
                    value={form.perfil}
                    onChange={handleChange}>
                    <option value="">Selecione seu perfil</option>
                    <option value="administrador">Administrador</option>
                    <option value="usuario">Usuário</option>
                </select>
            </div>

            <div>
                <label>Receber Novidades</label>
                <input
                    type="checkbox"
                    name="recebernovidades"
                    checked={form.recebernovidades}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            recebernovidades: e.target.checked
                        })
                    }
                />
            </div>

            <div>
                <label>Observações:</label><br></br>
                <textarea
                    name="observacoes"
                    value={form.observacoes}
                    onChange={handleChange}
                /><br></br>

                <button type="submit">Enviar</button>
            </div>
                
            </form>
        </div>
    );
}

export default FormularioCadastro