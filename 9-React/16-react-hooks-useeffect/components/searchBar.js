import React, {useState, useEffect, useRef} from 'react'
import getData from '../services/wikipidia'

const SeachBar = () => {

  const btnRef = useRef()
  useEffect(() => {
    console.log(btnRef.current);
   
  }, []);


  const [searchWord, setSearch] = useState('');
  const [articles, setArticles] = useState([]);

  const onSeachInpChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value)
    //  getData(e.target.value).then(data => {    console.log(data);  })
  }
  // useEffect(() => {     console.log('it will be called in first time and in
  // every update'); }); useEffect(() => {   console.log('it will gonna run only
  // for the first time in empty array'); }, []);

  useEffect(() => {
   // console.log('it will be called for first time and when "searchWord in the state" is change');
   const timer = setTimeout(() => {
      if (searchWord) {
      getData(searchWord).then(data => {
        console.log(data);
        setArticles([...data.query.search])
      })
    }
   }, 1000);
   //cleanup function
   return()=>{
console.log('this is clean up function which gonna be invoked directly before call same useEffect function for the next time');
clearTimeout(timer)
   }

  }, [searchWord]);

  const articleElement =  articles.map(article => {
    return (
      <div key={article.pageid} className="card">
          <div className="card-header">
            Featured
          </div>
          <div className="card-body">
            <p className="card-text" dangerouslySetInnerHTML={{__html:article.snippet}}></p>
            <a href={`https://en.wikipedia.org?curid=${article.pageid}`} className="btn btn-primary">open in wikipidea</a>
          </div>
        </div>

    )
  })

  return (
    <div className='row'>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button ref={btnRef} className=" btn-outline-secondary btn-success" type="button">Search</button>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Type some thing to search"
          onChange={(e) => {
          onSeachInpChange(e)
        }}
          value={searchWord}/>
      </div>
      <div className="col-sm-12">
        {articleElement}
      </div>
    </div>
  )

}

export default SeachBar