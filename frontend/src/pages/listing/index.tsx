
import axios from 'axios';
import DestinoCard from 'components/DestinoCard';
import Pagination from 'components/Pagination'
import Parallax from 'components/Parallax'
import { useEffect, useState } from 'react';
import { BASE_URL } from 'utils/requests';
import { DestinoPage } from 'types/destino';


export default function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<DestinoPage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/destinos?size=12&page=${pageNumber}&sort=id`)
            .then(response => {
                const data = response.data as DestinoPage;
                setPage(data);
            });
    }, [pageNumber]);

    const handlePageChange = (newPageNumber : number) => {
        setPageNumber(newPageNumber);
    }

    return (
        <>
            <Parallax />
            <Pagination page={page} onChange={handlePageChange} />
            <div className="container">
                <div className="row">
                    {page.content.map(destino => (
                        <div key={destino.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <DestinoCard destino={destino} />
                            <p>testandosdsds</p>
                        </div>
                    )
                    )}
                </div>
            </div>
        </>
    );
}