// Info_page.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";

const Info_page = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/content/${id}`);
        const data = await response.json();
        setContent(data.htmlContent);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <h1>Information Page</h1>
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} />
    </div>
  );
};

export default Info_page;
