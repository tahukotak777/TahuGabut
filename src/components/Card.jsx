import Link from 'next/link'

const Card = ({ title, description}) => {
    return ( 
        <div className="p-4 border-2 rounded-xl w-full h-full shadow-[10px_10px_10px_0px_rgb(0,0,0,0.8)]">
            <h1 className="mb-4 text-xl font-bold text-main-third">{title}</h1>
            <p className="mb-4 font-semibold">{description}</p>
            <Link href='/calculator' className='bg-main-primary hover:bg-main-third text-main-third hover:text-main-fourth transition-all duration-200 flex h-8 items-center justify-center font-bold rounded'>Go To</Link>
        </div>
     );
}

export default Card ;