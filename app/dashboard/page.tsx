import React from 'react'

type Props = {}

const page = (props: Props) => {
    console.log('URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log('Key:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  return (
    <div>page</div>
  )
}

export default page