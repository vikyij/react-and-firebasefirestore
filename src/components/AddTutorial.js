import React, { useState} from 'react'
import TutorialService from '../services/TutorialService'

const AddTutorial = () => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [published, setPublished] = useState(false)

    const handleChangeTitle = (e) => {
      setTitle(e.target.value)
    }

    const handleChangeDesc = (e) => {
        setDesc(e.target.value)
      }

    const saveTutorial= () =>{
      const data = {
          title,
          desc,
          published: false
      }
      TutorialService.create(data)
        .then(() => {
            console.log("Created Succesfully")
            setSubmitted(true)
        }).catch((error) => {
            console.log(error)
        })
    
    }

    const newTutorial =() => {
        setTitle("")
        setDesc("")
        setSubmitted(false)
        setPublished(false)
    }


    return (
        <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={title}
                onChange={handleChangeTitle}
                name="title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={desc}
                onChange={handleChangeDesc}
                name="description"
              />
            </div>

            <button onClick={saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>

    )

}

export default AddTutorial