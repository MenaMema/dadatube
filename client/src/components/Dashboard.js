import React, { useState } from "react";
import BoxCat from "./BoxCat";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [category, setCategory] = useState("");

  const handleCategory = (e) => {
    setCategory(() => e.target.value);
    console.log(category);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        // flexDirection: "column",
        maWwidth: "1000px",
        margin: "auto auto",
        alignItems: "center",
      }}
    >
      <Link to="/videoscategory/comedy">
        <BoxCat
          text="Comedy"
          value="comedy"
          backgroundColor="#ffeda1"
          onClick={handleCategory}
        />
      </Link>
      <Link to="/videoscategory/drama">
        <BoxCat
          text="Drama"
          value="drama"
          backgroundColor="#70c6db"
          onClick={handleCategory}
        />
      </Link>

      <Link to="/videoscategory/horror">
        <BoxCat
          text="Horror"
          value="horror"
          backgroundColor="#70bbb1"
          onClick={handleCategory}
        />
      </Link>
      <Link to="/videoscategory/cartoon">
        <BoxCat
          text="Cartoons"
          value="cartoon"
          backgroundColor="#ed6f8f"
          onClick={handleCategory}
        />
      </Link>

      <Link to="/videos">
        <BoxCat
          text="All Movies"
          value="videos"
          backgroundColor="#ed6f8f"
          onClick={handleCategory}
        />
      </Link>
    </div>
  );
};

export default Dashboard;
// export default function BoxSx() {
//   return (
//     <Box
//       sx={{
//         borderRadius: "20px",
//         width: 220,
//         height: 150,
//         backgroundColor: 'primary.dark',
//         '&:hover': {
//           backgroundColor: 'primary.main',
//           opacity: [0.9, 0.8, 0.7],
//         },
//       }}
//     />
//   );
// }
