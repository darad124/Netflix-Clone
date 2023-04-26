import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

export async function getServerSideProps(context: NextPageContext){
    const session = await getSession(context);
    if (!session){
        return {
            redirect: {
                destination : '/auth',
                permanent : false,
            }
        }
    }
    return {
        props: {}
    }
}
const Profiles = () =>
{ const { data: user} = useCurrentUser();
const router = useRouter();
    return(
        <div  className="= flex items-center h-full justify-center">
          <div className="flex-col">
            <h1 className="text-3xl text-center text-white md:text-6xl">Who is Watching?</h1>
            <div className="flex items-center justify-center gap-8 mt-10"></div>
            <div onClick={() =>router.push('/')}>
                <div className="flex-row mx-auto group w-44">
                  <div className="flex justify-center overflow-hidden border-2 border-transparent rounded w-44 h-44-md item-center group-hover:cursor-pointer group-hover:border-white">
                    <img src="/images/default-green.png" alt="" />
                    </div>  
                    <div className="mt-4 text-2xl text-center text-gray-400 group-hover:text-white">
                        {user?.name}
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
};
export default Profiles;




