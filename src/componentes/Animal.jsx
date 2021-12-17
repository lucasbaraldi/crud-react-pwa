import { useState, useEffect } from "react";
import Formulario from "./Formulario";
import AnimalContext from "./AnimalContext";
import Tabela from "./Tabela";

function Animal() {

    const [listaObjetos, setListaObjetos] = useState(
        localStorage.getItem('ANIMAISPWA-AULA/listaobjetos')
        ? JSON.parse(localStorage.getItem('ANIMAISPWA-AULA/listaobjetos')) : []);

    const [alerta, setAlerta] = useState( { status: "", message: "" });

    const [objeto, setObjeto] = useState({id: 0, nome: "", raca: "", idade:""});

    const [editar, setEditar] = useState(false);

    const acaoCadastrar = e => {
        e.preventDefault();
        if (editar) {
            // encontrar o id do objeto a ser editado
            const index = listaObjetos.findIndex(p => p.id === objeto.id);
            // remover o objeto do state para ser editado
            const listaObjetosTemp = listaObjetos.splice(0, index).concat(listaObjetos.splice(index + 1));
            // colocamos de volta no state o objeto 
            const newlistaObjetos = [...listaObjetosTemp, objeto].sort((a, b) => a.id - b.id);
            setListaObjetos(newlistaObjetos);
            setAlerta({ status: "success", message: "Animal editado com sucesso" });
        } else { // novo animal
            if (objeto.id === 0) {
                var idautal = localStorage.getItem('ANIMAISPWA-AULA/sequenciaid');
                if (idautal === null){
                    idautal = 0;
                }
                var novoid = Number(idautal) + 1;
                objeto.id = novoid;
                //setSequenciaCodigo(novoid);
                localStorage.setItem('ANIMAISPWA-AULA/sequenciaid', novoid);
                setListaObjetos([...listaObjetos, objeto]);
                setAlerta({ status: "success", message: "Animal criado com sucesso" });
            }
        }
    };  
	
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }	

    const acaoRemover = objeto => {
        if (window.confirm("Remover este animal?")){
            const listaObjetosTemp = 
            listaObjetos.filter(p => p.id !== objeto.id);
            setListaObjetos(listaObjetosTemp);
            setAlerta({ status: "success", message: "Animal removido com sucesso!" })     
        }
    }

    useEffect( () => {
        localStorage.setItem('ANIMAISPWA-AULA/listaobjetos', JSON.stringify(listaObjetos));
    },[listaObjetos]);

    return (
        <AnimalContext.Provider value={
            { listaObjetos, acaoRemover, alerta, setAlerta, objeto, setObjeto, 
                editar, setEditar, acaoCadastrar, handleChange}
        }>
            <Tabela />
            <Formulario/>
        </AnimalContext.Provider>
    )

}

export default Animal;