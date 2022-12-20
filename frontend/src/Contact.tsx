import React,{useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';

import "./Contact.css";

const Contact = () => {
    return (
        <Box 
            component="form"
            sx={{
            '& > :not(style)': { 
                width: '60ch', 
                border: 1,
                borderRadius: 1,
                borderColor: '#0d47a1'
            }
            }}
            noValidate
            autoComplete="off"
        >
            <div className="user-info">
                <FormControl className="formControl">
                    <TextField className="textField" label="Adresse email" variant="outlined" fullWidth margin="dense" />
                    <TextField className="textField" label="Voiture concerner" variant="outlined" fullWidth margin="dense" />
                    <TextField className="textField" label="Votre question" multiline variant="standard" fullWidth margin="dense" />
                </FormControl>
            </div>
        </Box>
    )
};

export default Contact;