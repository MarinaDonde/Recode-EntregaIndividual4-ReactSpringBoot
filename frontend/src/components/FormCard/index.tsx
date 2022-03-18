import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Destino } from "types/destino";
import { BASE_URL } from "utils/requests";
import { validateEmail } from "utils/validate";
import "./styles.css"

type Props = {
    destinoId : string;
}

export default function FormCard( { destinoId } : Props ) {

    const navigate = useNavigate();

    const [destino, setDestino] = useState<Destino>();

    useEffect(() => {
        axios.get(`${BASE_URL}/destinos/${destinoId}`)
            .then(response => {
                setDestino(response.data);
            });
    }, [destinoId]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const email = (event.target as any).email.value;
        const score = (event.target as any).score.value;

        if (!validateEmail(email)) {
            return;
        }

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/scores',
            data: {
                email: email,
                destinoId: destinoId,    
                score: score       
            }
        }

        axios(config).then(response => {
            navigate("/");
        }); 
    }

    return (
        <div className="viaje-form-container">
            <img className="viaje-movie-card-image" src={destino?.imagem} alt={destino?.cidade} />
            <div className="viaje-card-bottom-container">
                <h3>{destino?.cidade}</h3>
                
                <form className="viaje-form" onSubmit={handleSubmit}>
                    <div className="form-group viaje-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group viaje-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="viaje-form-btn-container">
                        <button type="submit" className="btn btn-primary viaje-btn">Salvar</button>
                    </div>
                </form >
                <Link to="/">
                    <button className="btn btn-primary viaje-btn mt-3">Cancelar</button>
                </Link>

            </div >
        </div >
    );
}