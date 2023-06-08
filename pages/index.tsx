import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import NavBar from '@/components/NavBar';
import userCurrentUser from '@/hooks/useCurrentUser';
import useMovieList from '@/hooks/useMovieList';
import { NextPageContext } from 'next';
import { getSession,signOut } from 'next-auth/react';


export async function getServerSideProps(context:NextPageContext) {
  const session=await getSession(context);
  if(!session){
    return{
      redirect:{
        destination:'/auth',
        permanent:false,
      }
    }
  }
  return{
    props:{}

  }
}

export default function Home() {
  const{data:movies=[]}=useMovieList();
  return (
    <>
      <NavBar/>
      <Billboard/>
      <div className="pb-40">
        <MovieList title="Tending now" data={movies}/>
      </div>
    </>
  )
}
