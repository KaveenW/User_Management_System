import Image from "next/image";
import Navbar from "../../components/Navbar";
import UserList from "../../components/UserList"
import AddUser from "../../components/AddUser";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="">
        <AddUser/>
        <UserList/>
      </main>

    </div>
  );
}
