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
    {
      id: 1,
      img: book01,
      name: 'Tâm lý học về tiền',
      title: 'Nghiên cứu cách mà tâm lý, cảm xúc và hành vi của con người ảnh hưởng đến cách họ kiếm, chi tiêu, tiết kiệm',
      price: "99.999 VND"

    },
    {
      id: 2,
      img: book02,
      name: 'Thấu hiểu tiếp thị',

      title: 'Một yếu tố quan trọng trong việc xây dựng và phát triển thương hiệu.Đây là quá trình tìm hiểu sâu sắc về thị trường.',
      price: "129.999 VND"

    },
    {
      id: 3,
      img: book03,
      name: 'Từ tốt đến vĩ đại',
      title: 'Cuốn sách nổi tiếng của Jim Collins, khám phá lý do tại sao một số công  ty thành công vượt bậc  ',
      price: "89.999 VND"

    },
    {
      id: 4,
      img: book04,
      name: 'Nếu biết trăm năm là hữu hạn',
      title: 'Mở đầu cho một suy tư sâu sắc về <br /> thời gian và cuộc sống. Đoạn thơ  thường gợi ý đến những cảm xúc .',
      price: "49.999 VND"

    },
    {
      id: 5,
      img: book05,
      name: 'Nghĩ giàu làm giàu',
      title: 'Một cuốn sách nổi tiếng của tác giả Napoleon Hill, xuất bản lần đầu   vào năm 1937.',
      price: "79.999 VND"

    },
    {
      id: 6,
      img: book06,
      name: '7 thói quen để thành đạt',
      title: 'Cuốn sách nổi tiếng của Stephen R. Covey, cung cấp các nguyên tắc cơ  bản để phát triển cá nhân.',
      price: "199.999 VND"

    }

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
            <div className='w-[340px] h-[558px] p-[15px] bg-gray-200'>
              <Image className='w-[200px] h-[300px] mx-auto mt-[20px]' src={items.img} alt="" />
              <h4 className='font-bold text-[18px] my-[10px] ml-[20px]'>{items.name}</h4>
              <h4 className='ml-[20px]'>{items.title}</h4>

              <div className='ml-[60px] text-[20px] font-bold mt-2'>Giá : {items.price}</div>
              <button className='bg-black text-white p-[10px] mx-[100px] mt-2 rounded-lg hover:bg-white hover:text-black'><a href="cart">Mua ngay</a> </button>

            </div>
          ))}

        </div>
      </div>
    </>
  )
}