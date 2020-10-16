import React, { useState, useEffect } from 'react'
import Tutorial from './Tutorial'
import TutorialService from '../services/TutorialService'

const TutorialList = () => {
    const [tutorials, setTutorials] = useState([])
    const [currentTutorial, setCurrentTutorial] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(-1)
    let unsubscribe = undefined

    useEffect(() => {
        unsubscribe = TutorialService.getAll().orderBy("title", "asc").onSnapshot(onDataChange)
        return () => {
            unsubscribe()
        }
    }, [])

    const onDataChange = (items) => {
        const tutorials = []
        items.forEach((item) => {
            const id = item.id
            const data = item.data()
            tutorials.push({
                id,
                title: data.title,
                desc: data.desc,
                published: data.published
            }) 
        })
         setTutorials(tutorials)
    }

    const setActiveTutorial = (tutorial, index) => {
        setCurrentTutorial(tutorial)
        setCurrentIndex(index)
    }

    const refreshList =() => {
        setCurrentTutorial(null)
        setCurrentIndex(-1)
    }


return (
    <div className="list row">
        <div className="col-md-6">
            <h4>Tutorials List</h4>

            <ul className="list-group">
                {tutorials &&
                    tutorials.map((tutorial, index) => (
                        <li
                            className={"list-group-item " + (index === currentIndex ? "active" : "")}
                            onClick={() => setActiveTutorial(tutorial, index)}
                            key={index}
                        >
                            {tutorial.title}
                        </li>
                    ))}
            </ul>
        </div>
        <div className="col-md-6">
            {currentTutorial ? (
                <Tutorial
                    tutorial={currentTutorial}
                    refreshList={refreshList}
                />
            ) : (
                    <div>
                        <br />
                        <p>Please click on a Tutorial...</p>
                    </div>
                )}
        </div>
    </div>
)
}

export default TutorialList