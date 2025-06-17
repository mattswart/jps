export default function BusinessName({ name }){
    return(
        !!name?.length && (
            <h4 className="name">
                {name}
            </h4>
        )    
    ) 
}