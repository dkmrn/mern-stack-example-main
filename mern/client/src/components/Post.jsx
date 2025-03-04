import './postPage.css';

function Content({ post }) {
    const restaurant = getRestaurant(post);
    const address = getAddress(post);
    const date = getDate(post);
    const time = getTime(post);
    const caption = getCaption(post); //(optional) additional info

    return (
        <>
            <div className="post-content" style={{ fontSize: 'min(3vw, 3vh)' }}>
                <div className="optional-text" style={{
                    marginBottom: '5%'
                }}>
                    <h1>{caption}</h1>
                </div>
                <div className="logistics">
                    <h1><b>restaurant: </b>{restaurant}</h1>
                    <h1><b>address: </b>{address}</h1>
                    <h1><b>date: </b>{date}</h1>
                    <h1><b>time: </b>{time}</h1>
                </div>
            </div>
        </>
    )
}

function getCaption(post) {
    return "this text is optional!";
}

function getRestaurant(post) {
    return "emporium thai";
}

function getAddress(post) {
    return "403 landfair ave, los angeles, ca 90024";
}

function getDate(post) {
    return "12/24/2025";
}

function getTime(post) {
    return "7:30 p.m.";
}

//function getUsername() {
//    return "joycejeoung";
//}

export default function DummyPost({username}) {   
   // const username = getUsername();

    function handleClick() {
        console.log("send my request to join!");
    }
    
    return (
        <div style={{ 
            width: 'min(50vw, 50vh)', 
            height: 'min(50vw, 50vh)', 
            borderRadius: '16%', 
            backgroundColor: "white",
            border: '5px solid rgb(14, 7, 66)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            overflow: 'hidden'
        }}>
            {/*profile banner*/}
            <div style={{
                padding: '6%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                height: '20%',
                background: 'lightsteelblue'
            }}>
                {/*profile picture icon*/}
                <img 
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="profile picture"
                    style={{
                        width: 'min(5vw,5vh)',
                        height: 'min(5vw,5vh',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        marginRight: '4%'
                    }}
                />
                <span style={{ fontSize: 'min(3vw, 3vh)' }}>
                    {username}
                </span>
            </div>

            {/*post content*/}
            <div classname="post-content" style={{
                padding: '10%',
                justifyContent: 'center'
            }}>
                <Content />
            </div>

            {/*bottom request banner*/}
            <div style={{
                padding: '5%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                height: '20%',
                justifyContent: 'center',
                background: 'lightsteelblue',
                marginTop: 'auto'
            }}>
                <button onClick={handleClick} style={{ 
                    fontSize: 'min(3vw, 3vh)' 
                }}><b>save me a seat!</b></button>
            </div>
        </div>
    );
}