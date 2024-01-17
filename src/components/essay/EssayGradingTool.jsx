import React, { useState } from "react";
import { Button, List, Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
// import { fetchEssayGrade } from "../../redux/api/api";
import { addEssay, selectEssayGrade } from "../../redux/features/essaySlice";


const { Option } = Select;

const EssayGradingTool = () => {
  const [taskResponse, setTaskResponse] = useState("");
  const [coherenceCohesion, setCoherenceCohesion] = useState("");
  const [lexicalResource, setLexicalResource] = useState("");
  const [grammaticalRangeAccuracy, setGrammaticalRangeAccuracy] = useState("");

  const dispatch = useDispatch();
  const essayGrade = useSelector(selectEssayGrade);

//   console.log(essayGrade);

  const handleGradeEssay = () => {
    const essayData = {
      taskResponse,
      coherenceCohesion,
      lexicalResource,
      grammaticalRangeAccuracy,
    };
    dispatch(addEssay(essayData));
  };

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
          <List
            dataSource={essayGrade}
            renderItem={(item) => (
              <List.Item>
                {item.criteria}: {item.grade}
              </List.Item>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default EssayGradingTool;
