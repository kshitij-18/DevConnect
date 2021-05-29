import React from 'react'
import { useSelector } from 'react-redux'

const Alert = () => {
    const alerts = useSelector((state) => state.alert)
    return (
        <div>
            {
                alerts != null && alerts.length > 0 && alerts.map(alert => (
                    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
                        {alert.msg}
                    </div>
                ))
            }
        </div>
    )
}

export default Alert
