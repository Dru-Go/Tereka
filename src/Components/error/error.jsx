import React from 'react'
import './error.style.css'


const ErrorPage = ({status}) => (
	<div class="main-wrapper">
        <div class="signboard-wrapper">
            <div class="signboard">{status?status:404}</div>
            <div class="string"></div>
            <div class="pin pin1"></div>
            <div class="pin pin2"></div>
            <div class="pin pin3"></div>
        </div>
    </div>
)

export default ErrorPage