import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <>
      <h1 className="text-2xl text-white pt-24">DevFlow</h1>
    </>
  );
};

export default Home;
