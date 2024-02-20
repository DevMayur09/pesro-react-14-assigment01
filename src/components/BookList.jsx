import books from "./books";
const BookList = () => {
  let key = 1;
  const booksList = books.map((book) => 
    <li key={key++} className="border-b-2 py-2 flex justify-evenly">
      <span className="px-2">{book.title}</span>
      <span className="px-2">{book.author}</span>
      <span className="px-2">{book.year}</span>
    </li>
  ); 

  return (
    <>
      <ul className="w-1/5 border-2 m-auto my-10 rounded-lg">
        <li className="text-white font-bold uppercase border-b-2 py-2 flex justify-evenly bg-slate-300">
          <span className="px-2">Title</span>
          <span className="px-2">Author</span>
          <span className="px-2">Year</span>
        </li>
        {booksList}
      </ul>
    </>
  );
};

export default BookList;
