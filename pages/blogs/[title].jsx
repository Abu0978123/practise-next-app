import { useRouter } from 'next/router'
import React from 'react'

export default function title() {
    const router = useRouter();
    // console.log(router.query.title)
  return (
    <div>
        this is dynamic router <h1>
            title no {router.query.title}
        </h1>
    </div>
  )
}
