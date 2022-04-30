import { useState, useEffect } from 'react';

import './Actors.css'

import List from "../../components/List/List"
import Button from '../../components/Button/Button';

import retrieveActors from '../../logic/retrieve-actors'
import getData from '../../utils/getData';


export default function Actors () {
  const [actorsList, setActorsList] = useState([])
  const [page, setPage] = useState()

  useEffect(() => {
    const getActors = async () => {
      const res = await retrieveActors()
      setActorsList(res.results)
      setPage(res.next)
    }
    getActors()
  }, [])

  const handleAddActors = async () => {
    if (page) {
      const res = await getData(page)
      setActorsList([...actorsList, ...res.results])
      setPage(res.next)
    }
  }

  return (
    <>
      {
        actorsList && (
          <>
            <List list={actorsList} page={'actors'} />
            {
              actorsList.length < 82 ? (
                <Button open={handleAddActors} text={'Ver más'} name={'view__button'} />
              ) : (
                null
              )
            }
          </>
        )
      }
    </>
  )
}
