import React, { useRef, useEffect } from "react";
import {
  Segment,
  Input,
  TextArea,
  Container,
  Divider,
  Button,
} from "semantic-ui-react";
import Quill from "quill";
import "quill/dist/quill.bubble.css";

const Editor = () => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);
  useEffect(() => {
    quillInstance.current = new Quill(
      quillElement.current,
      {
        theme: "bubble",
        placeholder: "내용을 작성하세요",
        modules: {
          toolbar: [
            [{ header: "1" }, { header: "2" }],
            ["bold", "static", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["blockquote", "code-block", "link", "image"],
          ],
        },
      },
      []
    );
  });
  return (
    <>
      <Segment>
        <Input placeholder="제목을 입력하세요" transparent size="massive" />
        <Divider />
        <Segment>
          <div ref={quillElement} />
        </Segment>
        <Button content="등록" icon="add" color="teal" />
      </Segment>
    </>
  );
};

export default Editor;
