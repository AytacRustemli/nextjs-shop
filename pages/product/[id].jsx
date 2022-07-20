import React from 'react'
import {useRouter} from 'next/router'

function Detail() {
    const router = useRouter()
    const {id} = router.query
    console.log(id);
  return (
    <div>Detail</div>
  )
}

export default Detail