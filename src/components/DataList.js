import React, { useState, useEffect } from "react";
import { Media } from "react-bootstrap";
import { useSelector } from "react-redux";
const DataList = () => {
  const dataList = useSelector((state) => state.dataList);
  const keyword = useSelector((state) => state.keyword);
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    let list = [];
    if (keyword == "") {
      list = dataList;
    } else {
      list = dataList.filter((data) => data.title.includes(keyword));
    }
    setFilteredList(list);
  }, [keyword]);
  return (
    <ul className="list-unstyled">
      {filteredList.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
};
const Item = ({ item }) => {
  return (
    <Media as="li" className="issue mb-5">
      <img src={item.media.m} alt="User Avatar" className="avatar mr-3" />
      <Media.Body className="text-left">
        <h4>
          <span className="mr-2">author: {item.author}</span>
        </h4>
        <div className="content-body">
          <span className="text-grey mr-2">Tags:{item.tags}</span>

          <span className="text-grey">link:{item.link}</span>
        </div>
      </Media.Body>
    </Media>
  );
};

export default DataList;
