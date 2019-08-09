import React from 'react'
import './App.css'
import { IonApp, IonContent } from '@ionic/react'
import StatusBar from '../StatusBar'
import { StatusBarIcon, StatusBarIconState, StatusBarIconType } from '../StatusBar/StatusBar.types'

const App: React.FC = () => {
  const icons: readonly StatusBarIcon[] = [
    { type: StatusBarIconType.PhoneSignal, state: StatusBarIconState.Empty },
    { type: StatusBarIconType.WifiSignal, state: StatusBarIconState.Empty },
    { type: StatusBarIconType.BatteryGauge, state: StatusBarIconState.Empty, batteryLife: 59 }
  ]

  return (
    <IonApp>
      <StatusBar icons={icons} />
      <IonContent />
    </IonApp>
  )
}

export default App
