import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const WeatherDetails = () => {
  const {date} = useParams()
  const day = useSelector(state => state.weather.forecast.forecastday)
  const d = day.find(d => d.date===date)
  return (
    <div>{d.date}</div>
  )
}

export default WeatherDetails