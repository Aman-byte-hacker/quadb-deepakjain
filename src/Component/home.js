import React, { useEffect, useState } from "react";
import Main from "./Main";
import Summary from "./Summary";
export const Home = () => {
  const [data, setdata] = useState([]);
  const [summary, setsummary] = useState([]);

  const getdata = async () => {
    const url = `https://api.tvmaze.com/search/shows?q=all`;
    const responce = await fetch(url);
    const resjson = await responce.json();
    setdata(resjson);
    setsummary(resjson);
  };
  useEffect(() => {
    getdata();
  }, []);
  // summary.map((a) => {
  //     return console.log(a.show.summary)
  // })
  return (
    <>
      <div className="container">
        {" "}
        {data.map((cur) => {
          console.log(cur.show.summary);
            if (cur.show.image){
                return(
                    <Main 
                        key={cur.id}
                        name={cur.show.name}
                        type={cur.show.type}
                        lang={cur.show.language}
                        img = {cur.show.image.original}
                    />
                )
            }
            else{
                return(
                    <Main
                        
                        key={cur.id}
                        name={cur.show.name}
                        type={cur.show.type}
                        lang={cur.show.language}
                        img="https://static.tvmaze.com/uploads/images/medium_portrait/280/701869.jpg"
                    />
                )
            }
       
        })}{" "}
        {summary.map((a) => {
          {/* return <Summary id={a.id} summary={a.show.summary} />; */}
        })}{" "}
      </div>{" "}
    </>
  );
};
