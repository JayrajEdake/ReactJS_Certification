import { useState } from "react";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../hooks/use-https";

const NewTask = (props) => {
  const transformTasks = (taskObj) => {
    const generatedId = taskObj.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: taskObj.generatedId, text: taskObj.text };

    props.onAddTask(createdTask);
  };
  const { isLoading, error, sendTaskRequest } = useHttp(
    {
      url: "https://react-http2-19dc3-default-rtdb.firebaseio.com/tasks.json",
      body: JSON.stringify({ text: taskText }),
      headers: {
        "Content-Type": "application/json",
      },
    },
    transformTasks
  );

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <Section>
      <TaskForm onEnterTask={taskAddHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
