import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";


const Editor = () => {
  const [code, setCode] = React.useState(`function solution(input) {
  // Write your code here
  return input;
}`);

  const handleChange = (value) => {
    setCode(value);
  };

  return (
    <div className="h-full w-full">
      <CodeMirror
        value={code}
        height="100%"
        width="100%"
        theme={dracula}
        extensions={[javascript()]}
        onChange={handleChange}
        basicSetup={{
          lineNumbers: true,
          foldGutter: true,
          highlightActiveLine: true,
          autocompletion: true,
        }}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Editor;
