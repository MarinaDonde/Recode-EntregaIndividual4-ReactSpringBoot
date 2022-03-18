import DestinoStars from 'components/DestinoStars';
import './styles.css';

type Props = {
    score: number;
    count: number;
}
export default function DestinoScore({ score, count } : Props) {

    return (
        <div className="viaje-score-container">
            <p className="viaje-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <DestinoStars score={score} />
            <p className="viaje-score-count">{count} avaliações</p>
        </div>
    );
}