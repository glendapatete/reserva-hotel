import React from "react";
import { TagInfo, TagIcon, TagContent } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tag({ title, icon, type = "" }) {
  if (type === "price") {
    let icons = [];
    for (var i = 0; i < title; i++) {
      icons.push(<FontAwesomeIcon icon={icon} key={i} />);
    }
    return (
      <>
        <TagContent>
          <TagIcon>{icons}</TagIcon>
        </TagContent>
      </>
    );
  }
  return (
    <>
      <TagContent>
        <TagIcon>
          <FontAwesomeIcon icon={icon} />
        </TagIcon>
        <TagInfo>{title}</TagInfo>
      </TagContent>
    </>
  );
}
