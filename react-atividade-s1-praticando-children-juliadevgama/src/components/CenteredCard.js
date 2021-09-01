const CenteredCard = (props) =>{
    return <div className="pai">
            <div className="child1">
                <span>Children {props.children1}</span> 
            </div>

            <div className="child2">
                <span>Children {props.children2}</span> 
            </div>

            <div className="child3">
                <span>Children {props.children3}</span> 
            </div>
    </div>
}

export default CenteredCard