import { useState, useEffect } from "react";

const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const upDateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setCompletion(
          Number(Number(currentProgress / scrollHeight).toFixed(2)) * 100
        );
      }
    };

    window.addEventListener("scroll", upDateScrollCompletion);
    return () => window.removeEventListener("scroll", upDateScrollCompletion);
  }, []);

  return completion;
};

export default useScrollProgress;
