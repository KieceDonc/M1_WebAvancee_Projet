import { FormControl, Slider } from '@mui/material'
import React,{useState} from 'react'

const TriPrix = (props) => {
    const [tabData, settabData] = React.useState(props.tabdata)
    const [tabDataTrie, settabDatatrie] = React.useState()
    const [valueSlider, setvalueSlider] = React.useState<number[]>([0, 100000])
  
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
      const TriPerPrice = (value1: number, value2: number) => {
        let i = (tabData.filter((item) => item.price >= value1 * 1000 && item.price <= value2 * 1000))
        props.onSort(i)
      }

      function valuetext(value: number) {
        return `${value * 100}€`
      }

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
      return (
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
      )
}

export default TriPrix 