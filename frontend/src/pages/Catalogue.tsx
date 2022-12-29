import './Catalogue.css'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import TriType from '../components/TriType'
import TriPrix from '../components/TriPrix'
import { Car } from '../models/interface'

function Catalogue() {
  const data = useAppSelector((state) => state.cardata.cardata)
  const pictures = useAppSelector((state) => state.cardata.picturesdata)

  // Etat des tries actifs
  const [TrieAlpha, setTrieAlpha] = React.useState<string>('1')
  const [tabData, settabData] = React.useState<Car[]>([])

  let dataTab: Car[] = Object.values(data.dataCar)

  const [tabPrix, settabPrix] = React.useState<Car[]>(dataTab)
  const [tabType, settabType] = React.useState<Car[]>(dataTab)

  // Simular as ComponentMount in VueJS
  React.useEffect(() => {
    let tempo = dataTab
    settabData(
      tempo.sort(function (a, b) {
        let aname: string = a.name
        let bname: string = b.name
        return aname.localeCompare(bname)
      }),
    )
    return () => {}
  }, [])

  React.useEffect(() => {
    Trieraveclestri()
  }, [tabPrix, tabType])

  // Retrieve Type of all car
  const GetAllTypes = (tabData: Car[]): string[] => {
    let uniqueValues: string[] = []
    tabData.forEach((obj: Car) => {
      if (uniqueValues.indexOf(obj.type) === -1) {
        uniqueValues.push(obj.type)
      }
    })
    return uniqueValues
  }
  let type = GetAllTypes(dataTab)

  // Fonction de tri

  const TriAlphabetique = (enter: boolean, tab: Car[]): void => {
    settabData(
      tab.sort(function (a: Car, b: Car) {
        let aname: string = a.name
        let bname: string = b.name
        return aname.localeCompare(bname)
      }),
    )
    if (!enter) {
      settabData(tab.reverse())
    }
  }

  function Trieraveclestri(): void {
    let i: Car[] = tabPrix.filter((element) => tabType.includes(element))
    TrieAlpha == '1' ? TriAlphabetique(true, i) : TriAlphabetique(false, i)
  }

  // Function for handle change on filter item

  const handleChangeAlpha = (event: SelectChangeEvent): void => {
    let targetValue: string = event.target.value
    setTrieAlpha(targetValue)
    targetValue == '1' ? TriAlphabetique(true, tabData) : TriAlphabetique(false, tabData)
  }

  return (
    <div className="wrapper">
      <Typography variant="h2" textAlign={'center'}>
        Catalogue
      </Typography>
      <div className="catalgue-criterias-container">
        <FormControl sx={{ width: '20vw', m: '10px' }}>
          <InputLabel id="demo-simple-select-label">Trier par Ordre Alphabétique</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={TrieAlpha}
            label="Trier par ordre alphabétique"
            onChange={handleChangeAlpha}>
            <MenuItem value={1}>A-Z</MenuItem>
            <MenuItem value={2}>Z-A</MenuItem>
          </Select>
        </FormControl>
        <TriType
          type={type}
          tabdata={dataTab}
          onSort={(tabDataTrie: Car[]) => settabType(tabDataTrie)}
        />
      </div>
      <div className="catalogue-pricesort-container">
        <TriPrix tabdata={dataTab} onSort={(tabDataTrie: Car[]) => settabPrix(tabDataTrie)} />
      </div>
      <Typography variant="h5" textAlign="center" marginBottom={'20px'}>
        Liste des voitures
      </Typography>
      {tabData.map((item: Car, index: number) => (
        <Card
          key={index}
          sx={{
            display: 'block',
            width: '50%',
            border: '1px grey',
            m: 'auto',
            mb: '40px',
            alignContent: 'center',
            textAlign: 'center',
          }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              image={pictures[item.id].srcPicturesCar ? '/' + pictures[item.id].srcPicturesCar : ''}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                {item.name}
              </Typography>
              <Typography component="p">Prix : {item.price} €</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ padding: 0 }}>
            <Button
              component={Link}
              to={'/carPage/' + item.id}
              variant="contained"
              size="medium"
              sx={{ width: '100%', borderRadius: 0 }}>
              Aller sur la page
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  )
}

export default Catalogue
