import React, { useEffect, useState } from "react";
import PageWrapper from "../../components/common/PageWrapper";
import MainContent from "../../components/MainContent";

const MainPage: React.FC = () => {
  const [contentVisibility, setContentVisibility] = useState(false);
  // const [stateSecond, setStateSecond] = useState(0);
  // console.log(
  //   "main page container"
  //   // `state = ${state}`
  //   // `stateSecond = ${stateSecond}`
  // );

  useEffect(() => {
    console.log(
      "main page container mount"
      // `state = ${state}`
      // `stateSecond = ${stateSecond}`
    );
  }, []);

  // useEffect(() => {
  //   console.log(`componrnt update stateSecond = ${stateSecond}`);
  // }, [stateSecond]);

  return (
    <PageWrapper>
      {contentVisibility && <MainContent />}
      <button
        type="button"
        onClick={() => setContentVisibility((prev) => !prev)}>
        {contentVisibility ? "Скрыть контент" : "Показать контент"}
      </button>
      {/* <button type="button" onClick={() => setStateSecond((prev) => prev + 1)}>
        UPDATE Second State
      </button> */}
    </PageWrapper>
  );
};

export default MainPage;
