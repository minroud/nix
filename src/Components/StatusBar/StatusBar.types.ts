export enum StatusBarIconType {
  PhoneSignal,
  WifiSignal,
  BatteryGauge
}

export enum StatusBarIconState {
  Empty,
  Min,
  Half,
  High,
  Max,
  Off
}

export type BasicStatusBarIcon = {
  readonly type: StatusBarIconType
  readonly state: StatusBarIconState
}

export type StatusBarBatteryGauge = BasicStatusBarIcon & {
  readonly batteryLife: number
}

export type StatusBarIcon = BasicStatusBarIcon | StatusBarBatteryGauge

export const isBatteryGauge = (icon: StatusBarIcon): icon is StatusBarBatteryGauge =>
  icon.type === StatusBarIconType.BatteryGauge

export type StatusBarPops = {
  readonly icons: readonly StatusBarIcon[]
}
