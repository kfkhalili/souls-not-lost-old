// Copyright (c) Cosmo Tech.
// Licensed under the MIT license.

import {
    createMuiTheme,
    // REMOVE THIS WHEN USING MATERIAL UI v5.0
    // see https://github.com/mui-org/material-ui/issues/13394 for more info on
    // Warning: findDOMNode is deprecated in StrictMode.
    // eslint-disable-next-line camelcase
    unstable_createMuiStrictModeTheme
  } from '@material-ui/core'
  
  // REMOVE THIS WHEN USING MATERIAL UI v5.0
  // see https://github.com/mui-org/material-ui/issues/13394 for more info on
  // Warning: findDOMNode is deprecated in StrictMode.
  // eslint-disable-next-line camelcase
  const createTheme = process.env.NODE_ENV === 'production' ? createMuiTheme : unstable_createMuiStrictModeTheme
  
  const theme = createTheme()
  
  export default theme