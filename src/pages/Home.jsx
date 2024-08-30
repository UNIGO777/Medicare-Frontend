import HeroImage from "../assets/images/hero-img01.png"
import HeroImage2 from "../assets/images/hero-img02.png"
import HeroImage3 from "../assets/images/hero-img03.png"

const Home = () => {
  return (
    <>
    <section className="min-h-screen hero-bg">
      <br /><br  /><br  /><br className="hidden md:block" />
      <div className="Hero grid md:grid-cols-2  gap-10  h-[90vh] px-[10%]">
        <div className="grid place-items-center h-full ">
          <div >
            <h1 className=" font-extrabold text-[9vw] mb-3 md:text-[4vw] lg:text-6xl   " style={{lineHeight:"100%"}} >We help patients live a healthy, longer life</h1>
            
            <p className="md:text-[2vw] text-[5vw] lg:text-lg mb-10 md:mb-[3vw] " style={{lineHeight:"120%"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error obcaecati explicabo fugit quisquam aliquid dolor, aperiam dolorem. Facere, molestiae reprehenderit!</p>
            
            <button className="btn py-1 px-5 md:px-10 md:py-3 rounded-full text-[3vw] lg:text-[1vw] md:text-[2vw]">Request an appoitment</button>
            <br />
            <br />
            <br />
            <div className="grid grid-cols-3">
              <div>
                <h1 className="font-bold w-fit relative text-2xl md:text-4xl mb-3">
                  <span className="z-20 relative">30+</span>
                  <div className="absolute z-10 w-[120%] h-2 -bottom-1  bg-[#FEB60D] rounded-full"></div>
                </h1>
                
                <p className="text-[3vw] md:text-sm" style={{lineHeight:"120%"}}>Years of experience </p>
              </div>
              <div>
                <h1 className="font-bold w-fit relative text-2xl md:text-4xl mb-3">
                  <span className="z-20 relative">15+</span>
                  <div className="absolute z-10 w-[120%] h-2 -bottom-1  bg-[#FEB60D] rounded-full"></div>
                </h1>
                
                <p className="text-[3vw] md:text-sm" style={{lineHeight:"120%"}}>Clinic location </p>
              </div>
              <div>
                <h1 className="font-bold w-fit relative text-2xl md:text-4xl mb-3">
                  <span className="z-20 relative">100%</span>
                  <div className="absolute z-10 w-[120%] h-2 -bottom-1  bg-[#FEB60D] rounded-full"></div>
                </h1>
                
                <p className="text-[3vw] md:text-sm" style={{lineHeight:"120%"}}>Patient Satisfaction</p>
              </div>
              
            </div>
          </div>


        </div>
        <div className="HeroImage grid place-items-center ">
          <div className="flex  h-[70%] w-[90%] ">
            <div className="  w-[60%]  p-2 flex items-center">
                <img src={HeroImage} alt="" className=" rounded-md w-full h-full object-cover" />
            </div>
            <div className="w-[40%]  flex flex-col gap-2 ">
              <div className="h-[50%]    md:grid place-items-center   ">
                <img src={HeroImage2} alt=""  className="w-full rounded-md h-full object-cover" />
              </div>
              <div className="h-[48%]  md:grid place-items-center ">
                <img src={HeroImage3} alt="" className="w-full rounded-md h-full object-cover" />
              </div>
            </div>
          </div>
             
        </div>

      </div>
      

      </section>
      <br />
      <br />
    <section className="min-h-screen ">
        <div className="grid  h-full">
          <div className=" grid grid-rows-2 place-items-center py-5 h-[30vh] w-full">
            <h1 className="text-center  font-bold text-[3vw]" style={{lineHeight:"105%"}} >Providing the best <br /> medical services</h1>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.  Consequuntur, <br />dolorem officiis id velit vel aliquam nam amet, esse hic sed totam minus nesciunt sint numquam dolor veritatis doloribus eos aliquid.</p>
          </div>
          <div className="bg-red-800 h-[60vh] w-full">
            hello
          </div>
      </div>
      
      

      </section>
    </>
  )
}

export default Home