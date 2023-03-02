function SearchItemList({ previousSearchitems }) {
  return (
    <section className="searchitems">
      {previousSearchitems?.map((item) => (
        <article className="searchitems__container" key={item}>
          {item}
        </article>
      ))}
    </section>
  );
}

export default SearchItemList;
