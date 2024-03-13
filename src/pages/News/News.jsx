import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>

      <div>
        <div className="grid md:grid-cols-4">
          <div className="col-span-3">

             <p className="text-4xl"> new comming</p>
             {id}
          </div>
          <div>
            <RightSideNav></RightSideNav>

          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
