import Logo from "@/assets/Logo.png";


const Footer = () => {
  return (
    <footer className="bg-primary-100
    py-16">
    <div className="jusitfy-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
            <img alt="logo" src={Logo} />
            <p className="my-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil veniam distinctio inventore recusandae, voluptatem consectetur amet, eaque numquam reprehenderit saepe placeat dolores a error incidunt neque nobis alias quibusdam omnis.
            </p>
            <p>&copy; 2024 Evogym All rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">Links</h4>
        <p className="my-5">Massa orci senectus</p>
        <p className="my-5">akjskew wke  iweunf</p>
        <p className="my-5">qmdinwo inwe iwinof</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">Contact Us</h4>
        <p className="my-5">oriteu fernfeu ueuruok</p>
        <p className="my-5">(333)435-4398</p>
        </div>
        
    </div>

    </footer>
  )
}

export default Footer