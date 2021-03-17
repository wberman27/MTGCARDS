import { useEffect } from 'react'
import {connect} from 'react-redux'
import { fetchCards } from '../actions'
import './CardList.css'
import {BASE_CARDS, BLACK_CARDS, BLUE_CARDS, GREEN_CARDS, RED_CARDS, WHITE_CARDS, GATHERER_URL, YOUNG_WOLF} from '../consts'
import Loader from "react-loader-spinner"

const CardList = (props) =>{

    //fetchCards on page load
    const {fetchCards} = props
    useEffect(()=>{
        fetchCards(BASE_CARDS)
    },[fetchCards])

    //on click of color button, fetchCards invoked to fetch cards of only that color
    const handleClick = (e) =>{
        e.preventDefault()
        fetchCards(e.target.id)

    }
    //on click of image this handler will redirect you to the images mtg gatherer page
    const handleGatherer = (e) =>{
        e.preventDefault();
        window.open(`${GATHERER_URL}${e.target.id}`, "_blank")
    }

    return(
        <>
        <div className = 'card-wrapper'>
            <h1>Magic: The Gathering Cards</h1>
            <div className="card-nav">
                <span>Filter Color: </span>
                <button className = "red" onClick={handleClick} id={RED_CARDS}>Red</button>
                <button className = "black" onClick={handleClick} id={BLACK_CARDS}>Black</button>
                <button className = "green" onClick={handleClick} id={GREEN_CARDS}>Green</button>
                <button className = "blue" onClick={handleClick} id={BLUE_CARDS}>Blue</button>
                <button className = "white" onClick={handleClick} id={WHITE_CARDS}>White</button>
                <button className = "youngWolf" onClick={handleClick} id={YOUNG_WOLF}>Young Wolf</button>
            </div>
            {props.isLoading ? null : <p>Click On A Card for More Details</p>}
            {props.isLoading ? 
            <h3>Loading...</h3>
                 : null}
            {props.isLoading ? 
            <Loader
                type="ThreeDots"
                color="green"
                height={100}
                width={100}
                timeout={3000} //3 secs
                />     : null}
            {props.error ? <h2 style={{color:'red'}}>{props.error}</h2> : null}
            {props.cards.map((item)=>{
                return <img key={item.multiverseid} src={item.imageUrl} alt={item.name} id={item.multiverseid} onClick={handleGatherer}/>           
            })}
        </div>
        </>
    )
}


const mapStateToProps = (state) =>{
    return{
        cards: state.cards,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchCards})(CardList)