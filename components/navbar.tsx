import Link from "next/link";
import Container from "../components/ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import getStore from "@/actions/get-store";

const Navbar = async () => {
    const categories = await getCategories()
    const store = await getStore()
  return (
    <div className="border-b border-slate-600">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-end">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-3xl capitalize text-emerald-950">{store.name}</p>
          </Link>
          <MainNav data={categories}/>
          <NavbarActions/>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
