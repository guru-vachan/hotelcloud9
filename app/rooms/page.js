import Breadcrumb from "@/components/Breadcrumb";
import Rooms from "@/components/Rooms";
import RoveroLayout from "@/layouts/RoveroLayout";
import { pages } from "@/utility/config";
import Link from "next/link";
const page = () => {
  return (
    <RoveroLayout>
      <Breadcrumb
        pageName="Rooms"
        bgImage={pages.rooms.image}
        pageTitle={pages.rooms.title}
        pageSubTitle={pages.rooms.description}
      />
      <div className="rooms-hm2-area room-page2 hm2 mt-120 mb-120">
        <div className="container-fluid container-wrapper p-md-0">
        <Rooms />
         
        
        </div>
        {/* /container */}
      </div>
    </RoveroLayout>
  );
};
export default page;
