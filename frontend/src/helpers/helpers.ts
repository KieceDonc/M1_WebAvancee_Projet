import { api } from "../helpers/api.js";
import type { JsonDevis } from '../models/interface'
import { useAppSelector } from '../app/hooks.js'


async function PostDevis(id: string, CarsList: any,totalprice : Number) {
  let JSONData = {CarsList , totalprice};
  let JSONDevis = JSON.stringify(JSONData);
  let body = {id , JSONDevis};
  console.log(id)
  let result: any = await fetch('http://localhost:51001/api/Postdevis', {
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

export {getAllDevis,getDevisbyID,PostDevis}