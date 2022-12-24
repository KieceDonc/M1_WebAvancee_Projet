import './Catalogue.css'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Slider from '@mui/material/Slider'
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  OutlinedInput,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'

function Catalogue() {
  const data = useAppSelector((state) => state.cardata.cardata)

  // Etat des tries actifs
  const [TrieAlpha, setTrieAlpha] = React.useState('1')
  const [tabDataType, settabDataType] = React.useState<string[]>([])
  const [tabData, settabData] = React.useState([] as any[])
  const [valueSlider, setvalueSlider] = React.useState<number[]>([0, 100000])
  let dataTab: any[] = Object.values(data.dataCar)

  // Constante
  const minDistance = 0
  const marks = [
    {
      value: 0,
      label: '0€',
    },
    {
      value: 100,
      label: '100 000€',
    },
  ]

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
    if (tabData.length > 1) {
      TrieAlpha == '1' ? TriAlphabetique(true) : TriAlphabetique(false)
    }
  }, [tabData])

  // Useful function

  function valuetext(value: number) {
    return `${value * 100}€`
  }

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

  const TriAlphabetique = (enter: boolean) => {
    settabData(
      tabData.sort(function (a, b) {
        let aname: string = a.name
        let bname: string = b.name
        return aname.localeCompare(bname)
      }),
    )
    if (!enter) {
      settabData(tabData.reverse())
    }
  }

  const TriPerType = (enter: any) => {
    settabData(dataTab.filter((item) => (enter.indexOf(item.type) != -1 ? true : false)))
    if (enter.length == 0) {
      settabData(dataTab)
    }
  }

  const TriPerPrice = (value1: number, value2: number) => {
    settabData(dataTab.filter((item) => item.price >= value1 * 1000 && item.price <= value2 * 1000))
  }

  // Function for handle change on filter item

  const handleChangeAlpha = (event: SelectChangeEvent) => {
    let targetValue: string = event.target.value
    setTrieAlpha(targetValue)
    targetValue == '1' ? TriAlphabetique(true) : TriAlphabetique(false)
  }

  const handleChangeType = (event: any) => {
    const {
      target: { value },
    } = event
    settabDataType(typeof value === 'string' ? value.split(',') : value)
    TriPerType(value)
  }

  const handleChangeSlider = (event: Event, newValue: number | number[], activeThumb: number) => {
    if (!Array.isArray(newValue)) {
      return
    }
    if (activeThumb === 0) {
      setvalueSlider([Math.min(newValue[0], valueSlider[1] - minDistance), valueSlider[1]])
    } else {
      setvalueSlider([valueSlider[0], Math.max(newValue[1], valueSlider[0] + minDistance)])
    }
    TriPerPrice(valueSlider[0], valueSlider[1])
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
      <FormControl sx={{ width: '45%', m: '10px' }}>
        <InputLabel id="demo-multiple-chip-label">Trier par type</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          label="Trier par type"
          value={tabDataType}
          onChange={handleChangeType}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}>
          {type.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ width: '75%', m: '5%' }}>
        <Slider
          getAriaLabel={() => 'Minimum'}
          value={valueSlider}
          onChange={handleChangeSlider}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disableSwap
          marks={marks}
        />
      </FormControl>
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
