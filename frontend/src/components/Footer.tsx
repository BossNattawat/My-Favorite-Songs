import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='flex justify-center items-center w-full p-8'>
        <p className='text-[#E6E1D0] text-xl'>Build by <Link to={"https://github.com/BossNattawat"} target='blank' className='text-[#04cac4]'>BossNattawat</Link></p>
    </footer>
  )
}

export default Footer