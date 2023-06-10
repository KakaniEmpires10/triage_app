import style from "@/styles/loading.module.css";

const loading = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className={style.ldsHeart}>
        <div></div>
      </div>
    </div>
  );
};

export default loading;
