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
              <a className="mx-4 text-3xl" href="#"><i><FontAwesomeIcon icon={faCartShopping} /></i></a>
              <a className="mx-4 text-3xl" href="#"><i><FontAwesomeIcon icon={faUser} /></i></a>
            </div>
          </div>
        </div>
        <div>
          <Image className='w-[1250px] mx-auto  ' src={banner} alt="" />
        </div>
        <div className='grid grid-cols-3 w-[1250px] h-[1200px] mx-auto gap-[115px] mt-[100px] mb-[50px]'>
          <div className='w-[340px] h-[538px] p-[15px] bg-gray-200'>
            <Image className='w-[200px] h-[300px] mx-auto mt-[20px]' src={book01} alt="" />
            <h4 className='font-bold text-[18px] my-[10px] ml-[20px]'>Tâm lý học về tiền</h4>
            <h4 className='ml-[20px]'>Nghiên cứu cách mà tâm lý, cảm xúc và hành vi của con người ảnh hưởng đến cách họ kiếm, chi tiêu, tiết kiệm</h4>
            <button className='bg-black text-white p-[10px] rounded-l mx-[105px] mt-[10px] hover:bg-white hover:text-black'>Mua ngay </button>
          </div>
          <div className='w-[340px] h-[538px] p-[15px] bg-gray-200' >
            <Image className='w-[200px] h-[300px] mx-auto mt-[20px]' src={book02} alt="" />
            <h4 className='font-bold text-[18px] my-[10px] ml-[20px]'>Thấu hiểu tiếp thị</h4>
            <h4 className='ml-[20px]'>Một yếu tố quan trọng trong việc xây dựng và phát triển thương hiệu. Đây là quá trình tìm hiểu sâu sắc về thị trường.</h4>
            <button className='bg-black text-white p-[10px] rounded-l mx-[105px] mt-[10px] hover:bg-white hover:text-black'>Mua ngay </button>
          </div>
          <div className='w-[340px] h-[538px] p-[15px] bg-gray-200'>
            <Image className='w-[200px] h-[300px] mx-auto mt-[20px]' src={book03} alt="" />
            <h4 className='font-bold text-[18px] my-[10px] ml-[20px]'>Từ tốt đến vĩ đại</h4>
            <h4 className='ml-[20px]'>Cuốn sách nổi tiếng của Jim Collins, khám phá lý do tại sao một số công <br /> ty thành công vượt bậc  </h4>
            <button className='bg-black text-white p-[10px] rounded-l mx-[105px] mt-[10px] hover:bg-white hover:text-black'>Mua ngay </button>
          </div>
          <div className='w-[340px] h-[538px] p-[15px] bg-gray-200'>
            <Image className='w-[200px] h-[300px] mx-auto mt-[20px]' src={book04} alt="" />
            <h4 className='font-bold text-[18px] my-[10px] ml-[20px]'>Nếu biết trăm năm là hữu hạn</h4>
            <h4 className='ml-[20px]'>Mở đầu cho một suy tư sâu sắc về <br /> thời gian và cuộc sống. Đoạn thơ<br /> thường gợi ý đến những cảm xúc .</h4>
            <button className='bg-black text-white p-[10px] rounded-l mx-[105px] mt-[10px] hover:bg-white hover:text-black'>Mua ngay </button>
          </div>
          <div className='w-[340px] h-[538px] p-[15px] bg-gray-200'>
            <Image className='w-[200px] h-[300px] mx-auto mt-[20px]' src={book05} alt="" />
            <h4 className='font-bold text-[18px] my-[10px] ml-[20px]'>Nghĩ giàu làm giàu</h4>
            <h4 className='ml-[20px]'>Một cuốn sách nổi tiếng của tác giả Napoleon Hill, xuất bản lần đầu <br /> vào năm 1937.</h4>
            <button className='bg-black text-white p-[10px] rounded-l mx-[105px] mt-[10px] hover:bg-white hover:text-black'>Mua ngay </button>
          </div>
          <div className='w-[340px] h-[538px] p-[15px] bg-gray-200'>
            <Image className='w-[200px] h-[300px] mx-auto mt-[20px] ' src={book06} alt="" />
            <h4 className='font-bold text-[18px] my-[10px] ml-[20px]'>7 thói quen để thành đạt</h4>
            <h4 className='ml-[20px]'>Cuốn sách nổi tiếng của Stephen R. Covey, cung cấp các nguyên tắc cơ <br /> bản để phát triển cá nhân.</h4>
            <button className='bg-black text-white p-[10px] rounded-l mx-[105px] mt-[10px] hover:bg-white hover:text-black'>Mua ngay </button>
          </div>
        </div>
      </div>
    </>
  )
}