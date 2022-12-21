import React from "react";
import Footer from './components/profile/Footer';
import ProfileList from "./components/profile/ProfileList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const data = [
    {
      
      FullName: "narimen chaabene",
      Profession: " ingénieur full stack js",
      Bio:"skills",
      Image: "https://www.google.com/search?q=image+profile&tbm=isch&ved=2ahUKEwjBuc6j1Iv8AhURt6QKHderAKMQ2-cCegQIABAA&oq=image+profile&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgjECc6BggAEAcQHjoECAAQQzoICAAQgAQQsQM6BwgAELEDEENQ8QlYn0dgo0hoBXAAeACAAfQBiAG2FJIBBjAuMTcuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=DnujY8H6JJHukgXX14KYCg&bih=694&biw=1517&rlz=1C1CHBF_frTN973TN973#imgrc=V0vATOu1b2AS0M",
    },
  ]

  const handleEvent=(x)=>{alert(`the name of the profile is : ${x.FullName} `)}
  return (
    <>
 <ProfileList list={data} functionAlert={handleEvent} />
      <Footer >
      </Footer>
    </>
  );
}
export default App;
