import React, { useEffect, useLayoutEffect, useState } from 'react'
import './StatusBar.css'
import { IonButton, IonButtons, IonHeader, IonIcon, IonToolbar } from '@ionic/react'
import moment from 'moment'
import { isBatteryGauge, StatusBarBatteryGauge, StatusBarPops } from './StatusBar.types'
import { iconsSrc } from './assets'

const StatusBar: React.FC<StatusBarPops> = ({ icons }) => {
  const [showRemainingTime, setRemainingTime] = useState(true)
  const [time, setTime] = useState(moment())
  const [remainingBattery, setRemainingBattery] = useState(60)

  useEffect(clockEffect, [])
  useEffect(batteryEffect, [])

  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonButton size="small" fill="clear">
            {moment(time).format('HH:mm')}
          </IonButton>
        </IonButtons>
        <IonButtons no-padding class="ion-no-padding" slot="end">
          {icons.map((icon, key) =>
            isBatteryGauge(icon) ? (
              <IonButton no-padding key={key} size="small" onClick={() => setRemainingTime(!showRemainingTime)}>
                <IonIcon slot="start" src={iconsSrc[icon.type][icon.state]} />
                <span
                  className="battery-life"
                  style={{
                    background: 'linear-gradient(170deg, rgb(42, 245, 152) 0%, rgb(0, 158, 253) 100%)',
                    backgroundClip: 'text',
                    color: 'transparent'
                  }}>
                  {showRemainingTime ? '00:' + remainingBattery.toString().padStart(2, '0') + '!' : ''}
                </span>
              </IonButton>
            ) : (
              <IonButton class="basic-icon" no-padding key={key} size="small">
                <IonIcon slot="start" src={iconsSrc[icon.type][icon.state]} />
              </IonButton>
            )
          )}
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )

  //Effects
  function clockEffect(): () => void {
    let lazySyncedClock: ReturnType<typeof setTimeout>
    const seconds2update = 60 - parseInt(moment().format('s'))
    setTimeout(() => {
      setTime(moment())
      lazySyncedClock = setInterval(() => setTime(moment()), 60000)
    }, seconds2update * 1000)
    return () => clearInterval(lazySyncedClock)
  }

  function batteryEffect(): (() => void) | undefined {
    let lazyBatteryClock: ReturnType<typeof setTimeout>
    const battery = icons.find(icon => isBatteryGauge(icon)) as StatusBarBatteryGauge
    if (battery) {
      setRemainingBattery(battery.batteryLife)
      lazyBatteryClock = setInterval(() => {
        setRemainingBattery(rB => {
          if (typeof rB === 'undefined') return rB
          else if (rB! > 0) return rB - 1
          else clearInterval(lazyBatteryClock)
          return 0
        })
      }, 60000)
      return () => clearInterval(lazyBatteryClock)
    }
  }
}
export default StatusBar
