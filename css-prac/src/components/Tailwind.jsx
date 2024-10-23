import chevron from '../assets/chevron.svg'
import star from '../assets/star.svg'
import starSolid from '../assets/starSolid.svg'

const Tailwind = () => {
  return (
    <div>
      <h1 className='text-center text-[20px]'>Tailwind</h1>

      <div className='box-border w-[1000px] mx-auto p-[20px] border border-black'>
        <div className='w-full flex items-center gap-[8px] pb-[10px]'>
          <p>Men</p>
          <img src={chevron} alt='chevron' className='w-[20px]' />
          <p>Clothing</p>
          <img src={chevron} alt='chevron' className='w-[20px]' />
          <p>Basic Tee 6-pack</p>
        </div>

        <div className='w-full h-[500px] flex gap-5'>
          <div className='flex-1'>
            <img
              src='https://picsum.photos/400'
              alt='thumbnail'
              className='rounded object-cover h-full'
            />
          </div>
          <div className='flex flex-col flex-1 justify-between'>
            <img
              src='https://picsum.photos/300'
              alt='thumbnail'
              className='w-full h-[240px] rounded object-cover'
            />
            <img
              src='https://picsum.photos/350'
              alt='thumbnail'
              className='w-full h-[240px] rounded object-cover'
            />
          </div>
          <div className='flex-1'>
            <img
              src='https://picsum.photos/450'
              alt='thumbnail'
              className='rounded object-cover h-full'
            />
          </div>
        </div>

        <div className='w-full flex gap-5 pt-[20px] '>
          <div className='w-[70%]'>
            <h2 className='text-[30px] font-extrabold pb-[10px]'>
              Basic Tee 6-Pack
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              impedit error asperiores dolores, possimus soluta iure ipsum
              dolorem ab rem debitis minima minus, temporibus non voluptatibus
              in obcaecati cum doloremque.
            </p>
            <h3 className='text-[18px] font-semibold pt-[20px] pb-[10px]'>
              Features
            </h3>
            <ul>
              <li className='ml-[20px] list-disc'>Lorem ipsum dolor sit.</li>
              <li className='ml-[20px] list-disc'>Lorem ipsum dolor sit.</li>
              <li className='ml-[20px] list-disc'>Lorem ipsum dolor sit.</li>
              <li className='ml-[20px] list-disc'>Lorem ipsum dolor sit.</li>
            </ul>
            <h3 className='text-[18px] font-semibold pt-[20px] pb-[10px]'>
              Other
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              impedit error asperiores dolores, possimus soluta iure ipsum
              dolorem ab rem debitis minima minus, temporibus non voluptatibus
              in obcaecati cum doloremque.
            </p>
          </div>

          <div className='w-[30%] flex flex-col'>
            <p className='text-[30px]'>$192</p>
            <div className='flex items-center gap-2 my-[10px]'>
              <div className='flex'>
                <img src={starSolid} alt='star' className='w-4 h-4' />
                <img src={starSolid} alt='star' className='w-4 h-4' />
                <img src={starSolid} alt='star' className='w-4 h-4' />
                <img src={starSolid} alt='star' className='w-4 h-4' />
                <img src={star} alt='star' className='w-4 h-4' />
              </div>
              <span>117 reviews</span>
            </div>
            <div className='my-5'>
              <p>Color</p>
              <div className='flex items-center gap-2'>
                <div className='w-7 h-7 rounded-full bg-white border border-violet-600'></div>
                <div className='w-7 h-7 rounded-full bg-gray-600'></div>
                <div className='w-7 h-7 rounded-full bg-black'></div>
              </div>
            </div>
            <div div className='mb-5'>
              <div className='flex items-center justify-between'>
                <p>Size</p>
                <span className='font-semibold text-sm text-violet-600'>
                  Size guide
                </span>
              </div>
              <div className='grid grid-cols-4 gap-2'>
                <div className='border rounded aspect-square flex items-center justify-center text-gray-300 bg-gray-100 relative overflow-hidden'>
                  XXS
                  <div className='absolute top-6 right-1 w-28 h-28 border border-gray-300 rotate-45 origin-center'></div>
                </div>
                <div className='border rounded aspect-square flex items-center justify-center'>
                  XS
                </div>
                <div className='border rounded aspect-square flex items-center justify-center'>
                  S
                </div>
                <div className='border rounded aspect-square flex items-center justify-center'>
                  M
                </div>
                <div className='border rounded aspect-square flex items-center justify-center'>
                  L
                </div>
                <div className='border rounded aspect-square flex items-center justify-center'>
                  XL
                </div>
                <div className='border rounded aspect-square flex items-center justify-center'>
                  XXL
                </div>
                <div className='border-2 rounded aspect-square flex items-center justify-center border-violet-600'>
                  XXXL
                </div>
              </div>
            </div>
            <button className='bg-violet-600 text-white py-2 px-4 rounded'>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tailwind
