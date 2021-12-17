import { useContext } from "react";
import Alerta from "./Alerta";
import AnimalContext from "./AnimalContext";

function Formulario() {

    const { objeto, handleChange, acaoCadastrar, alerta } = useContext(AnimalContext);

    return (
        <div className="modal fade" id="modalEdicao" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Animal</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="formulario" onSubmit={acaoCadastrar}>
                        <div className="modal-body">
                            <Alerta alerta={alerta} />
                            <div className="form-group">
                                <label htmlFor="txtID" className="form-label">
                                    ID
                                </label>
                                <input
                                    type="text"
                                    readOnly
                                    className="form-control"
                                    id="txtID"
                                    name="id"
                                    value={objeto.id}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtNome" className="form-label">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="txtNome"
                                    name="nome"
                                    required
                                    value={objeto.nome}
                                    onChange={handleChange} />
                            </div>
                                     
                            <div className="form-group">
                                <label htmlFor="txtRaca" className="form-label">
                                Raca
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="txtRaca"
                                    name="raca"
                                    required
                                    value={objeto.raca}
                                    onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtIdade" className="form-label">
                                    Idade
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="txtIdade"
                                    name="idade"
                                    value={objeto.idade}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="submit" className="btn btn-success">
                                Salvar <i className="bi bi-save"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formulario;