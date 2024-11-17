import React, { useEffect, useState } from 'react'
import { Row, Container } from 'react-bootstrap'
import CardSurah from './CardSurah'
import Api from '../api/index'

const HalamanSurah = () => {
  const [surah, setSurah] = useState([]);

  const getSurahAll = async () => {
    await Api.get('/data')
      .then((response) => {
        setSurah(response.data);
        console.log(response)
      })
  }

  useEffect(() => {
    getSurahAll();
  }, []);

  return (
    <Container>
      <h1>List Surah</h1>

      <Row className='mt-md-5'>
        {
          surah.length > 0 ?
            surah.map((item, index) => (
              <CardSurah
                index={index + 1}
                nama={item.nama}
                asma={item.asma}
                type={item.type}
                ayat={item.ayat} />
            ))
            : <h1 className="alert-warning">Maaf, data tidak ada</h1>
        }
      </Row>
    </Container>
  )
}

export default HalamanSurah