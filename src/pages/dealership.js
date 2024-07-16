import React from 'react'
import Project from '@/components/Project'

const dealership = () => {
    const description = "This implements a full CRUD application using NextJs. Firestore is utilized on the backend for storage."

    const overview = "Dealership Overview"

    const link = "https://github.com/mobiblunt/dealership"

    const repo = "https://github.com/mobiblunt/dealership"

    const tools = ['NextJs', 'ReactJs', 'Firebase', 'GraphQl', 'TailwindCSS']

  return (
    <Project title="Car Dealership" description={description} tools={tools} overview={overview} link={link} repo={repo}/>
  )
}

export default dealership