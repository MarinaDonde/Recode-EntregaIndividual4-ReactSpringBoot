import { Destino } from 'types/destino';
import DestinoScore from "components/DestinoScore";
import { Link } from "react-router-dom";


type Props = {
    destino: Destino;
}

export default function DestinoCard( { destino } : Props ) {

    return (
        <div>
            <img className="viaje-destino-card-image" src={destino.imagem} alt={destino.cidade} />
            <div className="viaje-card-bottom-container">
            <h3>{destino.cidade}</h3>
                <DestinoScore count={destino.count} score={destino.score} />

                <Link to={`/form/${destino.id}`}>
                    <div className="btn btn-primary viaje-btn">Avaliar</div>
                </Link>
            </div>
        </div>
    );
}