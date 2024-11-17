import React, { useEffect, useState } from 'react'
import { Container, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Api from '../api'

const DetailSurah = () => {
  const { id } = useParams();
  const { nama } = useParams();
  const [ayat, setAyat] = useState([]);

  const getSurahById = async () => {
    await Api.get(`/surat/${id}`)
      .then((response) => {
        setAyat(response.data);
        //console.log(response.data);
        //console.log(ayat);
      })
  }

  useEffect(() => {
    getSurahById();
  }, [])

  return (
    <>
      <Container>
        <h1>Surah {nama}</h1>
        <Card>
          <Card.Body>
            {
              ayat.length > 0 ?
                ayat.map((item, index) => (
                  <>
                    <h1 className='text-end mt-5'><strong>{item.ar}</strong></h1>
                    <p className='d-flex justify-content-end mb-5'>{item.nomor}. {item.id}</p>
                  </>
                ))
                : <h5>Maaf, ayat tidak ada</h5>
            }

          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default DetailSurah