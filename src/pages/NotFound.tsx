import { HiArrowRight } from 'react-icons/hi';
import useMoveBack from '../hooks/useMoveBack';
import { TbError404 } from 'react-icons/tb';

function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="h-screen text-secondary-700">
      <div className="container xl:max-w-screen-xl">
        <div className="sm:max-w-sm flex justify-center pt-10">
          <div>
            <div className="flex items-center gap-x-2 mb-8">
              <TbError404 className="text-5xl text-primary-800" />
              <h1 className="text-xl font-bold">صفحه ای که دنبالش بودید، یافت نشد</h1>
            </div>
            <button onClick={moveBack} className="flex items-center gap-x-2">
              <HiArrowRight className="w-6 h-6 text-primary-900" />
              <span className="text-secondary-700 text-lg"> برگشت</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NotFound;
