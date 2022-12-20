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
            '& > :not(style)': { width: '25ch' }
            }}
            noValidate
            autoComplete="off"
        >
            <div className="user-info">
                <FormControl>
                    <InputLabel className="element" htmlFor="my-address">Adresse email</InputLabel>
                    <Input className="element" id="my-address" aria-describedby="my-text" />
                    <TextField className="element" label="Voiture concerné"/>
                    <TextareaAutosize className="text-area" placeholder="Votre question" style={{ width: 200 }} />
                </FormControl>
            </div>
        </Box>
    )
};

export default Contact;