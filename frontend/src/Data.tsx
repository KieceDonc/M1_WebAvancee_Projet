import { useAppSelector,useAppDispatch } from "./app/hooks";

function Data(){
    const data  = useAppSelector((state) => state.cardata.cardata);
    console.log(data.dataCar);
    return(
        <div className="homepage">
            <div>Regarde ta console</div>
            <div>Exemple voiture : </div>
            <div>{data.dataCar[1].name}</div>
        </div>
    )
}

export default Data;