export default function Course() {
  const courses = ["JavaScript", "ReactJS", "NodeJS"];

  const renderUi = () => {
    return (
      <ul>
        {courses.map((course, index) => {
          return <li key={index}>{course}</li>;
        })}
      </ul>
    );
  };

  return renderUi();
}
