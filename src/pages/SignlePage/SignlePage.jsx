import React, { useEffect, useState } from 'react'
import "./SignlePage.css"
import { useParams } from 'react-router-dom'

 function SignlePage() {
   let {id} = useParams()
   const [date, setDate] = useState(null)

   useEffect(() => {
    fetch(`https://fakestoreapi.com/products${id}`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      setDate(res)
    })
    .catch(err => conlose.log(err))
   }, [])

  return (
    <>
    <img src={date?.imgae} alt="" />
    <h1>{date?.title}</h1>
    </>
  )
}

export default SignlePage