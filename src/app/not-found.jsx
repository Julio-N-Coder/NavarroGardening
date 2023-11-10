import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='errorMain'>
      <h1 className='errorTitle'>Not Found</h1>
      <p className='errorSentence'>Could not find requested resource</p>
      <Link className='link errorSentence' href="/">Return Home</Link>
    </main>
  )
}
