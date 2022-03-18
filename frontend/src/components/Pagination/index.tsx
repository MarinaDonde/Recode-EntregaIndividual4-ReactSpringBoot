import { ReactComponent as Arrow} from 'assets/img/arrow.svg';
import { DestinoPage } from 'types/destino';
import './styles.css';

type Props = {
    page: DestinoPage;
    onChange: Function;
}

export default function Pagination({ page, onChange } : Props) {

    return (
        <div className="viaje-pagination-container">
            <div className="viaje-pagination-box">
                <button className="viaje-pagination-button" disabled={page.first} onClick={() => onChange(page.number - 1)} >
                    <Arrow />
                </button>
                <p>{`${page.number + 1} de ${page.totalPages}`}</p>
                <button className="viaje-pagination-button" disabled={page.last} onClick={() => onChange(page.number + 1)} >
                    <Arrow className="viaje-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}