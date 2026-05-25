import { useParams } from "react-router-dom";

function ComingSoon() {
  const { id } = useParams();

  return (
    <div className="container text-center py-5">
      <h1>🚧 Coming Soon</h1>
      <p>Project {id} is under construction.</p>
    </div>
  );
}

export default ComingSoon;
