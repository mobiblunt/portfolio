import React from 'react'
import Project from '@/components/Project'

const bedspace = () => {
    const description = "A web application for temporary lodging. Users can authenticate, view dashboard, book listings and also post listings as hosts. it is implemented using Laravel and Mysql on the backend and InertiaJs, ReactJs and Tailwind CSS on the client side."

    const overview = "Bedspace Overview"

    const link = "https://github.com/mobiblunt/bedspaces"

    const repo = "https://github.com/mobiblunt/bedspaces"

    const tools = ['Laravel PHP', 'ReactJs', 'InertiaJs', 'MYSQL', 'TailwindCSS']
  return (
    <Project title="Bedspace" description={description} tools={tools} overview={overview} link={link} repo={repo}/>
  )
}

export default bedspace