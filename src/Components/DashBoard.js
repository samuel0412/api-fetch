import React, { useState, useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
import MenuBar from "./AppBar";
import Api from "../services";
import { Box } from "@mui/system";
const DashBoard = () => {
  const [loader, setLoader] = useState(true);
  const [getTodo, setGetTodo] = useState(null);
  const [error, setError] = useState(null);

  const todoList = async () => {
    try {
      const response = await Api().get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      if (response) {
        console.log(response.data);
        setLoader(false);
      } else {
        console.log("error in while getting data");
      }
    } catch (e) {
      setError("Something went wrong");
    }
  };
  useEffect(() => {
    todoList();
  }, []);
  if (loader) {
    return (
      <>
        <Box sx={{ width: 2000 }} style={{ marginTop: 190 }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      </>
    );
  }
  return (
    <div>
      <MenuBar />
      <div className="" style={{ marginTop: 90 }}></div>
    </div>
  );
};

export default DashBoard;
