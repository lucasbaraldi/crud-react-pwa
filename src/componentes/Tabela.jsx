import { useContext } from "react";
import AnimalContext from "./AnimalContext";
import Alerta from './Alerta'


const Tabela = () => {

    const { listaObjetos, acaoRemover, alerta,
        setObjeto, setEditar, setAlerta } = useContext(AnimalContext);

    return (
        <div style={{ padding: '20px' }}>
            <Alerta alerta={alerta} />
            <button type="button" className="btn btn-primary"
                data-bs-toggle="modal" data-bs-target="#modalEdicao"
                onClick={
                    () => {
                        setObjeto({ id: 0, nome: "", raca: "", idade: "" });
                        setEditar(false);
                        setAlerta({ status: "", message: "" })
                    }
                }>
                Novo <i className="bi bi-file-earmark-plus"></i>
            </button>
            {listaObjetos.length === 0 && <h2>Nenhum registro encontrado</h2>}
            {listaObjetos.length > 0 && (
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col"
                                    style={{ textAlign: 'center' }}>Ações</th>
                                <th scope="col">ID</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Raca</th>
                                <th scope="col">Idade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaObjetos.map(objeto => (
                                <tr key={objeto.id}>
                                    <th scope="row" style={{ textAlign: 'center' }}>
                                        <button type="button" className="btn btn-info"
                                            data-bs-toggle="modal" data-bs-target="#modalEdicao"
                                            onClick={
                                                () => {
                                                    setObjeto(objeto);
                                                    setEditar(true);
                                                    setAlerta({ status: "", message: "" })
                                                }
                                            }>
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                        <button className="btn btn-danger"
                                            onClick={() => acaoRemover(objeto)}>
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </th>
                                    <td>{objeto.id}</td>
                                    <td>{objeto.nome}</td>
                                    <td>{objeto.raca}</td>
                                    <td>{objeto.idade}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

        </div>
    )
}

export default Tabela;
