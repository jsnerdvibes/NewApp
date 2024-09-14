import React, { useRef } from 'react'

function NewsCard(props) {

    const dummy = "https://static.vecteezy.com/system/resources/previews/006/059/989/original/crossed-camera-icon-avoid-taking-photos-image-is-not-available-illustration-free-vector.jpg"


    const handleImageError = (e) => {
        e.target.src = dummy;
      };

      const dialogRef = useRef(null);

    
    const openDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    };

   
    const closeDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.close(); 
        }
    };

  return (
    <>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mb-4 mx-4 bg-gray-800 p-2 border-2 border-gray-400 rounded-xl">
                <img className="w-auto" 
                src={`${props.image || dummy}`} 
                onError={handleImageError}
                alt="Image" />
                <div className="px-2 py-4">
                    <div className="font-bold text-xl mb-2 text-white">{props.title}</div>
                    <p className="text-gray-700 text-base text-white">
                        {props.description}
                    </p>
                    <button
                        className="text-white text-base mt-4 underline"
                        onClick={openDialog}
                    >
                        Learn More
                    </button>
                </div>
                <div className="px-2 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href={`${props.articleLink}`} target='_blank'>{props.name}</a></span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href={`${props.articleLink}`} target='_blank'>View full Article</a></span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.publishedAt}</span>
                </div>
            </div>

            <dialog ref={dialogRef} 
            className="rounded-lg p-4 border-4 border-gray-300 h-4/5 bg-gray-900 text-white">
            <div className='h-full flex flex-col items-left justify-evenly '>
        
                <h1 className='text-center text-white'>{props.title}</h1>
                <div>
                <h2 className='mt-2 font-semibold '>Description : </h2>
                <p>{props.description}</p>
                </div>

                <div>
                <h2 className='mt-2 font-semibold '>Content : </h2>
                <p>{props.content}</p>
                </div>

                <button onClick={closeDialog} className="bg-indigo-700 text-white px-4 py-2 rounded w-auto">
                    Done
                </button>
            </div>
            </dialog>

        </>
  )
}

export default NewsCard