import Header from '@/components/Header';
import SideNav from '@/components/SideNav';

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <>
        <div  className='md:w-64 hidden md:block fixed '>
            <SideNav/>
        </div>
        <div className="md:ml-64">
          <Header/>
            {children}
        </div>
    </>
  )
}

export default layout