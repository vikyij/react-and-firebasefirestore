import React, { useState, useEffect } from 'react'
import TutorialService from '../services/TutorialService'

const Tutorial = ({tutorial, refreshList}) => {
    const [id, setId] = useState(null)
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [published, setPublished] = useState(false)
    const [message, setMessage] = useState("")

    const updateState = () => {
    setId(tutorial.id)
    setTitle(tutorial.title)
    setDesc(tutorial.desc)
    setPublished(tutorial.published)
   }

    useEffect(() => {
        updateState()
    },[tutorial] )

    const onChangeTitle =(e) => {
       setTitle(e.target.value)
    }

    const onChangeDesc =(e) => {
        setDesc(e.target.value)
     }

    const updatePublished=(value)=> {
       TutorialService.update(id,{
           published: value
       })
         .then(() => {
            setPublished(value)
            setMessage("The status was updated successfully!")
         })
         .catch((error) => {
             console.log(error)
         })
    }

    const updateTutorial = ()=> {
      const data ={
          title,
          desc
      }

      TutorialService.update(id,data)
      .then(() => {
          setMessage("The tutorial was updated successfully!")
      }).catch((error) => {
          console.log(error)
      }) 
    }

    const deleteTutorial = () => {
       TutorialService.delete(id)
        .then(() => {
            refreshList()
        }).catch((error) => console.log(error))
    }

    return (
        <div>
            <h4>Tutorial</h4>
            { id ? (
                <div className="edit-form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                value={title}
                                onChange={onChangeTitle}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                value={desc}
                                onChange={onChangeDesc}
                            />
                        </div>

                        <div className="form-group">
                            <label>
                                <strong>Status:</strong>
                            </label>
                            {published ? "Published" : "Pending"}
                        </div>
                    </form>

                    {published ? (
                        <button
                            className="badge badge-primary mr-2"
                            onClick={() => updatePublished(false)}
                        >
                            UnPublish
                        </button>
                    ) : (<button
                        className="badge badge-primary mr-2"
                        onClick={() => updatePublished(true)}
                    >
                        Publish
                    </button>
                        )}

                    <button
                        className="badge badge-danger mr-2"
                        onClick={deleteTutorial}
                    >
                        Delete
            </button>

                    <button
                        type="submit"
                        className="badge badge-success"
                        onClick={updateTutorial}
                    >
                        Update
            </button>
                    <p>{message}</p>
                </div>
            ) : (
                    <div>
                        <br />
                        <p>Please click on a Tutorial...</p>
                    </div>
                )}
        </div>
    )
}

export default Tutorial