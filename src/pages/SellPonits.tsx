import { useQuery } from 'react-query'
import { getAllSellPoints } from "../api/sellPointsApi";
import SellPoint from '../components/SellPoint';
import '../styles/SellPointsStyles.css'


export const SellPonits = () => {
    const { data,
        isLoading,
    } = useQuery(["sellPoints"], getAllSellPoints)
    console.log(data[0])

    if (isLoading) {
        return (
            <>
                <div>
                    <p>Cargando</p>
                </div>
            </>
        )
    } else {

        return (
            <div className="sellPointsWrapper">
                <h1>PUNTOS DE VENTA</h1>
                <SellPoint info={data?.[0]} />
            </div>
        );
    }


}
