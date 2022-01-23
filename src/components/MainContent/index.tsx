import React, { useEffect } from "react";

const MainContent: React.FC = () => {
  const handler = () => {
    console.log("click");
  };
  useEffect(() => {
    console.log("main content mount");
    document.body.addEventListener("click", handler);
    return () => {
      console.log("main content unmount");
      document.body.removeEventListener("click", handler);
    };
  }, []);

  return (
    <div>
      <h1>MAIN PAGE CONTENT</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
        natus deserunt, sequi deleniti ut optio aperiam quisquam, accusantium
        nulla perferendis minima facere expedita obcaecati dolor qui cum
        recusandae soluta quo. Recusandae dignissimos saepe aliquam. Porro
        suscipit laborum iste explicabo velit vel! Inventore, iusto fuga libero
        facilis eius, corrupti sit ad perspiciatis facere debitis dicta odit
        mollitia consequatur eaque sapiente adipisci assumenda voluptas labore
        illum veniam corporis suscipit nesciunt, illo tempore? Quas, laborum ut
        perferendis accusantium consequatur consectetur soluta, omnis quisquam
        non harum neque cum illum, quo eveniet esse vero hic.
      </p>
    </div>
  );
};

export default MainContent;
