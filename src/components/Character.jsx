import characterData from '../data/characterData.json'

function Character({name, image, birth, death, race, realm, spouse}) {
    return <div>
            <h2>{name}</h2>
            <img src={image} style={{height:"100px"}}></img>
            <ul style={{listStyleType:"none"}}>
                <li>Date of Birth: {birth}</li>
                <li>Date of Death: {death}</li>
                <li>Race: {race}</li>
                <li>Realm: {realm}</li>
                <li>Spouse: {spouse}</li>
            </ul>
        </div>
    
}

export default Character