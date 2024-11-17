import { Route, Routes } from 'react-router-dom'
import HalamanSurah from '../pages/HalamanSurah'
import DetailSurah from '../pages/DetailSurah'
import CardSurah from '../pages/CardSurah'

const RouteIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<HalamanSurah />} />
      <Route path='/detail-surah/:id/:nama' element={<DetailSurah />} />
      <Route path='/card-surah' element={<CardSurah />} />
    </Routes>
  )
}

export default RouteIndex