import Form from "../Form";

function Error({ handleSubmit }) {
  return (
    <main>
      <section>
        <Form handleSubmit={handleSubmit} />
        <h2>An error occured. Please try again later</h2>
      </section>
    </main>
  );
}

export default Error;
