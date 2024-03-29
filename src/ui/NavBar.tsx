import { useEffect, useState } from 'react';
import { IoExitOutline, IoLibraryOutline } from 'react-icons/io5';
import { BiMenu, BiX } from 'react-icons/bi';
import { HiOutlineHeart } from 'react-icons/hi2';
import { CiLogout } from 'react-icons/ci';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';
import useUser from '../features/authentication/useUser';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import { RiArrowDownSLine } from 'react-icons/ri';
import { RiUserLine } from 'react-icons/ri';
import useLogout from '../features/authentication/useLogout';
import Loading from './Loading';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
import { useQueryClient } from '@tanstack/react-query';
import truncateText from '../utils/truncateText';
import { HiOutlineX } from 'react-icons/hi';
import useEditBook from '../features/booskList/useEditBook';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { getBooks } from '../services/bookService';
import { useQuery } from '@tanstack/react-query';

interface BookType {
  id: number;
  is_favorite: boolean;
  image_url: string;
  title: string;
  author: string;
}

interface UserProfile {
  first_name: string;
  last_name: string;
  email: string;
}

const Links = [
  { name: 'خانه', link: '#' },
  { name: 'کتاب‌ها', link: '#book_lists' },
  { name: 'جستجو', link: '#book_lists' },
  { name: 'افزودن کتاب', link: '#book_lists' },
];
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const { data, isLoading } = useUser();
  const userProfile: UserProfile = data?.data?.data;
  const { isPending, logout } = useLogout();

  const queryClient = useQueryClient();
  const { data: fetchBooks } = useQuery({
    queryKey: ['get-filtered-book'],
    queryFn: () => getBooks(),
    retry: false,

    // onSuccess: () => {
    //   queryClient.invalidateQueries({
    //     queryKey: ['get-filtered-book'],
    //   });
    // },
  });
  useEffect(() => {
    if (fetchBooks) {
      queryClient.invalidateQueries({
        queryKey: ['get-filtered-book'],
      });
    }
  }, [fetchBooks, queryClient]);

  const filteredBooks =
    fetchBooks?.length > 0 &&
    fetchBooks?.filter((book: BookType) => book.is_favorite === true);

  const logOutHandler = async () => {
    try {
      await logout({ refresh_token: cookies.get('refresh_token') });
      cookies.remove('access_token');
      cookies.remove('refresh_token');

      queryClient.removeQueries();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav
        className={`py-3 w-full transiton-all duration-100 ease-out z-20 shadow-menu md:shadow-none backdrop-blur-2xl
  blur-0 opacity-100 sticky top-0 font-sans items-center px-2 sm:px-3 flex justify-between ${
    isLoading ? 'blur-sm opacity-50' : ''
  } `}
      >
        <ul
          className={`gap-x-6 fixed top-0 bg-secondary-200 text-secondary-0 md:bg-transparent h-screen md:h-auto md:col-span-5 flex md:ml-1 flex-col items-start md:items-center px-5 md:px-0 md:flex-row pt-20 md:pt-0 md:static md:z-auto z-[-1] left-0 w-full md:w-fit transition-all duration-500 ease-in ${
            open ? 'right-0' : 'rtl:right-[-1000px] ltr:left-[-1000px]'
          }`}
        >
          <div className="md:flex hidden items-center gap-x-1 ml-5">
            <IoLibraryOutline className="w-9 h-9 text-secondary-700" />
            <span className="font-bold text-secondary-700">رابوک</span>
          </div>
          {Links.map((link) => (
            <li
              key={link.name}
              onClick={() => setOpen(false)}
              className="md:ml-8 text-xl md:my-0 my-7"
            >
              <a
                href={link.link}
                className="text-secondary-800 hover:text-primary-600 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamurger menu */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl  right-2 flex items-center gap-x-3  cursor-pointer md:hidden"
        >
          {!open ? (
            <BiMenu className="w-9 h-9 text-secondary-700" />
          ) : (
            <BiX className="w-9 h-9 text-secondary-700" />
          )}

          <IoLibraryOutline className="w-8 h-8 m:w-9 sm:h-9 text-secondary-700 md:hidden" />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-x-3 ">
          <button className="relative" onClick={() => setIsModalOpen(true)}>
            <HiOutlineHeart className="w-9 h-9 text-red-500" />
            <span className="badge">{filteredBooks ? filteredBooks?.length : 0}</span>
          </button>

          {/* Logged-In user profile */}
          {userProfile ? (
            <Tippy
              theme="light"
              interactive={true}
              trigger="click"
              placement="bottom"
              content={
                <div
                  className={`transition-all text-primary-50 left-0 p-2 flex
              flex-col gap-4 `}
                >
                  <div className="flex flex-col items-center justify-end gap-2">
                    <span>
                      {userProfile?.first_name}
                      &nbsp;
                      {userProfile?.last_name}
                    </span>

                    <span>{userProfile?.email}</span>
                    <hr className="h-1 border-secondary-200 w-full" />
                  </div>
                  {isPending ? (
                    <Loading />
                  ) : (
                    <button
                      onClick={logOutHandler}
                      className="flex items-center gap-1 justify-center"
                    >
                      <IoExitOutline className="text-secondary-600 w-[18px] h-[18px]" />
                      <span>خروج</span>
                    </button>
                  )}
                </div>
              }
            >
              <button className="flex items-center text-secondary-600 justify-center border border-secondary-400 rounded-2xl p-[6px] shadow-md">
                <RiUserLine className="w-6 h-6" />
                <RiArrowDownSLine className="w-5 h-5" />
              </button>
            </Tippy>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="font-sans btn text-sm py-[9px] sm:py-2 sm:text-base btn--primary flex items-center gap-x-1"
            >
              <CiLogout />
              ورود
            </button>
          )}
        </div>
      </nav>

      <FavoriteBox
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        filteredBooks={filteredBooks}
        navigate={navigate}
        queryClient={queryClient}
      />
    </>
  );
};

export default NavBar;

interface FavoriteBoxProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filteredBooks: BookType[] | undefined;
  navigate: ReturnType<typeof useNavigate>;
  queryClient: ReturnType<typeof useQueryClient>;
}

const FavoriteBox: React.FC<FavoriteBoxProps> = ({
  isModalOpen,
  setIsModalOpen,
  filteredBooks,
  navigate,
  queryClient,
}) => {
  const { editBook } = useEditBook();

  const removeFavorite = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number,
  ) => {
    const newBook = {
      is_favorite: false,
    };
    e.stopPropagation();

    editBook(
      { id, newBook },
      {
        onSuccess: () => {
          queryClient.removeQueries();
          setIsModalOpen(false);
        },
      },
    );
  };

  return (
    <Modal
      title="کتاب های مورد علاقه ی من"
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    >
      <div className="grid gap-5 grid-cols-2 text-secondary-700 sm:grid-cols-3">
        {filteredBooks?.length ?? 0 > 0 ? (
          filteredBooks?.map((book) => (
            <div
              onClick={() => navigate(`/book/${book.id}`)}
              className="flex flex-col items-center justify-center gap-y-2 cursor-pointer bg-secondary-100 shadow-md p-3 "
              key={book.id}
            >
              <button className="w-full" onClick={(e) => removeFavorite(e, book.id)}>
                <HiOutlineX className="w-5 h-5 text-error" />
              </button>

              <div>
                <LazyLoadImage
                  effect="blur"
                  className="h-[10rem] w-full object-cover bg-cover"
                  src={book.image_url ? book.image_url : '/images/book-default.png'}
                  alt={book.title}
                />
              </div>
              <h1 className="font-semibold">{truncateText(book.title, 4)}</h1>
              <p>نویسنده: {truncateText(book.author, 4)}</p>
            </div>
          ))
        ) : (
          <h2 className="font-semibold text-center col-span-3 my-3">کتابی یافت نشد</h2>
        )}
      </div>
    </Modal>
  );
};
