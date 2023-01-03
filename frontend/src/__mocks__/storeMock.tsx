import React from 'react';
import './index.css'
import { configureStore } from '@reduxjs/toolkit';

import mockCardata from './cardataMock'

export const store = configureStore({
  reducer: {
    cardata: mockCardata
  },
})