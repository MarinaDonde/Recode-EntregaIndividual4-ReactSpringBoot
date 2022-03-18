import FormCard from "components/FormCard";
import { useParams } from "react-router-dom";

export default function Form() {

    const params = useParams();

    return (
        <FormCard destinoId={`${params.destinoId}`} />
    );
}