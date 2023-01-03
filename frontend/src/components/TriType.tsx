import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material'
import React, { useState } from 'react'
import { Car } from '../models/interface'

const TriType = (props: any) => {
  const [tabDataType, settabDataType] = React.useState<string[]>([])
  const [tabData, settabData] = React.useState(props.tabdata)
  const [tabDataTrie, settabDatatrie] = React.useState()
  let type = props.type

  const handleChangeType = (event: any): void => {
    const {
      target: { value },
    } = event
    settabDataType(typeof value === 'string' ? value.split(',') : value)
    TriPerType(value)
  }

  const TriPerType = (enter: any): void => {
    let i = tabData.filter((item: Car) => (enter.indexOf(item.type) != -1 ? true : false))
    if (i.length == 0) {
      props.onSort(tabData)
    } else {
      settabDatatrie(i)
      props.onSort(i)
    }
  }

  return (
    <div>
      <FormControl sx={{ width: '20vw', m: '10px' }}>
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
              {selected.map((value: string, index: number) => (
                <Chip key={index} label={value} />
              ))}
            </Box>
          )}>
          {type.map((name: string, index: number) => (
            <MenuItem key={index} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default TriType
