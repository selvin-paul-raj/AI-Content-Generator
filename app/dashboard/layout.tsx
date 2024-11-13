import Header from '@/components/Header';
import SideNav from '@/components/SideNav';

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className="bg-slate-100 h-screen">
        <div  className='md:w-64 hidden md:block fixed '>
            <SideNav/>
        </div>
        <div className="md:ml-64">
          <Header/>
            {children}
        </div>
    </div>
  )
}

export default layout