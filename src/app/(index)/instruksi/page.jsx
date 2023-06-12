import Link from "next/link";
import { FaFileDownload } from "react-icons/fa";

export const metadata = {
  title: "Instruksi",
};

function page() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <button className="btn-dark-action">
          <Link
            className="flex item-center text-white gap-3 py-2 font-semibold"
            href={
              "https://drive.google.com/file/d/1ug2OP9wuEYLMa7DrnkPYMEJuqHzPilHt/view?usp=drive_link"
            }
            target="_blank"
          >
            <FaFileDownload className="text-xl" />
            Download Guidbook
          </Link>
        </button>
      </div>
    </>
  );
}

export default page;
