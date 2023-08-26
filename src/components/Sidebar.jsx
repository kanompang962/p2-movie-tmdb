import { Stack } from "@mui/material";
import React from "react";

const Sidebar = ({ categotys,categoryId, setCategoryId, setCategoryName }) => {
  return (
    <Stack
      direction="row"
      paddingLeft={2}
      paddingRight={4}
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categotys.map((item, index) => (
        <button
          key={index}
          className="category-btn"
          onClick={() => {
            setCategoryId(item.id);
            setCategoryName(item.name);
            console.log(item.id);
          }}
          style={{
            background: item.id === categoryId && "green",
            color: "white",
            gap: "6px",
            borderRadius:'20px'
          }}
        >
          {/* {item.icon && (
            <item.icon
              style={{ opacity: "0.8" }}
            />
          )} */}
          <span
            style={{
              opacity: "0.8",
            }}
          >
            {item.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
