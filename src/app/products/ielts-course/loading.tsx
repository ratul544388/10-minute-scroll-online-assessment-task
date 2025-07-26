import { Loader2 } from 'lucide-react'
import React from 'react'

const Loading = () => {
  return (
    <div className='h-main flex items-center justify-center'>
      <Loader2 className='size-10 animate-spin text-primary'/>
    </div>
  )
}

export default Loading
