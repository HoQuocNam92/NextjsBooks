import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import banner from '../images/banner.jpg';
import book01 from '../images/book-01.jpg';
import book02 from '../images/book-02.jpg';
import book03 from '../images/book-03.jpg';
import book04 from '../images/book-04.png';
import book05 from '../images/book-05.jpg';
import book06 from '../images/book-06.jpg';
export default function Page() {
  const product = [
    book01, book02, book03, book04, book05, book06
  ]
  return (
    <>
      <div>
        <div className="text-center mx-32  my-8 pb-4 border-b-2 border-gray-200 "  >
          <div className="flex justify-between">
            <div>
              <h1 className="text-4xl font-bold">SHOPPING</h1>
            </div>
            <div>
              <a className="mx-4" href="#">Home</a>
              <a className="mx-4" href="#">Products</a>
              <a className="mx-4" href="#">Services</a>
              <a className="mx-4" href="#">Pricing</a>
            </div>
            <div className='flex justify-center'>
              <a className="mx-4 text-3xl" href="#" aria-label="Search"><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
              <a className="mx-4 text-3xl" href="cart"><i><FontAwesomeIcon icon={faCartShopping} /></i></a>
              <a className="mx-4 text-3xl" href="SignUp"><i><FontAwesomeIcon icon={faUser} /></i></a>
            </div>
          </div>
        </div>
        <div>
          <Image className='w-[1250px] mx-auto  ' src={banner} alt="" />
        </div>
        <div className='grid grid-cols-3 w-[1250px] h-[1200px] mx-auto gap-[115px] mt-[100px] mb-[50px]'>
          {product.map((items, index) => (
            <div className='w-[340px] h-[538px] p-[15px] bg-gray-200'>
              <Image key={index} className='w-[200px] h-[300px] mx-auto mt-[20px]' src={items} alt="" />
              <h4 className='font-bold text-[18px] my-[10px] ml-[20px]'>Tâm lý học về tiền</h4>
              <h4 className='ml-[20px]'>Nghiên cứu cách mà tâm lý, cảm xúc và hành vi của con người ảnh hưởng đến cách họ kiếm, chi tiêu, tiết kiệm</h4>
              <button className='bg-black text-white p-[10px] rounded-l mx-[105px] mt-[10px] hover:bg-white hover:text-black'>Mua ngay </button>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}