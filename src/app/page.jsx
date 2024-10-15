import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Searchbar from "@/components/Searchbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-20 mx-8">
        <h1 className="text-xl font-bold mb-4">LYTGADGET.ID READY STOCK</h1>
        <Searchbar />
        <div className="py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-8">
          <Card
            name="Iphone 13 Promax"
            price={9800000}
            status="IBOX"
            spec="8/256"
            link="https://instagram.com/elvxk"
            image="https://wallpapers.com/images/featured/yellow-square-012q36x57zmvf259.jpg"
          />
          <Card
            name="Samsung S23 FE sdsad"
            price={9800000}
            status="NEW"
            spec="8/512"
            link="https://instagram.com"
            image="https://wallpapers.com/images/featured/yellow-square-012q36x57zmvf259.jpg"
          />
          <Card
            name="Iphone XR"
            price={9800000}
            status="SECCOND"
            spec="12/512"
            link="https://instagram.com"
            image="https://wallpapers.com/images/featured/yellow-square-012q36x57zmvf259.jpg"
          />
          <Card
            name="Samsung S24 Ultra"
            price={19800000}
            status="NEW"
            link="https://instagram.com"
            image="https://wallpapers.com/images/featured/yellow-square-012q36x57zmvf259.jpg"
          />
          <Card
            name="Samsusng S24 FE"
            price={9999000}
            status="NEW"
            link="https://instagram.com"
            image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          />
          <Card
            name="Samsusng S24 FE"
            price={9999000}
            status="NEW"
            link="https://instagram.com"
            image="https://wallpapers.com/images/featured/yellow-square-012q36x57zmvf259.jpg"
          />
          <Card
            name="Samsusng S24 FE"
            price={9999000}
            status="NEW"
            link="https://instagram.com"
            image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
