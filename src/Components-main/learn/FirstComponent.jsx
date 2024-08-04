//Bước 1: Tạo mẫu một component
// () => {}
// Công thức tạo ra Component
// Tên component chữ cái đầu tiên phải viết hoa
// Component = Javascript + HTML + CSS

import "./style.css";

const Name = "Xuân Tú";

const FirstComponent = () => {
  return (
    <>
      <div className="container1"> {Name} Fucking container 1</div>
      <div className="container2" style={{ color: "yellow" }}>
        Fucking container 2
      </div>
    </>
  );
};

export default FirstComponent;
