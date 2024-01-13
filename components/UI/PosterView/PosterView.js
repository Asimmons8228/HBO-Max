const PosterView = (props) =>{
    const loopComp = (comp,digit) => {
        let thumbnails =[];
        for(let index=0; index <= digit; index++) {
            thumbnails.push(comp)
        }

        return thumbnails;
    }
    return(
        <div className="posterview-list">
            <h3 className="posterview-list__title">Movies</h3>
            <div className="posterview-list__thumbnails">

            {loopComp((
            <div className="posterview-list__thumbnail">
                <img src="https://render.fineartamerica.com/images/rendered/default/poster/6/8/break/images/artworkimages/medium/3/john-wick-2-bo-kev.jpg"/>
                <div className="posterview-list__top-player">
                    <i className="fas fa-play"/>
                </div>
            </div>), 10
            )}
            </div>
        </div>
    )
}

export default PosterView;