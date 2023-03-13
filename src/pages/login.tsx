import { NextApiRequest, type NextPage } from "next";
import { Layout } from "@/components";
import { AiFillGithub } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { getSession, signIn } from "next-auth/react";

const login: NextPage = () => {
  // Github Signin
  const handleGithubSignin = () => {
    signIn("github", { callbackUrl: "http://localhost:3000" });
  };

  // Discord Signin
  const handleDiscordSignin = () => {
    signIn("discord", { callbackUrl: "http://localhost:3000" });
  };

  return (
    <Layout
      metaContent="Most Authentic Warteg"
      metaDescription="The Warteg Marketplace!"
      title="Login | wShop"
    >
      <div className="container mx-auto">
        <div className="centerized h-screen place-items-center">
          <div className="items-centerized">
            <div className="flex flex-col space-y-2">
              <button className="btn-primary btn-sm btn capitalize">
                email
              </button>
              <button
                className="btn-sm btn capitalize"
                onClick={handleGithubSignin}
              >
                <AiFillGithub className="mr-2" /> Github
              </button>
              <button
                className="btn-sm btn capitalize"
                onClick={handleDiscordSignin}
              >
                <FaDiscord className="mr-2" /> Discord
              </button>
            </div>
            <div className="divider divider-horizontal"></div>
            <div>
              <h2 className="text-2xl font-extrabold">Login ke Akun kamu!</h2>
              <p className="">
                Masuk untuk berbelanja menu Warteg, atau mulai berjulan sekarang
                juga
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default login;

export async function getServerSideProps({ req }: { req: NextApiRequest }) {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
