import { StatusBarIconType } from '../StatusBar.types'
import batteryGauge0 from './icons/battery-gauge_0.svg'
import phoneSignal0 from './icons/phone-signal_0.svg'
import wifiSignal0 from './icons/wifi-signal_0.svg'

export const iconsSrc: Record<StatusBarIconType, readonly string[]> = {
  [StatusBarIconType.PhoneSignal]: [phoneSignal0],
  [StatusBarIconType.WifiSignal]: [wifiSignal0],
  [StatusBarIconType.BatteryGauge]: [batteryGauge0]
}
