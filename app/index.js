import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'

import Home from './screens/Home'

EStyleSheet.build({
    $primaryBlue:'#375E97',
    $white:'#ffffff',
})

export default () =>  <Home />