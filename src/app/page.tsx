'use client'

import { useState } from 'react'
import QRCode from 'react-qr-code'


export default function Home() {

  const [link, setlink] = useState('')
  const [qrcodelink, setqrcodelink] = useState('')

  function pegaQrcode(e: any) {
    setlink(e.target.value)
  }

  //function urlGenerate(linkUrl: any) {
  //  QRCodeLink.toDataURL(linkUrl, {
  //    width: 600,
  //    margin: 3,
  //  }), function (err: any, url: any) {
  //    setqrcodelink(url)
  //  }
  //}

  return (    
    <main className='flex justify-center items-center flex-col'>
      <h1 className='text-3xl mb-6'>Gerador de QrCode</h1>
      <div className='bg-slate-400 p-8 flex flex-col rounded-lg'>
        <QRCode className='mb-10'
          value={link}
        />
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 inputreset" placeholder='Seu texto aqui' type="text" value={link} onChange={(e) => pegaQrcode(e)} />

        
      </div>
    </main>
  )
}
