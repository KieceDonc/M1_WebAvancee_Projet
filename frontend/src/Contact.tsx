import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { FormControl, Button, Alert, Dialog, Link, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

import './Contact.css'

const Contact = () => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': {
          width: '60ch',
          border: 1,
          borderRadius: 1,
          borderColor: '#0d47a1',
        },
      }}
      noValidate
      autoComplete="off">
      <div className="user-info">
        <FormControl className="formControl">
          <TextField
            className="textField"
            label="Adresse email"
            variant="outlined"
            fullWidth
            margin="dense"
          />
          <TextField
            className="textField"
            label="Voiture concerner"
            variant="outlined"
            fullWidth
            margin="dense"
          />
          <TextField
            className="textField"
            label="Votre question"
            multiline
            variant="standard"
            fullWidth
            margin="dense"
          />
          <div className="valide-button">
            <Button variant="outlined" onClick={handleClickOpen}>
              Valider
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description">
              <Alert
                severity="info"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false)
                    }}>
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}>
                Votre message à bien était envoyé !
              </Alert>
            </Dialog>
          </div>
        </FormControl>
      </div>
    </Box>
  )
}

export default Contact
