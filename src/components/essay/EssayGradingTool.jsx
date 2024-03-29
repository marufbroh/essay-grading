import { Button, Input, Table } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEssay, selectEssayGrade } from "../../redux/features/essaySlice";

const EssayGradingTool = () => {
  const [taskResponse, setTaskResponse] = useState("");
  const [coherenceCohesion, setCoherenceCohesion] = useState("");
  const [lexicalResource, setLexicalResource] = useState("");
  const [grammaticalRangeAccuracy, setGrammaticalRangeAccuracy] = useState("");

  const dispatch = useDispatch();
  const essayGrade = useSelector(selectEssayGrade);

  const handleGradeEssay = () => {
    const essayData = {
      taskResponse,
      coherenceCohesion,
      lexicalResource,
      grammaticalRangeAccuracy,
    };
    dispatch(addEssay(essayData));
  };

  // Table colum

  const columns = [
    {
      title: "Task Response",
      dataIndex: "taskResponse",
      key: "taskResponse",
    },
    {
      title: "Coherence Cohesion",
      dataIndex: "coherenceCohesion",
      key: "coherenceCohesion",
    },
    {
      title: "Lexical Resource",
      dataIndex: "lexicalResource",
      key: "lexicalResource",
    },
    {
      title: "Grammatical RangeAccuracy",
      dataIndex: "grammaticalRangeAccuracy",
      key: "grammaticalRangeAccuracy",
    },
  ];

  return (
    <div>
      <h1>IELTS Essay Grading and Analysis Tool</h1>
      <div>
        <h2>Essay Details</h2>
        <Input
          placeholder="Task Response"
          value={taskResponse}
          onChange={(e) => setTaskResponse(e.target.value)}
        />
        <Input
          placeholder="Coherence and Cohesion"
          value={coherenceCohesion}
          onChange={(e) => setCoherenceCohesion(e.target.value)}
        />
        <Input
          placeholder="Lexical Resource"
          value={lexicalResource}
          onChange={(e) => setLexicalResource(e.target.value)}
        />
        <Input
          placeholder="Grammatical Range and Accuracy"
          value={grammaticalRangeAccuracy}
          onChange={(e) => setGrammaticalRangeAccuracy(e.target.value)}
        />
        <Button type="primary" onClick={handleGradeEssay}>
          Grade Essay
        </Button>
      </div>
      {essayGrade && (
        <div>
          <h2>Essay Grade</h2>
          <Table columns={columns} dataSource={essayGrade} />
        </div>
      )}
    </div>
  );
};

export default EssayGradingTool;
