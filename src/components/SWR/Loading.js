import { BarLoader } from "react-spinners";

function Loading({ handleSubmit, children }) {
  return (
    <main>
      <section>
        <div className="loadingcontainer">
          <BarLoader color="#9198e5" height={10} width={300} />
        </div>
      </section>
    </main>
  );
}

export default Loading;
