import './Catalogue.css'
import { useAppSelector, useAppDispatch } from '../app/hooks.js'
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

function Catalogue() {
  const data = useAppSelector((state) => state.cardata.cardata)

  // Etat des tries actifs
  const [TrieAlpha, setTrieAlpha] = React.useState('1')
  const [tabData, settabData] = React.useState([] as any[])


  let dataTab: any[] = Object.values(data.dataCar)

  const [tabPrix ,settabPrix] = React.useState(dataTab)
  const [tabType,settabType] = React.useState(dataTab)


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
  }, [tabPrix,tabType])

  // Retrieve Type of all car
  const GetAllTypes = (tabData: any) => {
    let uniqueValues: string[] = []
    tabData.forEach((obj: any) => {
      if (uniqueValues.indexOf(obj.type) === -1) {
        uniqueValues.push(obj.type)
      }
    })
    return uniqueValues
  }
  let type = GetAllTypes(dataTab)

  // Fonction de tri

  const TriAlphabetique = (enter: boolean,tab:any) => {
    settabData(
      tab.sort(function (a, b) {
        let aname: string = a.name
        let bname: string = b.name
        return aname.localeCompare(bname)
      }),
    )
    if (!enter) {
      settabData(tab.reverse())
    }
  }

  function Trieraveclestri() {
    console.log(tabPrix,tabType)
    let i = tabPrix.filter(element => tabType.includes(element));
    TrieAlpha == '1' ? TriAlphabetique(true,i) : TriAlphabetique(false,i)
  }

  // Function for handle change on filter item

  const handleChangeAlpha = (event: SelectChangeEvent) => {
    let targetValue: string = event.target.value
    setTrieAlpha(targetValue)
    targetValue == '1' ? TriAlphabetique(true,tabData) : TriAlphabetique(false,tabData)
  }

  return (
    <div className="wrapper">
      <Typography variant="h2" textAlign={'center'}>
        Catalogue
      </Typography>
      <FormControl sx={{ width: '45%', m: '10px' }}>
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
      <TriType type={type} tabdata={dataTab} onSort={(tabDataTrie) => settabType(tabDataTrie)} />
      <TriPrix tabdata={dataTab} onSort={(tabDataTrie) => settabPrix(tabDataTrie)} />
      <Typography variant="h5" textAlign="center" marginBottom={'20px'}>
        Liste des voitures
      </Typography>
      {tabData.map((item: any) => (
        <Card
          sx={{
            display: 'flex',
            width: '65%',
            border: '1px dashed grey',
            m: 'auto',
            mb: '20px',
            alignContent: 'center',
            textAlign: 'center',
          }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.name}
              </Typography>
              <Typography variant="body2" component="p">
                Prix : {item.price} €
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button component={Link} to={'/carPage/' + item.id} variant="contained" size="small">
              Aller sur la page
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  )
}

export default Catalogue
