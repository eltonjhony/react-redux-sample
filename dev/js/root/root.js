import React from 'react'
import {Provider} from 'react-redux'
import Store from '../store/app-store'

import App from '../containers/app'

const Root = () => (
    <Provider store={Store} >
        <App/>
    </Provider>
)

export default Root;