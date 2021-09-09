import { LinearProgress } from '@material-ui/core';
import React from 'react';
import { useState, useEffect } from 'react';
import store from "../../store";
import { Button } from '@material-ui/core';

const Blog = () => {
    const [posts, setPosts] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const handleB = ()=>{
      const temp = {
        title: 'Book 1',
        id:1
      }

        store.dispatch({
          type:"postAdded",
          payload:{
            id:temp.id,
            title: temp.title,
          }
      });
    }



    useEffect(() => {
        setIsLoading(true);
        setTimeout(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
        
                return res.json();
        }).then(r=>{
            setPosts(r);
            setIsLoading(false);
        });
    },100);

    }, []);
    
    return (
        <>
            <div className="mt-10 pb-10">
                { isLoading ? <div className=""><LinearProgress /></div> : posts && posts.map((post)=>(
                      <div className="mb-10 flex justify-center">
                          <div class="p-6 w-3/4 flex items-center space-x-6 rounded-lg shadow-md hover:shadow-lg  transition transform duration-500 cursor-pointer">
                      <div className="text-first">
                        <p className="mx-auto text-center text-first">{post.id}</p>
                      </div>
                      <div>
                        <h1 class="text-xl font-bold text-gray-700 mb-2">{post.title}</h1>
                        <p class="text-gray-600 w-80 text-sm">{post.body}</p>
                      </div>
                    </div>
                      </div>
                    ))}


            </div>
        </>
    );
}

export default Blog;
