import Form from "../Form";
import { BarLoader } from "react-spinners";

function Loading({ handleSubmit, children }) {
  return (
    <main>
      <section>
        <Form handleSubmit={handleSubmit} />
        <div className="loadingcontainer">
          <BarLoader color="#36d7b7" height={10} width={300} />
        </div>
      </section>
    </main>
  );
}

export default Loading;
