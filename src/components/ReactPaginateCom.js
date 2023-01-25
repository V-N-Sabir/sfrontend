import ReactPaginate from "react-paginate"


// @ts-ignore
const ReactPaginateCom = (pageChangeHandler,  pageCount, page) => {
   
    return (
        <div>
        <ReactPaginate
            className="ReactPaginate"
            breakLabel="..."
            nextLabel=">"
            onPageChange={pageChangeHandler}
            pageRangeDisplayed={2}
            pageCount={pageCount} // Сколько кнопок на странице count / limit
            forcePage={page.current - 1} // Текущая страница
            previousLabel="<"
            //containerClassName="flex"
            //pageClassName="border py-1 px-3 mr-2"
            activeClassName={"activeButton"}
            //previousClassName="border py-1 px-3 mr-2"
            //nextClassName="border py-1 px-3"
      /> 
   </div>
    )
}

export default ReactPaginateCom