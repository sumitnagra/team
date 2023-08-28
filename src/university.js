import './univercity.css'
const Universities = () => {
    const univercity = [
        {
            name: "Cambridge University",
            image: "https://seeklogo.com/images/U/university-of-cambridge-logo-E6ED593FBF-seeklogo.com.png"
        },
        {
            name: "Harward University",
            image: "https://s3.amazonaws.com/freebiesupply/large/2x/harvard-logo-transparent.png"
        },
        {
            name: "University of California",
            image: "https://th.bing.com/th/id/OIP.0Zn8r2_hYdXhoRijcWjfuwHaHa?pid=ImgDet&rs=1"
        },
        {
            name: "ETH Zurich",
            image: "https://logonoid.com/images/university-of-zurich-logo.png"
        },
        {
            name: "Max Plank Institute",
            image: "https://jrcuadra.github.io/plaga/images/logopic/Logo_MPG.png"
        },
        {
            name: "University of Edinberg",
            image: "https://indiaeducationdiary.in/wp-content/uploads/2020/12/University_of_Edinburgh_ceremonial_roundel.svg_-1017x1024.png"
        },
        {
            name: "John's Hopkins University",
            image: "https://clipground.com/images/john-hopkins-logo-8.png"
        },
        {
            name: "Michigun State University",
            image: "https://th.bing.com/th/id/OIP.9zpaccntNh2JIZcyUjkETQHaIm?pid=ImgDet&rs=1"
        },
        {
            name: "University of Illinois",
            image: "https://clipground.com/images/uis-logo-clipart-6.png"
        },
        {
            name: "Humboldt University Berlin",
            image: "https://www.dca.fi/wp-content/uploads/2013/04/Humboldt-University-768x756.png"
        }
    ]
    return (<>
        <div className="uniHeading">
            <h1>Learn from Scientist, research scholors from the top institute in the world</h1>
        </div>
        <div className="unilist">
            {
                univercity.map((item) => {
                    return <div className="unicard">
                        <img src={item.image}/>
                        <h4>{item.name}</h4></div>
                })
            }
        </div>

    </>)
}
export default Universities