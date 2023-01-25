import "antd/dist/antd.css"
import { Collapse,  } from 'antd' //Typography
import React from 'react';
import { useSelector } from "react-redux";
import { getPageHeadSlice, } from "../../redux/slices/pageSlice";
import CollapseChild from "./CollapseChild";



const CollapseApp = () => {



  const [pages, setPages] = React.useState([])
  //const [pageArr, setPageArr] = React.useState([])

  const pageHead = useSelector(getPageHeadSlice)

  React.useEffect( () => { 
      setPages(pageHead)                   
}, [pageHead])

const onChange =  (key) => {
  console.log("key",key)
}

// <Collapse onChange={onChange} accordion={true}>
return (

  <Collapse onChange={onChange} accordion={true}>
    {pages && pages.map((page) => 
    
     (<Collapse.Panel header={page.name} key={page.id}>      
        <CollapseChild key={page.id} id={page.id}/>
      </Collapse.Panel>)

    )}
  </Collapse>


  )

}
export default CollapseApp

/*
 <Collapse.Panel header="This is panel header 2" key="2">
      <Typography>
      <p>value 2</p> 
      <p>value 23</p>
      </Typography>
    </Collapse.Panel>
    <Collapse.Panel header="This is panel header 3" key="3">
    <Typography>
      <p>value 3</p>
      <p>value 33</p>
      <p>value 333</p>
    </Typography>
    </Collapse.Panel>
*/