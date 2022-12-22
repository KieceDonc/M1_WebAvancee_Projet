import { api } from "api";
import type { JsonDevis } from '../models/interface'
import { useAppSelector } from '../app/hooks.js'
const data = useAppSelector((state) => state.cardata.cardata)
let dataTab: any[] = Object.values(data.dataCar)

async function getCarbyID(id: number) {
  return dataTab.filter((item) => item.id == id);

}

async function PostDevis(id: number, Devis: JsonDevis) {
  let body = {id , Devis}
  let result: any = await fetch('http://localhost:51001/api/login', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
}

async function getDevisbyID(id: number) {
  let result = await api("http://localhost:51001/api/devis?id="+id);
  return result;
}

async function getAllDevis()
{
  let result = await api('http://localhost:51001/api/alldevis');
  return result;
}

export {getAllDevis,getDevisbyID,getCarbyID,PostDevis}