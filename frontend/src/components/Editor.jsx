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
  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState(defaultCode[language]);
  const [output, setOutput] = useState(""); // store output from API
  const [isRunning, setIsRunning] = useState(false);

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    setCode(defaultCode[selectedLang]);
    setOutput("");
  };

  const runCode = async () => {
    const languageMap = {
      python: { name: "python", version: "3.10.0" },
      javascript: { name: "javascript", version: "18.15.0" },
      cpp: { name: "cpp", version: "10.2.0" },
      java: { name: "java", version: "15.0.2" },
    };

    const { name, version } = languageMap[language];
    const response = await fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language: "python",
        version: "3.10.0",
        files: [
          {
            content: code,
          },
        ],
      }),
    });

    const result = await response.json();
    console.log("✅ Output:", result.run.output);
    setOutput(result.run.output)
  };

  return (
    <div className="h-full w-full flex flex-col gap-2">
      <div>
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
          height="50vh"
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

      <div className="flex items-center justify-end gap-3">
        <button
          className="btn-primary btn-md"
          onClick={runCode}
          disabled={isRunning}
        >
          {isRunning ? "Running..." : "Run Code"}
        </button>
        <button className="btn-secondary btn-md">Submit Code</button>
      </div>

      <div className="mt-4 p-4 bg-gray-900 text-green-400 rounded-lg whitespace-pre-wrap min-h-[100px]">
        <strong>Output:</strong>
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default Editor;
