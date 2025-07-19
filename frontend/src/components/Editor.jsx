import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { dracula } from "@uiw/codemirror-theme-dracula";

const languageExtensions = {
  javascript: javascript(),
  python: python(),
  cpp: cpp(),
  java: java(),
};

const defaultCode = {
  javascript: `function solution(input) {\n  // Write your code here\n  return input;\n}`,
  python: `def solution(input):\n    # Write your code here\n    return input`,
  cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your code here\n    return 0;\n}`,
  java: `public class Main {\n    public static void main(String[] args) {\n        // Write your code here\n    }\n}`,
};

const Editor = () => {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(defaultCode[language]);

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    setCode(defaultCode[selectedLang]); // Optional: load default code for new lang
  };

  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white rounded-t-lg">
        <span className="font-semibold">Language</span>
        <select
          value={language}
          onChange={handleLanguageChange}
          className="bg-gray-700 text-white px-3 py-1 rounded"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
        </select>
      </div>

      <CodeMirror
        value={code}
        height="calc(100vh - 200px)"
        width="100%"
        theme={dracula}
        extensions={[languageExtensions[language]]}
        onChange={(value) => setCode(value)}
        basicSetup={{
          lineNumbers: true,
          foldGutter: true,
          highlightActiveLine: true,
          autocompletion: true,
        }}
        className="rounded-b-lg shadow-lg"
      />
    </div>
  );
};

export default Editor;
