import React from 'react'
import StatusBar from './StatusBar'
import { render, fireEvent } from '@testing-library/react'
import moment from 'moment'
import { StatusBarIconState, StatusBarIconType } from './StatusBar.types'

describe('Clock', () => {
  it('Displays current time', () => {
		const currentTime = moment(new Date()).format('HH:mm');
		const { getByText } = render(<StatusBar icons={[]}/>);
		expect(getByText(currentTime)).toBeInTheDocument();
	})
})

describe('StatusBar Icons', () => {
	it('Displays phone signal', () => {
		const { container } = render(<StatusBar icons={[{type: StatusBarIconType.PhoneSignal, state: StatusBarIconState.Empty}]}/>);
		const icon = container.getElementsByTagName("ion-icon")[0].src
		expect(icon).toMatch(/phone-signal/)
	})

	it('Displays wifi signal', () => {
		const { container } = render(<StatusBar icons={[{type: StatusBarIconType.WifiSignal, state: StatusBarIconState.Empty}]}/>);
		const icon = container.getElementsByTagName("ion-icon")[0].src
		expect(icon).toMatch(/wifi-signal/)
	})

	it('Displays battery gauge', () => {
		const { container } = render(<StatusBar icons={[{type: StatusBarIconType.BatteryGauge, state: StatusBarIconState.Empty, batteryLife: 59}]}/>);
		const icon = container.getElementsByTagName("ion-icon")[0].src
		expect(icon).toMatch(/battery-gauge/)
	})

	it('Hides remaining battery life when toggled off by clicking', () => {
		const { queryByText, getByText } = render(<StatusBar icons={[{type: StatusBarIconType.BatteryGauge, state: StatusBarIconState.Empty, batteryLife: 59}]}/>);
		expect(getByText(/59/)).toBeInTheDocument()
		fireEvent.click(getByText(/59/))
		expect(queryByText(/59/)).not.toBeInTheDocument()
	})
})