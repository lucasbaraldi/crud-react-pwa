import { useEffect } from "react";
import {useState} from 'react'

const Home = () => {
    const [listaObjetos, setListaObjetos] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('ANIMAISPWA-AULA/listaobjetos'))
            setListaObjetos(JSON.parse(localStorage.getItem('ANIMAISPWA-AULA/listaobjetos')));
    }, [])

    return (
        <div>
            <h2>Meus Pets - PWA</h2>

            <div style={{ padding: '20px' }}>
                {listaObjetos.length === 0 && <h2>Nenhum registro encontrado</h2>}
                {listaObjetos.length > 0 && (
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Raca</th>
                                    <th scope="col">Idade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaObjetos.map(objeto => (
                                    <tr key={objeto.id}>
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
        </div>
    )
}

export default Home;