import React from 'react'

export default async function page({ params}) {
    const name = (await params).name
    //db query to get data or username
  return (
    <div>
        This is about {name}
    </div>
  )
}
