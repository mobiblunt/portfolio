import React from 'react'
import Project from '@/components/Project'

const crypto = () => {
    const description = "This app gets the latest price of a crypto currency and can make margin conversions. Its is implemented using ReactJs and Tailwind on the frontend and nodeJs and GraphQl on the backend."

    const overview = "Crypto Overview"

    const img = './assets/img/crypto.png'

    const link = "https://github.com/mobiblunt/bedspaces"

    const repo = "https://github.com/mobiblunt/bedspaces"

    const tools = ['NodeJs', 'ReactJs', 'ExpressJs', 'GraphQl', 'TailwindCSS']

  return (
    <Project img={img} title="Live Crypto Convertor Application" description={description} tools={tools} overview={overview} link={link} repo={repo}/>
  )
}

export default crypto